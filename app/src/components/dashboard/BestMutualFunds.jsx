import React from "react";
import MutualFundCards from "./cards/MutualFundCards";

const BestMutualFunds = ({ data, setName, setModal, setSymbol, setPrice, setOneYear }) => {
  return (
    <>
      {data?.map((el) => {
        return (
          <MutualFundCards
            name={el?.fund}
            key={el?.symbol}
            symbol={el?.symbol}
            oneYear={el?.return_one_year}
            fiveYear={el?.return_five_year}
            link={`/dashboard/mutual-funds/${el?.symbol}`}
            setName={(val) => setName(val)}
            setModal={(val) => setModal(val)}
            setSymbol={(val) => setSymbol(val)}
            setPrice={(val) => setPrice(val)}
            setOneYear={(val) => setOneYear(val)}
          />
        );
      })}
    </>
  );
};

export default BestMutualFunds;
