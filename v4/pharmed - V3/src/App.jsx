
import HomeMed from "./HomeMed"
import ScreenCart from "./ScreenCart"
import ScreenDes from "./ScreenDes"
import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import UserContext from "./userContext";
import OrderBilling from "./orderbilling";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScreenLab from "./ScreenLab";
import ScreenLAbDes from "./ScreenLAbDes";
function App() {
  const [user, setUser] = useState("");
  const [userData, setUserData] = useState({Name: ""});
  const [sign, setSign] = useState("");
  const [loader, setLoader] = useState(false);
  const [des, setDes] = useState({});
  const [pro, setPro] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [rep, setRep] = useState([]);

 
  return (
    <UserContext.Provider value={{ user, setUser , sign, setSign ,rep, setRep,userData, setUserData, des, setDes,  cart, setCart,pro, setPro, total, setTotal, loader, setLoader}}>
      <BrowserRouter>
        <Routes>
        <Route
          path="/"
          element={user!==""
            ? <HomeMed  />
            : <Navigate to="/Signin" replace />
          }
        />
          <Route path="/Signin" element={<Login />} />
          <Route path="/Cart" element={<ScreenCart />} />
          <Route path="/Description" element={<ScreenDes />} />
          <Route path="/orderbilling" element={<OrderBilling />} />
          <Route path="/Labfile" element={<ScreenLab/>} />
          <Route path="/LabfileDes" element={<ScreenLAbDes/>} />
          <Route path="/*" element={ <div>Page 404 Error</div>} />
        </Routes>
      </BrowserRouter>
      </UserContext.Provider>

  );
}
export default App;




        // <Route path="/" element={<HomeMed />} />