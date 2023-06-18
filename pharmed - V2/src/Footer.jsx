import React from 'react'
import "./App.css"
import "./Footer.css"

function Footer() {
  return (
    
    <div className='HomeMed_Bottom'>
        <div className='Bottom_First'>
            
                <img src="https://human-healthcare.com/wp-content/uploads/2023/02/HH-logo-Option-2-e1678900350865.png" alt="sdf" />
                <p>
                An idea of Human Health LLC, a US-based startup, Human Health Care Services Pvt Ltd is a Pakistani company headquartered at E40, PRECHS, Bl 10A, Gulshan-e-Iqbal, Karachi. 
                </p>
            
        </div>
        <div className='Bottom_Second'>
          <h3 style={{color :"white"}} >Get In Touch</h3>
            <div><p>Main Office: HQ40 c/o E40, PRECHS,<br/> Gulshan-e-Iqbal, Bl10A, Karachi, Pakistan.</p></div>
            <div><p><a href="mailto:service@human-healthcare.com" target="_blank" style={{color :"white"}}>service@human-healthcare.com</a></p></div>
            <div><p>+1 302 200 8792</p></div>
            <div>+319 936 3574 </div>
            <div>09:00 AM - 06:00PM</div>
        </div>
        <div className='Bottom_Third'>
          <h3 style={{color :"white"}}>Quick Links</h3>
            <div><a style={{color :"white"}} href='https://human-healthcare.com/'> Home</a></div>
            <div><a href='https://human-healthcare.com/our-story/' style={{color :"white"}}>Our Story</a></div>
            <div><a href='https://human-healthcare.com/register-now/' style={{color :"white"}} >Register Now</a></div>
            <div><a href='https://human-healthcare.com/faqs/' style={{color :"white"}}>FAQs</a></div>
        </div>
      </div>
  )
}

export default Footer;