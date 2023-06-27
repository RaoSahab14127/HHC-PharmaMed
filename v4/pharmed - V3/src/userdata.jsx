import Papa from 'papaparse';
import React, {useEffect, useState} from 'react'
import "./userdata.css"
function Userdata() {
    let movies = []
    const [data, setData] = useState({});
    useEffect(() => {

          Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS4Rwuc9sZPmsC-xbnUrvlWIkpHZz668XpxvN9b8sKcMH2yPJUxBNOiVXqV2U1XK03dOVUnlL5KFpV0/pub?gid=0&single=true&output=csv", {
             download: true,
             header: true,
             complete: (results) => {
               setData(results.data);
             },
           })
        
      }, []);
      movies = Array.from(data)
      const columnValues = movies.map((row) => row['Domain']);

      // Filter unique values
      const uniqueValues = [...new Set(columnValues)];
  return (
    <div className='MainList'>
        <div className='ListHead'>Top Services</div>
        {uniqueValues.map((data) => {
                 
                  
                 return(<>
                 
                 
                 <div className='List' key={data}>
                    <button>
                        {data}
                    </button>
           
                   </div>
                 </>
                   
             )
                 
               
             
             })}
    </div>
  )
}

export default Userdata