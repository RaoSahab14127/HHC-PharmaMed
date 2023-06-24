import React, { useState, useContext, useEffect } from 'react'
import UserContext from './userContext';
import "./labfile.css"
import Papa from 'papaparse';
function Labfile() {
  const { setUser, user } = useContext(UserContext);
  let labArray = []
  const [labdata, setLabdata] = useState({});
  let filteredUser = []
    useEffect(() => {
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSt9RnSTMYMg-fuP0WWJcduEXUmEEWyGZ7d_b_wSy0U-uDdDFN1FZj64rlaSKNI7QRAGPQ_vYwgPLpc/pub?gid=0&single=true&output=csv", {
           download: true,
           header: true,
           complete: (results) => {
             setLabdata(results.data);
           },
         })
      
    }, []);
    labArray = Array.from(labdata)
    filteredUser = labArray.filter((item1) => item1.EMR === user);
  return (

            <div className="labMain">
                {filteredUser.map((data) => {
                 
                  
                    return(
                      <div key={data.number} className='labdiv'>
                       <div>{data.NameOfReport}</div>
                       <img  src={`https://drive.google.com/uc?export=view&id=${"1d_A_aR_7p39hjtoZzGvAyuApQne-sDqB"}`} alt="" />
              
                      </div>
                      
                )
                    
                  
                
                })}
                </div>

  )
}

export default Labfile