import { z } from "zod";

export const createCourseSchema = z.object({
  courseName: z
    .string()
    .trim()
    .min(3, "Course name must be at least 3 characters")
    .max(100, "Course name cannot exceed 100 characters"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters")
    .max(3000, "Description cannot exceed 3000 characters"),

  duration: z
    .string()
    .trim()
    .min(1, "Duration is required"),

  fees: z
    .number({
      required_error: "Fees is required",
      invalid_type_error: "Fees must be a number",
    })
    .min(0, "Fees cannot be negative"),

  eligibility: z
    .string()
    .trim()
    .min(1, "Eligibility is required"),

  careerOpportunities: z
    .array(z.string().trim())
    .default([]),

  image: z
    .string()
    .url("Invalid image URL")
    .optional(),

  isPublished: z
    .boolean()
    .optional()
    .default(true),
});

export const updateCourseSchema = z.object({
  courseName: z
    .string()
    .trim()
    .min(3)
    .max(100)
    .optional(),

  description: z
    .string()
    .trim()
    .min(20)
    .max(3000)
    .optional(),

  duration: z
    .string()
    .trim()
    .optional(),

  fees: z
    .number()
    .min(0)
    .optional(),

  eligibility: z
    .string()
    .trim()
    .optional(),

  careerOpportunities: z
    .array(z.string().trim())
    .optional(),

  image: z
    .string()
    .url("Invalid image URL")
    .optional(),

  isPublished: z
    .boolean()
    .optional(),
});