import React from 'react';
import styles from "./parkingSlot.module.css";


const ParkingSlot = ( parkingslots) => {
    const propArray = Object.values(parkingslots);
    
 console.log( propArray);
  return (
    <div className={styles.parkingViewLayout}>
        {propArray?.map((slot)=>(
            slot.map((inner)=>{
                return (
                    
                    <div
                    className={`${styles.parkingSlotView} ${inner.isOccupied ? styles.occupiedSlot : ''}`}
                    key={inner._id}
                  >
                        {inner.slotnob}
                    </div>
                )
            })
        ) )}
    </div>
  )
}

export default ParkingSlot