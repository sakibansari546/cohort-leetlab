import { z } from "zod";

import ApiError from "../../utils/api-error.js";

const createSheetSchema = z.object({
  title: z
    .string({ invalid_type_error: "Title must be a string" })
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters"),
  description: z
    .string({ invalid_type_error: "Description must be a string" })
    .max(1000, "Description must be at most 1000 characters")
    .optional(),
  languages: z
    .array(
      z
        .string({ invalid_type_error: "Language name must be a string" })
        .min(1, "Language name is required")
        .max(50, "Language name must be at most 50 characters"),
      { invalid_type_error: "Languages must be an array" }
    )
    .min(1, "At least one language is required")
    .max(10, "No more than 10 languages allowed"),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .nonnegative("Price must be non-negative")
    .max(10000, "Price must be less than or equal to 10,000"),
  isPremium: z
    .boolean({ invalid_type_error: "isPremium must be a boolean" })
    .optional(),
});

const editSheetSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be at most 100 characters"),
  description: z
    .string()
    .max(1000, "Description must be at most 1000 characters")
    .optional(),
  languages: z
    .array(
      z
        .string()
        .min(1, "Language name is required")
        .max(50, "Language name must be at most 50 characters")
    )
    .min(1, "At least one language is required")
    .max(10, "No more than 10 languages allowed"),
  price: z
    .number()
    .nonnegative("Price must be non-negative")
    .max(10000, "Price must be less than or equal to 10,000"),
  isPremium: z.boolean().optional(),
});

export { createSheetSchema, editSheetSchema };
