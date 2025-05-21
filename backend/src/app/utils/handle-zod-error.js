import { logger } from "../../libs/logger.js";
import ApiError from "./api-error.js";

export function handleZodError(result) {
  if (!result.success) {
    console.log(result.error);
    const errors = result.error.errors.map((err) => err.message);
    throw new ApiError(400, errors[0], errors);
  }
  logger.info(result);
  return result.data;
}
