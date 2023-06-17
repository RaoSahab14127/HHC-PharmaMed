import React, { useState, useContext, useEffect } from 'react';
import UserContext from './userContext';
import "./loading.css"
import "./movie.css"
import Papa from 'papaparse';
import Med from './Med'
import { useNavigate } from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const MovieData = () => {
  const navigate = useNavigate();
  const { pro } = useContext(UserContext);
  const [data, setData] = useState({});
  const [data1, setData1] = useState([]);
  const WooCommerce = new WooCommerceRestApi({
    url: 'https://genmed.pk/',
    consumerKey: 'ck_c0cc7b39a7003a840e40eeedfb39ab5b83818436',
    consumerSecret: 'cs_2c3db277388d9812f7ff7d514fca4392fcf085ae',
    version: 'wc/v3',
    queryStringAuth: true,
  });
  useEffect(() => {
    if(pro.length === 0){
    fetchData()}

    
    
  }, []);
  
  const fetchData = async () => {
   let page = 1;
   let perPage= 100;
    let allpro = []
    try {
      while(true){
      const response = await WooCommerce.get('products',  { per_page: perPage,page: page });
      
      if((response.data).length===0){
       
        break;
      }
      allpro = allpro.concat(response.data)      
      page++;
      
      }
      Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS2KVLO1ZDlL8ufE7v1YdLnoLXy7tK3XQdES1oQjb1WsoumXq-1TUrirLLFAAtYR3u4NCFkZNhP4-Ov/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
     setData1(allpro);

    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
    
    
    const movies = Array.from(data);
    
    const { setUser, user } = useContext(UserContext);
    const filteredUser = movies.filter((item1) => item1.EMRNumber === user)
  let filteredArray = data1.filter((item1) =>
  filteredUser.some((item2) => item1.slug === item2.Med)
  );
  const final_array  =[] 
  if(pro.length === 0){
  for(var i = 0; i<filteredArray.length; i++){
    let hdata = {...filteredArray[i], Amounti : filteredUser[i].Amount, Durationi : filteredUser[i].Duration}
    final_array.push(hdata)
  } 
  filteredArray = final_array

}
  else{
    filteredArray = pro
  }
 
    return (
      <div>
       
      {(filteredArray.length ===0 && user!=="" )? (
        
          <div className="spinner">
            <div className='spinnerspan'>Less than 2 Min</div>
            <div className="half-spinner"></div>
          </div>
        
        ): ((user==="")?(<div>Please Sign in to see Medicines</div>):(
          <div className='MainMedi'>
              {filteredArray.map((data) => {
                if (true) {
                  return(
                    <div key={data.id}>
                      
                    
            <Med p = {data} q = {filteredArray}/>
            
                    </div>
                    
              )
                }
                
              
              })}
              </div>
            
        ))}
      </div>  
    )
  }
export default MovieData;





