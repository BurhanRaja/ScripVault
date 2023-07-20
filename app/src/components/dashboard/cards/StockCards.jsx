import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearStockCurrentPrice,
  getStocksCurrentPriceThunk,
} from "../../../features/stocks/currentPrice";
import { Link } from "react-router-dom";

const StockCards = ({
  name,
  symbol,
  price,
  priceChange,
  perChange,
  setName,
  setSymbol,
  setModal,
  link,
}) => {


  return (
    <>
      <div className="flex justify-between items-center p-4 border bg-gray-50 mb-4">
        <div>
          <h2 className={`text-xl font-bold`}>
            {name?.length > 35 ? name.substring(0, 35) + "..." : name}
          </h2>
        </div>
        <div className="flex justify-between items-center w-[40%]">
          <p className={``}>{symbol}</p>
          <p className={`  font-semibold`}>₹{price}</p>
          {priceChange > 0 ? (
            <p className={` text-green-500 font-semibold`}>
              {priceChange}
            </p>
          ) : priceChange < 0 ? (
            <p className={` text-red-500 font-semibold`}>{priceChange}</p>
          ) : (
            <p className="font-semibold">{priceChange}</p>
          )}
          {perChange > 0 ? (
            <p className={` text-green-500 font-semibold`}>{perChange}%</p>
          ) : perChange < 0 ? (
            <p className={` text-red-500 font-semibold`}>{perChange}%</p>
          ) : (
            <p className="font-semibold">{perChange}</p>
          )}
        </div>
        <div className="w-[15%] flex justify-between">
          <button
            type="button"
            className="p-1 px-3 text-white bg-green-700 text-sm rounded-sm"
            data-te-toggle="modal"
            data-te-target="#exampleModal"
            data-te-ripple-init
            data-te-ripple-color="light"
            onClick={() => {
              setSymbol(symbol);
              setName(name);
              setModal(true);
            }}
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

export default StockCards;
