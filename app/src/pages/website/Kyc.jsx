import React from "react";

const Kyc = () => {
  return (
    <>
      <div>
        <section className="bg-gray-200 h-[100vh] flex justify-center items-center">
          <div class="max-w-4xl w-1/3 p-6 mx-auto rounded-md shadow-md bg-white">
            <h2 class="text-3xl text-center font-bold text-gray-900 capitalize mb-6">
              KYC
            </h2>
            <form onSubmit={""}>
              <div className="mb-4">
                <label
                  for="poa"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Proof of Address
                </label>
                <input
                  type="file"
                  className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                  name="kycImages"
                />
              </div>
              <div className="mb-4">
                <label
                  for="poi"
                  className="block text-sm text-gray-500 dark:text-gray-300"
                >
                  Proof of Identity
                </label>
                <input
                  type="file"
                  className="block w-full px-3 py-2 mt-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                  name="kycImages"
                />
              </div>
              <div class="flex justify-center mt-6">
                <button class="py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-600focus:outline-none focus:bg-gray-600 w-1/2">
                  Add Documents
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Kyc;
