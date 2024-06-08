import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import ApiError from '../utils/ApiError.js';
import uploadOnCloudinary from '../utils/cloudinary.js';

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createAndSendToken = (user, statusCode, req, res) => {
  const token = createToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
  };

  res.cookie('jwt', token, cookieOptions);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user,
    },
  });
};

const signup = async (req, res, next) => {
  try {
    if (!req.file) {
      return next(new ApiError('Please upload an image', 400));
    }

    const avatarUrl = await uploadOnCloudinary(req.file.path);

    const newUser = await User.create({
      fullname: req.body.fullname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      avatar: avatarUrl,
    });

    createAndSendToken(newUser, 201, req, res);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(new ApiError('Please provide email and password', 400));
    }

    const user = await User.findOne({ email }).select('+password');

    const checkPass = await user?.checkPassword(password, user.password);

    if (!user || !checkPass) {
      return next(new ApiError('Incorrect email or password', 401));
    }

    createAndSendToken(user, 200, req, res);
  } catch (err) {
    next(err);
  }
};

const logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
    secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    path: '/',
  });

  res.status(200).json({ status: 'success' });
};

export { signup, login, logout };
