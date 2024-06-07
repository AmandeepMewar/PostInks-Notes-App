import { useState } from 'react';
import { Input, Button } from '../../ui';
import axios from 'axios';
import Loader from '../../ui/Loader/Loader';
import { usePostContext } from '../../context/PostContext';
import Dialog from '../../ui/Dialog';
import { useAuthContext } from '../../context/AuthContext';

const PostForm = () => {
  const { addOrEditPost, handleAddOrEditPost, setIsUpdated } = usePostContext();
  const [loading, setLoading] = useState(false);

  const { authData } = useAuthContext();

  const uploadFormData = async (data) => {
    try {
      let response;
      if (addOrEditPost.post) {
        response = await axios.patch(
          `/api/v1/posts/${addOrEditPost.post._id}`,
          data
        );
      } else {
        response = await axios.post('/api/v1/posts', data);
      }
      setIsUpdated((curr) => !curr);
    } catch (err) {
      console.log(err);
    }
    handleAddOrEditPost({ isOpen: false, post: null });
  };

  const formSubmitHandle = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    let formObject = Object.fromEntries(formData);
    formObject['user'] = authData.id;

    uploadFormData(formObject);
  };

  return (
    addOrEditPost.isOpen && (
      <Dialog className="w-10/12 sm:w-[60%] lg:w-[50%] xl:w-[36%]">
        <h1 className="text-3xl text-black font-semibold ml-10 pt-5">
          {addOrEditPost.post ? 'Edit' : 'Create'} Post
        </h1>
        <form className="flex flex-col" onSubmit={formSubmitHandle}>
          <div className="ml-10 mt-5">
            <Input
              type="text"
              placeholder="Enter Title..."
              label="Post Title: "
              name="title"
              defaultValue={addOrEditPost.post?.title || ''}
              required
              id="title"
              className="px-2 py-1 rounded-md bg-gray-200 shadow-md placeholder:text-gray-400 text-black w-2/3 "
            />
          </div>

          <div className="mx-10 mt-5">
            <label className="block text-black font-semibold pb-2 mb-1">
              Post Description:{' '}
            </label>
            <textarea
              name="description"
              placeholder="Enter Description..."
              defaultValue={addOrEditPost.post?.description || ''}
              required
              id="description"
              className="px-2 py-1 w-11/12 h-28 rounded-md bg-gray-200 placeholder:text-gray-400 shadow-sm text-black resize-none"
            />
          </div>

          {/* <div className="ml-10 mb-5">
            <Input
              type="file"
              placeholder="Post Image"
              label="Post Image: "
              id="image"
              defaultValue={addOrEditPost.post?.image || ''}
              className="border bg-gray-200 border-gray-300 p-2 rounded-md text-black w-2/4"
            />
          </div> */}

          <div className="flex justify-start mx-8 mb-10 mt-4">
            <Button
              type="submit"
              className="flex items-center bg-green-600 px-5 mx-4 rounded-md text-white "
            >
              {addOrEditPost.post ? 'Edit' : 'Create'}
            </Button>
            <Button
              type="button"
              className="flex items-center bg-red-600 rounded-md px-5 p-2 text-white"
              onClick={() => {
                handleAddOrEditPost({ isOpen: false, post: null });
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
        {loading && <Loader />}
      </Dialog>
    )
  );
};

export default PostForm;
