import React, { useContext } from "react";
import Button from "./Button";
import { IoIosAdd } from "react-icons/io";
import Modal from "./Modal/Modal";

import { PostForm } from "../components";
import { ModalContext } from "../context/ModalContext";

const FloatingBtn = () => {
  const { showModal, handleModal } = useContext(ModalContext);

  return (
    <React.Fragment>
      <Button
        className="fixed bottom-10 right-10 rounded-full w-12 h-12 flex justify-center items-center shadow-md bg-gray-400 transition-transform active:scale-95"
        onClick={handleModal}
      >
        <IoIosAdd className="w-12 h-12 text-gray-800 " />
      </Button>

      <div className="absolute">
        {showModal && (
          <Modal
            onHandleModal={handleModal}
            className="lg:w-2/5 md:w-2/4 sm: 4/5 bg-gray-300 rounded-xl shadow-lg fixed z-20 top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2"
          >
            <PostForm onHandleModal={handleModal} />
          </Modal>
        )}
      </div>
    </React.Fragment>
  );
};

export default FloatingBtn;
