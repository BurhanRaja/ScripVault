import React from "react";
import { BiSolidDashboard, BiMoneyWithdraw } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { BsFillTicketPerforatedFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { RiLuggageDepositLine } from "react-icons/ri";

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <>
      <aside className='fixed h-[100%] flex flex-col w-64 px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700'>
        <Link to='#'>
          <img
            className='w-auto h-6 sm:h-7'
            src='https://merakiui.com/images/logo.svg'
            alt=''
          />
        </Link>

        <div className='flex flex-col justify-between flex-1 mt-6'>
          <nav>
            <Link
              className={`flex items-center px-4 py-2 rounded-md  dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${
                pathname === "/dashboard/home" && "bg-gray-800 text-gray-100"
              }`}
              to='/dashboard/home'
            >
              <BiSolidDashboard className='text-white text-2xl' />

              <span className='mx-4 font-medium'>Dashboard</span>
            </Link>

            <Link
              className={`flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md ${
                pathname === "/dashboard/portfolio" &&
                "bg-gray-800 text-gray-100"
              } dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200`}
              to='/dashboard/portfolio'
            >
              <CgProfile className='text-white text-2xl' />
              <span className='mx-4 font-medium'>Portfolio</span>
            </Link>
            <Link
              className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              to='#'
            >
              <div className='w-[1.8rem]'>
                <img src='/assets/images/chart.png' />
              </div>

              <span className='mx-4 font-medium'>Stocks</span>
            </Link>
            <Link
              className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              to='#'
            >
              <div className='w-[1.8rem]'>
                <img src='/assets/images/mutual-funds.png' />
              </div>

              <span className='mx-4 font-medium'>Mutual Funds</span>
            </Link>
            <Link
              className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              to='#'
            >
              <div className='w-[1.8rem]'>
                <img src='/assets/images/etf.png' />
              </div>
              <span className='mx-4 font-medium'>ETFs</span>
            </Link>

            <Link
              className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              to='#'
            >
              <RiLuggageDepositLine className='text-white text-2xl' />

              <span className='mx-4 font-medium'>Deposits</span>
            </Link>

            <Link
              className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              to='#'
            >
              <BiMoneyWithdraw className='text-white text-2xl' />

              <span className='mx-4 font-medium'>Withdraws</span>
            </Link>

            <Link
              className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              to='#'
            >
              <BsFillTicketPerforatedFill className='text-white text-2xl' />

              <span className='mx-4 font-medium'>Tickets</span>
            </Link>

            <Link
              className='flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700'
              to='#'
            >
              <IoSettingsSharp className='text-white text-2xl' />

              <span className='mx-4 font-medium'>Settings</span>
            </Link>
          </nav>

          <Link to='#' className='flex items-center px-4 -mx-2 mt-5'>
            <img
              className='object-cover mx-2 rounded-full h-9 w-9'
              src='https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
              alt='avatar'
            />
            <span className='mx-2 font-medium text-gray-800 dark:text-gray-200'>
              John Doe
            </span>
          </Link>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
