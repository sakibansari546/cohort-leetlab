import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";

import ApiResponse from "../../utils/api-response.js";
import ApiError from "../../utils/api-error.js";
import AsyncHandler from "../../utils/async-handler.js";
import cloudinary from "../../utils/cloudinary.js";

import path from "path";
import fs from "fs/promises";

import { handleZodError } from "../../utils/handle-zod-error.js";
import { updateUserSchema } from "../../validation/user/index.js";

class UserController {
  validateParseData(schema, body) {
    return schema.safeParse(body);
  }

  getUserHandler = AsyncHandler(async (req, res) => {
    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
        isEmailVerified: true,
      },
      omit: {
        password: true,
        emailVerificationToken: true,
        emailVerificationExpiry: true,
        forgotPasswordToken: true,
        forgotPasswordExpiry: true,
      },
      include: {
        solvedProblems: true,
      },
    });

    if (!user) {
      throw new ApiError(404, "User doesn't exist!");
    }

    res
      .status(200)
      .json(new ApiResponse(200, "User retrieved successfully!", { user }));
  });

  updateUserHandler = AsyncHandler(async (req, res) => {
    const { fullname } = handleZodError(
      this.validateParseData(updateUserSchema, req.body)
    );
    const profileImage = req.file;

    if (!fullname && !profileImage) {
      throw new ApiError(400, "Fullname or Profile image is required");
    }

    if (profileImage) {
      let uploadPath;
      try {
        uploadPath = path.resolve(profileImage.path);
        const uploadResult = await cloudinary.uploader.upload(uploadPath, {
          folder: "leetlab/user/profileImages",
        });
        let avatarUrl = uploadResult.secure_url;
        await fs.unlink(uploadPath);

        const updatedUser = await prisma.user.update({
          where: { id: req.userId },
          data: {
            fullname,
            avatar: avatarUrl,
          },
          select: {
            id: true,
            fullname: true,
            avatar: true,
          },
        });

        return res.status(200).json(
          new ApiResponse(200, "User updated successfully!", {
            updatedUser,
          })
        );
      } catch (uploadError) {
        logger.error(`Error uploading profile image: ${uploadError}`);
        await fs.unlink(uploadPath);
        throw new ApiError(500, "Error uploading profile image!");
      }
    }

    try {
      const updatedUser = await prisma.user.update({
        where: { id: req.userId },
        data: {
          fullname,
        },
        select: {
          id: true,
          fullname: true,
        },
      });

      res.status(200).json(
        new ApiResponse(200, "User updated successfully!", {
          updatedUser,
        })
      );
    } catch (updateError) {
      logger.error(`Error updating user: ${updateError}`);
      res
        .status(500)
        .json(new ApiError(500, false, "Error updating user!", updateError));
    }
  });
}
export default UserController;
