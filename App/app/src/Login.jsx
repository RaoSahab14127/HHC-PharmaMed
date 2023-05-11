import React from 'react'
import "./app.css"
import "./login.css"

function Login() {
  return (
    <div className='Login_Main'>
        <div className="Login_MainDiv">
            <div  className="Login_Logo"> <img src="https://human-healthcare.com/wp-content/uploads/2023/02/HH-logo-Option-2-e1678900350865.png" alt="LOGO" /></div>
            <div className="Login_Top">
                <div className="Login_Username">
                    <input type="text" placeholder='EMR Number'/>
                </div>
                <div className="Login_Password">
                <input type="password"placeholder='123456' />
                </div>
                <div className="Login_Submit">
                    <button>Login</button>
                </div>
            </div>
            <div className="Login_Bottom">
                Dont login click here to register now <a href='#'>Register Now</a>
            </div>
        </div>


    </div>
  )
}

export default Login