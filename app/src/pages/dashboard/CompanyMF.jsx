import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MutualFundCards from "../../components/dashboard/cards/MutualFundCards";
import { Link, useParams } from "react-router-dom";
import {
  clearCompanyMFState,
  getCompanyMFThunk,
} from "../../features/mutualfunds/companyMF";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const CompanyMF = () => {
  const { name } = useParams();
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  const { companyMF, isLoading, isSuccess, isError } = useSelector(
    (state) => state.companyMFReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (name) {
      dispatch(clearCompanyMFState());
      dispatch(getCompanyMFThunk({ company: name, skip, limit }));
    }
  }, [name]);

  const handleNext = () => {
    if (limit < companyMF?.data?.length * companyMF?.total_pages) {
      dispatch(clearCompanyMFState());
      dispatch(
        getCompanyMFThunk({ company: name, skip: skip + 10, limit: limit + 10 })
      );

      setSkip(skip + 10);
      setLimit(limit + 10);
    }
  };

  const handlePrev = () => {
    if (skip > 0) {
      dispatch(clearCompanyMFState());
      dispatch(
        getCompanyMFThunk({ company: name, skip: skip - 10, limit: limit - 10 })
      );

      setSkip(skip - 10);
      setLimit(limit - 10);
    }
  };

  console.log(limit);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">{name.toUpperCase()}</h1>
            <div className="my-8">
              {isLoading ? (
                <>
                  {" "}
                  <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                  <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                  <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                  <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                  <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                </>
              ) : (
                companyMF?.data?.map((el) => {
                  return (
                    <MutualFundCards
                      name={el?.fund}
                      key={el?.symbol}
                      price={""}
                      oneYear={el?.return_one_year}
                      fiveYear={el?.return_five_year}
                      link={`/dashboard/mutual-funds/${el?.symbol}`}
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
                onClick={() => handlePrev()}
              >
                <BsChevronLeft className="me-3" />
                Prev
              </button>
              <button
                className="px-4 py-2 bg-gray-200 text-black font-semibold flex items-center"
                onClick={() => handleNext()}
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

export default CompanyMF;
