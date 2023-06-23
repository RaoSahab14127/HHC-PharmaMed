

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
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
        (user) => user.Username === username && user.Password == password
      );

      if (foundUser) {
        // Authentication successful, perform desired actions
        console.log('Authentication successful!');
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
    return jsonData;
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username/Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <p>{errorMessage}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
