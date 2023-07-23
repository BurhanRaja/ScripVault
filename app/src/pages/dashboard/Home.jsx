import React, { useEffect, useState } from "react";
import StockIndexWidget from "../../components/dashboard/widgets/StockIndexWidget";
import TypeMF from "../../components/dashboard/widgets/TypeMF";
import { useDispatch, useSelector } from "react-redux";
import {
  clearStockIndexesState,
  getStockIndexesThunk,
} from "../../features/stocks/stockIndexes";
import TopStocks from "../../components/dashboard/cards/TopStocks";
import {
  clearStockTopState,
  getStockTopThunk,
} from "../../features/stocks/stocksTop";
import { IoPieChartSharp } from "react-icons/io5";
import { AiFillGolden } from "react-icons/ai";
import { HiChartSquareBar } from "react-icons/hi";
import { GiTiedScroll } from "react-icons/gi";
import TypeETF from "../../components/dashboard/widgets/TypeETF";
import { Link } from "react-router-dom";
import {
  clearWalletState,
  getWalletThunk,
} from "../../features/transaction/wallet";
import {
  clearDepositWithdrawGraph,
  getDepositGraphThunk,
  getWithdrawGraphThunk,
} from "../../features/graph/depositWithdraw";
// name, symbol, currPrice, currPer, currGap, size

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

let etfData = [
  {
    name: "Best Sector ETFs",
    logo: (
      <>
        <IoPieChartSharp className="text-3xl text-gray-500" />
      </>
    ),
    url: "/dashboard/etfs/best/sector",
  },
  {
    name: "Best Gold ETFs",
    logo: (
      <>
        <AiFillGolden className="text-3xl text-gray-500" />
      </>
    ),
    url: "/dashboard/etfs/best/gold",
  },
  {
    name: "Best Index ETFs",
    logo: (
      <>
        <HiChartSquareBar className="text-3xl text-gray-500" />
      </>
    ),
    url: "/dashboard/etfs/best/index",
  },
  {
    name: "Best Bond ETFs",
    logo: (
      <>
        <GiTiedScroll className="text-3xl text-gray-500" />
      </>
    ),
    url: "/dashboard/etfs/best/bond",
  },
];

const Home = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(50);

  const { indexes } = useSelector((state) => state.stockIndexesReducer);
  const { stocks, isLoading } = useSelector((state) => state.stockTopReducer);
  const { wallet } = useSelector((state) => state.walletReducer);
  const { deposit, withdraw } = useSelector((state) => state.depositWithdrawReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearDepositWithdrawGraph());
    dispatch(getDepositGraphThunk());
    dispatch(getWithdrawGraphThunk());
  }, []);

  console.log(deposit);

  useEffect(() => {
    dispatch(clearWalletState());
    dispatch(getWalletThunk());
    dispatch(getStockIndexesThunk());
    dispatch(getStockTopThunk({ skip, limit }));
  }, []);

  useEffect(() => {
    let timeOut = setInterval(() => {
      let hour = new Date().getHours();
      if (hour < 16 && hour > 9) {
        dispatch(clearStockIndexesState());
        dispatch(clearStockTopState());
        dispatch(getStockIndexesThunk());
        dispatch(getStockTopThunk({ skip, limit }));
      }
    }, 30000);

    return () => {
      clearInterval(timeOut);
    };
  }, []);

  return (
    <>
      {/* <div className="p-4">
        <div className="flex justify-evenly">
          <StockWidget
            name={"Nifty 50"}
            symbol={"NFTY50"}
            currPrice={23591.78}
            currPer={0.48}
            currGap={1.72}
            size={"w-[30%]"}
          />
          <StockWidget
            name={"Nifty 50"}
            symbol={"NFTY50"}
            currPrice={23591.78}
            currPer={0.48}
            currGap={1.72}
            size={"w-[30%]"}
          />
        </div>

        <MutualFundWidget
          name="Nippon India Interval Fund-Quarterly Interval Fund-Series-I- Dividend Payout"
          oneYear={5.92903}
          fiveYear={4.045}
        />

        <div className="mutual-fund-recommendations mt-20">
          <h1 className="mb-4 text-3xl font-bold text-center">
            Discover Mutual Funds
          </h1>
          <div className="flex justify-center items-center flex-wrap w-[100%]">
            {data?.map((el, index) => {
              if (randomNumArr.includes(index)) {
                return (
                  <TypeMF
                    key={el.name}
                    name={el.name}
                    logo={el.logo}
                    recommended={true}
                    url={el.url}
                  />
                );
              } else {
                return (
                  <TypeMF
                    key={el.name}
                    name={el.name}
                    logo={el.logo}
                    recommended={false}
                    url={el.url}
                  />
                );
              }
            })}
          </div>
        </div>
      </div> */}

      <div className="bg-gray-100 p-2">
        <div className="flex">
          <div className="w-[69%] p-4 me-2 bg-white rounded-md">
            <h1 className="text-3xl font-bold p-5">Dashboard</h1>
            <div className="flex justify-evenly mb-10 mt-3">
              <div className="w-[32%] border p-4">
                <h4 className="text-xl font-bold">Wallet Balance</h4>
                <p className="text-lg mt-4 text-gray-600 font-semibold">
                  ₹ {wallet?.balance}
                </p>
              </div>
              <div className="w-[32%] border p-4">
                <h4 className="text-xl font-bold">Total Investment</h4>
                <p className="text-lg mt-4 text-gray-600 font-semibold">
                  ₹ 1,00,000
                </p>
              </div>
              <div className="w-[32%] border p-4">
                <h4 className="text-xl font-bold ">Total Profit</h4>
                <p className="text-lg mt-4 text-green-500 font-semibold">
                  ₹ 1,00,000
                </p>
              </div>
            </div>
            <img src="/assets/images/demo-chart.png" width={800} />
            <div className="mt-8">
              <h1 className="text-2xl font-semibold text-start p-5 pt-0">
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
            <div className="mt-8">
              <h1 className="text-2xl font-semibold text-start p-5 pt-0">
                Discover ETFs
              </h1>
              <div className="flex justify-center items-center flex-wrap w-[100%]">
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
          </div>
          <div className="w-[29%]">
            <div className="bg-white p-3 rounded-md mb-3">
              <h1 className="text-lg mb-2 font-semibold">Stock Indexes</h1>
              <StockIndexWidget
                name={indexes?.nse?.name}
                symbol={indexes?.nse?.symbol}
                currPrice={parseFloat(indexes?.nse?.curr_price).toFixed(2)}
                currPer={parseFloat(indexes?.nse?.curr_per_change).toFixed(2)}
                currGap={parseFloat(indexes?.nse?.curr_change).toFixed(2)}
                size={"w-[100%] mb-4"}
              />
              <StockIndexWidget
                name={indexes?.bse?.name}
                symbol={indexes?.bse?.symbol}
                currPrice={parseFloat(indexes?.bse?.curr_price).toFixed(2)}
                currPer={parseFloat(indexes?.bse?.curr_per_change).toFixed(2)}
                currGap={parseFloat(indexes?.bse?.curr_change).toFixed(2)}
                size={"w-[100%]"}
              />
            </div>
            <div className="bg-white p-3 rounded-md mb-3">
              <div className="flex justify-between mb-2 items-center">
                <h1 className="text-lg font-semibold">Top Gainers</h1>
                <Link to={"/dashboard/topstock"}>
                  <button className="text-sm text-blue-600 underline">
                    Know More
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-center p-4 border bg-gray-50 overflow-hidden">
                <div>
                  <h2 className={`text-sm font-bold me-3`}>Symbol</h2>
                </div>
                <div className="flex justify-around items-center w-[58%]">
                  <p className={`text-xs font-semibold`}>LTP</p>
                  <p className={`font-semibold text-xs `}>%Chng</p>
                </div>
              </div>
              {isLoading ? (
                <>
                  <span className="w-full p-3 h-5 block rounded bg-gray-200 animate-pulse"></span>
                  <span className="w-full p-3 h-5 block rounded bg-gray-200 animate-pulse"></span>
                  <span className="w-full p-3 h-5 block rounded bg-gray-200 animate-pulse"></span>
                </>
              ) : (
                stocks?.gainers?.map((el, index) => {
                  if (index < 3) {
                    return (
                      <TopStocks
                        key={el?.name}
                        name={
                          el?.company?.length > 14
                            ? el?.company?.substring(0, 14) + "..."
                            : el?.company
                        }
                        ltp={el?.price}
                        priceChange={el?.change}
                        link={`/dashboard/stocks/${el?.symbol}`}
                      />
                    );
                  }
                })
              )}
              <div className="flex justify-between mb-2 items-center mt-3">
                <h1 className="text-lg font-semibold">Top Losers</h1>
                <Link to={"/dashboard/topstock"}>
                  <button className="text-sm text-blue-600 underline">
                    Know More
                  </button>
                </Link>
              </div>
              <div className="flex justify-between items-center p-4 border bg-gray-50 overflow-hidden">
                <div>
                  <h2 className={`text-sm font-bold me-3`}>Symbol</h2>
                </div>
                <div className="flex justify-around items-center w-[58%]">
                  <p className={`text-xs font-semibold`}>LTP</p>
                  <p className={`font-semibold text-xs `}>%Chng</p>
                </div>
              </div>
              {isLoading ? (
                <>
                  <span className="w-full p-3 h-5 block rounded bg-gray-200 animate-pulse"></span>
                  <span className="w-full p-3 h-5 block rounded bg-gray-200 animate-pulse"></span>
                  <span className="w-full p-3 h-5 block rounded bg-gray-200 animate-pulse"></span>
                </>
              ) : (
                stocks?.losers?.map((el, index) => {
                  if (index < 3) {
                    return (
                      <TopStocks
                        key={el?.name}
                        name={
                          el?.company?.length > 14
                            ? el?.company?.substring(0, 14) + "..."
                            : el?.company
                        }
                        ltp={el?.price}
                        priceChange={el?.change}
                        link={`/dashboard/stocks/${el?.symbol}`}
                      />
                    );
                  }
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
