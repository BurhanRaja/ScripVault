import React from "react";
import { Link } from "react-router-dom";

const Button = ({
  color,
  hoverColor,
  btnSize,
  textSize,
  textColor,
  text,
  link,
}) => {
  return (
    <>
      <Link to={link}>
        <button
          className={`inline-flex ${textColor} ${color} border-0 py-2 px-6 focus:outline-none ${hoverColor} rounded ${textSize} w-[${btnSize}]`}
        >
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
