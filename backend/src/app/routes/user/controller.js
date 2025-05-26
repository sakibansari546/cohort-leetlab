import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";

import ApiResponse from "../../utils/api-response.js";
import ApiError from "../../utils/api-error.js";
import AsyncHandler from "../../utils/async-handler.js";
import cloudinary from "../../utils/cloudinary.js";

import path from "path";
import fs from "fs/promises";

import { handleZodError } from "../../utils/handle-zod-error.js";
import { updateUserBasicInfoSchema } from "../../validation/user/index.js";

class UserController {
  validateParseData(schema, body) {
    return schema.safeParse(body || {});
  }

  getUserHandler = AsyncHandler(async (req, res) => {
    console.log(req.userId);

    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
        // isEmailVerified: true,
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
        basicInfo: {
          include: {
            socials: true,
          },
        },
      },
    });

    if (!user) {
      throw new ApiError(404, "User doesn't exist!");
    }

    res
      .status(200)
      .json(new ApiResponse(200, "User retrieved successfully!", { user }));
  });

  updateProfileImageHandler = AsyncHandler(async (req, res) => {
    const profileImage = req.file;
    if (!profileImage) {
      throw new ApiError(400, "Profile Image is required");
    }

    try {
      let uploadPath = path.resolve(profileImage.path);

      const uploadResult = await cloudinary.uploader.upload(uploadPath, {
        folder: "leetlab/user/profileImages",
      });
      let imageUrl = uploadResult.secure_url;
      await fs.unlink(uploadPath);

      const updatedUser = await prisma.user.update({
        where: { id: req.userId },
        data: {
          profileImage: imageUrl,
        },
        select: {
          id: true,
          fullname: true,
          profileImage: true,
        },
      });

      res.status(200).json(
        new ApiResponse(200, "Profile image updated successfully!", {
          user: updatedUser,
        })
      );
    } catch (uploadError) {
      logger.error(`Error uploading profile image: ${uploadError}`);
      await fs.unlink(uploadPath);
      throw new ApiError(500, "Error uploading profile image!");
    }
  });

  updateBasicInfoHandler = AsyncHandler(async (req, res) => {
    const {
      fullname,
      username,
      gender,
      birth,
      bio,
      website,
      github,
      twitter,
      linkedIn,
    } = handleZodError(
      this.validateParseData(updateUserBasicInfoSchema, req.body)
    );

    const updateUser = await prisma.user.update({
      where: {
        id: req.userId,
      },
      data: {
        fullname: fullname,
        username: username,
        basicInfo: {
          upsert: {
            create: {
              gender,
              birth,
              bio,
              socials: {
                create: { website, github, twitter, linkedIn },
              },
            },
            update: {
              gender,
              birth,
              bio,
              socials: {
                upsert: {
                  create: { website, github, twitter, linkedIn },
                  update: { website, github, twitter, linkedIn },
                },
              },
            },
          },
        },
      },
      select: {
        fullname: true,
        username: true,
        isEmailVerified: true,
        email: true,
      },
    });

    if (!updateUser) {
      throw new ApiError(500, "Faild to update user");
    }

    res.status(200).json(
      new ApiResponse(200, "Profile updated successfully", {
        user: updateUser,
      })
    );
  });
}
export default UserController;
