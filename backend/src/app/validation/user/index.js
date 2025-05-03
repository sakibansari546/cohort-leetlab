import { z } from "zod";

const updateUserSchema = z.object({
  fullname: z.optional(
    z
      .string({ message: "Fullname must be string" })
      .min(3, { message: "Fullname must be at least 3 characters long" })
      .max(30, { message: "Fullname must not exceed 30 characters" })
  ),
});

export { updateUserSchema };
