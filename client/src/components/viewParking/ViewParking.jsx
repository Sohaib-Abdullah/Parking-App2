import React, { useEffect, useState } from 'react';

import {NavLink, Outlet, } from "react-router-dom";


import axios from "axios";
import ParkingArea from '../paringArea/ParkingArea';

const ViewParking = () => {
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

  const handleParking = async (id) => {

    
  }

  return (
    <div>
        < ParkingArea  areas ={ data} /> 

        {/* <main style={{ padding: "1rem 0" }}> */}
{/*   
        {parkingAreas.map((area)=> {
            return(
                
            <NavLink
            style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
            // to={`/viewparking/${area.id}`}
            key={area.id}
            onClick={handleParking(area.id)}
          >
            {area.name}
          </NavLink>
            )
        })}
      </main>
      <Area/>
      <Outlet /> */}
    </div>
  )
}

export default ViewParking