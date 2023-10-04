import express from "express";
import { bookParkingSlot, getBookingView } from "../controllers/booking.js";

const router = express.Router();




router.post("/bookingslot", bookParkingSlot);
router.get("/getbooking", getBookingView);


export default router;