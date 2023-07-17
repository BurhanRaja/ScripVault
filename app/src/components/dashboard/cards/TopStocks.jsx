import React from "react";

const TopStocks = ({ name, ltp, priceChange, volume }) => {
  return (
    <>
      <div className='flex justify-between items-center p-4 border bg-gray-50 overflow-hidden'>
        <div>
          <h2 className={`text-sm font-bold me-3`}>
            {name?.length > 14
              ? name?.substring(0, 14) + "..."
              : name }
          </h2>
        </div>
        <div className='flex justify-around items-center w-[58%]'>
          <p className={` text-xs font-semibold`}>₹{ltp}</p>
          {priceChange > 0 ? (
            <p className={` text-green-500 font-semibold text-xs `}>
              {priceChange}%
            </p>
          ) : (
            <p className={` text-red-500 font-semibold text-xs `}>
              {priceChange}%
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default TopStocks;
