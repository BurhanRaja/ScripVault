import React from "react";

const StockCards = ({ name, symbol, price, priceChange, perChange }) => {
  return (
    <>
      <div className='flex justify-between items-center p-4 border bg-gray-50 mb-4'>
        <div>
          <h2 className={`text-xl font-bold`}>{name}</h2>
        </div>
        <div className='flex justify-between items-center w-[65%]'>
          <p className={``}>{symbol}</p>
          <p className={`  font-semibold`}>₹{price}</p>
          {priceChange > 0 ? (
            <p className={` text-green-500 font-semibold`}>₹{priceChange}</p>
          ) : (
            <p className={` text-red-500 font-semibold`}>₹{priceChange}</p>
          )}
          {perChange > 0 ? (
            <p className={` text-green-500 font-semibold`}>{perChange}%</p>
          ) : (
            <p className={` text-red-500 font-semibold`}>{perChange}%</p>
          )}
          <button className='p-1 px-3 text-white bg-green-700 text-sm rounded-sm'>
            Buy
          </button>
          <button className='p-1 px-3 text-white bg-red-700 text-sm rounded-sm'>
            Sell
          </button>
          <button className='p-1 px-3 text-white bg-gray-700 text-sm rounded-sm'>
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default StockCards;
