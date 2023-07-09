import React from "react";

const StockWidget = ({ name, symbol, currPrice, currPer, currGap, size }) => {
  return (
    <>
      <div className={`border p-4 ${size} bg-gray-100 rounded-sm`}>
        <h2 className="text-3xl font-extrabold">{name}</h2>
        <p className="text-lg mt-2">{symbol}</p>
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-2xl font-semibold"><span className="text-lg">₹ </span>{currPrice}</h1>
          {currGap < 0 ? (
            <p className="text-red-500 text-lg font-semibold">
              <span>{currGap}</span> <span>({currPer}%)</span>
            </p>
          ) : (
            <p className="text-green-500 text-lg font-semibold">
              <span>+{currGap}</span> <span>({currPer}%)</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default StockWidget;
