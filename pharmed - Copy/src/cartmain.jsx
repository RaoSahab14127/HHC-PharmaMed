
import "./App.css"
import "./cartmain.css"
import CartMed from "./cartMed"
import UserContext from './userContext'
import React , {useContext} from 'react'
import { useNavigate } from "react-router-dom";
function Cartmain() {
    const { setTotal, total } = useContext(UserContext);
    const {  setCart, cart } = useContext(UserContext);
    const navigate = useNavigate();
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
                  
                    
                    {cart.map((data) => 
                      
                          <div key={data.Serial
                          }>
                          
                  
                          <CartMed inp= {data}/>
                          
                
      
                          </div>
    
                      
                    
                    )}
                    
                    {console.log(cart)}
            
    
                </div>
                <div className='cart_Main1Button'>
                    <button onClick={()=>navigate("/")}>Continue Shopping</button>
                </div>
            </div>
            <div className='cart_Main2'>
                <div className='cart_Main2Heading'>Cart Total</div>
                <div><div>Subtotal</div>
                <div>{cart.map((data) => 
                      
                      <div key={data.id
                      }>
                      

                      {Number(data.price)*Number(data.quant)}
                      
            
  
                      </div>

                  
                
                )}</div></div>
                
                <div>
                <div>Shipping</div>
                    <div>Flare reate : 200</div>
                </div>
                <div><div>Total</div>
                    <div>{total}</div></div>
                <div className='cart_Main2button'><button onClick={()=>navigate("/orderbilling")}>Proceed</button></div>
            </div>

        </div>

    )
}

export default Cartmain;