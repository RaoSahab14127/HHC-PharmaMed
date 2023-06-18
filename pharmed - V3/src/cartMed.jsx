import React from 'react'
import "./App.css"
import "./cartMed.css"
import {  useContext } from 'react';
import UserContext from './userContext';
function CartMed(props) {
  const {  setTotal, total } = useContext(UserContext);
  const {  setCart, cart } = useContext(UserContext);
  const handleRemoveItem = (index, data) => {
    if ((total-(Number(data.price)*Number(data.quant))) ===200){setTotal(total-(Number(data.price)*Number(data.quant))-200)}
    else{
      setTotal(total-(Number(data.price)*Number(data.quant))) 
    }
    const updatedItems = [...cart]; // Create a copy of the original array
    updatedItems.splice(index, 1); // Remove the element at the specified index
    setCart(updatedItems); // Update the state with the modified array
  };


  return (
    <div className='MedList_Main'><div className='medcpn'>
        <div className='MedList_Main_Cross'>
<svg width="30px" height="30px"  onClick={()=>handleRemoveItem(this, props.inp)} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#A048A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          
         </div>
        <div className='MedList_Main_Pic'><img src={(props.inp.images.length!==0)?(props.inp.images[0].src):(props.inp.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/Product-1-280x280.png":(props.inp.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/product-3-280x280.png":"https://genmed.pk/wp-content/uploads/2020/01/topical-280x280.png"} alt={"IMAGE"}/></div>
        <div className='MedList_Main_Name'>{props.inp.name}</div></div>
        <div className='MedList_Main_Price'>{props.inp.price}</div>
        <div className='MedList_Main_Quantity'>{props.inp.quant}</div>
        <div className='MedList_Main_Total'>{Number(props.inp.price)*Number(props.inp.quant)}</div>
      </div>
    
  )
}

export default CartMed;
