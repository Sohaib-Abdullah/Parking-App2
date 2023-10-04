import BookArea from "../models/BookArea.js";
import ParkingArea from "../models/ParkingArea.js";
import mongoose from "mongoose";

export const bookParkingSlot = async (req, res) => {
    console.log(req.body)
    // const startTime = req.body.time.startTime;
    // const endTime = req.body.time.endTime;
    const parkingArea = req.body.selectedAreas;
    const parkingSlot = req.body.selectedSlots;
    const enterTime = req.body.startTime;
    const exitTime = req.body.endTime;
    console.log(parkingArea, "pId")
    console.log(parkingSlot, "pId");
    const singleObjectID = [...parkingSlot][0];
    const parkingAreaID = [...parkingArea][0];
    
      const bookParkingArea = await ParkingArea.findOne({_id: parkingArea});
      const bookingAreaName =  bookParkingArea.name;
      const foundSlot = bookParkingArea.slot.find((item) => item._id.equals(singleObjectID));
      console.log(foundSlot , "foundSlotconsole")
      const bookingSlotName = foundSlot.slotnob;
  if (foundSlot) {
    
    console.log("Slot found:");
    foundSlot.isOccupied = true;
  } else {
    console.log("Slot not found");
  }

  
   

  
    // Function to update isOccupied to true
const updateIsOccupiedToTrue = async (parkingAreaId, slotIdToUpdate) => {
    console.log("first")
    try {
      const updatedParkingArea = await ParkingArea.findByIdAndUpdate(
        parkingAreaId,
        {
          $set: {
            "slot.$[element].isOccupied": true
          }
        },
        
        {
          arrayFilters: [
            { "element._id": new mongoose.Types.ObjectId(slotIdToUpdate) }
          ],
          new: true // Return the updated document
        }
      );
  
      if (!updatedParkingArea) {
        console.log("Parking area not found");
        return null;
      }
  
      console.log("Slot updated:", updatedParkingArea);
      return updatedParkingArea;
    } catch (error) {
      console.error("Error updating slot:", error);
      return null;
    }
  };
  
  // Example usage
//   const parkingAreaId = "YourParkingAreaId"; // Replace with the actual parking area ID
//   const slotIdToUpdate = "YourSlotId"; // Replace with the actual slot ID
  updateIsOccupiedToTrue(parkingAreaID, singleObjectID);

    function calculateDuration(startTime, endTime) {
        // Parse the time strings into Date objects
        const startTimeParts = startTime.split(':');
        const endTimeParts = endTime.split(':');
      
        // Create Date objects with the year, month, and day set to 0 (to ignore the date part)
        const startDate = new Date(0, 0, 0, startTimeParts[0], startTimeParts[1]);
        const endDate = new Date(0, 0, 0, endTimeParts[0], endTimeParts[1]);
      
        // Calculate the duration in milliseconds
        const durationMillis = endDate - startDate;
      
        // Calculate hours and minutes
        const hours = Math.floor(durationMillis / 3600000);
        const minutes = Math.floor((durationMillis % 3600000) / 60000);
      
        return `${hours} hours ${minutes} minutes`;
      }
      
   
      const durationTime = calculateDuration(enterTime, exitTime);
      console.log(durationTime,"time"); // Output: "3 hours 15 minutes"
      

    try {
        const bookparkingArea =  new BookArea({
            bookarea: bookingAreaName,
            bookslot: bookingSlotName,
            startTime: enterTime,
            endTime: exitTime,
            duration: durationTime,
        })
        const savedParkingArea = await bookparkingArea.save();

        res.status(200).json(savedParkingArea);
      
    }catch(err){
        console.log(err);
    }
}


export const getBookingView = async (req, res) =>{
    try {
         const bookingView = await BookArea.find();

         console.log(bookingView)
         bookingView.map((item)=>(
            // console.log(typeof item?.startTime)
            console.log( new Date(item.startTime).getTime())
         ))
       

         res.status(200).json(bookingView)

    }catch(err){
        console.log(err)
    }
}