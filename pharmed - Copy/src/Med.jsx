import React , {useContext} from 'react'
import "./App.css"
import "./Med.css"
import { useNavigate } from "react-router-dom";
import UserContext from './userContext'

function Med(props) {
  const { setDes, des } = useContext(UserContext);
  const navigate = useNavigate();
  let gotodes =(data)=>{
    setDes(data);
    navigate("/Description")
    

  }
  return (
    
      
      <div className='HomeMed_Mid'>
        <div className='HomeMed_MidPic'><img src={props.p.images[0]} alt="" /></div>
        <div className='HomeMed_MidData'>
          <div>{props.p.name}</div>
          <div>{props.p.price}</div>
          <div><button onClick={()=>gotodes(props.p)}>BuyNow</button></div>
        </div>
      </div>
  )
}

export default Med