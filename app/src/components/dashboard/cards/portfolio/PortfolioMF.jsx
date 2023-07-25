import React from "react";
import { Link } from "react-router-dom";

const PortfolioMF = ({
  name,
  buyPrice,
  expectedProfit,
  expectedInterest,
  totalYears,
  dateOfBuy,
  totalInvestment,
  symbol,
}) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border bg-slate-50">
        <div>
          <h2 className={`text-xl font-bold`}>
            {name.length > 20 ? name.substring(0, 20) + "..." : name}
          </h2>
        </div>
        <div className="flex justify-between items-center w-[75%]">
          <p className={`font-semibold`}>₹{buyPrice}</p>
          <p className={`font-semibold`}>₹{expectedProfit.toFixed(3)}</p>
          {totalInvestment ? (
            <p className={`font-semibold`}>₹ {totalInvestment.toFixed(3)}</p>
          ) : (
            ""
          )}
          <p className={`font-semibold`}>₹{expectedInterest.toFixed(3)}</p>
          <p className={`font-semibold`}>{totalYears}</p>
          <p className={`font-semibold`}>{dateOfBuy}</p>
          <Link to={`/dashboard/mutual-funds/${symbol}`}>
            <button className="p-1 px-3 text-white bg-gray-700 text-sm rounded-sm">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PortfolioMF;
