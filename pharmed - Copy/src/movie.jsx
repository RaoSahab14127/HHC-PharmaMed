import React, { useState, useContext, useEffect } from 'react';
import UserContext from './userContext';
import Papa from 'papaparse';
import Med from './Med'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const MovieData = () => {
  const [data1, setData1] = useState([]);
  const WooCommerce = new WooCommerceRestApi({
    url: 'https://genmed.pk/',
    consumerKey: 'ck_c0cc7b39a7003a840e40eeedfb39ab5b83818436',
    consumerSecret: 'cs_2c3db277388d9812f7ff7d514fca4392fcf085ae',
    version: 'wc/v3',
    queryStringAuth: true,
  });
  useEffect(() => {
    fetchData();
  }, []);
  
  
  const fetchData = async () => {
   let page = 1;
   let perPage= 100;
    let allpro = []
    try {
      while(page<29){
      const response = await WooCommerce.get('products',  { per_page: perPage,page: page });
      allpro = [...allpro, response.data]
      alert(page)
      page++;
      
      }
     setData1(allpro);
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
    const [data, setData] = useState({});
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS2KVLO1ZDlL8ufE7v1YdLnoLXy7tK3XQdES1oQjb1WsoumXq-1TUrirLLFAAtYR3u4NCFkZNhP4-Ov/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
    const movies = Array.from(data);
    const { setUser, user } = useContext(UserContext);
    const filteredUser = movies.filter((item1) => item1.EMRNumber === user)
  const filteredArray = data1.filter((item1) =>
  filteredUser.some((item2) => item1.name === item2.Name)
  );
  console.log(data1)

    return (
      
            <div>
              {filteredArray.map((data) => {
                
                    <div key={data.Serial}>
                    
            <Med p = {data}/>
          

                    </div>
              })}
                
                
              
              
  
  
  
            </div>
          
    )
  }
  export default MovieData;
