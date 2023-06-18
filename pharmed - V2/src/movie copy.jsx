
import React, { useState, useEffect } from 'react';

import Papa from 'papaparse';
const MovieData = () => {
    const [data, setData] = useState({});
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS2KVLO1ZDlL8ufE7v1YdLnoLXy7tK3XQdES1oQjb1WsoumXq-1TUrirLLFAAtYR3u4NCFkZNhP4-Ov/pub?gid=0&single=true&output=csv", {
      download: true,
      header: true,
      complete: (results) => {
        setData(results.data);
      },
    });
    const movies = Array.from(data);
    return (
      
            <div>
              {messages.map((data) => {
                if (data.EMRNumber == "ChatGPT") {
                  return(
                    <div>
                      <ul>
                      <li key={data.Serial}>
            {data.EMRNumber} ({data.Name}) - Rating {data.Med}
          </li>
          </ul>
                    </div>
              )
                }
                
              
              })}
  
  
  
            </div>
          
    )
  }
  export default MovieData;