import React from "react";
import Input from "../../components/Input";

const UserInfo = () => {
  return (
    <>
      <section className="bg-gray-900 h-[100vh] flex justify-center items-center">
        <div class="max-w-4xl w-1/2 p-6 mx-auto  rounded-md shadow-md bg-slate-800">
          <form>
            <p className="text-2xl text-center font-semibold text-gray-200 capitalize">
              Your Information
            </p>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div className="mb-4">
                <Input
                  type="date"
                  labelName="Date of Birth"
                  placeholder="Date of Birth"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  labelName="PAN Number"
                  placeholder="PAN No."
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  labelName="Source Wealth"
                  placeholder="Source Wealth"
                />
              </div>
              <div className="mb-4">
                <Input type="text" labelName="Address" placeholder="Address" />
              </div>
            </div>

            <p className="text-2xl text-center font-semibold text-gray-200 capitalize mt-6">
              Bank Details
            </p>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div className="mb-4">
                <Input
                  type="text"
                  labelName="Acct No."
                  placeholder="Account Number"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  labelName="Acct Type"
                  placeholder="Account Type"
                />
              </div>
              <div className="mb-4">
                <Input
                  type="text"
                  labelName="IFSC Code"
                  placeholder="ifsc code"
                />
              </div>
            </div>
            <div class="flex justify-center mt-6">
              <button class="py-2.5 leading-5 text-black transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-gray-600 hover:text-white focus:outline-none focus:bg-gray-600 w-1/2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default UserInfo;
