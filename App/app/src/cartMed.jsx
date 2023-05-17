import React from 'react'
import "./app.css"
import "./cartMed.css"

function CartMed() {
  return (
    <div className='MedList_Main'>
        <div className='MedList_Main_Cross'><button>Cross</button></div>
        <div className='MedList_Main_Pic'>Pic</div>
        <div className='MedList_Main_Name'>Name</div>
        <div className='MedList_Main_Price'>Price</div>
        <div className='MedList_Main_Quantity'><button>+</button>Quantity<button>-</button></div>
        <div className='MedList_Main_Total'>Total</div>
      </div>
    
  )
}

export default CartMed;