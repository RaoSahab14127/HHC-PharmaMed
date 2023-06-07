import React from 'react'
import "./App.css"
import "./ScreenDes.css"
import Header from './Header'
import Footer from './Footer'
import Description from  "./Description"
function ScreenDes() {
  return (
    <div className='Des_Main1'>
      <Header></Header>
      <div className='Des_MainDes'>
       <Description/> 
      </div>


      <Footer></Footer>

    </div>
  )
}

export default ScreenDes;