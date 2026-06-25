import { z } from "zod";

export const createEnquirySchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name cannot exceed 100 characters"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Please provide a valid email address"),

  phone: z
    .string()
    .trim()
    .regex(
      /^[6-9]\d{9}$/,
      "Please provide a valid 10-digit Indian mobile number"
    ),

  courseInterested: z
    .string()
    .trim()
    .min(1, "Course selection is required"),

  message: z
    .string()
    .trim()
    .max(1000, "Message cannot exceed 1000 characters")
    .optional()
    .default(""),
});

export const updateEnquiryStatusSchema = z.object({
  status: z.enum([
    "NEW",
    "CONTACTED",
    "FOLLOW_UP",
    "ADMITTED",
    "REJECTED",
  ]),

  adminNotes: z
    .string()
    .trim()
    .max(2000, "Admin notes cannot exceed 2000 characters")
    .optional()
    .default(""),
});