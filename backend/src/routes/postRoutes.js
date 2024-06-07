import express from 'express';
import {
  getAllPosts,
  getMyPosts,
  createPost,
  deletePost,
  updatePost,
} from '../controllers/postController.js';
import protect from '../middlewares/protectRoutes.js';

const router = express.Router();

router.use(protect);

router.route('/').get(getAllPosts).post(createPost);

router.route('/:id').get(getMyPosts).delete(deletePost).patch(updatePost);

export default router;
