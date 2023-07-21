import React, { useEffect, useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import StockDetailsTables from "../../components/dashboard/StockDetailsTables";
import { useParams } from "react-router-dom";
import StockModal from "../../components/dashboard/modals/StockModal";
import { useDispatch, useSelector } from "react-redux";
import {
  clearStockDetails,
  getBalanceSheetThunk,
  getCashFlowThunk,
  getFinancialRatiosThunk,
  getRevenueStmtThunk,
  getStockInfoThunk,
  getStockSuggestionThunk,
  getStocksDetailsCurrentPriceThunk,
} from "../../features/stocks/stockDetails";

const StockDetails = () => {
  const { id } = useParams();

  const [stockName, setStockName] = useState("");
  const [isModal, setIsModal] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const handleBuy = () => {};

  const {
    isSuccess,
    isError,
    isLoading: detailsLoading,
    priceData,
    cashFlow,
    balanceSheet,
    revenueStmt,
    suggestion,
    historicalData,
    financial,
    info,
  } = useSelector((state) => state.stockDetailsReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(clearStockDetails());
      dispatch(getStocksDetailsCurrentPriceThunk(id));
      dispatch(getCashFlowThunk(id));
      dispatch(getBalanceSheetThunk(id));
      dispatch(getRevenueStmtThunk(id));
      dispatch(getStockSuggestionThunk(id));
      dispatch(getFinancialRatiosThunk(id));
      dispatch(getStockInfoThunk(id));
    }
  }, [id]);

  console.log(financial);

  return (
    <>
      {isModal && (
        <StockModal
          quantity={quantity}
          setQuantity={(val) => setQuantity(val)}
          name={stockName}
          handleBuy={() => handleBuy()}
          setModal={(val) => setIsModal(val)}
        />
      )}
      <div className='bg-gray-100 p-3'>
        <div className='flex justify-between my-5 px-5'>
          <div className='w-[48%]'>
            <h1 className='text-5xl mb-4 font-bold'>
              {detailsLoading ? (
                <span className='w-1/3 p-7 h-5 block rounded bg-gray-200 animate-pulse'></span>
              ) : (
                priceData?.name
              )}
            </h1>
            {detailsLoading ? (
              <span className='w-1/3 p-7 h-5 block rounded bg-gray-200 animate-pulse'></span>
            ) : (
              <button className='bg-black text-white px-2 py-1 text-sm rounded-md'>
                {priceData?.symbol}
              </button>
            )}
          </div>
          <div className='w-[48%] text-end'>
            <div className='flex justify-end items-center'>
              {detailsLoading ? (
                <span className='w-1/3 p-7 h-5 block rounded bg-gray-200 animate-pulse'></span>
              ) : (
                <h2 className='text-3xl font-bold mb-2 me-5'>
                  ₹ {priceData?.curr_price}
                </h2>
              )}
              {detailsLoading ? (
                <span className='w-1/3 p-7 h-5 block rounded bg-gray-200 animate-pulse'></span>
              ) : priceData?.curr_change > 0 ? (
                <p className={"text-green-500 font-semibold text-lg"}>
                  +{priceData?.curr_change} ( +{priceData?.curr_per_change}%
                  )
                </p>
              ) : priceData?.curr_change < 0 ? (
                <p className={"text-red-500 font-semibold text-lg"}>
                  {priceData?.curr_change} ( {priceData?.curr_per_change}% )
                </p>
              ) : (
                <p className={"text-gray-800 font-semibold text-lg"}>
                  {priceData?.curr_change} ( {priceData?.curr_per_change}% )
                </p>
              )}
            </div>
            <button
              className='w-full px-4 py-2 lg:mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-green-700 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40'
              onClick={() => setIsModal(true)}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div className='bg-white rounded-md my-3 p-5'>
          <h3 className='text-2xl font-semibold mb-4'>Price Summary</h3>
          {detailsLoading && info ? (
            <span className='w-full p-7 h-5 block rounded bg-gray-200 animate-pulse'></span>
          ) : (
            <>
              <div className='flex justify-between'>
                <div className=''>
                  <h3 className='uppercase text-lg mb-2'>Today's High</h3>
                  <p className='font-bold text-lg'>
                    ₹ {info?.summary?.today_high}
                  </p>
                </div>
                <div className=''>
                  <h3 className='uppercase text-lg mb-2'>Today's Low</h3>
                  <p className='font-bold text-lg'>
                    ₹ {info?.summary?.today_low}
                  </p>
                </div>
                <div className=''>
                  <h3 className='uppercase text-lg mb-2'>52 Week High</h3>
                  <p className='font-bold text-lg'>
                    ₹ {info?.summary?.year_high}
                  </p>
                </div>
                <div className=''>
                  <h3 className='uppercase text-lg mb-2'>52 Week Low</h3>
                  <p className='font-bold text-lg'>
                    ₹ {info?.summary?.year_low}
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className='bg-white rounded-md my-3 p-5'>
          <h3 className='text-2xl font-semibold mb-4'>Price Chart</h3>
          <div className='flex justify-center'>
            <img src='/assets/images/demo-chart.png' width={800} />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-[49%]'>
            <div className='bg-white p-5 my-3'>
              <h3 className='text-2xl font-semibold mb-4'>
                Company Essentials
              </h3>
              {detailsLoading && info ? (
                <>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                </>
              ) : (
                <div className='flex justify-between items-center flex-wrap'>
                  {info?.essentialInfo?.companyEssentials?.map((el) => {
                    return (
                      <div className='mb-5 w-[10rem]' key={el?.name}>
                        <h5 className='text-sm mb-1'>{el?.name}</h5>
                        <p className='font-bold'>{el?.value}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className='bg-white p-5 my-3'>
              <div className='flex items-center mb-4'>
                <h3 className='text-2xl font-semibold me-2'>Strengths</h3>
                <FaRegThumbsUp className='text-green-500 text-xl' />
              </div>
              <div className='flex justify-between items-center flex-wrap'>
                {detailsLoading && suggestion ? (
                  <>
                    <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                    <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  </>
                ) : (
                  <ul className='p-4'>
                    {suggestion?.strengths?.map((el) => {
                      return (
                        <li className='mb-3 list-disc' key={el}>
                          <p className='font-medium'>{el}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className='w-[49%]'>
            <div className='bg-white p-5 my-3 h-[32rem]'>
              <h3 className='text-2xl font-semibold mb-4'>Financial Ratios</h3>
              {detailsLoading && financial ? (
                <>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                </>
              ) : (
                <div className='flex justify-between items-center flex-wrap'>
                  {financial?.ratios?.map((el, index) => {
                    if (index <= 3) {
                      return (
                        <div className='mb-5 w-[8rem]' key={el?.name}>
                          <h5 className='text-sm mb-1'>{el?.name}</h5>
                          {Object.keys(el?.data)?.map((key) => {
                            return (
                              <p className='font-bold'>
                                <span className='font-semibold'>{key}</span>:{" "}
                                {el?.data[key]}
                              </p>
                            );
                          })}
                        </div>
                      );
                    } else {
                      return (
                        <div className='mb-5 w-[8rem]' key={el?.name}>
                          <h5 className='text-sm mb-1'>{el?.name}</h5>
                          <p className='font-bold'>
                            {parseFloat(el?.data)?.toFixed(2)}
                          </p>
                        </div>
                      );
                    }
                  })}
                </div>
              )}
            </div>
            <div className='bg-white p-5 my-3'>
              <div className='flex items-center mb-4'>
                <h3 className='text-2xl font-semibold me-2'>Limitations</h3>
                <FaRegThumbsDown className='text-red-500 text-xl' />
              </div>
              <div className='flex justify-between items-center flex-wrap'>
                {detailsLoading && suggestion ? (
                  <>
                    <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                    <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  </>
                ) : (
                  <ul className='p-4'>
                    {suggestion?.limitations?.map((el) => {
                      return (
                        <li className='mb-3 list-disc' key={el}>
                          <p className='font-medium'>{el}</p>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className='p-5 bg-white my-3'>
          <StockDetailsTables
            title={"Yearly Balance Sheet (Cr.)"}
            headings={
              balanceSheet?.balanceSheet &&
              Object.keys(balanceSheet?.balanceSheet[0])?.map((el) => {
                return (
                  <th
                    scope='col'
                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    <div className='flex items-center gap-x-3 font-bold'>
                      <span>{el?.toUpperCase()}</span>
                    </div>
                  </th>
                );
              })
            }
            data={balanceSheet?.balanceSheet?.map((el) => {
              return (
                <tr key={el?.particular}>
                  {Object.keys(el)?.map((key) => {
                    return (
                      <td
                        key={key}
                        className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                      >
                        {el[key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          />
        </div>
        <div className='p-5 bg-white my-3'>
          <StockDetailsTables
            title={"Yearly Income Statement (Cr.)"}
            headings={
              revenueStmt?.yearlyReturns &&
              Object.keys(revenueStmt?.yearlyReturns[0])?.map((el) => {
                return (
                  <th
                    scope='col'
                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    <div className='flex items-center gap-x-3 font-bold'>
                      {el?.toUpperCase()}
                    </div>
                  </th>
                );
              })
            }
            data={revenueStmt?.yearlyReturns?.map((el) => {
              return (
                <tr key={el?.particular}>
                  {Object.keys(el)?.map((key) => {
                    return (
                      <td
                        key={key}
                        className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                      >
                        {el[key]}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          />
        </div>
        <div className='p-5 bg-white my-3'>
          <StockDetailsTables
            title={"Yearly Cash Flow (Cr.)"}
            headings={
              cashFlow?.cashflows &&
              Object.keys(cashFlow?.cashflows[0])?.map((el) => {
                return (
                  <th
                    scope='col'
                    className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                  >
                    <div className='flex items-center gap-x-3 font-bold'>
                      {el?.toUpperCase()}
                    </div>
                  </th>
                );
              })
            }
            data={
              !cashFlow?.cashflows ? (
                <tr>
                  <td
                    className='px-4 py-4 text-sm text-gray-500 whitespace-nowrap'
                    colSpan={6}
                  >
                    No Data Available
                  </td>
                </tr>
              ) : (
                cashFlow?.cashflows?.map((el) => {
                  return (
                    <tr key={el?.particular}>
                      {Object.keys(el)?.map((key) => {
                        return (
                          <td
                            key={key}
                            className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'
                          >
                            {el[key]}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              )
            }
          />
        </div>
      </div>
    </>
  );
};

export default StockDetails;
