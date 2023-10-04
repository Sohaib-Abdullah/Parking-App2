import express from "express";
import { createParking, getParking, getSingleParking } from "../controllers/parking.js";

const router = express.Router();




router.post("/createParking", createParking);
router.get("/getparking", getParking)
router.get("/singleParking/:id", getSingleParking);


export default router;