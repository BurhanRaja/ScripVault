import React from "react";
import { Link } from "react-router-dom";

const MutualFundCards = ({
  name,
  price,
  symbol,
  oneYear,
  fiveYear,
  link,
  setName,
  setModal,
  setSymbol,
  setPrice,
  setOneYear,
}) => {
  return (
    <>
      <div className="flex justify-between items-center p-4 border bg-gray-50 mb-4">
        <div>
          <h2 className={`text-xl font-bold`}>{name?.substring(0, 35)}..</h2>
        </div>
        <div className="flex justify-between items-center w-[25%]">
          <p className={` font-semibold`}>{price}</p>
          {oneYear > 0 ? (
            <p className={` text-green-500 font-semibold`}>
              {parseFloat(oneYear).toFixed(2)}%
            </p>
          ) : oneYear < 0 ? (
            <p className={` text-red-500 font-semibold`}>
              {parseFloat(oneYear).toFixed(2)}%
            </p>
          ) : (
            <p>{oneYear}%</p>
          )}
          {fiveYear > 0 ? (
            <p className={` text-green-500 font-semibold`}>
              {parseFloat(fiveYear).toFixed(2)}%
            </p>
          ) : fiveYear < 0 ? (
            <p className={` text-red-500 font-semibold`}>
              {parseFloat(fiveYear).toFixed(2)}%
            </p>
          ) : (
            <p className="font-semibold">{fiveYear}%</p>
          )}
        </div>
        <div className="w-[15%] flex justify-between">
          <button
            onClick={() => {
              setName(name);
              setModal(true);
              setSymbol(symbol);
              setPrice(price);
              setOneYear(oneYear);
            }}
            className="p-1 px-3 text-white bg-green-700 text-sm rounded-sm"
          >
            Buy
          </button>
          <Link to={link}>
            <button className="p-1 px-3 text-white bg-gray-700 text-sm rounded-sm">
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MutualFundCards;
