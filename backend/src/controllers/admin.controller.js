import bcrypt from "bcryptjs";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import generateToken from "../utils/generateToken.js";
import Course from "../models/Course.js";
import Enquiry from "../models/Enquiry.js";

// Admin Login
export const loginAdmin = asyncHandler(
  async (req, res) => {
    const { username, password } =
      req.validatedData;

    const adminUsername =
      process.env.ADMIN_USERNAME;

    const adminPassword =
      process.env.ADMIN_PASSWORD;

    if (
      username !== adminUsername
    ) {
      throw new ApiError(
        401,
        "Invalid credentials"
      );
    }

    const isPasswordCorrect =
      await bcrypt.compare(
        password,
        adminPassword
      );

    if (!isPasswordCorrect) {
      throw new ApiError(
        401,
        "Invalid credentials"
      );
    }

    const token = generateToken({
      username: adminUsername,
    });

    res.status(200).json({
      success: true,
      message:
        "Login successful",
      token,
    });
  }
);

// Admin Profile
export const getAdminProfile =
  asyncHandler(async (req, res) => {
    res.status(200).json({
      success: true,
      data: {
        username:
          req.admin.username,
      },
    });
  });

  export const getDashboardStats =
  asyncHandler(async (req, res) => {

    const totalCourses =
      await Course.countDocuments();

    const totalEnquiries =
      await Enquiry.countDocuments();

    const newEnquiries =
      await Enquiry.countDocuments({
        status: "NEW",
      });

    const contactedEnquiries =
      await Enquiry.countDocuments({
        status: "CONTACTED",
      });

    const followUpEnquiries =
      await Enquiry.countDocuments({
        status: "FOLLOW_UP",
      });

    const admittedStudents =
      await Enquiry.countDocuments({
        status: "ADMITTED",
      });

    res.status(200).json({
      success: true,
      data: {
        totalCourses,
        totalEnquiries,
        newEnquiries,
        contactedEnquiries,
        followUpEnquiries,
        admittedStudents,
      },
    });
  });