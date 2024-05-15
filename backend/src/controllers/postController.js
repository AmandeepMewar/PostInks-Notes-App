import Post from '../models/postModel.js';

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ updatedAt: -1 });
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    next(err);
  }
};

const getMyPosts = async (req, res, next) => {
  try {
    const posts = await Post.find({ user: req.params.id }).sort({
      updatedAt: -1,
    });
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    next(err);
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: {
        post,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

export { getAllPosts, getMyPosts, createPost, deletePost, updatePost };
