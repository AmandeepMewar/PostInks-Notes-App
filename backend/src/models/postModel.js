import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'A post must have a username'],
      unique: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'A post must have a description'],
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'A post must have a title'],
      trim: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', postSchema);

export default Post;
