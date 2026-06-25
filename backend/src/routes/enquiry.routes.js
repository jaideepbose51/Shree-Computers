import express from "express";

import {
  createEnquiry,
  getAllEnquiries,
  getEnquiryById,
  updateEnquiryStatus,
  deleteEnquiry,
} from "../controllers/enquiry.controller.js";

import authMiddleware from "../middleware/auth.middleware.js";
import validate from "../middleware/validate.middleware.js";

import {
  createEnquirySchema,
  updateEnquiryStatusSchema,
} from "../schemas/enquiry.schema.js";

const router = express.Router();

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

// Submit Enquiry
router.post(
  "/",
  validate(createEnquirySchema),
  createEnquiry
);

/*
|--------------------------------------------------------------------------
| Admin Routes
|--------------------------------------------------------------------------
*/

// Get All Enquiries
router.get(
  "/",
  authMiddleware,
  getAllEnquiries
);

// Get Single Enquiry
router.get(
  "/:id",
  authMiddleware,
  getEnquiryById
);

// Update Enquiry Status
router.patch(
  "/:id",
  authMiddleware,
  validate(updateEnquiryStatusSchema),
  updateEnquiryStatus
);

// Delete Enquiry
router.delete(
  "/:id",
  authMiddleware,
  deleteEnquiry
);

export default router;