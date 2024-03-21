import { useState } from "react";
import Button from "./Button";
import { IoIosAdd } from "react-icons/io";
import Modal from "./Modal/Modal";

import PostForm from "../components/post/PostForm";

const FloatingBtn = () => {
  const [showModal, setShowModal] = useState(false);

  const onClickHandler = () => {
    setShowModal((s) => !s);
  };

  return (
    <>
      <Button
        className="fixed bottom-10 right-10 rounded-full w-12 h-12 flex justify-center items-center shadow-md bg-gray-400 transition-transform active:scale-95"
        onClick={onClickHandler}
      >
        <IoIosAdd className="w-12 h-12 text-gray-800 " />
      </Button>

      <div className="absolute">
        {showModal && (
          <Modal
            onHandleModal={onClickHandler}
            className="lg:w-2/5 md:w-2/4 sm: 4/5 bg-gray-300  rounded-xl shadow-lg fixed z-20 top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2"
          >
            <PostForm />
          </Modal>
        )}
      </div>
    </>
  );
};

export default FloatingBtn;
