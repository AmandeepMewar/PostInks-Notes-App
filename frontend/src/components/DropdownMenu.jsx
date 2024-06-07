'use client';
import { useState, useEffect, useRef } from 'react';
import { usePostContext } from '../context/PostContext';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Button } from '../ui';

const DropdownMenu = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { handleDeletePost, handleAddOrEditPost } = usePostContext();

  const togglePostMenu = () => {
    setIsOpen((curr) => !curr);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative ml-auto flex flex-row-reverse" ref={dropdownRef}>
      <button onClick={togglePostMenu}>
        <BsThreeDotsVertical />
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-24 bg-white border text-sm border-gray-300 shadow-lg rounded-lg z-10">
          <Button
            className="w-full text-start px-4 py-2 rounded-t-md hover:bg-green-400 hover:text-white"
            onClick={() => {
              handleAddOrEditPost({ isOpen: true, post });
              setIsOpen(false);
            }}
          >
            Edit
          </Button>
          <Button
            className="w-full text-start px-4 py-2 rounded-b-md hover:bg-red-400 hover:text-white"
            onClick={() => {
              handleDeletePost({ isOpen: true, postId: post._id });
              setIsOpen(false);
            }}
          >
            Delete
          </Button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
