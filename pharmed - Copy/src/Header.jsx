import React, { useContext } from "react";
import "./App.css"
import "./Header.css"
import { Link } from "react-router-dom";
import UserContext from './userContext'

function Header() {
  const { setUser, user } = useContext(UserContext);
  const {setSign, sign} =  useContext(UserContext);
  const {setDes, des} =  useContext(UserContext);
  const {setPro, pro} =  useContext(UserContext);
  const {setCart, cart} =  useContext(UserContext);
  return (
    <div className='HomeMed_Top'>
        <div className='Top_First'><img src="https://human-healthcare.com/wp-content/uploads/2023/02/HH-logo-Option-2-e1678900350865.png" alt="sdfasd" /></div>
        <div className='Top_Second'><input type="text" /><button>Search</button></div>
        <div className='Top_Third'><Link to="/Cart">
                Cart
              </Link></div>
        
        {user ? (
          
          <div>  
              <Link to="/" onClick={()=>{setUser(""); setSign(""); setCart([]); setDes({}); setPro([])}}>
                Logout
              </Link>
              </div>
            
          ) : (
            <div>
              
              <Link to="/Signin" className="header-links signin-signup-border">
                Sign In
              </Link>
              </div>
          )}
          
      </div>
    
  )
}

export default Header;