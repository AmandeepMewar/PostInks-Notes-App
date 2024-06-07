import mongoose from 'mongoose';
import calcDays from '../utils/calcDays.js';

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'A Post must belong to a user.'],
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
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

postSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'user',
    select: 'username avatar',
  });

  next();
});

postSchema.virtual('days').get(function () {
  const days = calcDays(this.updatedAt);
  return days;
});

const Post = mongoose.model('Post', postSchema);

export default Post;
