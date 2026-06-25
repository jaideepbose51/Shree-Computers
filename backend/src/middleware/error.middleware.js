import { ZodError } from "zod";

const errorHandler = (err, req, res, next) => {
  console.error("❌ Error:", err);

  // ApiError
  if (err.statusCode) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      errors: err.errors || [],
    });
  }

  // Zod Validation Error
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation Failed",
      errors: err.issues.map((issue) => ({
        field: issue.path.join("."),
        message: issue.message,
      })),
    });
  }

  // MongoDB Invalid ObjectId
  if (err.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: `Invalid ${err.path}`,
    });
  }

  // MongoDB Duplicate Key
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];

    return res.status(409).json({
      success: false,
      message: `${field} already exists`,
    });
  }

  // JWT Expired
  if (err.name === "TokenExpiredError") {
    return res.status(401).json({
      success: false,
      message: "Token Expired",
    });
  }

  // JWT Invalid
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }

  // Default Error
  return res.status(500).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "Internal Server Error"
        : err.message,
  });
};

export default errorHandler;