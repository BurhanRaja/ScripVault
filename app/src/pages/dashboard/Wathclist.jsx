import React from "react";

const Wathclist = () => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-4">Your Stocks</h1>
            <div className="flex justify-between items-center p-4 border bg-gray-100">
              <div>
                <p className={``}>Name</p>
              </div>
              <div className="flex justify-between items-center w-[63%]">
                <p className={`text-sm`}>Symbol</p>
                <p className={`text-sm`}>Price</p>
                <p className={`text-sm`}>Price Change</p>
                <p className={`text-sm`}>Per Change</p>
                <p className="w-[5rem]"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wathclist;
