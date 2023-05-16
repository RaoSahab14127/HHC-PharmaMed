
import HomeMed from "./HomeMed"
import ScreenCart from "./ScreenCart"
import ScreenDes from "./ScreenDes"
import React, { useState } from "react";
import Login from "./Login";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [user, setUser] = useState("");
  const [sign, setSign] = useState("");
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeMed />} />
          <Route path="/Signin" element={<Login />} />
          <Route path="/Cart" element={<ScreenCart />} />
          <Route path="/Description" element={<ScreenDes />} />
          
          <Route path="/*" element={ <div>Page 404 Error</div>} />
        </Routes>
      </BrowserRouter>

  );
}
export default App;