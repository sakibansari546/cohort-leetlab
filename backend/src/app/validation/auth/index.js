import { z } from "zod";

const signupSchema = z.object({
  fullname: z
    .string()
    .max(20, { message: "Fullname must be less than 20 characters long." })
    .nonempty({
      message: "Fullname is required. Please provide your full name.",
    }),
  email: z
    .string()
    .email({ message: "Invalid email address. Please enter a valid email." })
    .nonempty({
      message: "Email is required. Please provide your email address.",
    }),
  password: z
    .string()
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
    })
    .nonempty({ message: "Password is required. Please provide a password." }),
});

const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address. Please enter a valid email." })
    .nonempty({
      message: "Email is required. Please provide your email address.",
    }),
  password: z
    .string()
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
    })
    .nonempty({ message: "Password is required. Please provide a password." }),
});

const forgotPasswordSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address. Please enter a valid email." })
    .nonempty({
      message: "Email is required. Please provide your email address.",
    }),
});

const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter (A-Z).",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter (a-z).",
      }),
    confirmPassword: z
      .string()
      .nonempty({ message: "Confirm password is required." }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
  });

export { signupSchema, loginSchema, forgotPasswordSchema, resetPasswordSchema };
