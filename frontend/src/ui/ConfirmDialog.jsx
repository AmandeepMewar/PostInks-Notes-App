import Button from "./Button";
import Modal from "./Modal/Modal";

const ConfirmDialog = (props) => {
  return (
    <Modal
      className="w-80 h-44 bg-gray-300 rounded-xl shadow-lg fixed z-20 top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2"
      onHandleModal={props.onHandleModal}
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-black text-center mx-5 mb-5 text-xl font-medium ">
          Are you sure you want to delete the post?
        </h1>
        <div className="flex">
          <Button className="flex items-center bg-green-500 px-5 py-2 mr-4 rounded-md hover:bg-green-600 transition-all duration-75 active:scale-105">
            Delete
          </Button>
          <Button
            className="flex items-center bg-red-500 px-5 rounded-md hover:bg-red-600 transition-all duration-75 active:scale-105"
            onClick={props.onHandleModal}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default ConfirmDialog;
