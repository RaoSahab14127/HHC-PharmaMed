import React from 'react'

function Lab(props) {
  return (
    <div>
      <div>{props.p.EMR}</div>
      <div>{props.p.NameOfReport}</div>
      <div>{props.p.Date}</div>
      <div className='buttonby'><button  onClick={()=>("")}>Show Report</button></div>
  </div>
  )
}

export default Lab;