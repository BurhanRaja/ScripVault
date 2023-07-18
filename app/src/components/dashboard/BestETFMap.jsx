import React from "react";
import EtfCards from "./cards/EtfCards";

const BestETFMap = ({ data }) => {
  return (
    <>
      <>
        {data?.map((el) => {
          return (
            <EtfCards
              name={el?.name}
              key={el?.symbol}
              price={el?.price}
              priceChange={el?.price_change}
              perChange={el?.per_change}
            />
          );
        })}
      </>
    </>
  );
};

export default BestETFMap;
