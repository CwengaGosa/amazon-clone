import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Sign in</h1>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      {isOpen &&
        ReactDOM.createPortal(
          <Modal setIsOpen={setIsOpen} />,
          document.getElementById("modal-root-div")
        )}
    </>
  );
};

export default Login;
