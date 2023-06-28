import React, {useEffect, useState, useContext} from 'react'
import UserContext from "./userContext";
import "./ancilaryy.css"


function Ancilaryy() {
    let movies = []
    const { ancl, setAncl } = useContext(UserContext);
    const { ch } = useContext(UserContext);

      movies = Array.from(ancl)
      const columnValues = movies.filter((item1) => item1.Domain === ch);

  return (
    <div className='ALMain2'>
    {columnValues.map((data) => {
               
                
               return(<>
               
               
               <div className='ListAnc' key={data.ID}>
                 
                      <div><b>{data.CENTERS}</b>  </div>   
                      <div>Address: {data.ADDRESS}   </div>   
                      <div>Contact No: {data.CONTACT}   </div>   
                      <div>Services: {data.SERVICES}   </div>   
                      <div>Schedule: {data.SCHEDULE}   </div>            
         
                 </div>
               </>
                 
           )
               
             
           
           })}
    </div>
  )
}

export default Ancilaryy