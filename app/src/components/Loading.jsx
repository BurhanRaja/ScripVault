import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loading = ({ size }) => {
  return (
    <>
      <AiOutlineLoading className={`animate-spin ${size}`} />
    </>
  );
};

export default Loading;
