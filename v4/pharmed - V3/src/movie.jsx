import React, { useState, useContext, useEffect } from 'react';
import UserContext from './userContext';
import "./loading.css"
import "./movie.css"
import Papa from 'papaparse';
import Med from './Med'
import { useNavigate } from "react-router-dom";
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
const MovieData = () => {
let movies = [];
let  donefetch =false;
const { pro } = useContext(UserContext);
const { user } = useContext(UserContext);
const { loader , setLoader} = useContext(UserContext);
const [data, setData] = useState({});
const [data1, setData1] = useState([]);
let filteredArray= [];
let filteredUser= [];
const WooCommerce = new WooCommerceRestApi({
  url: 'https://genmed.pk/',
  consumerKey: 'ck_c0cc7b39a7003a840e40eeedfb39ab5b83818436',
  consumerSecret: 'cs_2c3db277388d9812f7ff7d514fca4392fcf085ae',
  version: 'wc/v3',
  queryStringAuth: true,
});
useEffect(() => {
  if(pro.length === 0){
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS2KVLO1ZDlL8ufE7v1YdLnoLXy7tK3XQdES1oQjb1WsoumXq-1TUrirLLFAAtYR3u4NCFkZNhP4-Ov/pub?gid=0&single=true&output=csv", {
       download: true,
       header: true,
       complete: (results) => {
         setData(results.data);
       },
     })}
  
}, []);
movies = Array.from(data)
filteredUser = movies.filter((item1) => item1.EMRNumber === user.Username);
useEffect(() => {
  
  
  fetchData();

  
}, [data]);

const fetchData = async () => {
  let allpro = []
  let i = 0
  try {
    while(i<(filteredUser.length)){
    const response = await WooCommerce.get(`products/${filteredUser[i].Med}`);

    if((response.data).length===0){
     
      break;
    }
    allpro = allpro.concat(response.data)      
    i++;

    }
    if(allpro.length!==0){    setData1(allpro); setLoader(true);}
   
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};
filteredArray = data1;
const final_array  =[] 
if(pro.length === 0){
 
for(var i = 0; i<filteredArray.length; i++){
  let hdata = {...filteredArray[i], Amounti : filteredUser[i].Amount, Durationi : filteredUser[i].Duration}
  final_array.push(hdata)
} 

if(filteredArray.length!==0){
filteredArray = final_array}
else{
  filteredArray = [{id: 1, name: "No Med"}]
  
  

}

}
else{
filteredArray = pro
}
    return (
      <div>
    
      {(( data1.length===0 && pro.length ===0 )&& user.Username!=="" )? (
        
          ((movies.filter((item1) => item1.EMRNumber === user.Username)).length === 0 && movies.length!==0
           && loader=== false)?(
            "No Medicine Recommended"
          ):(<div className="spinner">
          <div className='spinnerspan'>Loading Data..</div>
          <div className="half-spinner"></div>
        </div>)
        
        ): (((user.Username==="")?(<div>Please Sign in to see Medicines</div>):(
          <div className='MainMedi'>
              {filteredArray.map((data) => {
               
                
                  return(
                    <div key={data.id}>
                      <Med p = {data} q = {filteredArray}/>
            
                    </div>
                    
              )
                  
                
              
              })}
              </div>
            
        )))}
      </div>  
    )
  }
export default MovieData;







  
  



