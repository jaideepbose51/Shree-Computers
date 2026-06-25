import Enquiry from "../models/Enquiry.js";
import Course from "../models/Course.js";
import Otp from "../models/Otp.js";

import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";

// Create Enquiry
export const createEnquiry = asyncHandler(
  async (req, res) => {
    const {
      name,
      email,
      phone,
      courseInterested,
      message,
    } = req.validatedData;

    // Check Email Verification
    const verifiedEmail = await Otp.findOne({
      email,
      isVerified: true,
    });

    if (!verifiedEmail) {
      throw new ApiError(
        400,
        "Please verify your email before submitting enquiry"
      );
    }

    // Check Course Exists
    const course = await Course.findById(
      courseInterested
    );

    if (!course) {
      throw new ApiError(
        404,
        "Selected course not found"
      );
    }

    // Prevent duplicate enquiry
    const existingEnquiry =
      await Enquiry.findOne({
        email,
        courseInterested,
      });

    if (existingEnquiry) {
      throw new ApiError(
        409,
        "Enquiry already submitted for this course"
      );
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
      courseInterested,
      message,
      emailVerified: true,
      emailVerifiedAt: new Date(),
    });

    res.status(201).json({
      success: true,
      message:
        "Enquiry submitted successfully",
      data: enquiry,
    });
  }
);

// Get All Enquiries
export const getAllEnquiries =
  asyncHandler(async (req, res) => {
    const page =
      Number(req.query.page) || 1;

    const limit =
      Number(req.query.limit) || 100;

    const search =
      req.query.search || "";

    const skip = (page - 1) * limit;

    const searchQuery = {
      $or: [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
        {
          phone: {
            $regex: search,
            $options: "i",
          },
        },
      ],
    };

    const total =
      await Enquiry.countDocuments(
        searchQuery
      );

    const enquiries =
      await Enquiry.find(searchQuery)
        .populate(
          "courseInterested",
          "courseName duration fees"
        )
        .sort({
          createdAt: -1,
        })
        .skip(skip)
        .limit(limit);

    res.status(200).json({
      success: true,
      total,
      currentPage: page,
      totalPages: Math.ceil(
        total / limit
      ),
      data: enquiries,
    });
  });

// Get Single Enquiry
export const getEnquiryById =
  asyncHandler(async (req, res) => {
    const enquiry =
      await Enquiry.findById(
        req.params.id
      ).populate("courseInterested");

    if (!enquiry) {
      throw new ApiError(
        404,
        "Enquiry not found"
      );
    }

    res.status(200).json({
      success: true,
      data: enquiry,
    });
  });

// Update Status
export const updateEnquiryStatus =
  asyncHandler(async (req, res) => {
    const enquiry =
      await Enquiry.findById(
        req.params.id
      );

    if (!enquiry) {
      throw new ApiError(
        404,
        "Enquiry not found"
      );
    }

    const {
      status,
      adminNotes,
    } = req.validatedData;

    enquiry.status = status;

    if (adminNotes !== undefined) {
      enquiry.adminNotes =
        adminNotes;
    }

    await enquiry.save();

    res.status(200).json({
      success: true,
      message:
        "Enquiry updated successfully",
      data: enquiry,
    });
  });

// Delete Enquiry
export const deleteEnquiry =
  asyncHandler(async (req, res) => {
    const enquiry =
      await Enquiry.findById(
        req.params.id
      );

    if (!enquiry) {
      throw new ApiError(
        404,
        "Enquiry not found"
      );
    }

    await enquiry.deleteOne();

    res.status(200).json({
      success: true,
      message:
        "Enquiry deleted successfully",
    });
  });