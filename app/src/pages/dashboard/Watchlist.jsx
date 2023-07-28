import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearGetWatchlist,
  getETFsWatchlistThunk,
  getMFsWatchlistThunk,
  getStocksWatchlistThunk,
} from "../../features/watchlist/getWatchlist";
import StockCards from "../../components/dashboard/cards/StockCards";
import MutualFundCards from "../../components/dashboard/cards/MutualFundCards";
import { removeWatchlistThunk } from "../../features/watchlist/watchlist";
import EtfCards from "../../components/dashboard/cards/EtfCards";

const Watchlist = ({ setAlert }) => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [price, setPrice] = useState("");
  const [oneYear, setOneYear] = useState("");

  const [stockModal, setStockModal] = useState(false);
  const [mfModal, setMFModal] = useState(false);
  const [etfModal, setETFModal] = useState(false);

  const { stocksWatchlist, mfsWatchlist, etfsWatchlist, isLoading, isSuccess } =
    useSelector((state) => state.getWatchlistReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearGetWatchlist());
    dispatch(getStocksWatchlistThunk());
    dispatch(getMFsWatchlistThunk());
    dispatch(getETFsWatchlistThunk());
  }, []);

  console.log(etfsWatchlist);

  const handleRemoveWatchlist = (data) => {
    dispatch(removeWatchlistThunk(data)).then((data) => {
      if (!data?.payload.success) {
        setAlert({
          show: true,
          type: "danger",
          message: data?.payload.message,
        });
      } else {
        setAlert({
          show: true,
          type: "success",
          message: `Successfully removed from watchlist.`,
        });
        dispatch(clearGetWatchlist());
        dispatch(getStocksWatchlistThunk());
        dispatch(getMFsWatchlistThunk());
        dispatch(getETFsWatchlistThunk());
      }
    });
  };

  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Stocks</h1>
            {isLoading && !isSuccess ? (
              <>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
                <span className="w-full mb-3 h-5 block rounded bg-gray-200 p-8 animate-pulse"></span>
              </>
            ) : (
              stocksWatchlist?.map((el) => {
                return (
                  <StockCards
                    link={`/dashboard/stocks/${el?.symbol}`}
                    id={el?.id}
                    key={el?.symbol}
                    name={el?.name}
                    symbol={el?.symbol}
                    price={el?.curr_price}
                    priceChange={el?.curr_change}
                    perChange={el?.curr_per_change}
                    setName={(val) => setName(val)}
                    setSymbol={(val) => setSymbol(val)}
                    setModal={(val) => setStockModal(val)}
                    setPrice={(val) => setPrice(val)}
                    handleWatchlist={(val) => {}}
                    removeWatchlist={(val) => handleRemoveWatchlist(val)}
                    rWatchlist={true}
                    isWatch={true}
                  />
                );
              })
            )}
          </div>
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Mutual Funds</h1>
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
              mfsWatchlist?.map((el) => {
                let watchlistFind = mfsWatchlist?.find(
                  (wl) => wl.symbol === el.symbol + ".BO"
                );
                return (
                  <MutualFundCards
                    name={el?.name}
                    key={el?.symbol}
                    symbol={el?.symbol}
                    price={"₹" + el?.curr_price}
                    oneYear={el?.price_change}
                    fiveYear={el?.per_change}
                    setName={(val) => setName(val)}
                    setModal={(val) => setMFModal(val)}
                    setSymbol={(val) => setSymbol(val)}
                    setPrice={(val) => setPrice(val)}
                    setOneYear={(val) => setOneYear(val)}
                    addToWatchlist={(val) => {}}
                    removeWatchlist={(val) => handleRemoveWatchlist(val)}
                    rWatchlist={true}
                    isWatch={true}
                  />
                );
              })
            )}
          </div>
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">ETFs</h1>
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
              etfsWatchlist?.map((el) => {
                return (
                  <EtfCards
                    name={el?.name}
                    price={el?.curr_price}
                    priceChange={el?.price_change}
                    perChange={el?.per_change}
                    setModal={(val) => setETFModal(val)}
                    symbol={el?.symbol}
                    setSymbol={(val) => setSymbol(val)}
                    setName={(val) => setName(val)}
                    setPrice={(val) => setPrice(val)}
                    addToWatchlist={(val) => {}}
                    removeWatchlist={(val) => handleRemoveWatchlist(val)}
                    rWatchlist={true}
                    isWatch={true}
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

export default Watchlist;
