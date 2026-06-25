import verifyToken from "../utils/verifyToken.js";
import ApiError from "../utils/ApiError.js";

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new ApiError(
        401,
        "Authorization header is required"
      );
    }

    if (!authHeader.startsWith("Bearer ")) {
      throw new ApiError(
        401,
        "Invalid authorization format"
      );
    }

    const token = authHeader.split(" ")[1];

    if (!token) {
      throw new ApiError(
        401,
        "Access token is required"
      );
    }

    const decoded = verifyToken(token);

    req.admin = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;