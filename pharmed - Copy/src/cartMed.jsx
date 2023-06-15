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
    <div className='MedList_Main'>
        <div className='MedList_Main_Cross'><button onClick={()=>handleRemoveItem(this, props.inp)} >Cross</button></div>
        <div className='MedList_Main_Pic'><img src={(props.inp.images.length!==0)?(props.inp.images[0].src):(props.inp.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/Product-1-280x280.png":(props.inp.meta_data[5].value === "Tablet")?"https://genmed.pk/wp-content/uploads/2019/09/product-3-280x280.png":"https://genmed.pk/wp-content/uploads/2020/01/topical-280x280.png"} alt={"IMAGE"}/></div>
        <div className='MedList_Main_Name'>{props.inp.name}</div>
        <div className='MedList_Main_Price'>{props.inp.price}</div>
        <div className='MedList_Main_Quantity'>{props.inp.quant}</div>
        <div className='MedList_Main_Total'>{Number(props.inp.price)*Number(props.inp.quant)}</div>
      </div>
    
  )
}

export default CartMed;