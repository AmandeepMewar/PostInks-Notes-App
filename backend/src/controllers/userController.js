import multer from 'multer';
import sharp from 'sharp';
import User from '../models/userModel.js';
import ApiError from '../utils/ApiError.js';

// const multerStorage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/img/users');
//   },
//   filename: (req, file, cb) => {
//     cb(null, `user-${file.originalname}-${Date.now()}.jpeg`);
//   },
// });

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new ApiError('Not an image! Please upload only images', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

const uploadUserPhoto = upload.single('avatar');

const resizeUserPhoto = async (req, res, next) => {
  try {
    if (!req.file) return next();

    req.file.filename = `user-${req.file.originalname}}.jpeg`;

    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(`public/img/users/${req.file.filename}`);

    req.file.path = `public/img/users/${req.file.filename}`;

    next();
  } catch (err) {
    next(err);
  }
};

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

export {
  getAllUsers,
  deleteUser,
  createUser,
  getMe,
  uploadUserPhoto,
  resizeUserPhoto,
};
