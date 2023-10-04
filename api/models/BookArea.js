import mongoose from "mongoose";
const { Schema } = mongoose;

const BookAreaSchema = new Schema({
    bookarea : {
        type: [String],
    },
    bookslot: {
        type: [String],
     
    },
    date: {type: Date, default: Date.now},
    startTime : {
        type: String,
    },
    endTime: {
        type:String,
    },
    duration: {
        type: String,
    }
 
}, {timestamp: true})

export default mongoose.model('BookArea', BookAreaSchema);