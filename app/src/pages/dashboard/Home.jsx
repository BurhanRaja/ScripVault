import React from "react";
import StockWidget from "../../components/dashboard/StockWidget";
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
      </div>
    </>
  );
};

export default Home;
