import React from "react";
import { BsChevronRight } from "react-icons/bs";

const TypeMF = ({ name, logo, recommended }) => {
  return (
    <>
      <div
        className={`flex justify-between items-center p-5 rounded-md hover:cursor-pointer ${
          recommended ? " border border-green-600 relative" : "border"
        }`}
      >
        {recommended && (
          <div className="absolute bg-green-600 right-0 top-0 p-1 text-white rounded-md text-xs">
            Recommended
          </div>
        )}
        <div className="flex items-center">
          <img src={logo} alt="" className="me-7" />
          <p className="text-xl font-bold">{name}</p>
        </div>
        <BsChevronRight  />
      </div>
    </>
  );
};

export default TypeMF;
