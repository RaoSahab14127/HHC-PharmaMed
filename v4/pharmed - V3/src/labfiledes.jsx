import React, { useState, useContext, useEffect } from 'react'
import UserContext from './userContext';
import "./labfile.css"
import Papa from 'papaparse';
function Labfiledes() {

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

export default Labfiledes