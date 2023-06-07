import React from 'react'
import "./App.css"
import "./HomeMed.css"
import MovieData from './movie'
import Header from './Header'
import Footer from './Footer'
import Description from './Description'
import Med from './Med'
import Cartmain from './cartmain';
import UserContext from './userContext'
import axios from "axios";
import { useState, useEffect } from 'react';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";


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

// {data.map((order) => (
//         <div key={order.id}>
//           <h2>Order #{order.number}</h2>
//           <p>Status: {order.status}</p>
//           {/* Add additional JSX to display other order details */}
//         </div>
//       ))}