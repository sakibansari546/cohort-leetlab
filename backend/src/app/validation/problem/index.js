import { z } from "zod";

import ApiError from "../../utils/api-error.js";

const createProblemSchema = z.object({
  title: z
    .string({ message: "Title must be string" })
    .nonempty({ message: "Title is required" })
    .min(6, { message: "Title must be at least 6 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" }),

  description: z
    .string({ message: "Description must be string" })
    .nonempty({ message: "Description is required" })
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(1000, { message: "Description must not exceed 1000 characters" }),

  difficulty: z.enum(["EASY", "MEDIUM", "HARD"], {
    message: "Difficulty must be one of EASY, MEDIUM, HARD",
  }),

  tags: z
    .array(z.string({ message: "Each tag must be a string" }))
    .min(1, { message: "At least one tag is required" }),

  examples: z.array(
    z.object({
      input: z.string({ message: "Input must be a string" }),
      output: z.string({ message: "Output must be a string" }),
      explanation: z.string({ message: "Explanation must be a string" }),
    })
  ),

  constraints: z
    .string({ message: "Constraints must be string" })
    .min(5, { message: "Constraints must be at least 5 characters long" })
    .max(300, { message: "Constraints must not exceed 300 characters" }),

  hints: z.optional(
    z
      .array(
        z.string().max(200, { message: "Hints must not exceed 200 chars" })
      )
      .min(1, { message: "At least one hint is required" })
      .max(10, { message: "Hints must not exceed 10" })
  ),

  editorial: z.optional(
    z
      .string({ message: "editorial must be string" })
      .min(5, { message: "editorial must be at least 5 characters long" })
      .max(600, { message: "editorial must not exceed 100 characters" })
  ),

  testcases: z
    .array(
      z.object({
        input: z.string({ message: "testcases input must be string" }),
        output: z.string({ message: "testcases output must be string" }),
      })
    )
    .min(1, { message: "At least one testcase is required" }),

  codeSnippets: z.record(z.string()).optional(),
  referenceSolutions: z.record(z.string()).optional(),

  company: z
    .array(z.string({ message: "Each Company must be a string" }))
    .min(1, { message: "At least one tag is required" })
    .refine((arr) => Array.isArray(arr) && new Set(arr).size === arr.length, {
      message: "Each company must be unique",
    }),
  isDemo: z.boolean().default(false),
  isPremium: z.boolean().default(false),
});

const updateProblemSchema = z
  .object({
    title: z.optional(
      z
        .string({ message: "Title must be string" })
        .nonempty({ message: "Title is required" })
        .min(6, { message: "Title must be at least 6 characters long" })
        .max(100, { message: "Title must not exceed 40 characters" })
    ),

    description: z.optional(
      z
        .string({ message: "Description must be string" })
        .nonempty({ message: "Description is required" })
        .min(10, { message: "Description must be at least 10 characters long" })
        .max(300, { message: "Description must not exceed 300 characters" })
    ),

    difficulty: z.optional(
      z.enum(["EASY", "MEDIUM", "HARD"], {
        message: "Difficulty must be one of EASY, MEDIUM, HARD",
      })
    ),

    tags: z.optional(
      z
        .array(z.string({ message: "Each tag must be a string" }))
        .min(1, { message: "At least one tag is required" })
    ),

    examples: z.optional(
      z.record(
        z.object({
          input: z.string({ message: "Input must be a string" }),
          output: z.string({ message: "Output must be a string" }),
          explanation: z.string({ message: "Explanation must be a string" }),
        })
      )
    ),

    constraints: z.optional(
      z
        .string({ message: "Constraints must be string" })
        .nonempty({ message: "Constraints is required" })
        .min(5, { message: "Constraints must be at least 5 characters long" })
        .max(100, { message: "Constraints must not exceed 100 characters" })
    ),

    hints: z.optional(
      z
        .string({ message: "Hints must be string" })
        .min(5, { message: "Hints must be at least 5 characters long" })
        .max(100, { message: "Hints must not exceed 100 characters" })
    ),

    editorial: z.optional(
      z
        .string({ message: "editorial must be string" })
        .min(5, { message: "editorial must be at least 5 characters long" })
        .max(100, { message: "editorial must not exceed 100 characters" })
    ),

    testcases: z.optional(
      z
        .array(
          z.object({
            input: z
              .string({ message: "testcases input must be string" })
              .nonempty({ message: "testcase input is required" }),
            output: z
              .string({ message: "testcases output must be string" })
              .nonempty({ message: "testcase output is required" }),
          })
        )
        .min(1, { message: "At least one testcase is required" })
    ),

    codeSnippets: z.optional(
      z.object({
        JAVASCRIPT: z.string({ message: "Code must be string" }),
        PYTHON: z.string({ message: "Code must be string" }),
        JAVA: z.string({ message: "Code must be string" }),
      })
    ),

    referenceSolutions: z.optional(
      z.object({
        JAVASCRIPT: z.string({ message: "Code must be string" }),
        PYTHON: z.string({ message: "Code must be string" }),
        JAVA: z.string({ message: "Code must be string" }),
      })
    ),
  })
  .refine(
    ({
      title,
      description,
      difficulty,
      tags,
      examples,
      referenceSolutions,
      codeSnippets,
      testcases,
      editorial,
      hints,
      constraints,
    }) => {
      if (
        !title &&
        !description &&
        !difficulty &&
        !tags &&
        !examples &&
        !referenceSolutions &&
        !codeSnippets &&
        !testcases &&
        !editorial &&
        !hints &&
        !constraints
      ) {
        throw new ApiError(
          400,
          "At least one field must be provided for update"
        );
      }
      return true;
    }
  );

export { createProblemSchema, updateProblemSchema };
