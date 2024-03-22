import React from "react";
import { Input, Button } from "../../ui";

const PostForm = (props) => {
  const onCancelHandler = () => {
    props.onHandleModal();
  };

  const formSubmitHandle = (e) => {
    e.preventDefault();
  };
  return (
    <React.Fragment>
      <h1 className="text-3xl text-black font-semibold ml-12 pt-5">Create</h1>
      <form className="flex flex-col" onSubmit={formSubmitHandle}>
        <div className="ml-10 mt-5">
          <Input
            type="text"
            placeholder="Enter Title"
            label="Post Title: "
            className="px-2 py-1 rounded-md border bg-gray-200 shadow-md  placeholder:text-gray-400 text-black w-2/3 "
          />
        </div>

        <div className="mx-10 mt-5">
          <label className="block text-black font-semibold pb-2 mb-1">
            Post Description:{" "}
          </label>
          <textarea
            name="Description"
            placeholder="Enter Description"
            className="px-2 py-1 w-11/12 h-28 rounded-md bg-gray-200 placeholder:text-gray-400 border border-gray-300 shadow-sm text-black resize-none"
          />
        </div>

        <div className="ml-10 mb-5">
          <Input
            type="file"
            placeholder="Post Image"
            label="Post Image: "
            className="border bg-gray-200 border-gray-300 p-2 rounded-md  text-black w-2/4"
          />
        </div>

        <div className="flex justify-start mx-8 mb-10">
          <Button
            type=""
            className="flex items-center bg-green-500 px-5 mx-4 rounded-md text-white hover:bg-green-600 transition-all duration-75 active:scale-105"
          >
            Create
          </Button>
          <Button
            type=""
            className="flex items-center bg-red-500 rounded-md px-5 p-2 text-white hover:bg-red-600 transition-all duration-75 active:scale-105"
            onClick={onCancelHandler}
          >
            Cancel
          </Button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default PostForm;
