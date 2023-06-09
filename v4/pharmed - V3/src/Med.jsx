import React , {useContext} from 'react'
import "./App.css"
import "./Med.css"
import { useNavigate } from "react-router-dom";
import UserContext from './userContext'

function Med(props) {
  const { setDes, des } = useContext(UserContext);
  const { setPro, pro } = useContext(UserContext);
  const navigate = useNavigate();
  let gotodes =(data, data4)=>{
    setDes(data);
    setPro(data4)
    navigate("/Description")
    

  }
  return (
    
      
      <div className='HomeMed_Mid'>
        <div className='HomeMed_MidPic'><img  src={(props.p.images.length!==0)?(props.p.images[0].src):(props.p.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/Product-1-280x280.png":(props.p.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/product-3-280x280.png":"https://genmed.pk/wp-content/uploads/2020/01/topical-280x280.png"} alt={"IMAGE"}/></div>
        <div className='HomeMed_MidData'>
          <div>{props.p.name}</div>
          <div>{props.p.price}</div>
          <div className='buttonby'><button  onClick={()=>gotodes(props.p,props.q )}>BuyNow</button></div>
        </div>
      </div>
  )
}

export default Med