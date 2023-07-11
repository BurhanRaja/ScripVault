import React from "react";
import EtfCards from "../../components/dashboard/cards/EtfCards";

const ETFs = () => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <div className="p-5">
            <h1 className="text-2xl font-bold mb-5">Your ETFs</h1>
            <EtfCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
            />
            <EtfCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ETFs;
