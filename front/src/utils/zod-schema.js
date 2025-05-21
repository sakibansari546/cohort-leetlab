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

export {
  signupSchema,
  loginSchema,
  createPlaylistSchema,
  updateUserBasicInfoSchema,
};
