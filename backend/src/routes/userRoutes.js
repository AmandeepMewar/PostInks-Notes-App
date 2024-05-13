import express from 'express';
import protect from '../middlewares/protectRoutes.js';
import restrictTo from '../middlewares/restrictTo.js';
import { signup, login, logout } from '../controllers/authController.js';
import { createUser, getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.use(protect, restrictTo);

router.route('/').get(getAllUsers).post(createUser);

export default router;
