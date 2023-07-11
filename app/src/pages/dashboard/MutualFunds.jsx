import React from "react";
import MutualFundCards from "../../components/dashboard/cards/MutualFundCards";

const MutualFunds = () => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Mutual Funds</h1>
            <MutualFundCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              oneYear={-17.1}
              fiveYear={-1.4}
            />
            <MutualFundCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              oneYear={17.1}
              fiveYear={1.4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MutualFunds;
