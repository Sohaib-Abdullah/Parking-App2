import { check } from "express-validator";

export const registerValid = [
    
    check('email').isEmail().withMessage("Invalid Email Address"),
    check('password').isLength({min:6}).withMessage('Password should be of 6 digits'),
]
//here we are exporting that registerValid array

// validationRules.js

// export const emailValidationRule = check('email')
//   .isEmail()
//   .withMessage('Please provide a valid email address.');

// export const passwordValidationRule = check('password')
//   .isLength({ min: 6 })
//   .withMessage('Password must be at least 6 characters long.');

// As Sir tapas said we can export function, array , or anything

export const loginValid = [
  check('email').isEmail().withMessage("Please provide valid address"),
  check('password').notEmpty().withMessage("pasword required"),
]