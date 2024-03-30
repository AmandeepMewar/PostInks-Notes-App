import Dialog from '../../ui/Dialog';
import { Button } from '../../ui';
import { usePostContext } from '../../context/PostContext';
import axios from 'axios';
import { useState } from 'react';
import Loader from '../../ui/Loader/Loader';

const DeletePost = () => {
  const { deletePost, handleDeletePost, setIsUpdated } = usePostContext();
  const [loading, setLoading] = useState(false);

  const postDeleteHandler = async () => {
    try {
      await axios.delete(`/api/v1/posts/${deletePost.postId}`);
    } catch (err) {
      console.log(err);
    }
    handleDeletePost({ isOpen: false, postId: null });
    setIsUpdated((curr) => !curr);
  };

  return (
    deletePost.isOpen && (
      <Dialog className="w-80 h-44">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-black text-center mx-5 mb-5 text-xl font-medium ">
            Are you sure you want to delete the post?
          </h1>
          <div className="flex">
            <Button
              className="flex items-center bg-green-600 px-5 py-2 mr-4 rounded-md text-white"
              onClick={postDeleteHandler}
            >
              Delete
            </Button>
            <Button
              className="flex items-center bg-red-600 px-5 rounded-md text-white"
              onClick={() => {
                handleDeletePost({ isOpen: false, postId: null });
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Dialog>
    )
  );
};

export default DeletePost;
