import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initTE, Tab } from "tw-elements";
import Home from "./pages/website/Home";
import Login from "./pages/website/Login";
import Register from "./pages/website/Register";
import UserInfo from "./pages/website/UserInfo";
import UserNominate from "./pages/website/UserNominate";
import Layout from "./components/dashboard/default/Layout";
import Alert from "./components/Alert";
import { useState, useEffect } from "react";
import VerifyLogin from "./pages/website/VerifyLogin";
import Kyc from "./pages/website/Kyc";

import DashHome from "./pages/dashboard/Home";
import Portfolio from "./pages/dashboard/Portfolio";
import Stocks from "./pages/dashboard/Stocks";
import MutualFunds from "./pages/dashboard/MutualFunds";
import ETFs from "./pages/dashboard/ETFs";
import Deposit from "./pages/dashboard/Deposit";
import Withdraw from "./pages/dashboard/Withdraw";
import ApproveKyc from "./pages/website/ApproveKyc";
import TopStocks from "./pages/dashboard/TopStocks";
import UserAccount from "./pages/dashboard/UserAccount";

function App() {
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    initTE({ Tab });
  }, []);

  useEffect(() => {
    if (alert.show === true) {
      let timeout = setTimeout(() => {
        setAlert({
          show: false,
          type: "",
          message: "",
        });
      }, 3000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [alert]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Alert data={alert} closeVisible={(val) => setAlert(val)} />
        <Routes>
          <Route path='/' element={<Home setAlert={setAlert} />} />
          <Route path='/login' element={<Login setAlert={setAlert} />} />
          <Route path='/register' element={<Register setAlert={setAlert} />} />
          <Route path='/user/info' element={<UserInfo setAlert={setAlert} />} />
          <Route
            path='/verify/:token'
            element={<VerifyLogin setAlert={setAlert} />}
          />
          <Route
            path='/user/nominate'
            element={<UserNominate setAlert={setAlert} />}
          />
          <Route path='/user/kyc' element={<Kyc setAlert={setAlert} />} />
          <Route
            path='/approve/kyc'
            element={<ApproveKyc setAlert={setAlert} />}
          />
          <Route element={<Layout />}>
            <Route path='/dashboard/home' element={<DashHome />} />
            <Route path='/dashboard/portfolio' element={<Portfolio />} />

            <Route path='/dashboard/topstock/:name' element={<TopStocks />} />

            <Route path='/dashboard/stocks' element={<Stocks />} />
            <Route path='/dashboard/stocks/:id' element={<></>} />

            <Route path='/dashboard/mutual-funds' element={<MutualFunds />} />
            <Route path='/dashboard/mutual-funds/:id' element={<></>} />
            <Route path='/dashboard/mutual-funds/best/:name' element={<></>} />

            <Route path='/dashboard/etfs' element={<ETFs />} />
            <Route path='/dashboard/etfs/:id' element={<></>} />
            <Route path='/dashboard/etfs/best/:name' element={<></>} />

            <Route path='/dashboard/deposit' element={<Deposit />} />
            <Route path='/dashboard/withdraw' element={<Withdraw />} />
            <Route path='/dashboard/watchlist' element={<>Hello</>} />
            <Route path='/dashboard/profile' element={<UserAccount />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
