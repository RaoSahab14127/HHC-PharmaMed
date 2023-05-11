import React from 'react'
import "./app.css"
import "./Header.css"

function Header() {
  return (
    <div className='HomeMed_Top'>
        <div className='Top_First'><img src="https://human-healthcare.com/wp-content/uploads/2023/02/HH-logo-Option-2-e1678900350865.png" alt="sdfasd" /></div>
        <div className='Top_Second'><input type="text" /><button>Search</button></div>
        <div className='Top_Third'>Cart</div>
        <div className='Top_Fourth'>Login</div>
      </div>
    
  )
}

export default Header;