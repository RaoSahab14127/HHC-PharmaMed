import Papa from 'papaparse';
import React, {useEffect, useState, useContext} from 'react'
import UserContext from "./userContext";
import "./userdata.css"
function Userdata() {
    let movies = []
    const [data, setData] = useState({});
    const { setLoader, loader } = useContext(UserContext);
    const { ancl, setAncl } = useContext(UserContext);
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
                  <button onClick={()=>("")}>
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








