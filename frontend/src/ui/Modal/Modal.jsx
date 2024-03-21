import { createPortal } from "react-dom";
import ModalOverlay from "./ModalOverlay";

const overlays = document.getElementById("overlays");

const Modal = (props) => {
  return createPortal(<ModalOverlay {...props} />, overlays);
};

export default Modal;
