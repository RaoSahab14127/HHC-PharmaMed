import React, {useEffect, useState, useContext} from 'react'
import UserContext from "./userContext";
import "./ancilaryDes..css"
import Header from './Header'
import Footer from './Footer'

function AncilaryDes() {
    let movies = []
    const { ancl, setAncl } = useContext(UserContext);
    const { ch } = useContext(UserContext);

      movies = Array.from(ancl)
      const columnValues = movies.filter((item1) => item1.Domain === ch);

  return (
    <div className='ALMain'>
    <Header/>
<div className='ALMain1'>
    <div>
    {columnValues.map((data) => {
               
                
               return(<>
               
               
               <div className='List' key={data.ID}>
                 
                      {data.ADDRESS}             
         
                 </div>
               </>
                 
           )
               
             
           
           })}
    </div>

</div>
<Footer/>
</div>
  )
}

export default AncilaryDes