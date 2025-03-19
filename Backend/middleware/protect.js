import { asyncHandler } from "../utils/asyncHandler.js";
import { AuthError } from "../utils/ApiError.js";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import { config } from "../config/config.js";

export const isLoggedin = asyncHandler(async (req, _res, next) => {
  if (
    req.cookies.token ||
    (req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer"))
  ) {
    let token = req.cookies.token || req.headers.authorization.split(" ")[1];
    let decoded = jwt.verify(token, config.JWT_SECRET);

    const user = await User.findById(decoded._id);
    req.user = user;

    next();
  } else {
    throw new AuthError();
  }
});
