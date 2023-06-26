import "./App.css"
import "./login.css"
import React, { useState , useContext} from 'react';
import * as XLSX from 'xlsx';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import UserContext from './userContext'
function Login() {
  const { setUser, user } = useContext(UserContext);
  const { setUserData, userData } = useContext(UserContext);
    const navigate = useNavigate();
  
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch the online Excel sheet data
      const response = await axios.get('https://docs.google.com/spreadsheets/d/e/2PACX-1vRPrA9UjoBeGcexbSNC5ARpN2PlRuGkGjlq9FiDk91G9PrY9CftiOHZDfRPDqNIisXwgntODB99MHB2/pub?output=xlsx', {
        responseType: 'arraybuffer',
      });
      // Convert Excel data to JSON or perform parsing if necessary
      const excelData = await convertExcelData(response.data);
      const foundUser = excelData.find(
        (user1) => user1.Username === user && user1.Password == password
      );
  
      if (foundUser) {
        // Authentication successful, perform desired actions
        console.log('Authentication successful!');
        setUserData(foundUser)
        navigate("/")
        // You can set authentication state, redirect, or perform other actions here
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching Excel data:', error);
    }
  };
  const convertExcelData = (data) => {
    // Convert Excel data to JSON or perform parsing as per your Excel format
    // You may use libraries like 'xlsx' or 'exceljs' for parsing Excel data
    // Example parsing using 'xlsx':
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const jsonData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
    return jsonData;}
  return (
    <div className='Login_Main'>
        <div className="Login_MainDiv">
        <div  className="Login_Logo"> <img src="https://human-healthcare.com/wp-content/uploads/2023/02/HH-logo-Option-2-e1678900350865.png" alt="LOGO" />
            <div className="LoginQoute">"Your health, our priority"</div>
            <div className="LoginQoute">Gate Way to your Personalised </div>
            <div className="LoginQoute">VIP Healthcare Plan</div></div>
            <div className="Login_Top">
            
            <form onSubmit={handleFormSubmit}>
                <div className="Login_Username">
                    <input type="text" placeholder='EMR Number' id="username" value={user} onChange={(e) => setUser(e.target.value)} />
                </div>
                <div className="Login_Password">
                <input
            type="password"
            placeholder='123456'
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
                </div>
                <div className="Login_Submit">
                    <button>Login</button>
                </div>
            </form>
            {errorMessage && <p className="error">{errorMessage}</p>}
            </div>
            <div className="Login_Bottom">
                Dont login click here to register now <a href='https://human-healthcare.com/register-now/' target="_blank">Register Now</a>
            </div>
        </div>
    </div>
  )
}
export default Login