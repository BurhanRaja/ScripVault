import React from "react";

const Deposit = () => {
  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <h1 className="text-3xl font-bold mb-4 p-5">Deposits</h1>
          <div className="container p-2 mx-auto sm:p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <thead className="">
                  <tr className="text-left">
                    <th className="p-3 text-xl">Transaction Id</th>
                    <th className="p-3 text-xl">Amount</th>
                    <th className="p-3 text-xl">Bank Account Number</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-opacity-20">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Microsoft Corporation</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="">Friday</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Deposit;
