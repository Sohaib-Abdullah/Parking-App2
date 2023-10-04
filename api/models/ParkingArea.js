import mongoose from "mongoose";
const { Schema } = mongoose;

const ParkingAreaSchema = new Schema({
    name: {
        type: String,
        required: true,
    },

    slot: [{
        slotnob : { type :String,  required: true},
        isOccupied: {
            type: Boolean,
            default: false,
        },
        // startTime: {
        //     type: Date,
        //     default: Date.now(),
        // },
        // endTime: {
        //     type: Date,
        //     default: Date.now(),
        // }
    }],
    
    
 
})

export default mongoose.model('ParkingArea', ParkingAreaSchema);