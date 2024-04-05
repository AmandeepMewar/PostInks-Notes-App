import express from 'express';
import {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
} from '../controllers/postController.js';

const router = express.Router();

router.route('/').get(getAllPosts).post(createPost);

router.route('/:id').delete(deletePost).patch(updatePost);

export default router;
