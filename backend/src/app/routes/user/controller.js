import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";

import ApiResponse from "../../utils/api-response.js";
import ApiError from "../../utils/api-error.js";
import AsyncHandler from "../../utils/async-handler.js";
import cloudinary from "../../utils/cloudinary.js";

import path from "path";
import fs from "fs/promises";

class UserController {
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
    });

    if (!user) {
      throw new ApiError(404, "User doesn't exist!");
    }

    res
      .status(200)
      .json(new ApiResponse(200, "User retrieved successfully!", { user }));
  });

  updateUserHandler = AsyncHandler(async (req, res) => {
    const { fullname } = req.body;
    const profileImage = req.file;

    if (!fullname) {
      throw new ApiError(400, "Fullname is required!");
    }

    let avatarUrl = null;
    if (profileImage) {
      try {
        const uploadPath = path.resolve(profileImage.path);
        const uploadResult = await cloudinary.uploader.upload(uploadPath, {
          folder: "leetlab/user/profileImages",
        });
        avatarUrl = uploadResult.secure_url;
        await fs.unlink(uploadPath);
      } catch (uploadError) {
        logger.error(`Error uploading profile image: ${uploadError}`);
        throw new ApiError(500, "Error uploading profile image!");
      }
    }

    try {
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
