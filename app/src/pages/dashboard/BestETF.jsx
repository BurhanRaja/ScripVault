import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearBestETFState,
  getBestBondETFThunk,
  getBestGoldETFThunk,
  getBestIndexETFThunk,
  getBestSectorETFThunk,
} from "../../features/etfs/bestETF";
import BestETFMap from "../../components/dashboard/BestETFMap";

const BestETF = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);
  const [data, setData] = useState({});

  const { name } = useParams();

  const {
    isSuccess,
    isLoading,
    isError,
    bestBondETF,
    bestIndexETF,
    bestGoldETF,
    bestSectorETF,
  } = useSelector((state) => state.bestETFReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (name === "sector") {
      dispatch(clearBestETFState());
      dispatch(getBestSectorETFThunk({ skip, limit }));
    }
    if (name === "bond") {
      dispatch(clearBestETFState());
      dispatch(getBestBondETFThunk({ skip, limit }));
    }
    if (name === "gold") {
      dispatch(clearBestETFState());
      dispatch(getBestGoldETFThunk({ skip, limit }));
    }
    if (name === "index") {
      dispatch(clearBestETFState());
      dispatch(getBestIndexETFThunk({ skip, limit }));
    }
  }, [skip, limit]);

  useEffect(() => {
    if (bestBondETF?.data?.length > 0) {
      setData(bestBondETF);
    }

    if (bestIndexETF?.data?.length > 0) {
      setData(bestIndexETF);
    }

    if (bestGoldETF?.data?.length > 0) {
      setData(bestGoldETF);
    }

    if (bestSectorETF?.data?.length > 0) {
      setData(bestSectorETF);
    }
  }, [bestBondETF, bestIndexETF, bestGoldETF, bestSectorETF]);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">
              {name === "sector"
                ? "Best Sector ETFs"
                : name === "bond"
                ? "Best Bond ETFs"
                : name === "gold"
                ? "Best Gold ETFs"
                : "Best Index ETFs"}
            </h1>
            {isLoading && !isSuccess && !isError && (
              <>
                {" "}
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
              </>
            )}

            <BestETFMap data={data?.data} />

            {isError && (
              <p className="text-red-500 text-3xl">Some Error Occurred.</p>
            )}

            <div className="flex items-center justify-evenly">
              <button
                className="px-4 py-2 bg-gray-200 text-black font-semibold flex items-center"
                onClick={() => {
                  if (skip > 0) {
                    setSkip(skip - 10);
                    setLimit(limit - 10);
                  }
                }}
              >
                <BsChevronLeft className="me-3" />
                Prev
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-black font-semibold flex items-center"
                onClick={() => {
                  if (limit < data?.data?.length * data?.total_pages) {
                    console.log("Hello");
                    setSkip(skip + 10);
                    setLimit(limit + 10);
                  }
                }}
              >
                Next
                <BsChevronRight className="ms-3" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestETF;
