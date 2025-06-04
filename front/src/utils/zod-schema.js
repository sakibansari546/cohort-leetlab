import { z } from "zod";
import { LANGUAGES } from "../constants";

const signupSchema = z.object({
  fullname: z
    .string({ message: "Fullname must be string type" })
    .nonempty({
      message: "Fullname is required.",
    })
    .min(3, { message: "Fullname must be at least 3 characters long." })
    .max(20, { message: "Fullname must be less than 20 characters long." }),
  email: z
    .string({ message: "Email must be string type" })
    .nonempty({
      message: "Email is required.",
    })
    .email({ message: "Invalid email address. Please enter a valid email." }),

  password: z
    .string({ message: "Password must be string type" })
    .nonempty({ message: "Password is required." })
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter (A-Z).",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter (a-z).",
    })
    .regex(/[\W_]/, {
      message:
        "Password must contain at least one special character (e.g., @, #, $, etc.).",
    }),
});

const loginSchema = z.object({
  email: z
    .string({ message: "Eamil must be string type" })
    .nonempty({
      message: "Email is required.",
    })
    .email({ message: "Invalid email address. Please enter a valid email." }),

  password: z
    .string({ message: "Password must be string type" })
    .nonempty({ message: "Password is required." })
    .min(8, { message: "Password must be at least 8 characters long." })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter (A-Z).",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter (a-z).",
    })
    .regex(/[\W_]/, {
      message:
        "Password must contain at least one special character (e.g., @, #, $, etc.).",
    }),
});

const createPlaylistSchema = z.object({
  name: z
    .string({ message: "Playlist name must be string" })
    .nonempty({ message: "Playlist name is required" })
    .min(5, { message: "Playlist name must be at least 5 characters long" })
    .max(30, { message: "Playlist name must not exceed 30 characters" }),

  description: z.optional(
    z
      .string({ message: "Description must be string" })
      .max(200, { message: "Description must not exceed 200 characters" })
  ),
});

const updateUserBasicInfoSchema = z.object({
  fullname: z
    .string({ message: "Fullname must be string" })
    .min(3, { message: "Fullname must be at least 3 characters long" })
    .max(30, { message: "Fullname must not exceed 30 characters" }),

  username: z.optional(
    z
      .string({ message: "Username must be string" })
      .min(3, { message: "Username must be at least 3 characters long" })
      .max(30, { message: "Username must not exceed 30 characters" })
  ),
  gender: z.optional(
    z.enum(["MALE", "FEMALE", "OTHER"], { message: "Invalid Gender" })
  ),
  birth: z.preprocess((val) => {
    if (typeof val === "string" && val.trim() === "") return undefined;
    // HTML date inputs give us "YYYY-MM-DD" strings:
    return val ? new Date(val) : undefined;
  }, z.date({ message: "Invalid date" }).optional()),

  bio: z.preprocess((val) => {
    if (typeof val === "string" && val.trim() === "") return undefined;
    return val;
  }, z.string({ message: "Bio must be a string" }).min(3, { message: "Bio must be at least 3 characters long" }).max(200, { message: "Bio must not exceed 200 characters" }).optional()),

  website: z.optional(z.string({ message: "Website url must be string" })),
  github: z.optional(z.string({ message: "Github url must be string" })),
  twitter: z.optional(z.string({ message: "Twitter url must be string" })),
  linkedIn: z.optional(z.string({ message: "LinkedIn url must be string" })),
});

const createProblemSchema = z.object({
  title: z
    .string({ message: "Title must be string" })
    .nonempty({ message: "Title is required" })
    .min(6, { message: "Title must be at least 6 characters long" })
    .max(200, { message: "Title must not exceed 200 characters" }),

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
        z.string().max(300, { message: "Hints must not exceed 300 chars" })
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

  // **Naya Part**:
  selectedLanguages: z.array(z.enum(LANGUAGES)).optional(), // agar koi na bhi select kare, to empty array valid ho

  // codeSnippets aur referenceSolutions ko “record” type me rakhte hain:
  codeSnippets: z.record(z.string()).optional(),
  referenceSolutions: z.record(z.string()).optional(),

  company: z
    .array(z.string({ message: "Each Company must be a string" }))
    .min(1, { message: "At least one tag is required" })
    .refine((arr) => Array.isArray(arr) && new Set(arr).size === arr.length, {
      message: "Each company must be unique",
    }),

  sheetId: z.optional(z.string({ message: "Sheet Id must be a string" })),
  isDemo: z.boolean().default(false),
  isPremium: z.boolean().default(false),
});

const createSheetSchema = z.object({
  title: z
    .string({ message: "Title must be a string" })
    .nonempty({ message: "Title is required" })
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must not exceed 100 characters" }),

  description: z
    .string({ message: "Description must be a string" })
    .max(500, { message: "Description must not exceed 500 characters" })
    .optional(),

  languages: z
    .array(z.enum(LANGUAGES, { message: "Invalid language" }))
    .min(1, { message: "At least one language is required" }),

  tags: z
    .array(z.string({ message: "Each tag must be a string" }))
    .min(1, { message: "At least one tag is required" }),

  price: z
    .number({ message: "Price must be a number" })
    .min(0, { message: "Price must be at least 0" }),

  isPremium: z.boolean().default(false),
});

export {
  signupSchema,
  loginSchema,
  createPlaylistSchema,
  updateUserBasicInfoSchema,
  createProblemSchema,
  createSheetSchema,
};
