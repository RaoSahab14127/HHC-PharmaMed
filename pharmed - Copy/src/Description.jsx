
import "./App.css"
import "./Description.css"
import React , {useContext, useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import UserContext from './userContext'

function Description() {
  const navigate = useNavigate();
  const [ dosePurchase, setDosePurchase ] = useState({quantity:0});
  const [ err, setErr ] = useState("");

  const { setDes, des } = useContext(UserContext);
  const { setCart, cart} = useContext(UserContext);
  const {movies } = useContext(UserContext);
  var MaxDose = Number(des.Amount) * Number(des.Duration)
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
    console.log(des);
  }, [des]);

  let buyfunc = ()=>{
    
    var ab = {...des, quant: dosePurchase.quantity}
    setCart([...cart, ab]);
    setDes(ab)
    
    
    navigate("/")

    //add to cart array
  }

  return (
    <div>
      <div className='Des_Main'>
            <div className='Des_Value'>
                <div className='Des_MainContent'>
                    <div className='Des_MainContent1'>
                        <div>{des.Med}</div>
                        <div>Guarantee: 100% Genuine Product</div>
                    </div>
                    <div className='Des_MainContent2'>
                        <div>Availability: In stock</div>
                        <div>{des.Name}</div>
                        <div className='Des_MainContentCounter'><button onClick={increment}>+</button><div>{dosePurchase.quantity}</div><button onClick={decrement}>-</button></div>
<div><button onClick={buyfunc}>Buy Now</button></div>
{err && <p className="error">{err}</p>}
                    </div>
                    
                </div>
                <div className='Des_Atp'>Advice to patient</div>
                <div className='Des_Ind'>Indication</div>
            </div>
            <div className='Des_Pic'> Pic</div>

        </div>
    </div>
  )
}

export default Description