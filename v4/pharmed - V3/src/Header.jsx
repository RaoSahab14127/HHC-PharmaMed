import React, { useContext } from "react";
import "./App.css"
import "./Header.css"
import { Link } from "react-router-dom";
import UserContext from './userContext'
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  const { setLoader } = useContext(UserContext);
  const { setUser, user } = useContext(UserContext);
  const { setUserData, userData } = useContext(UserContext);
  const {setSign, sign} =  useContext(UserContext);
  const {setDes, des} =  useContext(UserContext);
  const {setPro, pro} =  useContext(UserContext);
  const {setCart, cart} =  useContext(UserContext);
  return (
    <div className='HomeMed_Top'>
        <div className='Top_First'><img height={"100%"} width={"100%"} onClick={()=>navigate("/")} src="https://human-healthcare.com/wp-content/uploads/2023/02/HH-logo-Option-2-e1678900350865.png" alt="sdfasd" /></div>
        <div className='Top_SecondMain'>
        <div className='Top_Second'>Human Health Care Pharmacy</div>
        <div className='Top_Second2'>Greetings, {userData?.Name} welcome to portal</div>
        </div>
        <input type="checkbox" name="" id="click" />
        <div className="cross">
          
          <label for="click"> <svg fill="#fff" height="30px" width="30px" version="1.1" id="Layer_1" 
	 viewBox="0 0 297 297" >
			<path d="M280.214,39.211H16.786C7.531,39.211,0,46.742,0,55.997v24.335c0,9.256,7.531,16.787,16.786,16.787h263.428
				c9.255,0,16.786-7.531,16.786-16.787V55.997C297,46.742,289.469,39.211,280.214,39.211z"/>
			<path d="M280.214,119.546H16.786C7.531,119.546,0,127.077,0,136.332v24.336c0,9.255,7.531,16.786,16.786,16.786h263.428
				c9.255,0,16.786-7.531,16.786-16.786v-24.336C297,127.077,289.469,119.546,280.214,119.546z"/>
			<path d="M280.214,199.881H16.786C7.531,199.881,0,207.411,0,216.668v24.335c0,9.255,7.531,16.786,16.786,16.786h263.428
				c9.255,0,16.786-7.531,16.786-16.786v-24.335C297,207.411,289.469,199.881,280.214,199.881z"/>
</svg></label></div>
        <div className='Top_Third'>{(cart.length!==0)?(<div><button onClick = {()=>navigate("/Cart")}>Cart</button></div>):("")}
        
        {user ? (
          <>
          <div>  
              <button  onClick={()=>{setUser("");setLoader(false); setSign(""); setCart([]); setDes({}); setPro([]); navigate("/Signin")}}>
                Logout
              </button>
              </div>
              <div className="user">
                {user}
              </div>
              <div className="user">
              <button  onClick={()=>navigate("/Labfile")}>
                Reports
              </button>
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
