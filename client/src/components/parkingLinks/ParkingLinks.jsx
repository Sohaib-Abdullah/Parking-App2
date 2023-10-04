import React from 'react';
import  styles from "./parkingLinks.module.css";
import { Link } from 'react-router-dom';

const ParkingLinks = () => {
  return (
    <div className={styles.parkingLinks}>
            <ul>
           <li><button><Link className={styles.link} to="/viewparking">view parking</Link></button></li> 
            <li><button><Link  className={styles.link} to="/booking" >book parking</Link></button></li>
            <li><button><Link className={styles.link} to="/viewBooking">view booking</Link></button></li>
            </ul>
            
        </div>
  )
}

export default ParkingLinks