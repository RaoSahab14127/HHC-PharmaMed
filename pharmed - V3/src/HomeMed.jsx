import React from 'react'
import "./App.css"
import "./HomeMed.css"
import MovieData from './movie'
import Header from './Header'
import Footer from './Footer'



function HomeMed() {


  return (
    
    
      <div className='HomeMed_Main'>
      <Header/>
      <div className='HomeMed_MainProducts'>
      <MovieData/>
      
      </div>
      
      <Footer></Footer>
      
    </div>
  )
}

export default HomeMed;
