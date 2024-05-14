import express from 'express';
import protect from '../middlewares/protectRoutes.js';
import restrictTo from '../middlewares/restrictTo.js';
import { signup, login, logout } from '../controllers/authController.js';
import {
  createUser,
  deleteUser,
  getAllUsers,
} from '../controllers/userController.js';
import multer from 'multer';

const upload = multer({ dest: 'public/img/users' });

const router = express.Router();

router.post('/signup', upload.single('photo'), signup);
router.post('/login', login);
router.get('/logout', logout);

router.use(protect, restrictTo);

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').delete(deleteUser);

export default router;
