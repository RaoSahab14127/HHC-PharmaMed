import React from 'react'
import "./lab.css"
function Lab(props) {
  return (
    <div className='lab'>
      <div>{props.p.NameOfReport}</div>
      <div>{props.p.Date}</div>
      <div className='labbutton'><button  onClick={()=>("")}>Show Report</button></div>
  </div>
  )
}

export default Lab;