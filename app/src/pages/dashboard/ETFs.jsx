import React, { useEffect, useState } from "react";
import EtfCards from "../../components/dashboard/cards/EtfCards";
import { useDispatch, useSelector } from "react-redux";
import { clearAllETFsState, getAllETFThunk } from "../../features/etfs/allEtfs";
import { IoPieChartSharp } from "react-icons/io5";
import { AiFillGolden } from "react-icons/ai";
import { HiChartSquareBar } from "react-icons/hi";
import { GiTiedScroll } from "react-icons/gi";
import TypeETF from "../../components/dashboard/widgets/TypeETF";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const ETFs = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(10);

  const { isLoading, isSuccess, allETF, isError } = useSelector(
    (state) => state.allEtfsReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearAllETFsState());
    dispatch(getAllETFThunk({ skip, limit }));
  }, [skip, limit]);

  // Data
  let etfData = [
    {
      name: "Best Sector ETFs",
      logo: (
        <>
          <IoPieChartSharp className='text-3xl text-gray-500' />
        </>
      ),
      url: "",
    },
    {
      name: "Best Gold ETFs",
      logo: (
        <>
          <AiFillGolden className='text-3xl text-gray-500' />
        </>
      ),
      url: "",
    },
    {
      name: "Best Index ETFs",
      logo: (
        <>
          <HiChartSquareBar className='text-3xl text-gray-500' />
        </>
      ),
      url: "",
    },
    {
      name: "Best Bond ETFs",
      logo: (
        <>
          <GiTiedScroll className='text-3xl text-gray-500' />
        </>
      ),
      url: "",
    },
  ];

  return (
    <>
      <div className='bg-gray-100 p-2'>
        <div className='bg-white rounded-md p-5'>
          <div className='p-5'>
            <h1 className='text-2xl font-bold mb-5'>ETFs</h1>
            <div className='my-8'>
              <h1 className='text-xl font-semibold text-center p-5 pt-0'>
                Discover ETFs
              </h1>
              <div className='flex justify-center items-center flex-wrap w-[100%]'>
                {etfData?.map((el) => {
                  return (
                    <TypeETF
                      key={el.name}
                      name={el.name}
                      logo={el.logo}
                      url={el.url}
                    />
                  );
                })}
              </div>
            </div>
            {isLoading ? (
              <>
                {" "}
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
                <span className='w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse'></span>
              </>
            ) : (
              allETF?.data?.map((el) => {
                return (
                  <EtfCards
                    name={el?.name}
                    price={el?.curr_price}
                    priceChange={el?.curr_price_change}
                    perChange={el?.curr_per_change}
                  />
                );
              })
            )}
            {isError && (
              <p className='text-red-500 text-3xl'>Some Error Occurred</p>
            )}
          </div>
          <div className='flex items-center justify-evenly'>
            <button
              className='px-4 py-2 bg-gray-200 text-black font-semibold flex items-center'
              onClick={() => {
                if (skip > 0) {
                  setSkip(skip - 10);
                  setLimit(limit - 10);
                }
              }}
            >
              <BsChevronLeft className='me-3' />
              Prev
            </button>
            <button
              className='px-4 py-2 bg-gray-200 text-black font-semibold flex items-center'
              onClick={() => {
                if (limit < allETF?.total) {
                  setSkip(skip + 10);
                  setLimit(limit + 10);
                }
              }}
            >
              Next
              <BsChevronRight className='ms-3' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ETFs;
