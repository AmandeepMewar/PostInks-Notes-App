import React from 'react';
import Button from './Button';
import { IoIosAdd } from 'react-icons/io';
import { usePostContext } from '../context/PostContext';

const FloatingBtn = () => {
  const { handleAddOrEditPost } = usePostContext();
  return (
    <React.Fragment>
      <Button
        className="fixed bottom-10 right-10 rounded-full w-12 h-12 shadow-md bg-gray-400 transition-transform hover:scale-105"
        onClick={() => handleAddOrEditPost({ isOpen: true, post: null })}
      >
        <IoIosAdd className="w-12 h-12 text-gray-800 " />
      </Button>
    </React.Fragment>
  );
};

export default FloatingBtn;
