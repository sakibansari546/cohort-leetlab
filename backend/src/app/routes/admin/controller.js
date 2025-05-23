import { prisma } from "../../../libs/db.js";
import ApiError from "../../utils/api-error.js";
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
  deleteUserhandler = AsyncHandler(async (req, res) => {
    const { userId } = req.params;

    if (!userId) {
      throw new ApiError(400, "UserId is required");
    }

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    res.status(200).json(new ApiResponse(200, "User deleted successfully"));
  });

  getPlaylistsHandler = AsyncHandler(async (req, res) => {
    const playlists = await prisma.playlist.findMany({
      where: {},
      include: {
        problems: {
          include: {
            problem: {
              select: {
                title: true,
                id: true,
                difficulty: true,
                userId: true,
                isDemo: true,
              },
            },
          },
        },
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            profileImage: true,
            role: true,
          },
        },
      },
    });

    res
      .status(200)
      .json(
        new ApiResponse(200, "Playlists fetched successfully", { playlists })
      );
  });
  deletePlaylistHadler = AsyncHandler(async (req, res) => {
    const { playlistId } = req.params;
    if (!playlistId) {
      throw new ApiError(400, "playlistId is required");
    }

    await prisma.playlist.delete({
      where: {
        id: playlistId,
      },
    });

    res.status(200).json(new ApiResponse(200, "Playlist deleted successfully"));
  });

  getSubmissionsHandler = AsyncHandler(async (req, res) => {
    const submissions = await prisma.submission.findMany({
      include: {
        problem: {
          select: {
            id: true,
            title: true,
            difficulty: true,
            tags: true,
            isDemo: true,
            company: true,
          },
        },
        user: {
          select: {
            id: true,
            fullname: true,
            email: true,
            profileImage: true,
            role: true,
          },
        },
      },
    });

    res.status(200).json(
      new ApiResponse(200, "Submissions fetched successfully", {
        submissions,
      })
    );
  });
  deleteSubmissionHandler = AsyncHandler(async (req, res) => {
    const { submissionId } = req.params;
    if (!submissionId) {
      throw new ApiError(200, "Submission id is required");
    }

    await prisma.submission.delete({
      where: {
        id: submissionId,
      },
    });

    res
      .status(200)
      .json(new ApiResponse(200, "Submission deleted successfully"));
  });
}

export default AdminController;
