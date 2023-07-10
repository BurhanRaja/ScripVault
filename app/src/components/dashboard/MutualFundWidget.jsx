import React from "react";

const MutualFundWidget = ({ name, oneYear, fiveYear }) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border">
        <div>
          <h2 className="text-xl font-bold">{name.substring(0, 40)}...</h2>
        </div>
        <div className="flex justify-evenly items-center w-[40%]">
          {oneYear > 0 ? (
            <p className="text-xl me-2 text-green-500">{oneYear}%</p>
          ) : (
            <p className="text-xl me-2 text-red-500">{oneYear}%</p>
          )}
          {fiveYear > 0 ? (
            <p className="text-xl me-2 text-green-500">{fiveYear}%</p>
          ) : (
            <p className="text-xl me-2 text-red-500">{fiveYear}%</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MutualFundWidget;
