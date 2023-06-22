
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
    let proceeeed=()=>{
        if(cart.length !== 0){
        navigate("/orderbilling")}
        else{
            alert("Cart is Empty")
            navigate("/")
        }
        
    }
    return (
        <div className='cart_Main'>
            <div className='cart_Main1'>
                <div className='cart_Main1Header'>
                    <div className='cart_Main1Header1'>Product</div>
                    <div className='cart_Main1Header2'>Price</div>
                    <div className='cart_Main1Header2'>Quantity</div>
                    <div className='cart_Main1Header2'>Total</div>
                </div>
                <div className='cart_Main1Items'>
                  
                    
                    {cart.map((data) => 
                      
                          <div key={data.id
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
                <div className="cartmaterial"><div>Subtotal</div>
                <div>{cart.map((data) => 
                      
                      <div key={data.id
                      }>
                      

                      {Number(data.price)*Number(data.quant)}
                      
            
  
                      </div>

                  
                
                )}</div></div>
                
                <div className="cartmaterial">
                <div>Shipping</div>
                    <div>Flare reate : 200</div>
                </div>
                <div className="cartmaterial"><div>Total</div>
                    <div>{total}</div></div>
                <div className='cart_Main2button'><button onClick={()=>proceeeed()}>Proceed</button></div>
            </div>

        </div>

    )
}

export default Cartmain;
