import React, { useEffect } from "react";
import PortfolioStock from "../../components/dashboard/cards/portfolio/PortfolioStock";
import PortfolioMF from "../../components/dashboard/cards/portfolio/PortfolioMF";
import PortfolioETF from "../../components/dashboard/cards/portfolio/PortfolioETF";
import { useDispatch, useSelector } from "react-redux";
import {
  clearPortfolioState,
  getETFPortfolioThunk,
  getMutualFundPortfolioThunk,
  getStockPortfolioThunk,
} from "../../features/portfolio/portfolio";

const Portfolio = () => {
  const { stocks, mutualFunds, etfs } = useSelector(
    (state) => state.portfolioReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearPortfolioState());
    dispatch(getStockPortfolioThunk());
    dispatch(getMutualFundPortfolioThunk());
    dispatch(getETFPortfolioThunk());
  }, []);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <h1 className="text-3xl font-bold p-5">Your Portfolio</h1>
          <div className="flex justify-evenly my-10">
            <div className="w-[45%] border p-4">
              <h4 className="text-xl font-bold">Total Investment</h4>
              <p className="text-lg mt-4 text-gray-600 font-semibold">
                ₹ 1,00,000
              </p>
            </div>
            <div className="w-[45%] border p-4">
              <h4 className="text-xl font-bold ">Total Profit</h4>
              <p className="text-lg mt-4 text-green-500 font-semibold">
                ₹ 1,00,000
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-4">Your Stocks</h1>
              <div className="flex justify-between items-center p-4 border bg-gray-100">
                <div>
                  <p className={``}>Name</p>
                </div>
                <div className="flex justify-between items-center w-[63%]">
                  <p className={`text-sm`}>Symbol</p>
                  <p className={`text-sm`}>Profit Earned</p>
                  <p className={`text-sm`}>Total Investment</p>
                  <p className={`text-sm`}>Buy Price</p>
                  <p className={`text-sm`}>Date</p>
                  <p className="w-[5rem]"></p>
                </div>
              </div>
              {stocks?.stocksPortfolio?.map((el) => {
                return (
                  <PortfolioStock
                    name={el?.name}
                    symbol={el?.symbol}
                    price={el?.buy_price}
                    profit={el?.profit?.toFixed(2)}
                    totalInvestment={el?.total_price}
                    dateOfBuy={new Date(el?.date_of_buy).toLocaleDateString()}
                  />
                );
              })}
            </div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-4">Your Mutual Funds</h1>
              <h3 className="mb-4 text-lg font-semibold">
                Your Lumpsum Investments
              </h3>
              <div className="flex justify-between items-center p-4 border bg-gray-100">
                <div>
                  <p className={``}>Name</p>
                </div>
                <div className="flex justify-between items-center w-[78%]">
                  <p className={`text-sm`}>Buy Price (NAV)</p>
                  <p className={`text-sm`}>Exp. Amount Earned</p>
                  <p className={`text-sm`}>Total Investment</p>
                  <p className={`text-sm`}>Exp. Interest Earned</p>
                  <p className={`text-sm`}>Total years</p>
                  <p className={`text-sm`}>Date of Buy</p>
                  <p className="w-[5rem]"></p>
                </div>
              </div>
              {mutualFunds?.lumpsumMF?.map((el) => {
                return (
                  <PortfolioMF
                    name={el?.name}
                    buyPrice={el?.buy_price}
                    expectedProfit={el?.expected_net_profit}
                    expectedInterest={el?.expected_interest_earned}
                    totalYears={el?.total_years}
                    dateOfBuy={new Date(el?.date_of_buy).toLocaleDateString()}
                    totalInvestment={el?.total_investment}
                    symbol={el?.symbol}
                  />
                );
              })}
              <h3 className="mb-4 text-lg font-semibold mt-7">
                Your SIP Investments
              </h3>
              <div className="flex justify-between items-center p-4 border bg-gray-100">
                <div>
                  <p className={``}>Name</p>
                </div>
                <div className="flex justify-between items-center w-[78%]">
                  <p className={`text-sm`}>Buy Price (NAV)</p>
                  <p className={`text-sm`}>Exp. Amount Earned</p>
                  <p className={`text-sm`}>Exp. Interest Earned</p>
                  <p className={`text-sm`}>Total years</p>
                  <p className={`text-sm`}>Date of Buy</p>
                  <p className="w-[5rem]"></p>
                </div>
              </div>
              {mutualFunds?.sipMF?.map((el) => {
                return (
                  <PortfolioMF
                    name={el?.name}
                    buyPrice={el?.buy_price}
                    expectedProfit={el?.expected_net_profit}
                    expectedInterest={el?.expected_interest_earned}
                    totalYears={el?.total_years}
                    dateOfBuy={new Date(el?.date_of_buy).toLocaleDateString()}
                    totalInvestment={""}
                    symbol={el?.symbol}
                  />
                );
              })}
            </div>
            <div className="mb-8">
              <h1 className="text-2xl font-bold mb-4">Your ETFs</h1>
              <div className="flex justify-between items-center p-4 border bg-gray-100">
                <div>
                  <p className={``}>Name</p>
                </div>
                <div className="flex justify-between items-center w-[75%]">
                  <p className={`text-sm`}>Symbol</p>
                  <p className={`text-sm`}>Profit Earned</p>
                  <p className={`text-sm`}>Total Investment</p>
                  <p className={`text-sm`}>Buy Price</p>
                  <p className={`text-sm`}>Date</p>
                  <p className="w-[5rem]"></p>
                </div>
              </div>
              {etfs?.etfPortfolio?.map((el) => {
                return (
                  <PortfolioETF
                    name={el?.name}
                    symbol={el?.symbol}
                    price={el?.buy_price}
                    profit={el?.profit.toFixed(2)}
                    totalInvestment={el?.total_price?.toFixed(2)}
                    dateOfBuy={new Date(el?.date_of_buy).toLocaleDateString()}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
