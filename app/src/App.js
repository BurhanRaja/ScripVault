import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/website/Home";
import Login from "./pages/website/Login";
import Register from "./pages/website/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
