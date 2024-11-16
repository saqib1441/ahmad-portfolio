"use client";

import { ToastContainer as Container } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastContainer = ({ children }) => {
  return (
    <>
      {children}
      <Container />
    </>
  );
};

export default ToastContainer;
