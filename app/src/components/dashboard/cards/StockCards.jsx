import React from "react";

const StockCards = ({ name, symbol, price, priceChange, perChange }) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border">
        <div>
          <h2 className={`text-xl font-bold`}>{name}</h2>
        </div>
        <div className="flex justify-between items-center w-[65%]">
          <p className={`me-2`}>{symbol}</p>
          <p className={` me-2 font-semibold`}>{price}</p>
          {priceChange > 0 ? (
            <p className={`me-2 text-green-500 font-semibold`}>{priceChange}</p>
          ) : (
            <p className={`me-2 text-red-500 font-semibold`}>{priceChange}</p>
          )}
          {perChange > 0 ? (
            <p className={`me-2 text-green-500 font-semibold`}>{perChange}%</p>
          ) : (
            <p className={`me-2 text-red-500 font-semibold`}>{perChange}%</p>
          )}
        </div>
      </div>
    </>
  );
};

export default StockCards;
