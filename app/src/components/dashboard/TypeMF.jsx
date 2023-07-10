import React from "react";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const TypeMF = ({ name, logo, recommended, url }) => {
  return (
    <Link to={url} className="">
      <div
        className={`my-2 mx-1 p-5 rounded-md hover:cursor-pointer text-center hover:bg-gray-100 w-[15rem] ${
          recommended ? " border border-green-600 relative" : "border"
        }`}
      >
        {recommended && (
          <div className="absolute bg-green-600 right-0 top-0 p-1 text-white rounded-md text-xs">
            Recommended
          </div>
        )}
        <div className="">
            <div className="flex justify-center items-center">
          <img src={logo} alt="" className="w-[30%]" />
            </div>
          <p className="text-xl font-bold">{name}</p>
        </div>
      </div>
    </Link>
  );
};

export default TypeMF;
