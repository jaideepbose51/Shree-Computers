import express from "express";

import {
  createCourse,
  getAllCourses,
  getCourseById,
  getCourseBySlug,
  searchCourses,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";

import {
  createCourseSchema,
  updateCourseSchema,
} from "../schemas/course.schema.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Get all published courses
router.get("/", getAllCourses);

// Search courses
router.get("/search", searchCourses);

// Get course by slug
router.get("/slug/:slug", getCourseBySlug);

// Get course by id
router.get("/id/:id", getCourseById);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Create course
router.post(
  "/",
  authMiddleware,
  validate(createCourseSchema),
  createCourse
);

// Update course
router.put(
  "/:id",
  authMiddleware,
  validate(updateCourseSchema),
  updateCourse
);

// Delete course
router.delete(
  "/:id",
  authMiddleware,
  deleteCourse
);

export default router;