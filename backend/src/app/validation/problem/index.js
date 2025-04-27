import { z } from "zod";

const createProblemSchema = z.object({
  title: z
    .string({ message: "Title must be a string" })
    .nonempty({ message: "Title is required" })
    .min(5, { message: "Title must be at least 5 characters long" })
    .max(50, { message: "Title must not exceed 50 characters" }),

  description: z
    .string({ message: "Desc must be a string" })
    .nonempty({ message: "Description is required" })
    .min(20, { message: "Description must be at least 20 characters long" }),

  difficulty: z.enum(["EASY", "MEDIUM", "HARD"], {
    message: "Difficulty must be one of EASY, MEDIUM, or HARD",
  }),

  tags: z
    .array(z.string({ message: "Tags must be an array of strings" }))
    .nonempty({ message: "At least one tag is required" }),

  examples: z
    .string({ message: "Examples must be a valid JSON string" })
    .refine(
      (value) => {
        try {
          JSON.parse(value);
          return true;
        } catch {
          return false;
        }
      },
      { message: "Examples must be a valid JSON string" }
    ),

  constraints: z
    .string({ message: "Constraints must be a valid JSON string" })
    .refine(
      (value) => {
        try {
          JSON.parse(value);
          return true;
        } catch {
          return false;
        }
      },
      { message: "Constraints must be a valid JSON string" }
    ),

  testcases: z
    .string({ message: "Testcases must be a valid JSON string" })
    .refine(
      (value) => {
        try {
          JSON.parse(value);
          return true;
        } catch {
          return false;
        }
      },
      { message: "Testcases must be a valid JSON string" }
    ),

  hints: z.optional(z.string({ message: "Hints must be a string" })),
  editorial: z.optional(z.string({ message: "Editorial must be a string" })),

  referenceSolutions: z
    .string({ message: "ReferenceSolutions must be a valid JSON string" })
    .refine(
      (value) => {
        try {
          JSON.parse(value);
          return true;
        } catch {
          return false;
        }
      },
      { message: "ReferenceSolutions must be a valid JSON string" }
    ),
});
//   .refine((data) => {
//     try {
//       JSON.parse(data.examples);
//       JSON.parse(data.testcases);
//       JSON.parse(data.referenceSolutions);
//       return true;
//     } catch (error) {
//       return false;
//     }
//   })
//   .transform((data) => {
//     JSON.parse(data.examples);
//     JSON.parse(data.testcases);
//     JSON.parse(data.referenceSolutions);
//   });

export { createProblemSchema };
