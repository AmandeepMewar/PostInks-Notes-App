import post from '../models/postModel.js';

const getAllPosts = async (req, res) => {
  try {
    const posts = await post.find();
    res.status(200).json({
      status: 'success',
      results: posts.length,
      data: {
        posts,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'Something went wrong',
    });
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = await post.create(req.body);

    res.status(200).json({
      status: 'success',
      data: {
        post: newPost,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: 'err',
    });
  }
};

export { getAllPosts, createPost };
