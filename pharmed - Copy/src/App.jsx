
import HomeMed from "./HomeMed"
import ScreenCart from "./ScreenCart"
import ScreenDes from "./ScreenDes"
import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import UserContext from "./userContext";
import OrderBilling from "./orderbilling";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState("");
  const [sign, setSign] = useState("");
  const [des, setDes] = useState({});
  const [pro, setPro] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
 
  return (
    <UserContext.Provider value={{ user, setUser , sign, setSign , des, setDes,  cart, setCart,pro, setPro, total, setTotal}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMed />} />
          <Route path="/Signin" element={<Login />} />
          <Route path="/Cart" element={<ScreenCart />} />
          <Route path="/Description" element={<ScreenDes />} />
          <Route path="/orderbilling" element={<OrderBilling />} />
          <Route path="/*" element={ <div>Page 404 Error</div>} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>

  );
}
export default App;