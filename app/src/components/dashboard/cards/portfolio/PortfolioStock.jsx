import React from "react";
import { Link } from "react-router-dom";

const PortfolioStock = ({ name, symbol, profit, price, totalInvestment }) => {
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
          <Link to={`dashboard/stocks/${symbol}`}>
            <button className="p-1 px-3 text-white bg-gray-700 text-sm rounded-sm">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioStock;
