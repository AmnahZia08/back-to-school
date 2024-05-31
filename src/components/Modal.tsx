import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onAction: () => void;
};

const Modal: React.FC<Props> = ({ isOpen, onClose, onAction }) => {
  // Reference for the modal container for animation handling
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleClose = () => setTimeout(() => onClose(), 300); // Add a slight delay for animation

  const handleAction = () => {
    handleClose();
    onAction();
  };

  return (
    <div
      ref={modalRef}
      className={`fixed z-50 inset-0 overflow-y-auto px-4 sm:px-6 lg:px-8 transition duration-300 ease-in-out flex justify-center items-center ${isOpen} bg-gray-500 bg-opacity-50 dark:bg-opacity-75`}
    >
      <div
        className={`text-primary transform transition duration-300 ease-in-out border-primary rounded shadow-lg ${
          !isOpen ? "opacity-0" : "opacity-100"
        } rounded-lg shadow-md mx-auto w-full max-w-sm p-4 bg-white dark:bg-gray-800 border-2`}
      >
        <p className="uppercase font-bold">Are you sure that you are ready?</p>
        <div className="flex gap-2 mt-5">
          <Button onClick={handleAction} className="py-2 px-4 w-full">
            YES
          </Button>
          <Button onClick={handleClose} className="py-2 px-4 w-full">
            NO
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
