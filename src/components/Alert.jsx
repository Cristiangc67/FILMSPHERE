import React from "react";
import { FaCircleExclamation } from "react-icons/fa6";

const Alert = ({ type, message }) => {
  return (
    <div className="  w-fit bg-red-300 px-3 py-1 flex items-center  mb-2 rounded-xl border border-red-700">
      <FaCircleExclamation className="me-3" />
      <span className="">{message}</span>
    </div>
  );
};

export default Alert;
