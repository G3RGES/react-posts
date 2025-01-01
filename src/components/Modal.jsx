import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog className={classes.modal}>{children}</dialog>
    </>
  );
};

export default Modal;
