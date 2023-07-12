import React from "react";

const PortfolioStockCard = ({
  name,
  symbol,
  profit,
  price,
  priceChange,
  perChange,
}) => {
  return (
    <>
      <div className='flex justify-between items-center p-4 border bg-gray-50 mb-4'>
        <div>
          <h2 className={`text-xl font-bold`}>
            {name.length > 10 ? name.substring(0, 10) + "..." : name}
          </h2>
        </div>
        <div className='flex justify-between items-center w-[65%]'>
          <p>{symbol}</p>
          <p className={`font-semibold`}>{profit}</p>
          <p>{price}</p>
          {priceChange > 0 ? (
            <p className={` text-green-500`}>{priceChange}</p>
          ) : (
            <p className={` text-red-500`}>{priceChange}</p>
          )}
          {perChange > 0 ? (
            <p className={` text-green-500`}>{perChange}%</p>
          ) : (
            <p className={` text-red-500`}>{perChange}%</p>
          )}
          <button className='p-1 px-3 text-white bg-gray-700 text-sm rounded-sm'>
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioStockCard;
