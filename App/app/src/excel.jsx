import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import csv from 'csvtojson';
import Papa from 'papaparse';

function ExcelDatabase() {
  
  fetch('https://docs.google.com/spreadsheets/d/1HmA8gsaF7ZmY4QAOnpb8X0I6uUbReBGBq3AxjAk_FHM/edit#gid=0')
  .then(response => response.arrayBuffer())
  .then(buffer => {
    // Parse the Excel file data
    const workbook = XLSX.read(buffer, { type: 'array' });

    // Get the first sheet
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert the sheet data to JSON
    const data = XLSX.utils.sheet_to_json(worksheet);

    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

























  
  // fetch('https://docs.google.com/spreadsheets/d/1HmA8gsaF7ZmY4QAOnpb8X0I6uUbReBGBq3AxjAk_FHM/edit#gid=0')
  //   .then(response => response.text())
  //   .then(data => {
  //     const parsedData = Papa.parse(data, { header: false,dynamicTyping: true,
  //       preview: 50, complete: function(results) {
  //         console.log(results.data);
  //       }}).data;
  //     console.log(parsedData)
  //     // Use parsedData in your React application
  //   });
  
  return (
    <div>
      <table>
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
  </thead>
  <tbody>
    {data.map((row, rowIndex) => (
      <tr key={rowIndex}>
        <td>{row['Column 1']}</td>
        <td>{row['Column 2']}</td>
        <td>{row['Column 3']}</td>
      </tr>
    ))}
  </tbody>
</table>
    </div>
  );
}

export default ExcelDatabase;