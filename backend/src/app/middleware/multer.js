import multer from "multer";

import ApiResponse from "../utils/api-response.js";
import ApiError from "../utils/api-error.js";

import { logger } from "../../libs/logger.js";

export function handleProfileImageWithMulter(filename) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./src/uploads");
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 5 * 1024 * 1024, // 5MB
    },
  }).single(filename);

  return (req, res, next) => {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE")
          throw new ApiError(400, "File size exceeds the limit of 5MB.");
        logger.error(err);
        throw new ApiError(400, "An error occurred during file upload.");
        // A Multer error occurred when uploading.
      } else if (err) {
        // An unknown error occurred when uploading.
        throw new ApiError(
          500,
          "An unknown error occurred during file upload."
        );
      }
      next();
      // Everything went fine.
    });
  };
}
