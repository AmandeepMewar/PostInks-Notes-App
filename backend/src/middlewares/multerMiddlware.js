import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';
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

    req.file.filename = `user-${req.file.originalname.replace('.', '')}.jpeg`;
    const outputPath = `public/img/users/${req.file.filename}`;

    const dirPath = path.dirname(outputPath);
    await fs.promises.mkdir(dirPath, { recursive: true });

    await sharp(req.file.buffer)
      .resize(500, 500)
      .toFormat('jpeg')
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    req.file.path = outputPath;

    next();
  } catch (err) {
    next(err);
  }
};

export { uploadUserPhoto, resizeUserPhoto };
