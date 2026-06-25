import Course from "../models/Course.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import generateSlug from "../utils/generateSlug.js";

// Create Course
export const createCourse = asyncHandler(async (req, res) => {
  const {
    courseName,
    description,
    duration,
    fees,
    eligibility,
    careerOpportunities,
    image,
    isPublished,
  } = req.validatedData;

  const slug = generateSlug(courseName);

  const existingCourse = await Course.findOne({ slug });

  if (existingCourse) {
    throw new ApiError(
      409,
      "A course with this name already exists"
    );
  }

  const course = await Course.create({
    courseName,
    slug,
    description,
    duration,
    fees,
    eligibility,
    careerOpportunities,
    image,
    isPublished,
  });

  res.status(201).json({
    success: true,
    message: "Course created successfully",
    data: course,
  });
});

// Get All Courses
export const getAllCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({
    isPublished: true,
  }).sort({ createdAt: 1 });

  res.status(200).json({
    success: true,
    totalCourses: courses.length,
    data: courses,
  });
});

// Get Course By ID
export const getCourseById = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  res.status(200).json({
    success: true,
    data: course,
  });
});

// Get Course By Slug
export const getCourseBySlug = asyncHandler(async (req, res) => {
  const course = await Course.findOne({
    slug: req.params.slug,
  });

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  res.status(200).json({
    success: true,
    data: course,
  });
});

// Search Courses
export const searchCourses = asyncHandler(async (req, res) => {
  const { q } = req.query;

  if (!q) {
    throw new ApiError(
      400,
      "Search query is required"
    );
  }

  const courses = await Course.find({
    $text: {
      $search: q,
    },
    isPublished: true,
  });

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});

// Update Course
export const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(
    req.params.id
  );

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  const updateData = req.validatedData;

  if (updateData.courseName) {
    updateData.slug = generateSlug(
      updateData.courseName
    );
  }

  const updatedCourse =
    await Course.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

  res.status(200).json({
    success: true,
    message: "Course updated successfully",
    data: updatedCourse,
  });
});

// Delete Course
export const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(
    req.params.id
  );

  if (!course) {
    throw new ApiError(404, "Course not found");
  }

  await course.deleteOne();

  res.status(200).json({
    success: true,
    message: "Course deleted successfully",
  });
});