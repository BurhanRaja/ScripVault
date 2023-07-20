import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearMFDetails,
  getMFCurentPriceThunk,
  getMFDetailsThunk,
} from "../../features/mutualfunds/mfDetails";
import MutualFundModal from "../../components/dashboard/modals/MutualFundModal";

const MutualFundDetails = () => {
  const { id } = useParams();

  const [isModal, setIsModal] = useState(false);
  const [price, setPrice] = useState(0);
  const [years, setYears] = useState(0);

  const { isSuccess, isLoading, isError, priceData, detailsData, historyData } =
    useSelector((state) => state.mfDetailsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(clearMFDetails());
      dispatch(getMFCurentPriceThunk(id));
      dispatch(getMFDetailsThunk(id));
      // dispatch(getMFHistoryThunk())
    }
  }, [id]);

  const handleBuy = () => {};

  return (
    <>
      {isModal && (
        <MutualFundModal
          setModal={(val) => setIsModal(val)}
          price={price}
          setPrice={(val) => setPrice(val)}
          years={years}
          handleBuy={() => handleBuy()}
          setYears={(val) => setYears(val)}
        />
      )}
      <div className='bg-gray-100 p-3'>
        <div className='flex justify-between my-5 px-5'>
          <div className='w-[48%]'>
            <h1 className='text-3xl mb-4 font-bold'>{priceData?.name}</h1>
            <button className='bg-black text-white px-2 py-1 text-sm rounded-md'>
              {id}
            </button>
          </div>
          <div className='w-[48%] text-end'>
            <div className='flex justify-end items-center'>
              {!priceData && isLoading ? (
                <span className='w-1/2 p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
              ) : (
                <h2 className='text-3xl font-bold mb-2 me-3'>
                  ₹ {priceData?.curr_price}
                </h2>
              )}

              {!priceData && isLoading ? (
                <span className='w-1/2 p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
              ) : priceData?.price_change > 0 ? (
                <p className={"text-green-500 font-semibold text-lg"}>
                  +{priceData?.price_change} ( +{priceData?.per_change}% )
                </p>
              ) : priceData?.price_change < 0 ? (
                <p className={"text-red-500 font-semibold text-lg"}>
                  {priceData?.price_change} ( {priceData?.per_change}% )
                </p>
              ) : (
                <p className={"text-gray-800 font-semibold text-lg"}>
                  {priceData?.price_change} ( {priceData?.per_change}% )
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
          <h3 className='text-2xl font-semibold mb-4'>Price Chart</h3>
          <div className='flex justify-center'>
            <img src='/assets/images/demo-chart.png' width={800} />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-[49%]'>
            <div className='bg-white p-5 my-3'>
              <h3 className='text-2xl font-semibold mb-4'>
                Portfolio Composition
              </h3>
              {!detailsData && isLoading ? (
                <>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                </>
              ) : (
                <div className=''>
                  {detailsData?.holding_info?.portfolioComposition?.map(
                    (el) => {
                      return (
                        <div className='flex justify-between items-center mb-3'>
                          <h5 className='text-lg'>{el?.name}</h5>
                          <p className='text-lg font-semibold'>{el?.value}</p>
                        </div>
                      );
                    }
                  )}
                </div>
              )}
            </div>
            <div className='bg-white p-5 my-3'>
              <h3 className='text-2xl font-semibold mb-4'>Sector Weightings</h3>
              {!detailsData && isLoading ? (
                <>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                </>
              ) : (
                <div className=''>
                  {detailsData?.holding_info?.sectorWeighting?.map((el) => {
                    return (
                      <div className='flex justify-between items-center mb-3'>
                        <h5 className='text-lg'>{el?.name}</h5>
                        <p className='text-lg font-semibold'>{el?.value}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className='w-[49%]'>
            <div className='bg-white p-5 my-3'>
              <h3 className='text-2xl font-semibold mb-4'>Equity Holdings</h3>
              {!detailsData && isLoading ? (
                <>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                </>
              ) : (
                <div className=''>
                  {detailsData?.holding_info?.equityHoldings?.map((el) => {
                    return (
                      <div className='flex justify-between items-center mb-3'>
                        <h5 className='text-lg'>{el?.name}</h5>
                        <p className='text-lg font-semibold'>{el?.value}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className='bg-white p-5 my-3'>
              <h3 className='text-2xl font-semibold mb-4'>Performance</h3>
              {!detailsData && isLoading ? (
                <>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                  <span className='w-full p-7 mb-3 h-5 block rounded bg-gray-200 animate-pulse'></span>
                </>
              ) : (
                <div className=''>
                  {detailsData?.performance?.map((el) => {
                    return (
                      <div className='flex justify-between items-center mb-3'>
                        <h5 className='text-lg'>{el?.name}</h5>
                        <p className='text-lg font-semibold'>{el?.value}%</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MutualFundDetails;
