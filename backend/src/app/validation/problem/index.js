import { z } from "zod";

const createProblemSchema = z.object({
  title: z
    .string({ message: "Title must be string" })
    .nonempty({ message: "Title is required" })
    .min(6, { message: "Title must be at least 6 characters long" })
    .max(40, { message: "Title must not exceed 40 characters" }),

  description: z
    .string({ message: "Description must be string" })
    .nonempty({ message: "Description is required" })
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(300, { message: "Description must not exceed 300 characters" }),

  difficulty: z.enum(["EASY", "MEDIUM", "HARD"], {
    message: "Difficulty must be one of EASY, MEDIUM, HARD",
  }),

  tags: z
    .array(z.string({ message: "Each tag must be a string" }))
    .min(1, { message: "At least one tag is required" }),

  examples: z.record(
    z.object({
      input: z.string({ message: "Input must be a string" }),
      output: z.string({ message: "Output must be a string" }),
      explanation: z.string({ message: "Explanation must be a string" }),
    })
  ),

  constraints: z
    .string({ message: "Constraints must be string" })
    .nonempty({ message: "Constraints is required" })
    .min(5, { message: "Constraints must be at least 5 characters long" })
    .max(100, { message: "Constraints must not exceed 100 characters" }),

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

  testcases: z
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
    .min(1, { message: "At least one testcase is required" }),

  codeSnippets: z.object({
    JAVASCRIPT: z.string({ message: "Code must be string" }),
    PYTHON: z.string({ message: "Code must be string" }),
    JAVA: z.string({ message: "Code must be string" }),
  }),

  referenceSolutions: z.object({
    JAVASCRIPT: z.string({ message: "Code must be string" }),
    PYTHON: z.string({ message: "Code must be string" }),
    JAVA: z.string({ message: "Code must be string" }),
  }),
});

export { createProblemSchema };
