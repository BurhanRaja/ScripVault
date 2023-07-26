import React from "react";
import { Link } from "react-router-dom";

const PortfolioStock = ({
  name,
  symbol,
  profit,
  price,
  totalInvestment,
  dateOfBuy,
}) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border bg-gray-50">
        <div>
          <h2 className={`text-xl font-bold`}>{name}</h2>
        </div>
        <div className="flex justify-between items-center w-[65%]">
          <p>{symbol}</p>
          {profit < 0 ? (
            <p className={`font-semibold text-red-500`}>₹{profit}</p>
          ) : profit > 0 ? (
            <p className={`font-semibold text-green-600`}>₹{profit}</p>
          ) : (
            <p className={`font-semibold`}>₹{profit}</p>
          )}
          <p className={`font-semibold`}>₹{totalInvestment}</p>
          <p className={`font-semibold`}>₹{price}</p>
          <p className={`font-semibold`}>{dateOfBuy}</p>
          <button className="p-1 px-3 text-white bg-red-600 text-sm rounded-sm">
            Sell
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioStock;
