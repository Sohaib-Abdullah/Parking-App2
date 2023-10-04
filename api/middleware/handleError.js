import { validationResult } from "express-validator";
// handleError.js
const validate = (req, res, next) => {
    
    // Check for validation errors
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
    
      return res.status(400).json({ errors: errors.array() });
    }
  
    // You can add additional error handling logic here if needed
  
    // If no validation errors or other errors are found, continue to the next middleware or route handler
    next();
  };
  
  export default validate;
  