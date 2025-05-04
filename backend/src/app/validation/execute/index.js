import { z } from "zod";
import ApiError from "../../utils/api-error.js";

const executeCodeSchma = z
  .object({
    source_code: z
      .string({ message: "source code must be string" })
      .nonempty({ message: "source code is required" })
      .min(30, { message: "source code must be at least 30 characters long" })
      .max(1000, { message: "source code must not exceed 1000 characters" }),

    language_id: z
      .string({ message: "languageId must be string" })
      .nonempty({ message: "languageId is required" })
      .max(3, { message: "languageId must be at least 3 digits long" }),

    stdins: z
      .array(z.string({ message: "each stdin must be a string" }))
      .min(1, { message: "at least one stdin is required" }),

    expected_outputs: z
      .array(z.string({ message: "each stdin must be a string" }))
      .min(1, { message: "at least one stdin is required" }),
  })
  .refine((data) => {
    if (data.stdins.length !== data.expected_outputs.length) {
      throw new ApiError(
        400,
        "The number of stdins must match the number of expected outputs"
      );
    }
    return true;
  });
export { executeCodeSchma };
