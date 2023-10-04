import ParkingArea from "../models/ParkingArea.js"


export const createParking = async (req, res, next)=>{
    const parkingName =  req.body.parkingname;
    const slot = req.body.slot;  
    try {
        const parkingArea =  new ParkingArea({
            name: parkingName,
            slot:slot,

        })
        const savedParkingArea = await parkingArea.save();

        res.status(200).json(savedParkingArea);
      
    }catch(err){
        next(err)
    }
}

export const getParking = async(req, res) => {
    try {
        const parkingAreas = await ParkingArea.find();

        res.status(200).json(parkingAreas)
    }catch(err){
        next(err)
    }
    
}

export const getSingleParking = async(req, res) => {
    const parkingId = req.params.id;

    try {
    const parkingSlot = await ParkingArea.findById(parkingId);
        res.status(200).json(parkingSlot);
    }catch(err){
       console.log(err)
    }
}

