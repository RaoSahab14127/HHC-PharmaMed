import React from 'react'
import "./app.css"
import "./HomeMed.css"
import MovieData from './movie'
import Header from './Header'
import Footer from './Footer'
import Description from './Description'
import Med from './Med'
import Cartmain from './cartmain';
import ExcelDatabase from './excel';
function HomeMed() {
  return (
    <div className='HomeMed_Main'>
      
      <div className='HomeMed_MainProducts'>
      <MovieData/>
      </div>
      

      <Footer></Footer>
      

    </div>
  )
}

export default HomeMed