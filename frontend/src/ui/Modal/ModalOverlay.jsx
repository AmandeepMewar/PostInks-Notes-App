import { useEffect } from "react";

const ModalOverlay = (props) => {
  const { className, children } = props;

  const handleModalClose = () => {
    props.onHandleModal();
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
        className="min-w-full min-h-screen z-10 fixed top-0 left-0 backdrop-blur-sm"
        onClick={handleModalClose}
      ></div>
      <div className={className}>{children}</div>
    </>
  );
};

export default ModalOverlay;
