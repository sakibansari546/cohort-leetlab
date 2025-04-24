import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";

import ApiResponse from "../../utils/api-response.js";
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
      logger.error(`Internal Sever while signup ${error}`);
      res
        .status(500)
        .json(new ApiResponse(500, false, "Internal Server error!", {}));
    }
  }

  async updateUserHandler(req, res) {
    console.log(req.body);

    res.status(200).json({ message: "User Updated" });
  }
}
export default UserController;
