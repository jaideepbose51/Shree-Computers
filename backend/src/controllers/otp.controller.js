import Otp from "../models/Otp.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import generateOTP from "../utils/generateOTP.js";
import hashOTP from "../utils/hashOTP.js";
import { sendOTPEmail } from "../config/mailer.js";

// Send OTP
export const sendOtp = asyncHandler(async (req, res) => {
  const { email } = req.validatedData;

  // Generate OTP
  const otp = generateOTP();

  // Hash OTP
  const otpHash = hashOTP(otp);

  // Expiry Time (10 Minutes)
  const expiresAt = new Date(
    Date.now() + 10 * 60 * 1000
  );

  // Delete existing OTP
  await Otp.deleteMany({ email });

  // Save new OTP
  await Otp.create({
    email,
    otpHash,
    expiresAt,
  });

  // Send Email
  await sendOTPEmail(email, otp);

  res.status(200).json({
    success: true,
    message:
      "OTP sent successfully. Please check your email.",
  });
});

// Verify OTP
export const verifyOtp = asyncHandler(async (req, res) => {
  const { email, otp } = req.validatedData;

  const otpDoc = await Otp.findOne({ email });

  if (!otpDoc) {
    throw new ApiError(
      400,
      "OTP not found or expired"
    );
  }

  if (otpDoc.isVerified) {
    throw new ApiError(
      400,
      "Email already verified"
    );
  }

  // Check Expiry
  if (otpDoc.expiresAt < new Date()) {
    await otpDoc.deleteOne();

    throw new ApiError(
      400,
      "OTP has expired"
    );
  }

  // Check Attempts
  if (otpDoc.attempts >= 5) {
    await otpDoc.deleteOne();

    throw new ApiError(
      429,
      "Maximum OTP attempts exceeded"
    );
  }

  const hashedOtp = hashOTP(otp);

  if (hashedOtp !== otpDoc.otpHash) {
    otpDoc.attempts += 1;
    await otpDoc.save();

    throw new ApiError(
      400,
      "Invalid OTP"
    );
  }

  otpDoc.isVerified = true;
  await otpDoc.save();

  res.status(200).json({
    success: true,
    message: "Email verified successfully",
  });
});

// Check Verification Status
export const getVerificationStatus =
  asyncHandler(async (req, res) => {
    const { email } = req.query;

    if (!email) {
      throw new ApiError(
        400,
        "Email is required"
      );
    }

    const otpDoc = await Otp.findOne({
      email,
    });

    res.status(200).json({
      success: true,
      verified:
        otpDoc?.isVerified || false,
    });
  });