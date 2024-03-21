import { useEffect } from "react";

const Menu = (props) => {
  const handleMenuClose = () => {
    props.onHandleMenu();
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className="min-w-full min-h-screen z-10 fixed top-0 left-0"
        onClick={handleMenuClose}
      ></div>
      <div className={props.className}>{props.children}</div>
    </>
  );
};

export default Menu;
