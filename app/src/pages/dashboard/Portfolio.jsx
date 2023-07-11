import React from "react";
import StockCards from "../../components/dashboard/cards/StockCards";
import MutualFundCards from "../../components/dashboard/cards/MutualFundCards";
import EtfCards from "../../components/dashboard/cards/EtfCards";

const Portfolio = () => {
  return (
    <>
      <div className='bg-gray-100 p-2'>
        <div className='bg-white rounded-md p-5'>
          <div className='flex justify-evenly my-10'>
            <div className='w-[30%] border p-4'>
              <h4 className='text-xl font-bold'>Total Investment</h4>
              <p className='text-lg mt-4 text-gray-600 font-semibold'>
                ₹ 1,00,000
              </p>
            </div>
            <div className='w-[30%] border p-4'>
              <h4 className='text-xl font-bold '>Total Profit</h4>
              <p className='text-lg mt-4 text-green-500 font-semibold'>
                ₹ 1,00,000
              </p>
            </div>
            <div className='w-[30%] border p-4'>
              <h4 className='text-xl font-bold'>Total Loss</h4>
              <p className='text-lg mt-4 text-red-500 font-semibold'>
                ₹ 1,00,000
              </p>
            </div>
          </div>
          <div className='p-5'>
            <h1 className='text-2xl font-bold mb-5'>Your Stocks</h1>
            <StockCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              priceChange={-17.1}
              perChange={-1.4}
            />
            <StockCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              priceChange={-17.1}
              perChange={-1.4}
            />
          </div>
          <div className='p-5'>
            <h1 className='text-2xl font-bold mb-5'>Your Mutual Funds</h1>
            <MutualFundCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              priceChange={17.1}
              perChange={1.4}
            />
            <MutualFundCards
              name={"Bajaj Finserv Ltd."}
              symbol={"BAJAJFINSV.NS"}
              price={1597.8}
              oneYear={-17.1}
              fiveYear={-1.4}
            />
          </div>
          <div className='p-5'>
            <h1 className='text-2xl font-bold mb-5'>Your ETFs</h1>
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

export default Portfolio;
