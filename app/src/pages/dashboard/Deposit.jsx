import React, { useEffect, useState } from "react";
import Input from "../../components/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  clearGetTransaction,
  getAllDepositThunk,
} from "../../features/transaction/getTransaction";

const Deposit = () => {
  const [amount, setAmount] = useState("");

  const { deposit, isLoading } = useSelector(
    (state) => state.getTransactionReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearGetTransaction());
    dispatch(getAllDepositThunk());
  }, []);

  return (
    <>
      <div className="bg-gray-100 p-2">
        <div className="bg-white rounded-md p-5">
          <h1 className="text-3xl font-bold mb-4 p-5">Deposits</h1>
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
                    Deposit to Wallet
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
                <thead className="bg-gray-100">
                  <tr className="text-left">
                    <th className="p-3 text-lg text-gray-700">Transaction Id</th>
                    <th className="p-3 text-lg text-gray-700">Amount</th>
                    <th className="p-3 text-lg text-gray-700">Bank Account Number</th>
                  </tr>
                </thead>
                <tbody>
                  {deposit?.deposits?.length > 0 ? deposit?.deposits?.map((el) => {
                    return (
                      <tr className="border-b border-opacity-20">
                        <td className="p-3">
                          <p>{el?.transaction_id}</p>
                        </td>
                        <td className="p-3">
                          <p>{el?.amount}</p>
                        </td>
                        <td className="p-3">
                          <p>{el?.bank_account_number}</p>
                        </td>
                      </tr>
                    );
                  }) : <tr className=""><td className="p-3" colSpan={3}>No Data Available</td></tr>}
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
