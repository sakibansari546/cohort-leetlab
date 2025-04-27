import { logger } from "../../libs/logger.js";
import ApiError from "./api-error.js";

export function validateZodSchema(body, schema) {
  const parsedData = schema.safeParse(body);

  if (!parsedData.success) {
    const errorDetails = parsedData.error.errors.map((err) => ({
      path: err.path.join("."),
      message: err.message,
    }));
    logger.error(`Validation failed: ${JSON.stringify(errorDetails)}`);
    throw new ApiError(400, "Validation error", errorDetails);
  }
  return parsedData.data;
}
