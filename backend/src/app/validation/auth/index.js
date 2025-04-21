import { z } from "zod";

const signupSchema = z.object({
  fullname: z
    .string()
    .max(20, { message: "Fullname must be less than 20 characters long" })
    .nonempty({ message: "Fullname is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    })
    .nonempty({ message: "Password is required" }),
});

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    })
    .regex(/[\W_]/, {
      message: "Password must contain at least one special character",
    })
    .nonempty({ message: "Password is required" }),
});

export { signupSchema, loginSchema };
