import React from "react";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";


const Header = () => {


  return (
    <>
      <nav class='relative bg-gray-800'>
        <div class='container px-6 py-4 mx-auto'>
          <div class='lg:flex lg:items-center lg:justify-between'>
            <div class='flex items-center justify-between'>
              <div class='flex lg:hidden'>
                <button
                  type='button'
                  class='text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400'
                  aria-label='toggle menu'
                >
                  <svg
                    x-show='!isOpen'
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M4 8h16M4 16h16'
                    />
                  </svg>

                  <svg
                    x-show='isOpen'
                    xmlns='http://www.w3.org/2000/svg'
                    class='w-6 h-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    stroke-width='2'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div class='absolute inset-x-0 z-20 px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-[50%] lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center'>
              {/* <div class='flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8'></div> */}
              <div class='flex items-center mt-4 lg:mt-0 w-[100%]'>
                <div class='relative mt-4 md:mt-0 w-[100%]'>
                  <span class='absolute inset-y-0 left-0 flex items-center pl-3'>
                    <svg
                      class='w-5 h-5 text-gray-400'
                      viewBox='0 0 24 24'
                      fill='none'
                    >
                      <path
                        d='M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z'
                        stroke='currentColor'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </span>

                  <input
                    type='text'
                    class='w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300'
                    placeholder='Search Tickers'
                  />
                </div>

                <button
                  class='hidden mx-6 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none'
                  aria-label='show notifications'
                >
                  <IoIosNotificationsOutline className="text-gray-300 text-3xl" />
                </button>

                <button
                  type='button'
                  class='flex items-center focus:outline-none'
                  aria-label='toggle profile dropdown'
                >
                  <MdOutlinePlaylistAdd className='text-white text-3xl' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
