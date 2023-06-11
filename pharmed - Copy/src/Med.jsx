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
        <div className='HomeMed_MidPic'><img src={(props.p.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/Product-1-280x280.png":(props.p.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/product-3-280x280.png":"https://genmed.pk/wp-content/uploads/2020/01/topical-280x280.png"} alt={"IMAGE"}/></div>
        <div className='HomeMed_MidData'>
          <div>{props.p.name}</div>
          <div>{props.p.price}</div>
          <div><button onClick={()=>gotodes(props.p)}>BuyNow</button></div>
        </div>
      </div>
  )
}

export default Med