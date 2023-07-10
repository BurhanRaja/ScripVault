import React from "react";

const StockWidget = ({ name, symbol, price, priceChange }) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border">
        <div>
          <h2 className={`${titleText} font-bold`}>{name.substring(0, 15)}</h2>
        </div>
        <div className="flex justify-evenly items-center w-[40%]">
          <p className={`${valText} me-2`}>{symbol}</p>
          <p className={`${valText} me-2 font-semibold`}>{price}</p>
          {priceChange > 0 ? (
            <p className={`${valText} me-2 text-green-500 font-semibold`}>
              {priceChange}%
            </p>
          ) : (
            <p className={`${valText} me-2 text-red-500 font-semibold`}>
              {priceChange}%
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default StockWidget;
