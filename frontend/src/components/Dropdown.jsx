import { useState } from "react";
import { Button } from "../ui";
import ConfirmDialog from "../ui/ConfirmDialog";

const Dropdown = (props) => {
  const { firstBtn, secondBtn } = props;

  return (
    <div className="w-24 text-sm bg-white text-black rounded-md border border-gray-300 shadow-md">
      <Button
        className="px-4 py-2 hover:bg-green-400 hover:text-white rounded-t-md w-full text-start"
        onClick={props.onFirstHandler}
      >
        {firstBtn}
      </Button>
      <Button
        className="px-4 py-2 hover:bg-red-400 hover:text-white rounded-b-md w-full text-start"
        onClick={props.onSecondHandler}
      >
        {secondBtn}
      </Button>
    </div>
  );
};

export default Dropdown;
