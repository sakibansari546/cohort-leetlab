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
}

export default AdminController;
