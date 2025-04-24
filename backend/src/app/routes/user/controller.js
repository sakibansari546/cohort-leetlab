import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";

import ApiResponse from "../../utils/api-response.js";
import cloudinary from "../../utils/cloudinary.js";

import path from "path";
import fs from "fs/promises";

class UserController {
  async getUserHandler(req, res) {
    try {
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

      if (!user)
        return res
          .status(404)
          .json(new ApiResponse(404, false, "User doesn't exist!"));

      res
        .status(200)
        .json(
          new ApiResponse(200, true, "User retrieved successfully!", { user })
        );
    } catch (error) {
      logger.error(`Internal Sever while get me ${error}`);
      res
        .status(500)
        .json(new ApiResponse(500, false, "Internal Server error!", {}));
    }
  }

  async updateUserHandler(req, res) {
    try {
      const { fullname } = req.body;
      const profileImage = req.file;

      if (!fullname) {
        return res
          .status(400)
          .json(new ApiResponse(400, false, "Fullname is required!"));
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
          return res
            .status(500)
            .json(
              new ApiResponse(500, false, "Error uploading profile image!")
            );
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
          new ApiResponse(200, true, "User updated successfully!", {
            updatedUser,
          })
        );
      } catch (updateError) {
        logger.error(`Error updating user: ${updateError}`);
        res
          .status(500)
          .json(new ApiResponse(500, false, "Error updating user!"));
      }
    } catch (error) {
      logger.error(`Internal Sever while Update user ${error}`);
      res
        .status(500)
        .json(new ApiResponse(500, false, "Internal Server error!", {}));
    }
  }
}
export default UserController;
