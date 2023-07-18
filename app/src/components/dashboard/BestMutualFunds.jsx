import React from "react";
import MutualFundCards from "./cards/MutualFundCards";

const BestMutualFunds = ({ data }) => {
  return (
    <>
      {data?.map((el) => {
        return (
          <MutualFundCards
            name={el?.fund}
            key={el?.symbol}
            oneYear={el?.return_one_year}
            fiveYear={el?.return_five_year}
          />
        );
      })}
    </>
  );
};

export default BestMutualFunds;
