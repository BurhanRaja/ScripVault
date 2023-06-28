import React from "react";

const Button = ({ color, hoverColor, btnSize, textSize, textColor, text }) => {
  return (
    <>
      <button
        className={`inline-flex ${textColor} ${color} border-0 py-2 px-6 focus:outline-none ${hoverColor} rounded ${textSize} w-[${btnSize}]`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
