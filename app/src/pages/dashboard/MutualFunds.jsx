import React, { useEffect, useState } from "react";
import MutualFundCards from "../../components/dashboard/cards/MutualFundCards";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllMFState,
  getAllMFThunk,
} from "../../features/mutualfunds/allMutualFunds";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import TypeMF from "../../components/dashboard/widgets/TypeMF";

// Data
let dataMF = [
  {
    name: "Best Long Term Mutual Funds",
    logo: "/assets/svgs/best-long-term.svg",
    url: "/dashboard/mutual-funds/best/long-term",
  },
  {
    name: "Best Returns Mutual Funds",
    logo: "/assets/svgs/best-returns.svg",
    url: "/dashboard/mutual-funds/best/returns",
  },
  {
    name: "Best Tax Saver Mutual Funds",
    logo: "/assets/svgs/best-tax-saver.svg",
    url: "/dashboard/mutual-funds/best/tax-saver",
  },
  {
    name: "Best Equity Mutual Funds",
    logo: "/assets/svgs/best-equity.svg",
    url: "/dashboard/mutual-funds/best/equity",
  },
  {
    name: "Best Debt Mutual Funds",
    logo: "/assets/svgs/best-debt.svg",
    url: "/dashboard/mutual-funds/best/debt",
  },
];

const MutualFunds = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  const { isSuccess, isLoading, isError, allMF } = useSelector(
    (state) => state.allMutualFundsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAllMFState());
    dispatch(getAllMFThunk({ skip, limit }));
  }, [skip, limit]);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Mutual Funds</h1>
            <div className="my-8">
              <h1 className="text-xl font-semibold text-center p-5 pt-0">
                Discover Mutual Funds
              </h1>
              <div className="flex justify-center items-center flex-wrap w-[100%]">
                {dataMF?.map((el) => {
                  return (
                    <TypeMF
                      key={el.name}
                      name={el.name}
                      logo={el.logo}
                      url={el.url}
                    />
                  );
                })}
              </div>
            </div>
            {isLoading && !isSuccess && !isError ? (
              <>
                {" "}
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
              </>
            ) : (
              allMF?.data?.map((el) => {
                return (
                  <MutualFundCards
                    name={el?.fund}
                    key={el?.symbol}
                    price={"₹" + el?.nav}
                    oneYear={el?.return_one_year}
                    fiveYear={el?.return_five_year}
                  />
                );
              })
            )}
            {isError && (
              <p className="text-red-500 text-3xl">Some Error Occurred.</p>
            )}
          </div>
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
                if (limit < allMF?.total) {
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
    </>
  );
};

export default MutualFunds;
