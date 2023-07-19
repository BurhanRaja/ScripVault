import React from "react";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import StockDetailsTables from "../../components/dashboard/StockDetailsTables";

const StockDetails = () => {
  return (
    <>
      <div className='bg-gray-100 p-3'>
        <div className='flex justify-between my-5 px-5'>
          <div className='w-[48%]'>
            <h1 className='text-5xl mb-4 font-bold'>Bajaj Finance Ltd.</h1>
            <button className='bg-black text-white px-2 py-1 text-sm rounded-md'>
              BAJFINANCE
            </button>
          </div>
          <div className='w-[48%] text-end'>
            <h2 className='text-3xl font-bold mb-2'>₹ 19,305.65</h2>
            <p className={"text-green-500 font-semibold"}>+164.47 ( 2.2% )</p>
          </div>
        </div>
        <div className='bg-white rounded-md my-3 p-5'>
          <h3 className='text-2xl font-semibold mb-4'>Price Summary</h3>
          <div className='flex justify-between'>
            <div className=''>
              <h3 className='uppercase text-lg mb-2'>Today's High</h3>
              <p className='font-bold'>₹ 7,599</p>
            </div>
            <div className=''>
              <h3 className='uppercase text-lg mb-2'>Today's Low</h3>
              <p className='font-bold'>₹ 7,599</p>
            </div>
            <div className=''>
              <h3 className='uppercase text-lg mb-2'>52 Week High</h3>
              <p className='font-bold'>₹ 7,599</p>
            </div>
            <div className=''>
              <h3 className='uppercase text-lg mb-2'>52 Week Low</h3>
              <p className='font-bold'>₹ 7,599</p>
            </div>
          </div>
        </div>
        <div className='bg-white rounded-md my-3 p-5'>
          <h3 className='text-2xl font-semibold mb-4'>Price Chart</h3>
          <div className='flex justify-center'>
            <img src='/assets/images/demo-chart.png' width={800} />
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='w-[49%]'>
            <div className='bg-white p-5 my-3'>
              <h3 className='text-2xl font-semibold mb-4'>
                Company Essentials
              </h3>
              <div className='flex justify-between items-center flex-wrap'>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
              </div>
            </div>
            <div className='bg-white p-5 my-3'>
              <div className='flex items-center mb-4'>
                <h3 className='text-2xl font-semibold me-2'>Strengths</h3>
                <FaRegThumbsUp className='text-green-500 text-xl' />
              </div>
              <div className='flex justify-between items-center flex-wrap'>
                <ul>
                  <li className='mb-3'>
                    <p className='font-semibold'>
                      PAT margin has surged by 6.05%.
                    </p>
                  </li>
                  <li className='mb-3'>
                    <p className='font-semibold'>
                      PAT margin has surged by 6.05%.
                    </p>
                  </li>
                  <li className='mb-3'>
                    <p className='font-semibold'>
                      PAT margin has surged by 6.05%.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='w-[49%]'>
            <div className='bg-white p-5 my-3'>
              <h3 className='text-2xl font-semibold mb-4'>Company Ratios</h3>
              <div className='flex justify-between items-center flex-wrap'>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
                <div className='mb-5'>
                  <h5 className='text-sm mb-1'>Market Cap</h5>
                  <p className='font-bold'>₹ 4,59,571.03 Cr.</p>
                </div>
              </div>
            </div>
            <div className='bg-white p-5 my-3'>
              <div className='flex items-center mb-4'>
                <h3 className='text-2xl font-semibold me-2'>Limitations</h3>
                <FaRegThumbsDown className='text-red-500 text-xl' />
              </div>
              <div className='flex justify-between items-center flex-wrap'>
                <ul>
                  <li className='mb-3'>
                    <p className='font-semibold'>
                      PAT margin has surged by 6.05%.
                    </p>
                  </li>
                  <li className='mb-3'>
                    <p className='font-semibold'>
                      PAT margin has surged by 6.05%.
                    </p>
                  </li>
                  <li className='mb-3'>
                    <p className='font-semibold'>
                      PAT margin has surged by 6.05%.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='p-5 bg-white my-3'>
          <StockDetailsTables />
        </div>
      </div>
    </>
  );
};

export default StockDetails;
