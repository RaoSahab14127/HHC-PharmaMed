import React from 'react'
import "./app.css"
import "./cartmain.css"
import CartMed from "./cartMed"

function Cartmain() {
    return (
        <div className='cart_Main'>
            <div className='cart_Main1'>
                <div className='cart_Main1Header'>
                    <div className='cart_Main1Header1'>Product</div>
                    <div className='cart_Main1Header2'>Price</div>
                    <div className='cart_Main1Header3'>Quantity</div>
                    <div className='cart_Main1Header4'>Total</div>
                </div>
                <div className='cart_Main1Items'>
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                    <CartMed />
                </div>
                <div className='cart_Main1Button'>
                    <button>Continue Shopping</button><button>Update Cart</button>
                </div>
            </div>
            <div className='cart_Main2'>
                <div className='cart_Main2Heading'>Cart Total</div>
                <div><div>Subtotal</div>
                <div>565</div></div>
                
                <div>
                <div>Shipping</div>
                    <div>Flare reate : 150</div>
                </div>
                <div><div>Total</div>
                    <div>1000</div></div>
                <div className='cart_Main2button'><button>Proceed</button></div>
            </div>

        </div>

    )
}

export default Cartmain;