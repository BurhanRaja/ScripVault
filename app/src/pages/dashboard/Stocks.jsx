import React from "react";
import StockCards from "../../components/dashboard/cards/StockCards";
import StockIndexWidget from "../../components/dashboard/widgets/StockIndexWidget";

const Stocks = () => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <h1 className="text-3xl font-bold mb-8 p-5">Stocks</h1>
          <div className="flex justify-evenly items-center mb-5">
            <StockIndexWidget
              name={"Nifty 50"}
              symbol={"NFTY50"}
              currPrice={23591.78}
              currPer={0.48}
              currGap={1.72}
              size={"w-[40%]"}
            />
            <StockIndexWidget
              name={"Sensex"}
              symbol={"SENSEX"}
              currPrice={23591.78}
              currPer={0.48}
              currGap={1.72}
              size={"w-[40%]"}
            />
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">NSE Stocks</h1>
            <StockCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              priceChange={-17.1}
              perChange={-1.4}
            />
            <StockCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              priceChange={-17.1}
              perChange={-1.4}
            />
          </div>
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">BSE Stocks</h1>
            <StockCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              priceChange={-17.1}
              perChange={-1.4}
            />
            <StockCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              priceChange={-17.1}
              perChange={-1.4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Stocks;
