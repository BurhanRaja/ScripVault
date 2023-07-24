import React from "react";

const StockPortfolioModal = ({ name }) => {
  return (
    <>
      <div className="relative flex justify-center">
        {/* <button className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Open Modal
        </button> */}

        <div className="fixed inset-0 z-10 overflow-y-auto  bg-black/50">
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right sm:my-8 sm:align-middle w-[60%] sm:p-6">
              <div>
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-gray-700 className="
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>

                <div className="mt-2 text-center">
                  <h3
                    className="text-xl mb-5 font-bold leading-6 text-gray-800 capitalize"
                    id="modal-title"
                  >
                    Bharat Bond ETF
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    <div className="flex justify-center flex-wrap w-[80%] mx-auto">
                        <div className="w-[12rem] flex justify-evenly text-lg mb-4 me-5">
                            <p>Current Price<span className="font-semibold">:</span></p>
                            <p className="font-semibold">₹1939</p>
                        </div>
                        <div className="w-[12rem] flex justify-evenly text-lg mb-4 me-5">
                            <p>Current Price<span className="font-semibold">:</span></p>
                            <p className="font-semibold">₹1939</p>
                        </div>
                        <div className="w-[12rem] flex justify-evenly text-lg mb-4 me-5">
                            <p>Current Price<span className="font-semibold">:</span></p>
                            <p className="font-semibold">₹1939</p>
                        </div>
                        <div className="w-[12rem] flex justify-evenly text-lg mb-4 me-5">
                            <p>Current Price<span className="font-semibold">:</span></p>
                            <p className="font-semibold">₹1939</p>
                        </div>
                        <div className="w-[12rem] flex justify-evenly text-lg mb-4 me-5">
                            <p>Current Price<span className="font-semibold">:</span></p>
                            <p className="font-semibold">₹1939</p>
                        </div>
                        <div className="w-[12rem] flex justify-evenly text-lg mb-4 me-5">
                            <p>Current Price<span className="font-semibold">:</span></p>
                            <p className="font-semibold">₹1939</p>
                        </div>
                    </div>
                  </p>
                </div>
              </div>

              <div className="mt-5 sm:flex sm:items-center sm:justify-evenly">

                {/* <div className="sm:flex sm:items-center "> */}
                  <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2  hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                    Cancel
                  </button>

                  <button className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                    Archive
                  </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockPortfolioModal;
