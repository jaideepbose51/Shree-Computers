import jwt from "jsonwebtoken";
import ApiError from "./ApiError.js";

const verifyToken = (token) => {
  try {
    return jwt.verify(
      token,
      process.env.JWT_SECRET,
      {
        issuer: "computer-institute-api",
        audience: "admin-panel",
      }
    );
  } catch (error) {
    throw new ApiError(
      401,
      "Invalid or Expired Token"
    );
  }
};

export default verifyToken;