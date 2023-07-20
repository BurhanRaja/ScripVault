import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  clearStockTopState,
  getStockTopThunk,
} from "../../features/stocks/stocksTop";
import TopStocks from "../../components/dashboard/cards/TopStocks";

const TopStocksPage = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(50);

  const { stocks, isLoading } = useSelector((state) => state.stockTopReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(clearStockTopState());
    dispatch(getStockTopThunk({ skip, limit }));
  }, []);

  let { name } = useParams();

  return (
    <>
      <div className='bg-gray-100 p-3'>
        <div className='bg-white p-5 rounded-md'>
          <ul
            className='mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0'
            role='tablist'
            data-te-nav-ref
          >
            <li role='presentation' className='flex-auto text-center'>
              <Link
                to='#tabs-home01'
                className='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                data-te-toggle='pill'
                data-te-target='#tabs-home01'
                role='tab'
                aria-controls='tabs-home01'
                aria-selected='true'
                data-te-nav-active
              >
                Top Gainers
              </Link>
            </li>
            <li role='presentation' class='flex-auto text-center'>
              <Link
                to='#tabs-messages01'
                class='my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-lg font-bold uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400'
                data-te-toggle='pill'
                data-te-target='#tabs-messages01'
                role='tab'
                aria-controls='tabs-messages01'
                aria-selected='false'
              >
                Top Losers
              </Link>
            </li>
          </ul>

          <div className='mb-6'>
            <div
              className={`hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block`}
              id='tabs-home01'
              role='tabpanel'
              aria-labelledby='tabs-home-tab01'
              data-te-tab-active
            >
              <div className='flex justify-between items-center p-4 border bg-gray-50 overflow-hidden'>
                <div>
                  <h2 className={`text-sm font-bold me-3`}>Symbol</h2>
                </div>
                <div className='flex justify-around items-center w-[58%]'>
                  <p className={`text-xs font-semibold`}>LTP</p>
                  <p className={`font-semibold text-xs `}>%Chng</p>
                </div>
              </div>
              {isLoading ? (
                <>
                  <span className='w-full h-5 block rounded p-5 bg-gray-200 animate-pulse'></span>
                  <span className='w-full h-5 block rounded p-5 bg-gray-200 animate-pulse'></span>
                  <span className='w-full h-5 block rounded p-5 bg-gray-200 animate-pulse'></span>
                </>
              ) : (
                stocks?.gainers?.map((el) => {
                  return (
                    <Link to={`${el?.symbol}`} className='hover:bg-slate-100'>
                      <TopStocks
                        key={el?.name}
                        name={el?.company}
                        ltp={el?.price}
                        priceChange={el?.change}
                        link={`/dashboard/stocks/${el?.symbol}`}
                      />
                    </Link>
                  );
                })
              )}
            </div>

            <div
              class={`hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block`}
              id='tabs-messages01'
              role='tabpanel'
              aria-labelledby='tabs-messages-tab01'
            >
              <div className='flex justify-between items-center p-4 border bg-gray-50 overflow-hidden'>
                <div>
                  <h2 className={`text-sm font-bold me-3`}>Symbol</h2>
                </div>
                <div className='flex justify-around items-center w-[58%]'>
                  <p className={`text-xs font-semibold`}>LTP</p>
                  <p className={`font-semibold text-xs `}>%Chng</p>
                </div>
              </div>
              {isLoading ? (
                <>
                  <span className='w-full h-5 block rounded p-5 bg-gray-200 animate-pulse'></span>
                  <span className='w-full h-5 block rounded p-5 bg-gray-200 animate-pulse'></span>
                  <span className='w-full h-5 block rounded p-5 bg-gray-200 animate-pulse'></span>
                </>
              ) : (
                stocks?.losers?.map((el) => {
                  return (
                    <Link to={`${el?.symbol}`} className='hover:bg-slate-100'>
                      <TopStocks
                        key={el?.name}
                        name={el?.company}
                        ltp={el?.price}
                        priceChange={el?.change}
                        link={`/dashboard/stocks/${el?.symbol}`}
                      />
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopStocksPage;
