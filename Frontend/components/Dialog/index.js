import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const CustomDialogModal = ({
  isOpen,
  title,
  description,
  btnText,
  handleClose,
  btnTask,
  taskLink,
}) => {
  const [isRendered, setIsRendered] = useState(false);

  const [handleTask, setHandleTask] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered) {
    return null;
  }
  return (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
        isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"
      } flex items-center justify-center p-4`}
      onClick={handleClose}
    >
      {handleTask ? (
        <div className="bg-white h-full w-full relative">
          <iframe
            className="pt-32"
            height="100% !important"
            width="100% !important"
            src="https://docs.google.com/document/d/1L4iQjtaCilK8W4zPOgL5so_QI5N2rzsXPYwzqmMvBYU/edit?usp=sharing"
            frameborder="0"
            allowfullscreen
          ></iframe>
          <button
            onClick={handleClose}
            className="absolute top-20 right-4 px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300"
          >
            {btnText}
          </button>
        </div>
      ) : (
        <div
          className={`bg-[#ced9f0] rounded-lg shadow-xl max-w-md w-full transform transition-all duration-300 ease-in-out ${
            isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center border-b border-gray-200 p-4">
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex justify-end ">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setHandleTask(!handleTask)}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300"
              >
                {handleTask ? "Close Task" : btnTask}
              </button>
            </div>
            {!handleTask && (
              <div className="flex justify-end p-4">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition duration-300"
                >
                  {btnText}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDialogModal;
