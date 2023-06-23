import React from 'react'
import "./ScreenLab.css"
import Header from './Header'
import Footer from './Footer'
import Labfile from './labfile'
function ScreenLab() {
  return (
    <div className='SL_Main'>
        <Header/>
<div className='SLProducts'><Labfile/></div>
<Footer/>
    </div>

  )
}

export default ScreenLab