import axios from 'axios'
import React, { useEffect, useState } from 'react';
import styles from "./Booking.module.css";
import { useNavigate } from 'react-router-dom';
// import ParkingArea from '../../../api/models/ParkingArea';

const Booking = () => {
//  console.log(props, "book")
//  const bookAreas = Object.values(props);
const navigate = useNavigate();

 const [selectedAreas, setSelectedAreas] = useState([]);
 const [selectedSlots, setSelectedSlots] = useState([]);
 const [startTime, setStartTime] = useState('');
 const [endTime, setEndTime] = useState('');

// console.log(bookAreas, "after book")

const [data, setData] = useState();

useEffect(()=>{
  const getParkingArea = async () =>{
      try {
          const res = await axios.get("/api/parking/getparking");
          console.log(res.data)
          setData(res.data)
      }catch(err){
          console.log(err)
      }
  }
  getParkingArea();
},[])

const handleSelect = async (event) => {
      
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedAreaIds = selectedOptions.map((option) => option.value);
    setSelectedAreas(selectedAreaIds);

        try {
            const res =   await axios.get(`/api/parking/singleparking/${selectedAreaIds}`);
            console.log(res.data.slot, "parking slot");
            setSelectedSlots(res.data.slot);
        
          }catch(err){
              console.log(err)
          }
      }
const handleSlot = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedSlotIds = selectedOptions.map((option) => option.value);
    setSelectedSlots(selectedSlotIds);
    // setSelectedSlots("");
}

const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };
  
  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };
      
const handleBooking = async (e) => {
        e.preventDefault();
        const bookParkingSlot =  {
                startTime,
                endTime,
                selectedAreas,
                selectedSlots,
        }


        await axios.post("/api/bookingArea//bookingslot", bookParkingSlot);

        navigate("/viewBooking")
     
}

 
    

  return (
    <div className={styles.bookParkingContainer}>
    <div className={styles.selectedMenu}>
        <div className={styles.selectedArea}>
         <label htmlFor="area">Area</label>
        <select name='area' id='area' onChange={handleSelect} >
           {data?.map((specificarea)=>(
            
                <option value={specificarea._id} key={specificarea._id}>
                    {specificarea.name}
                </option>
            // console.log(specificarea.name)
          
            
            ))}
            </select>
            </div>
            <div className={styles.selectedSlot}>
           <label htmlFor="slot">Slot</label>

            <select name="slot" id="slot" onChange={handleSlot} value={selectedSlots} >
                {selectedSlots?.map((selectSlot)=>(
                    <option value={selectSlot._id} key={selectSlot._id}>
                        {selectSlot.slotnob}
                    </option>
                ))}
            </select> 
            </div>
    </div>
            <div className={styles.TimeMenu}>
            
            <label htmlFor='startTime'>Start Time</label>
            <input type="text" placeholder='14:00' className={styles.TimeInput}   onChange={handleStartTimeChange} />

            <label htmlFor='endTime'>End Time</label>
            <input type="text" placeholder='15:00' className={styles.TimeInput}   onChange={handleEndTimeChange} />
            </div>

                <button className={styles.bookingButton} onClick={handleBooking}> Booking</button>

        
    </div>
  )
}

export default Booking

