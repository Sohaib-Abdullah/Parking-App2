import express from "express";
import { login, register } from "../controllers/auth.js";
import { registerValid, loginValid } from "../middleware/authvalidation.js";
import  validate from "../middleware/handleError.js";
const router = express.Router();



router.post("/register", registerValid, validate, register);
router.post("/login", loginValid, validate, login);



export default router;