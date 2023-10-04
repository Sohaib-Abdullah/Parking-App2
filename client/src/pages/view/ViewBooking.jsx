import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from "./ViewBooking.module.css";

const ViewBooking = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
      const   getBookingAreaView = async () => {
            try {
                const res = await axios.get("/api/bookingarea/getbooking");
                console.log(res.data, "sdf");
                setData(res.data);
            }catch(err){
                console.log(err)
            }
        }
        getBookingAreaView();
    },[])
  return (
    <div className={styles.bookingView}>

    <table border="1">
        <tr>
            <th>Area</th>
            <th>Spot</th>
            <th>date</th>
            <th>start</th>
            <th>end</th>
            <th>duration</th>
        </tr>
        {data.map((item)=>{
            return (
                <tr key={item._id}>
                <td>{item.bookarea}</td>
                 <td>{item.bookslot}</td>
                <td>{new Date (item.date).toISOString().split('T')[0]}</td>
                <td>{item.startTime}</td>
                <td>{item.endTime}</td>
                <td>{ item.duration }</td>
                </tr>
                
            )
        }
            
        )}

    </table>
    </div>
  )

}

export default ViewBooking