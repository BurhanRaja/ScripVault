import React from "react";

const PortfolioMF = ({ name, symbol, price, profit}) => {
  return (
    <>
      <div className='flex justify-between items-center p-4 border bg-gray-50 mb-4'>
        <div>
          <h2 className={`text-xl font-bold`}>
            {name.length > 15 ? name.substring(0, 15) + "..." : name}
          </h2>
        </div>
        <div className='flex justify-between items-center w-[65%]'>
          <p>{symbol}</p>
          <p className={`font-semibold`}>₹{profit}</p>
          <p>₹{price}</p>
          <button className='p-1 px-3 text-white bg-gray-700 text-sm rounded-sm'>
            Details
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioMF;
