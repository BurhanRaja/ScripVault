import React from "react";

const MutualFundCards = ({ name, symbol, price, oneYear, fiveYear }) => {
  return (
    <>
      <div className='flex justify-between items-center p-4 border bg-gray-50 mb-4'>
        <div>
          <h2 className={`text-xl font-bold`}>{name}</h2>
        </div>
        <div className='flex justify-between items-center w-[65%]'>
          <p className={``}>{symbol}</p>
          <p className={` font-semibold`}>{price}</p>
          {oneYear > 0 ? (
            <p className={` text-green-500 font-semibold`}>{oneYear}%</p>
          ) : (
            <p className={` text-red-500 font-semibold`}>{oneYear}%</p>
          )}
          {fiveYear > 0 ? (
            <p className={` text-green-500 font-semibold`}>{fiveYear}%</p>
          ) : (
            <p className={` text-red-500 font-semibold`}>{fiveYear}%</p>
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

export default MutualFundCards;
