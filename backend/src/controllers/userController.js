import User from '../models/userModel.js';
import ApiError from '../utils/ApiError.js';

const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: user,
      },
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return next(new ApiError('No user found with that id', 404));
    }

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    next(err);
  }
};

const getMe = (req, res, next) => {
  res.status(200).json({
    status: 'success',
    data: {
      data: req.user,
    },
  });
};

export { getAllUsers, deleteUser, createUser, getMe };
