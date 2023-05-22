import React from 'react'
import "./app.css"
import "./HomeMed.css"
import MovieData from './movie'
import Header from './Header'
import Footer from './Footer'
import Description from './Description'
import Med from './Med'
import Cartmain from './cartmain';
import UserContext from './userContext'

import axios from 'axios';
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

// const WooCommerce = new WooCommerceRestApi({
//   url: process.env.WC_URL,
//   consumerKey: process.env.WC_CONSUMER_KEY,
//   consumerSecret: process.env.WC_CONSUMER_SECRET,
//   version: 'wc/v3'
// });

// WooCommerce.get("products")
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.response.data);
//   });
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';



const baseUrl = 'https://genmed.pk/wp-json/wc/v3/products'; // Replace with your store URL
const consumerKey = 'ck_b12bb93ce3dbf61dcb869e325eef5cc15877faf8'; // Replace with your consumer key
const consumerSecret = 'cs_b259633ee484740298ebc68da832cbab9d97fc5d'; // Replace with your consumer secret

const api = axios.create({
  baseURL: corsProxyUrl + baseUrl,
  auth: {
    username: consumerKey,
    password: consumerSecret
  }
});

api.get('/products')
  .then(response => {
    console.log('Response Data:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });



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

export default HomeMed