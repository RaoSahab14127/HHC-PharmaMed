
// import React, { useState, useEffect } from 'react';

// import Papa from 'papaparse';
// const MovieData = () => {
//     const [data, setData] = useState({});
//     Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vS2KVLO1ZDlL8ufE7v1YdLnoLXy7tK3XQdES1oQjb1WsoumXq-1TUrirLLFAAtYR3u4NCFkZNhP4-Ov/pub?gid=0&single=true&output=csv", {
//       download: true,
//       header: true,
//       complete: (results) => {
//         setData(results.data);
//       },
//     });
//     const movies = Array.from(data);
//     return (
//         <ul>
//         {/* {movies.map((data) => (
//          <li key={data.Serial}>
//             {data.EMRNumber} ({data.Name}) - Rating {data.Med}
//           </li>
//         ))} */}
//             {messages.map((data) => {
//               if (true) {

//                 return (
//                   <div>
//                     Hammad
//                   </div>
                
//                 )
//               }
            
//             })}
        
//       </ul>
//     );
//   };
//   export default MovieData;


import React, { useState, useContext } from 'react';
import UserContext from './userContext';
import Papa from 'papaparse';
import Med from './Med'
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
    const { setUser, user } = useContext(UserContext);
    return (
      
            <div>
              {movies.map((data) => {
                if (data.EMRNumber == user) {
                  return(
                    <div key={data.Serial}>
                    
            <Med p = {data}/>
          

                    </div>
              )
                }
                
              
              })}
  
  
  
            </div>
          
    )
  }
  export default MovieData;
