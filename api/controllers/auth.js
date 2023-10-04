import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) =>{
    try {
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(req.body.password, salt);
    
        const newUser = new User({
            ...req.body,
            password: hash,
        })
          const emailExists = await User.findOne({email: newUser.email})
          if(emailExists){
            return next(createError(409, "this email already exists"));
          }
        await newUser.save();
        res.status(200).json("User has been created");
    }catch(err){
        next(err);
    }
   
}

export const login = async(req, res, next) => {
    try {
        console.log("emaail", req.body.email);
        const user = await User.findOne({email: req.body.email});
        if(!user) return next(createError(404, "User Email not found!"));
        console.log("user", user)
        console.log("password",req.body.password);
        console.log("userpassword", user.password)
        const isPasswordCorrect = await bcrypt.compare((req.body.password).toString(), user.password);
        console.log("passwordcorrect", isPasswordCorrect)
        if(!isPasswordCorrect)
        return next(createError(404, "wrong username or password"));
        
        const token = jwt.sign(
            { id: user._id, },
            process.env.SECRET_KEY
          );
          const { password,  ...otherDetails } = user._doc;
          res.cookie("access_token", token, {
              httpOnly: true,
            }).status(200).json({ details:{...otherDetails}  });
        } catch (err) {
          next(err);
        }
}