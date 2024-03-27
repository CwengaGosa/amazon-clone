import React from "react";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className="modal-div" onClick={() => setIsOpen(false)}>
        <div style={modalStyle}>
          <h3>Test Modal</h3>
          <button onClick={() => setIsOpen(false)}>Close</button>
          <p>This is a Modal</p>
        </div>
      </div>
    </>
  );
};

const modalStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate( -50%, -50%)",
  width: "400",
  background: "white",
  borderRadius: "24px",
  boxShadow: 24,
  textAlign: "center",
  padding: "10px",
};

export default Modal;
