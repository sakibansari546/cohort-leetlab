import { logger } from "../../libs/logger.js";
import ApiError from "./api-error.js";

export function handleZodError(result) {
  if (!result.success) {
    console.log(result.error);
    // const errors = result.error.errors.map((err) => err.message);
    // throw new ApiError(400, errors[0], errors);
    const missingFeilds = result.error.errors.find(
      (error) => error.code == "invalid_type" && error.received === "undefined"
    );
    console.log("Missing ", missingFeilds);

    if (missingFeilds) {
      throw new ApiError(
        400,
        `Zod Missing required fields ${result.error.errors[0].path}`
      );
    }

    throw new ApiError(400, result.error.errors[0].message);
  }
  logger.info(result);
  return result.data;
}
