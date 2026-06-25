import jwt from "jsonwebtoken";
import ApiError from "./ApiError.js";

const generateToken = (payload) => {
  if (!process.env.JWT_SECRET) {
    throw new ApiError(
      500,
      "JWT_SECRET is missing in environment variables"
    );
  }

  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
    issuer: "computer-institute-api",
    audience: "admin-panel",
  });
};

export default generateToken;