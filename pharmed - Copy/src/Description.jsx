
import "./App.css"
import "./Description.css"
import React , {useContext, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import UserContext from './userContext'

function Description() {
  const navigate = useNavigate();
  const [ dosePurchase, setDosePurchase ] = useState({quantity:0});
  const [ err, setErr ] = useState("");
  const { setTotal, total } = useContext(UserContext);
  const { setDes, des } = useContext(UserContext);
  const { setAllProduct, allProduct } = useContext(UserContext);
  const { setCart, cart} = useContext(UserContext);

  var MaxDose = Number(des.Amounti) * Number(des.Durationi)

  let increment = ()=>{
    
    if (dosePurchase.quantity<MaxDose){
      
      setDosePurchase({quantity: dosePurchase.quantity+1}) 
    }
    else{
      setErr("Max Quantity Reach")
    }
    
  }
  let decrement = ()=>{
    
    if (dosePurchase.quantity>0){
      setErr("")
      setDosePurchase({quantity: dosePurchase.quantity-1}) 
    }
  
    
    
    
  }

  useEffect(() => {
  }, [des]);

  let buyfunc = ()=>{
    
    if((cart.filter((item)=>item?.name === des.name)).length===0){
    var ab = {...des, quant: dosePurchase.quantity}
    setCart([...cart, ab]);
    setDes(ab)
    if (total ===0){setTotal(((Number(dosePurchase.quantity)*Number(des.price))+200))}
    else{
      setTotal((total+(Number(dosePurchase.quantity)*Number(des.price)))) 
    }
  }
    else{
      alert("Already in cart")
    } 
    navigate("/")

    //add to cart array
  }

  return (
    <div>
      <div className='Des_Main'>
            <div className='Des_Value'>
                <div className='Des_MainContent'>
                    <div className='Des_MainContent1'>
                        <div>{des.name}</div>
                        <div>{des?.meta_data[3]?.value}</div>
                        <div>{des.sale_price}</div>
                        <div>{des.id}</div>
                        <div>Guarantee: 100% Genuine Product</div>
                    </div>
                    <div className='Des_MainContent2'>
                        <div>Availability: {des.stock_status}</div>
                        <div>{des?.categories[0]?.name}</div>
                        <div className='Des_MainContentCounter'><button onClick={increment}>+</button><div>{dosePurchase.quantity}</div><button onClick={decrement}>-</button></div>
<div><button onClick={buyfunc}>Buy Now</button></div>
{err && <p className="error">{err}</p>}
                    </div>
                    
                </div>
                <div className='Des_Atp'>{des?.meta_data[9]?.value}</div>
                <div className='Des_Ind'>{des?.meta_data[13]?.value}</div>
            </div>
            <div className='Des_Pic'> <img src={(des.images.length!==0)?(des.images[0].src):(des.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/Product-1-280x280.png":(des.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/product-3-280x280.png":"https://genmed.pk/wp-content/uploads/2020/01/topical-280x280.png"} alt={"IMAGE"}/></div>

        </div>
    </div>
  )
}

export default Description