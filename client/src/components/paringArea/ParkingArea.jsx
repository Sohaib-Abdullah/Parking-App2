import React, { useEffect, useState } from 'react';
import styles from "./ParkingArea.module.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import ParkingSlot from '../parkingSlot/ParkingSlot';


const ParkingArea = ({areas}) => {
    const [data, setData] = useState({});

    const handleParking = async(id) =>{
     
        try {
          const res =   await axios.get(`/api/parking/singleparking/${id}`);
          console.log(res.data, "parking slot");
          
         setData(res.data)
        
        }catch(err){
            console.log(err)
        }
    }
    
  return (
    <>
    

    <div className={styles.parkingLayout}>
        <div className={styles.parkingAreas}>
            {areas?.map((area)=> {
                return(
                    <ul key={area._id}>
                
                        <li><button onClick={()=>handleParking(area._id)}><Link className={styles.link}>{area.name}</Link></button></li>
                        
                    </ul>
                )
            })}
        </div>
        <div className={styles.parkingSlots}>
        {Object.keys(data).length > 0 && <ParkingSlot   slots={data.slot} />}
        
        </div>
    </div>
    </>
  )
}

export default ParkingArea