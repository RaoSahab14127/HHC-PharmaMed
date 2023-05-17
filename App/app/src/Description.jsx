
import "./app.css"
import "./Description.css"
import React , {useContext, useState, useEffect} from 'react'

import UserContext from './userContext'

function Description() {
  const [ dosePurchase, setDosePurchase ] = useState({quantity:0});
  const [ err, setErr ] = useState("");
  console.log(dosePurchase)
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
    // This function will be called after every render and when myArray is updated
    console.log("myArray updated" , des);
    buyfunc2();
  }, [des]);
  let buyfunc = async()=>{
    
    setDes({
      ...des, // Spread operator to create a copy of the object
      quantity: dosePurchase.quantity 
    });
    
    //add to cart array
  }
  let buyfunc2 = ()=>{
    const newArray = [...cart]; // Create a copy of the array
    newArray.push(des); // Add the new element to the copied array
    setCart(newArray);
    console.log("77777777777777777777777777")
    console.log(cart)
    console.log("77777777777777777777777777")

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