import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearMFDetails,
  getMFCurentPriceThunk,
  getMFDetailsThunk,
} from "../../features/mutualfunds/mfDetails";

const MutualFundDetails = () => {
  const { id } = useParams();

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

  console.log(priceData);
  console.log(detailsData);

  return (
    <>
      <div className="bg-gray-100 p-3">
        <div className="flex justify-between my-5 px-5">
          <div className="w-[48%]">
            <h1 className="text-3xl mb-4 font-bold">{priceData?.name}</h1>
            <button className="bg-black text-white px-2 py-1 text-sm rounded-md">
              {id}
            </button>
          </div>
          <div className="w-[48%] text-end">
            <h2 className="text-3xl font-bold mb-2">
              ₹ {priceData?.curr_price}
            </h2>
            {priceData?.price_change > 0 ? (
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
        </div>
        <div className="bg-white rounded-md my-3 p-5">
          <h3 className="text-2xl font-semibold mb-4">Price Chart</h3>
          <div className="flex justify-center">
            <img src="/assets/images/demo-chart.png" width={800} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-[49%]">
            <div className="bg-white p-5 my-3">
              <h3 className="text-2xl font-semibold mb-4">MF Performance</h3>
              <div className="">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-5 my-3">
              <h3 className="text-2xl font-semibold mb-4">MF Performance</h3>
              <div className="">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[49%]">
            <div className="bg-white p-5 my-3">
              <h3 className="text-2xl font-semibold mb-4">MF Performance</h3>
              <div className="">
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <h5 className="text-lg">One Month</h5>
                  <p className="text-lg font-semibold">10%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MutualFundDetails;
