import {  Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./pages/login/Login"
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import ParkingLinks from "./components/parkingLinks/ParkingLinks";
import Booking from "./pages/booking/Booking";
import ViewBooking from "./pages/view/ViewBooking";
import ViewParking from "./components/viewParking/ViewParking";

import { useContext } from "react";
import { AuthContext } from "./context/AuhtContext";


function App() {

  const {user} = useContext(AuthContext);
      
  const Layout = () =>{
    return (
      <>
      <Navbar/>
      <ParkingLinks/>
      <Outlet/>


      </>
      )
    }
    const router = createBrowserRouter([
      {
        path:"/",
        element: <Layout/>,
        children: [
          {

             path:"/",
            element: <Home />,
          },
          {
            
             path:"/booking",
            element: user ?  <Booking /> : <Login/>,
          },

          {

             path:"/viewBooking",
            element: user ? <ViewBooking /> : <Login/>,
          },
          
             {
               path:"/viewparking",
              element:   <ViewParking />,
              
            },
        ],
      },
      {

        path:"/login",
       element: <Login/>,
       },
    ]);
    return <RouterProvider router={router} />
  }
  
    //   <Routes>
    
    //   < Route path="/bookparking" element={ <BookParking />}/>
    //   <Route path="/fetchData" element={<FetchData />} />
    //   <Route path="/viewBooking" element= {< ViewBooking />} />
      
    // </Routes>



export default App
