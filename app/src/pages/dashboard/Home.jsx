import React from "react";
import StockWidget from "../../components/dashboard/StockWidget";
import MutualFundWidget from "../../components/dashboard/MutualFundWidget";
import TypeMF from "../../components/dashboard/TypeMF";
// name, symbol, currPrice, currPer, currGap, size
const Home = () => {
  return (
    <>
      <div className="p-4">
        <StockWidget
          name={"Nifty 50"}
          symbol={"NFTY50"}
          currPrice={23591.78}
          currPer={0.48}
          currGap={1.72}
          size={"w-[30%]"}
        />
        <MutualFundWidget
          name="Nippon India Interval Fund-Quarterly Interval Fund-Series-I- Dividend Payout"
          oneYear={5.92903}
          fiveYear={4.045}
        />
        <TypeMF name="Long Term Mutual Funds" logo="/assets/best-long-term.svg" recommended={true} />
      </div>
      <div className="">
      </div>
    </>
  );
};

export default Home;
