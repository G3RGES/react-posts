import React from "react";
import classes from "./Modal.module.css";

const Modal = ({ children, hideModal }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={hideModal} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
