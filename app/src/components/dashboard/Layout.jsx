import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className='flex w-[100%]'>
        <Sidebar />
        <div className='w-[100%]'>
          <div className='min-h-[100vh] ms-64'>
            <Header />
            <div className="min-h-[100vh]">
            <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
