import {} from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Layout />
    </ModalProvider>
  );
}

export default App;
