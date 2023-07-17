import React from "react";

const EtfCards = ({ name, symbol, priceChange, perChange, price }) => {
  return (
    <>
      <div className='flex justify-between items-center p-4 border bg-gray-50 mb-4'>
        <div>
          <h2 className={`text-xl font-bold`}>
            {name?.length > 10 ? name?.substring(0, 10) : name}
          </h2>
        </div>
        <div className='flex justify-between items-center w-[40%]'>
          <p className={``}>{symbol}</p>
          <p className={` font-semibold`}>₹{price}</p>
          {priceChange > 0 ? (
            <p className={` text-green-500 font-semibold`}>{priceChange}</p>
          ) : priceChange < 0 ? (
            <p className={` text-red-500 font-semibold`}>{priceChange}</p>
          ) : (
            <p className={` text-gray-800 font-semibold`}>{priceChange}</p>
          )}
          {perChange > 0 ? (
            <p className={` text-green-500 font-semibold`}>{perChange}%</p>
          ) : perChange < 0 ? (
            <p className={` text-red-500 font-semibold`}>{perChange}%</p>
          ) : (
            <p className={` text-gray-800 font-semibold`}>{perChange}</p>
          )}
        </div>
        <div className='w-[25%] flex justify-between'>
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

export default EtfCards;
