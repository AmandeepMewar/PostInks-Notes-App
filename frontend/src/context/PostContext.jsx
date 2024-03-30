import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }

  return context;
};

const PostProvider = ({ children }) => {
  const [addOrEditPost, setAddOrEditPost] = useState({
    isOpen: false,
    post: null,
  });

  const [isUpdated, setIsUpdated] = useState(false);

  const [deletePost, setDeletePost] = useState({ isOpen: false, postId: '' });

  const handleAddOrEditPost = ({ isOpen, post }) => {
    setAddOrEditPost({ isOpen, post });
  };

  const handleDeletePost = ({ isOpen, postId }) => {
    setDeletePost({ isOpen, postId });
  };
  return (
    <PostContext.Provider
      value={{
        deletePost,
        handleDeletePost,
        addOrEditPost,
        handleAddOrEditPost,
        isUpdated,
        setIsUpdated,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export { PostProvider, usePostContext };
