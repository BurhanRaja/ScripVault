import React, { useEffect, useState } from "react";
import MutualFundCards from "../../components/dashboard/cards/MutualFundCards";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAllMFState,
  getAllMFThunk,
} from "../../features/mutualfunds/allMutualFunds";

const MutualFunds = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  const { isLoading, allMF } = useSelector(
    (state) => state.allMutualFundsReducer
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Mutual Funds</h1>
            {allMF?.length === 0 && isLoading ? (
              <>
                {" "}
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
              </>
            ) : (
              allMF?.map((el) => {
                return (
                  <MutualFundCards
                    name={el?.fund}
                    key={el?.symbol}
                    price={el?.nav}
                    oneYear={el?.return_one_year}
                    fiveYear={el?.return_five_year}
                  />
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MutualFunds;
