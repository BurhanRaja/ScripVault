import React, { useEffect, useState } from "react";
import StockCards from "../../components/dashboard/cards/StockCards";
import StockIndexWidget from "../../components/dashboard/widgets/StockIndexWidget";
import { useDispatch, useSelector } from "react-redux";
import {
  allNSEStocksThunk,
  clearNSEStocksState,
} from "../../features/stocks/allNSEStocks";
import {
  clearStockIndexesState,
  getStockIndexesThunk,
} from "../../features/stocks/stockIndexes";
import StockModal from "../../components/dashboard/modals/StockModal";

const Stocks = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(50);

  const [stockName, setStockName] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");

  const { indexes } = useSelector((state) => state.stockIndexesReducer);
  const { isLoading, nseData } = useSelector((state) => state.stockNSEReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allNSEStocksThunk({ skip, limit }));
    dispatch(getStockIndexesThunk());
  }, []);

  useEffect(() => {
    let timeOut = setInterval(() => {
      let hour = new Date().getHours();
      if (hour < 16 && hour > 9) {
        clearStockIndexesState();
        dispatch(getStockIndexesThunk());
      }
    }, 10000);

    return () => {
      clearInterval(timeOut);
    };
  }, []);

  return (
    <>
      <StockModal name={stockName} symbol={stockSymbol} />
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <h1 className="text-3xl font-bold mb-8 p-5">Stocks</h1>
          <div className="flex justify-evenly items-center mb-5">
            <StockIndexWidget
              name={indexes?.nse?.name}
              symbol={indexes?.nse?.symbol}
              currPrice={parseFloat(indexes?.nse?.curr_price).toFixed(2)}
              currPer={parseFloat(indexes?.nse?.curr_per_change).toFixed(3)}
              currGap={parseFloat(indexes?.nse?.curr_change).toFixed(3)}
              size={"w-[40%]"}
            />
            <StockIndexWidget
              name={indexes?.bse?.name}
              symbol={indexes?.bse?.symbol}
              currPrice={parseFloat(indexes?.bse?.curr_price).toFixed(2)}
              currPer={parseFloat(indexes?.bse?.curr_per_change).toFixed(3)}
              currGap={parseFloat(indexes?.bse?.curr_change).toFixed(3)}
              size={"w-[40%]"}
            />
          </div>
          <div className="p-5">
            {nseData?.length === 0 && isLoading ? (
              <>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
              </>
            ) : (
              nseData?.map((el) => {
                return (
                  <StockCards
                    key={el?.symbol}
                    name={el?.name}
                    symbol={el?.symbol}
                    price={el?.curr_price}
                    priceChange={el?.curr_change}
                    perChange={el?.curr_per_change}
                    setName={(val) => setStockName(val)}
                    setSymbol={(val) => setStockSymbol(val)}
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

export default Stocks;
