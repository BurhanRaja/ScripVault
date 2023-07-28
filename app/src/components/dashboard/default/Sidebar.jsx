import React, { useEffect } from "react";
import { BiSolidDashboard, BiMoneyWithdraw } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { RiLuggageDepositLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { clearUserInfoState, getUserThunk } from "../../../features/user/info";

const Sidebar = () => {
  const { pathname } = useLocation();

  const { user } = useSelector((state) => state.infoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearUserInfoState());
    dispatch(getUserThunk());
  }, []);

  return (
    <>
      <aside className="fixed h-[100%] flex flex-col w-64 px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <Link to="#">
          <img
            className="w-auto h-6 sm:h-7"
            src="https://merakiui.com/images/logo.svg"
            alt=""
          />
        </Link>

        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <Link
              className={`flex items-center px-4 py-2 rounded-md  dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${
                pathname === "/dashboard/home" && "bg-gray-800 text-gray-100"
              }`}
              to="/dashboard/home"
            >
              <BiSolidDashboard className="text-white text-2xl" />

              <span className="mx-4 font-medium">Dashboard</span>
            </Link>

            <Link
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md ${
                pathname === "/dashboard/portfolio" &&
                "bg-gray-800 text-gray-100"
              } dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200`}
              to="/dashboard/portfolio"
            >
              <CgProfile className="text-white text-2xl" />
              <span className="mx-4 font-medium">Portfolio</span>
            </Link>
            <Link
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md ${
                pathname === "/dashboard/stocks" && "bg-gray-800 text-gray-100"
              } dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
              to="/dashboard/stocks"
            >
              <div className="w-[1.8rem]">
                <img src="/assets/images/chart.png" />
              </div>
              <span className="mx-4 font-medium">Stocks</span>
            </Link>
            <Link
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md ${
                pathname === "/dashboard/mutual-funds" &&
                "bg-gray-800 text-gray-100"
              } dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
              to="/dashboard/mutual-funds"
            >
              <div className="w-[1.8rem]">
                <img src="/assets/images/mutual-funds.png" />
              </div>

              <span className="mx-4 font-medium">Mutual Funds</span>
            </Link>
            <Link
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md ${
                pathname === "/dashboard/etfs" && "bg-gray-800 text-gray-100"
              } dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
              to="/dashboard/etfs"
            >
              <div className="w-[1.8rem]">
                <img src="/assets/images/etf.png" />
              </div>
              <span className="mx-4 font-medium">ETFs</span>
            </Link>

            <Link
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md ${
                pathname === "/dashboard/deposit" && "bg-gray-800 text-gray-100"
              } dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
              to="/dashboard/deposit"
            >
              <RiLuggageDepositLine className="text-white text-2xl" />

              <span className="mx-4 font-medium">Deposits</span>
            </Link>

            <Link
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md ${
                pathname === "/dashboard/withdraw" &&
                "bg-gray-800 text-gray-100"
              } dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700`}
              to="/dashboard/withdraw"
            >
              <BiMoneyWithdraw className="text-white text-2xl" />

              <span className="mx-4 font-medium">Withdraws</span>
            </Link>

            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="/dashboard/watchlist"
            >
              <MdOutlinePlaylistAdd className="text-white text-2xl" />

              <span className="mx-4 font-medium">Watchlist</span>
            </Link>
            <Link
              className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
              to="#"
            >
              <BsFillTicketPerforatedFill className="text-white text-2xl" />

              <span className="mx-4 font-medium">Tickets</span>
            </Link>
          </nav>
          <Link
            to="/dashboard/profile"
            className="flex items-center px-4 py-2 rounded-md -mx-2 mt-5 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
          >
            <CgProfile className="text-white text-2xl" />
            <span className="mx-2 font-medium text-gray-800 dark:text-gray-200">
              {user?.basic?.full_name}
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
