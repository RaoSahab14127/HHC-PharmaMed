import React, {useEffect, useState, useContext} from 'react'
import UserContext from "./userContext";
import "./ancilaryDes..css"
import Header from './Header'
import Footer from './Footer'
import Ancilaryy from './ancilaryy';
function AncilaryDes() {

  return (
    <div className='ALMain'>
    <Header/>
<div className='ALMain1'>
   <Ancilaryy/>

</div>
<Footer/>
</div>
  )
}

export default AncilaryDes