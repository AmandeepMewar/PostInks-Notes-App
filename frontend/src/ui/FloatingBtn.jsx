import React from "react";
import Button from "./Button";
import { IoMdAdd } from "react-icons/io";
const FloatingBtn = () => {
  const onClickHandler = () => {};

  return (
    <Button
      className="rounded-full w-14 h-14 flex justify-center items-center bg-sky-500 active:scale-95"
      onClick={onClickHandler}
    >
      <IoMdAdd className="w-8 h-8 text-sky-900" />
    </Button>
  );
};

export default FloatingBtn;
