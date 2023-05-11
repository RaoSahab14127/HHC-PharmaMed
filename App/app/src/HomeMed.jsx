import React from 'react'
import "./app.css"
import "./HomeMed.css"
import Header from './Header'
import Footer from './Footer'
import Med from './Med'
function HomeMed() {
  return (
    <div className='HomeMed_Main'>
      <Header></Header>
      <div className='HomeMed_MainProducts'>
      <Med></Med>
      <Med></Med>
      <Med></Med>
      <Med></Med>
      <Med></Med>
      <Med></Med>
      <Med></Med>
      <Med></Med>
      
      </div>
      

      <Footer></Footer>      
      
    </div>
  )
}

export default HomeMed