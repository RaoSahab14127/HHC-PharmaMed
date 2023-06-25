import React ,{useContext} from 'react'
import "./lab.css"
import UserContext from './userContext';
import { useNavigate } from "react-router-dom";
function Lab(props) {

  const navigate = useNavigate();
  const { setDes, des } = useContext(UserContext);
  let seeFullReport=(x, y)=>{

    setDes(x);
    navigate("/")
  }
  return (
    <div className='lab'>
      <div>{props.p.NameOfReport}</div>
      <div>{props.p.Date}</div>
      <div className='labbutton'><button  onClick={()=>seeFullReport(props.p)}>Show Report</button></div>
  </div>
  )
}

export default Lab;