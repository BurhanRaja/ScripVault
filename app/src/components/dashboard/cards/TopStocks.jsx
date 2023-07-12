import React from "react";

const TopStocks = ({ symbol, ltp, priceChange, volume }) => {
  return (
    <>
      <div className='flex justify-between items-center p-4 border bg-gray-50 overflow-hidden'>
        <div>
          <h2 className={`text-sm font-bold me-3`}>
            {symbol.length > 8
              ? symbol.substring(0, 8) + "..."
              : symbol + ".NS"}
          </h2>
        </div>
        <div className='flex justify-between items-center w-[58%]'>
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
          <p className={`font-semibold text-xs `}>{volume}</p>
        </div>
      </div>
    </>
  );
};

export default TopStocks;
