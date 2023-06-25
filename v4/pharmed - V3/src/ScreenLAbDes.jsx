import React from 'react'
import Header from './Header'
import Footer from './Footer'
import "./ScreenLAbDes.css"
import Labdespg from './labdespg'
function ScreenLAbDes() {
  return (
    <div className='LabDes_Main'>
      <Header></Header>
      <div className='LabDesMain1'>
        <Labdespg/>
      </div>


      <Footer></Footer>

    </div>
  )
}

export default ScreenLAbDes