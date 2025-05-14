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

export { signupSchema, loginSchema };
