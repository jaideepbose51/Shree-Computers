import express from "express";

import {
  loginAdmin,
  getAdminProfile,
  getDashboardStats,
} from "../controllers/admin.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";

import {
  adminLoginSchema,
} from "../schemas/admin.schema.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Admin Login
router.post(
  "/login",
  validate(adminLoginSchema),
  loginAdmin
);

/*
|--------------------------------------------------------------------------
| Protected Routes
|--------------------------------------------------------------------------
*/

// Get Admin Profile
router.get(
  "/profile",
  authMiddleware,
  getAdminProfile
);

router.get(
  "/dashboard",
  authMiddleware,
  getDashboardStats
);

export default router;