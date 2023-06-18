import React from 'react'
import "./App.css"
import "./ScreenCart.css"
import Header from './Header'
import Footer from './Footer'

import Cartmain from './cartmain';
function ScreenCart() {
  return (
    <div className='Cart_Main'>
      <Header></Header>
      <div className='Cart_MainCart'>
        <Cartmain/>
      </div>


      <Footer></Footer>

    </div>
  )
}

export default ScreenCart;