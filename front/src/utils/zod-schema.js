import { z } from "zod";

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
    .max(100, { message: "Constraints must not exceed 100 characters" }),

  hints: z.optional(
    z
      .array(
        z.string().max(100, { message: "Hints must not exceed 100 chars" })
      )
      .min(1, { message: "At least one hint is required" })
      .max(10, { message: "Hints must not exceed 10" })
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
        input: z.string({ message: "testcases input must be string" }),
        output: z.string({ message: "testcases output must be string" }),
      })
    )
    .min(1, { message: "At least one testcase is required" }),

  codeSnippets: z.object({
    JAVASCRIPT: z
      .string({ message: "Code must be string" })
      .nonempty({ message: "" }),
    PYTHON: z
      .string({ message: "Code must be string" })
      .nonempty({ message: "" }),
    JAVA: z
      .string({ message: "Code must be string" })
      .nonempty({ message: "" }),
    C: z.string({ message: "Code must be string" }).nonempty({ message: "" }),
    "C++": z
      .string({ message: "Code must be string" })
      .nonempty({ message: "" }),
  }),

  referenceSolutions: z.object({
    JAVASCRIPT: z
      .string({ message: "Code must be string" })
      .nonempty({ message: "" }),
    PYTHON: z
      .string({ message: "Code must be string" })
      .nonempty({ message: "" }),
    JAVA: z
      .string({ message: "Code must be string" })
      .nonempty({ message: "" }),
    C: z.string({ message: "Code must be string" }).nonempty({ message: "" }),
    "C++": z
      .string({ message: "Code must be string" })
      .nonempty({ message: "" }),
  }),

  company: z.string({ message: "Campany must be string" }),
  isDemo: z.boolean().default(false),
});

export {
  signupSchema,
  loginSchema,
  createPlaylistSchema,
  updateUserBasicInfoSchema,
  createProblemSchema,
};
