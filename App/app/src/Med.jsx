import React , {useContext} from 'react'
import "./app.css"
import "./Med.css"
import { useNavigate } from "react-router-dom";
import UserContext from './userContext'

function Med(props) {
  const { setDes, des } = useContext(UserContext);
  const navigate = useNavigate();
  let gotodes =(data)=>{
    setDes(data);
    navigate("/Description")
    console.log(data)

  }
  return (
    
      
      <div className='HomeMed_Mid'>
        <div className='HomeMed_MidPic'><img src="https://human-healthcare.com/wp-content/uploads/2023/02/HH-logo-Option-2-e1678900350865.png" alt="" /></div>
        <div className='HomeMed_MidData'>
          <div>{props.p.Med}</div>
          <div>{props.p.Name}</div>
          <div><button onClick={()=>gotodes(props.p)}>BuyNow</button></div>
        </div>
      </div>
  )
}

export default Med