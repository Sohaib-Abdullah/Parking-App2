import express from "express";
const app = express();
import authRoute from "./routes/auth.js";
import parkingRoute from "./routes/parking.js";
import bookingRoute from "./routes/booking.js";
import mongoose from "mongoose";
// import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();



mongoose.connect("mongodb://localhost/parkingapp", {
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connected to  database")
}).catch((err)=>{
    console.log(err)
})

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

// app.use(bodyParser.urlencoded({extended:true}));


app.use("/api/auth", authRoute);
app.use("/api/parking", parkingRoute);
app.use("/api/bookingarea", bookingRoute);
app.use((err, req, res, next)=>{
  
    const errorStatus = err.status || 500;
    const errorMessage = err.msg || 500;
    return res.status(errorStatus).json({ //converting error to the json format
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack : err.stack,

    })
})

const port = 8800;
app.listen(port, ()=> {
    console.log(`backend is connected on port ${port}`);
})