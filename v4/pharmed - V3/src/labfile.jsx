
import React, { useState, useContext, useEffect } from 'react'
import UserContext from './userContext';
import "./labfile.css"
import Papa from 'papaparse';
import "./loading.css"
import Lab from './lab';
function Labfile() {
  const { setUser, user } = useContext(UserContext);
  const {  setRep, rep } = useContext(UserContext);
  
  let labArray = []
  const [labdata, setLabdata] = useState({});
  let filteredUser = []
    useEffect(() => {
      if(rep.length===0){
        Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vSt9RnSTMYMg-fuP0WWJcduEXUmEEWyGZ7d_b_wSy0U-uDdDFN1FZj64rlaSKNI7QRAGPQ_vYwgPLpc/pub?gid=0&single=true&output=csv", {
           download: true,
           header: true,
           complete: (results) => {
             setLabdata(results.data);
           },
         })
      
        }
        else{

          setLabdata(rep)
         
        }
      
    }, []);
    
    labArray = Array.from(labdata)
    filteredUser = labArray.filter((item1) => item1.EMR === user);
    if(rep.length===0 && filteredUser.length!==0){
      setLabdata("sdfasfasasf")
      setRep(filteredUser)
    }
console.log(filteredUser)

  return (
    <>
    {(labArray.length===0  && rep.length ===0 )?(
      <div className="spinner">
            <div className='spinnerspan'>Loading Data..</div>
            <div className="half-spinner"></div>
          </div>

    ):((filteredUser.length==0)?(""):(
      <div className='labReportsList'>
        <div className='LabListHead'><div>
        <div>Name of Report</div>
        <div>Date</div>
        <div>Full view</div>
        </div>
        </div>
        
        {filteredUser.map((data) => {
                   
                    
                   return(
                     <div key={data.number}>
                      <Lab p = {data} />
                     </div>
                     
               )
                   
                 
               
               })}
        </div>))}
    </>
  )
}

export default Labfile;

