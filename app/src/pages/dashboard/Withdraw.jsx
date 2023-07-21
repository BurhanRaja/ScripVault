import React, { useState, useEffect } from "react";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  clearGetTransaction,
  getAllWithdrawThunk,
} from "../../features/transaction/getTransaction";

const Withdraw = () => {
  const [amount, setAmount] = useState("");

  const { withdraw, isLoading } = useSelector(
    (state) => state.getTransactionReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearGetTransaction());
    dispatch(getAllWithdrawThunk());
  }, []);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <h1 className="text-3xl font-bold mb-4 p-5">Withdraws</h1>
          <div className="flex justify-between items-start mb-10">
            <div className="w-[30%] bg-gray-100 p-6 rounded-md">
              <h2 className="text-2xl font-medium">Current Wallet Amount</h2>
              <p className="text-2xl font-semibold mt-4">₹ 10,000</p>
            </div>
            <div className="w-[68%] bg-gray-100 p-6 rounded-md">
              <form>
                <Input
                  type={"text"}
                  labelName={"Amount"}
                  placeholder={"Your Amount"}
                  value={amount}
                  handleValue={(val) => setAmount(val)}
                  handleFocus={() => {}}
                />
                <div className="text-start">
                  <button
                    className="bg-black text-white p-4 py-2 mt-4 rounded-md"
                    type="submit"
                  >
                    Withdraw from Wallet
                  </button>
                </div>
              </form>
            </div>
          </div>
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

export default Withdraw;
