import { user } from "../models/userSchema.js";
import { catchAsyncError } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";


export const isAuthenticated = catchAsyncError(async (req,res,next) => {

    const {token} = req.cookies;
    if(!token) {
        return next(new ErrorHandler("User not Authenticated", 400));
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await user.findById(decoded.id);
    next();
});