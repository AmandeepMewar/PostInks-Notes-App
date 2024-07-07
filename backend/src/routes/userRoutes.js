import express from 'express';
import protect from '../middlewares/protectRoutes.js';
import restrictTo from '../middlewares/restrictTo.js';
import {
  uploadUserPhoto,
  resizeUserPhoto,
} from '../middlewares/multerMiddleware.js';
import { signup, login, logout } from '../controllers/authController.js';
import {
  createUser,
  deleteUser,
  getAllUsers,
  getMe,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', uploadUserPhoto, resizeUserPhoto, signup);
router.post('/login', login);

router.use(protect);

router.post('/logout', logout);
router.get('/getMe', getMe);

router.use(restrictTo);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').delete(deleteUser);

export default router;
