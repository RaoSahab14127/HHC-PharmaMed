import React from 'react'
import "./screenUserData.css"
import Header from './Header'
import Footer from './Footer'
import Userdata from './userdata'

function ScreenLab() {
  return (
    <div className='UserDataMain'>
        <Header/>
<div className='UserDataMain1'><Userdata/></div>
<Footer/>
    </div>

  )
}

export default ScreenLab