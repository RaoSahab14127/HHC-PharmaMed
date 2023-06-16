
import "./App.css"
import "./orderbilling.css"
import Header from "./Header"
import Footer from "./Footer"
import UserContext from './userContext'
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
function OrderBilling() {
    const { setTotal, total } = useContext(UserContext);
    const {  setCart, cart } = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <div className='ob_Main1'>
            <Header />
            <div className='ob_Mainob'>
                <div className="ob1">
                    <div className="ob1H"> Billing Detail</div>
                    <label>
                        First Name: *
                        <input type="text" required />
                    </label>
                    <label>
                        Last Name: *
                        <input type="text" required />
                    </label>
                    <label>
                        Country: <span>Pakistan</span>
                    </label>
                    <label>
                        City: *
                        <input type="text" />
                    </label>
                    <label>
                        State: *
                        <select data-placeholder="Select an option…" data-input-classes="" aria-hidden="true"><option value="">Select an option…</option><option value="JK">Azad Kashmir</option><option value="BA">Balochistan</option><option value="TA">FATA</option><option value="GB">Gilgit Baltistan</option><option value="IS">Islamabad Capital Territory</option><option value="KP">Khyber Pakhtunkhwa</option><option value="PB">Punjab</option><option value="SD">Sindh</option></select>
                    </label>
                    <label>
                        PostCode/Zip: *
                        <input type="text" required />
                    </label>
                    <label>
                        Phone: *
                        <input type="number" required />
                    </label>
                    <label>
                        Email: *
                        <input type="email" required />
                    </label>

                </div>
                <div className="ob2">
                    <div className='cart_Main2Heading'>Cart Total</div>
                    <div><div>Subtotal</div>
                        <div>{cart.map((data) => 
                      
                      <div key={data.id
                      }>
                      

                      {Number(data.price)*Number(data.quant)}
                      
            
  
                      </div>

                  
                
                )}
                </div>
                    </div>

                    <div>
                        <div>Shipping</div>
                        <div>Flare reate : 200</div>
                    </div>
                    <div><div>Total</div>
                        <div>{total}</div></div>
                    <div className='cart_Main2button'><button onClick={() => navigate("/")}>Place Order</button></div>


                </div>
            </div>
            <Footer />
        </div>

    )
}

export default OrderBilling;