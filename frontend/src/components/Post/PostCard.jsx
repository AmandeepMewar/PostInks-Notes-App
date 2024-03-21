import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../../ui";

import Dropdown from "../Dropdown";
import Menu from "../../ui/Menu";

const PostCard = (props) => {
  const [showMenu, setShowMenu] = useState(false);
  const { username, days, id, description, title } = props;

  const handleMenu = () => {
    setShowMenu((s) => !s);
  };

  return (
    <>
      {showMenu && (
        <div
          className="min-w-full min-h-screen z-10 fixed top-0 left-0 backdrop-blur-sm"
          onClick={handleMenu}
        ></div>
      )}
      <div
        className={`flex flex-col gap-1 text-black bg-slate-300 p-3 pb-5 rounded-lg relative ${
          showMenu ? "z-20" : ""
        }`}
      >
        <div className="flex justify-between items-center">
          <div className="flex justify-start gap-2">
            <img
              src={`https://i.pravatar.cc/150?img=${id}`}
              alt=""
              className="rounded-full w-6"
            />
            <p>{username}</p>
            <p>{days}</p>
          </div>
          <Button className="pr-3" onClick={handleMenu}>
            <BsThreeDotsVertical />
          </Button>
        </div>

        {showMenu && (
          <Menu
            onHandleMenu={handleMenu}
            className="w-24 bg-slate-200 rounded-md absolute top-5 right-10 z-10"
          >
            <Dropdown firstBtn={"Edit"} secondBtn={"Delete"} />
          </Menu>
        )}

        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold ">{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default PostCard;
