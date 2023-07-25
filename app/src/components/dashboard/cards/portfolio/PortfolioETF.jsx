import React from "react";
import { Link } from "react-router-dom";

const PortfolioETF = ({
  name,
  symbol,
  profit,
  price,
  totalInvestment,
  dateOfBuy,
}) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border bg-gray-50 mb-4">
        <div>
          <h2 className={`text-xl font-bold`}>
            {name.length > 15 ? name.substring(0, 15) + "..." : name}
          </h2>
        </div>
        <div className="flex justify-between items-center w-[75%]">
          <p>{symbol?.split(".")[0]}</p>
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
          <Link to={`/dashboard/etfs/${symbol}`}>
            <button className="p-1 px-3 text-white bg-gray-700 text-sm rounded-sm">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioETF;
