import Papa from 'papaparse';
import React, {useEffect, useState, useContext} from 'react'
import UserContext from "./userContext";
import "./userdata.css"
import { useNavigate } from "react-router-dom";
function Userdata() {
    let movies = []
    const navigate = useNavigate();
    const [data, setData] = useState({});
    const { setLoader, loader } = useContext(UserContext);
    const { ancl, setAncl } = useContext(UserContext);
    const { ach, setCh } = useContext(UserContext);
    
    useEffect(() => {
        if(ancl.length===0){
          Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Rwuc9sZPmsC-xbnUrvlWIkpHZz668XpxvN9b8sKcMH2yPJUxBNOiVXqV2U1XK03dOVUnlL5KFpV0/pub?gid=0&single=true&output=csv", {
             download: true,
             header: true,
             complete: (results) => {
               setData(results.data);
               setLoader(false)
             },
           })
        
        }
        else{
            setData(ancl)
        setLoader(false)
        }
        
      }, []);
      movies = Array.from(data)
      const columnValues = movies.map((row) => row['Domain']);

      // Filter unique values
      const uniqueValues = [...new Set(columnValues)];
      if(movies.length!==0 && ancl.length===0){
        setAncl(data);
      } 
      let chfunc=(x)=>{
        setCh(x)
        navigate("/MedSerDes")
        
      }

  return (
    <div className='MainList'>
            <>
    {( loader === true  && ancl.length ===0 )?(
      <div className="spinner">
            <div className='spinnerspan'>Loading Data..</div>
            <div className="half-spinner"></div>
          </div>

    ):((uniqueValues.length==0)?(""):(<>
      <div className='ListHead'>Top Services</div>
      {uniqueValues.map((data) => {
               
                
               return(<>
               
               
               <div className='List' key={data}>
                  <button onClick={()=>(chfunc(data))}>
                      {data}
                  </button>
         
                 </div>
               </>
                 
           )
               
             
           
           })}
        </>
        
        ))}
    </>
    </div>
  )
}

export default Userdata








