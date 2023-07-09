import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/website/Home";
import Login from "./pages/website/Login";
import Register from "./pages/website/Register";
import UserInfo from "./pages/website/UserInfo";
import UserNominate from "./pages/website/UserNominate";
import Layout from "./components/dashboard/Layout";
import Alert from "./components/Alert";
import { useState, useEffect } from "react";
import VerifyLogin from "./pages/website/VerifyLogin";

function App() {
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

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
    <div className="App">
      <BrowserRouter>
        <Alert data={alert} closeVisible={(val) => setAlert(val)} />
        <Routes>
          <Route path="/" element={<Home setAlert={setAlert} />} />
          <Route path="/login" element={<Login setAlert={setAlert} />} />
          <Route path="/register" element={<Register setAlert={setAlert} />} />
          <Route path="/user/info" element={<UserInfo setAlert={setAlert} />} />
          <Route
            path="/verify/:token"
            element={<VerifyLogin setAlert={setAlert} />}
          />
          <Route
            path="/user/nominate"
            element={<UserNominate setAlert={setAlert} />}
          />
          <Route element={<Layout />}>
            <Route path="/dashboard/home" element={<>Hello</>} />
            <Route path="/dashboard/deposit" element={<>Hello</>} />
            <Route path="/dashboard/withdraw" element={<>Hello</>} />
            <Route path="/dashboard/stocks" element={<>Hello</>} />
            <Route path="/dashboard/mutual-funds" element={<>Hello</>} />
            <Route path="/dashboard/etfs" element={<>Hello</>} />
            <Route path="/dashboard/watchlist" element={<>Hello</>} />
            <Route path="/dashboard/profile" element={<>Hello</>} />
            <Route path="/dashboard/portfolio" element={<>Hello</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
