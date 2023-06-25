import React ,{useContext} from 'react'
import "./labdespg.css"
import UserContext from './userContext';
function Labdespg() {
    const { setDes, des } = useContext(UserContext);
  return (
    <div className='labdespgMain'>
        <div className='labdespgMain_pic'><img src={`https://drive.google.com/uc?export=view&id=${des.Source}`} alt="Lab report Image" /></div>
        <div className='labdespgMain_Name'>{des.NameOfReport}</div>
    </div>
  )
}

export default Labdespg