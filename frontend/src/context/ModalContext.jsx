import { createContext, useState } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal((s) => !s);
  };
  return (
    <ModalContext.Provider value={{ showModal, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
