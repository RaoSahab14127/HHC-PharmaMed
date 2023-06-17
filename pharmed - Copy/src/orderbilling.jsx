
import "./App.css"
import "./orderbilling.css"
import Header from "./Header"
import Footer from "./Footer"
import UserContext from './userContext'
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
function OrderBilling() {
    const WooCommerce = new WooCommerceRestApi({
        url: 'https://genmed.pk/',
        consumerKey: 'ck_c0cc7b39a7003a840e40eeedfb39ab5b83818436',
        consumerSecret: 'cs_2c3db277388d9812f7ff7d514fca4392fcf085ae',
        version: 'wc/v3',
        queryStringAuth: true,
      });
    const { setTotal, total } = useContext(UserContext);
    const {  setCart, cart } = useContext(UserContext);
    let pro_line = []
    if(cart.length !== 0){
        for(var i = 0; i<cart.length; i++){
          let hdata = {
            product_id: cart[i].id,
            quantity: cart[i].quant }
          pro_line.push(hdata)
        } 
    
      
      }
      else{
        alert("Empty Cart")
      }
      
    const navigate = useNavigate();
    const data = {
        payment_method: "cod",
        payment_method_title: "Cash on delivery",
        set_paid: false,
        billing: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "PK",
          email: "",
          phone: ""
        },
        shipping: {
          first_name: "",
          last_name: "",
          address_1: "",
          address_2: "",
          city: "",
          state: "",
          postcode: "",
          country: "PK"
        },
        line_items: pro_line,
        shipping_lines: [
          {
            method_id: "flat_rate",
            method_title: "Flat Rate",
            total: "200"
          }
        ]
      };
      
      let onorder = ()=>{
        console.log(data)
        WooCommerce.post("orders", data)
  .then((response) => {
    console.log(response.data);
  }).then(
    setCart([])
    
  ).then(
    setTotal(0)
    
  )
  .catch((error) => {
    console.log(error.response.data);
  });
        navigate("/")

      }
      
    return (
        <div className='ob_Main1'>
            <Header />
            <div className='ob_Mainob'>
                <div className="ob1">
                    <div className="ob1H"> Billing Detail</div>
                    <label>
                        First Name: *
                        <input type="text"  onChange={(e) => {data.billing.first_name = e.target.value; data.shipping.first_name = e.target.value }} required />
                    </label>
                    <label>
                        Last Name: *
                        <input type="text" onChange={(e) => {data.billing.last_name = e.target.value;  data.shipping.last_name = e.target.value }} required />
                    </label>
                    
                    <label>
                        House no and Street no: *
                        <input type="text" onChange={(e) => {data.billing.address_1 = e.target.value;  data.shipping.address_1 = e.target.value }} />
                    </label>
                    <label>
                        City: *
                        <input type="text" onChange={(e) => {data.billing.city = e.target.value;  data.shipping.city = e.target.value }} />
                    </label>
                    <label>
                        State: *
                        <select data-placeholder="Select an option…" data-input-classes="" aria-hidden="true" onChange={(e) => {data.billing.state = e.target.value;  data.shipping.state = e.target.value }}><option value="">Select an option…</option><option value="JK">Azad Kashmir</option><option value="BA">Balochistan</option><option value="TA">FATA</option><option value="GB">Gilgit Baltistan</option><option value="IS">Islamabad Capital Territory</option><option value="KP">Khyber Pakhtunkhwa</option><option value="PB">Punjab</option><option value="SD">Sindh</option></select>
                    </label>
                    <label>
                        Country: <span>Pakistan</span>
                    </label>
                    <label>
                        PostCode/Zip: *
                        <input type="text" onChange={(e) => {data.billing.postcode = e.target.value;  data.shipping.postcode = e.target.value }} required />
                    </label>
                    <label>
                        Phone: *
                        <input type="number" onChange={(e) => {data.billing.phone = e.target.value;  data.shipping.phone = e.target.value }}  required />
                    </label>
                    <label>
                        Email: *
                        <input type="email" onChange={(e) => {data.billing.email = e.target.value;  data.shipping.email = e.target.value }} required />
                    </label>
                    <label>
                        Payment Method: <span>Cash on delivery</span>
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
                    <div className='cart_Main2button'><button onClick={() => onorder()}>Place Order</button></div>


                </div>
            </div>
            <Footer />
        </div>

    )
}

export default OrderBilling;