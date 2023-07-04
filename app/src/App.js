import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/website/Home";
import Login from "./pages/website/Login";
import Register from "./pages/website/Register";
import UserInfo from "./pages/website/UserInfo";
import UserNominate from "./pages/website/UserNominate";
import Layout from "./components/dashboard/Layout";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user/info' element={<UserInfo />} />
          <Route path='/user/nominate' element={<UserNominate />} />
          <Route element={<Layout />}>
            <Route path="/dashboard/home" element={<>Hello</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
