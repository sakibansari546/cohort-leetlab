import { prisma } from "../../../libs/db.js";
import ApiResponse from "../../utils/api-response.js";

import AsyncHandler from "../../utils/async-handler.js";

class AdminController {
  getUsersCountHandler = AsyncHandler(async (req, res) => {
    const count = await prisma.user.count({});
    res
      .status(200)
      .json(
        new ApiResponse(200, "users count fetched successfully", { count })
      );
  });
  getProblemsCountHandler = AsyncHandler(async (req, res) => {
    const count = await prisma.problem.count({});
    res
      .status(200)
      .json(
        new ApiResponse(200, "problems count fetched successfully", { count })
      );
  });
  getPlaylistsCountHandler = AsyncHandler(async (req, res) => {
    const count = await prisma.playlist.count({});
    res
      .status(200)
      .json(
        new ApiResponse(200, "Playlists count fetched successfully", { count })
      );
  });
  getSubmissionsCountHandler = AsyncHandler(async (req, res) => {
    const count = await prisma.submission.count({});
    res.status(200).json(
      new ApiResponse(200, "Submissions count fetched successfully", {
        count,
      })
    );
  });

  getUsersHandler = AsyncHandler(async (req, res) => {
    const userId = req.userId;
    const users = await prisma.user.findMany({
      omit: {
        password: true,
        emailVerificationToken: true,
        emailVerificationExpiry: true,
        forgotPasswordToken: true,
        forgotPasswordExpiry: true,
        refreshToken: true,
      },
      include: {
        solvedProblems: {
          where: {
            userId: userId,
          },
        },
        submissions: {
          where: {
            userId: userId,
          },
        },
        playlists: {
          where: {
            userId: userId,
          },
        },
      },
    });

    res
      .status(200)
      .json(new ApiResponse(200, "Users fetched successfully", { users }));
  });
}

export default AdminController;
