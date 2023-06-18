import React, { useContext } from "react";
import "./App.css"
import "./Header.css"
import { Link } from "react-router-dom";
import UserContext from './userContext'
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const { setUser, user } = useContext(UserContext);
  const {setSign, sign} =  useContext(UserContext);
  const {setDes, des} =  useContext(UserContext);
  const {setPro, pro} =  useContext(UserContext);
  const {setCart, cart} =  useContext(UserContext);
  return (
    <div className='HomeMed_Top'>
        <div className='Top_First'><img height={"100%"} width={"100%"} onClick={()=>navigate("/")} src="https://human-healthcare.com/wp-content/uploads/2023/02/HH-logo-Option-2-e1678900350865.png" alt="sdfasd" /></div>
        <div className='Top_Second'>Human Health Care Pharmacy</div>
        <div className='Top_Third'>{(cart.length!==0)?(<div><button onClick = {()=>navigate("/Cart")}>Cart</button></div>):("")}
        
        {user ? (
          <>
          <div>  
              <button  onClick={()=>{setUser(""); setSign(""); setCart([]); setDes({}); setPro([]); navigate("/")}}>
                Logout
              </button>
              </div>
              <div className="user">
                {user}
              </div>
              </>
          ) : (
            <div className="signupbtn">
              
              <button className="header-links signin-signup-border" onClick={()=>navigate("/Signin")}>
                Sign In
              </button>
              </div>
          )}
          </div>
          
      </div>
    
  )
}

export default Header;