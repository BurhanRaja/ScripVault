import React from "react";
import PortfolioStock from "../../components/dashboard/cards/portfolio/PortfolioStock";
import PortfolioMF from "../../components/dashboard/cards/portfolio/PortfolioMF";
import PortfolioETF from "../../components/dashboard/cards/portfolio/PortfolioETF";

const Portfolio = () => {
  return (
    <>
      <div className='bg-gray-100 p-2'>
        <div className='bg-white rounded-md p-5'>
          <h1 className='text-3xl font-bold p-5'>Your Portfolio</h1>
          <div className='flex justify-evenly my-10'>
            <div className='w-[45%] border p-4'>
              <h4 className='text-xl font-bold'>Total Investment</h4>
              <p className='text-lg mt-4 text-gray-600 font-semibold'>
                ₹ 1,00,000
              </p>
            </div>
            <div className='w-[45%] border p-4'>
              <h4 className='text-xl font-bold '>Total Profit</h4>
              <p className='text-lg mt-4 text-green-500 font-semibold'>
                ₹ 1,00,000
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className='mb-8'>
              <h1 className='text-2xl font-bold mb-4'>Your Stocks</h1>
              <PortfolioStock
                name={"Bajaj Finance"}
                symbol={"BAJAJFINV"}
                price={1900}
                profit={190}
              />
            </div>
            <div className='mb-8'>
              <h1 className='text-2xl font-bold mb-4'>Your Mutual Funds</h1>
              <PortfolioMF
                name={"Bajaj Finance"}
                symbol={"BAJAJFINV"}
                price={1900}
                profit={190}
              />
            </div>
            <div className='mb-8'>
              <h1 className='text-2xl font-bold mb-4'>Your ETFs</h1>
              <PortfolioETF
                name={"Bajaj Finance"}
                symbol={"BAJAJFINV"}
                price={1900}
                profit={190}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
