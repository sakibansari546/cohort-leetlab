import { z } from "zod";

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
  birth: z.optional(z.date({ message: "Invalid date" })),
  bio: z.optional(
    z
      .string({ message: "Bio must be string" })
      .min(3, { message: "Bio must be at least 3 characters long" })
      .max(30, { message: "Bio must not exceed 200 characters" })
  ),
  website: z.optional(z.string({ message: "Website url must be string" })),
  github: z.optional(z.string({ message: "Github url must be string" })),
  twitter: z.optional(z.string({ message: "Twitter url must be string" })),
  linkedIn: z.optional(z.string({ message: "LinkedIn url must be string" })),
});

export { updateUserBasicInfoSchema };
