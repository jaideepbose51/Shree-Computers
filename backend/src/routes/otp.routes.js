import express from "express";
import rateLimit from "express-rate-limit";

import {
  sendOtp,
  verifyOtp,
  getVerificationStatus,
} from "../controllers/otp.controller.js";

import validate from "../middleware/validate.middleware.js";

import {
  sendOtpSchema,
  verifyOtpSchema,
} from "../schemas/otp.schema.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| OTP Rate Limiter
|--------------------------------------------------------------------------
*/

const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many OTP requests. Please try again after 15 minutes.",
  },
});

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
*/

// Send OTP
router.post(
  "/send",
  otpLimiter,
  validate(sendOtpSchema),
  sendOtp
);

// Verify OTP
router.post(
  "/verify",
  validate(verifyOtpSchema),
  verifyOtp
);

// Check Verification Status
router.get(
  "/status",
  getVerificationStatus
);

export default router;