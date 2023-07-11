import React from "react";

const Portfolio = () => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <h1 className="text-3xl font-bold p-5">Your Portfolio</h1>
          <div className="flex justify-evenly my-10">
            <div className="w-[30%] border p-4">
              <h4 className="text-xl font-bold">Total Investment</h4>
              <p className="text-lg mt-4 text-gray-600 font-semibold">
                ₹ 1,00,000
              </p>
            </div>
            <div className="w-[30%] border p-4">
              <h4 className="text-xl font-bold ">Total Profit</h4>
              <p className="text-lg mt-4 text-green-500 font-semibold">
                ₹ 1,00,000
              </p>
            </div>
            <div className="w-[30%] border p-4">
              <h4 className="text-xl font-bold">Total Loss</h4>
              <p className="text-lg mt-4 text-red-500 font-semibold">
                ₹ 1,00,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
