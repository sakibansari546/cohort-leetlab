import { prisma } from "../../../libs/db.js";

import ApiError from "../../utils/api-error.js";
import ApiResponse from "../../utils/api-response.js";
import AsyncHandler from "../../utils/async-handler.js";

import { handleZodError } from "../../utils/handle-zod-error.js";
import { createPlaylistSchema } from "../../validation/playlist/index.js";

class PlaylistController {
  validateParseData(schema, body) {
    return schema.safeParse(body || {});
  }
  createPlaylistHandler = AsyncHandler(async (req, res) => {
    const { name, description } = handleZodError(
      this.validateParseData(createPlaylistSchema, req.body)
    );

    const newPlaylist = await prisma.playlist.create({
      data: {
        name,
        description,
        userId: req.userId,
      },
    });

    if (!newPlaylist) {
      throw new ApiError(403, "Failed to create playlist");
    }

    res.status(201).json(
      new ApiResponse(201, "Playlist created successfully", {
        playlist: newPlaylist,
      })
    );
  });
  deletePlaylistHandler = AsyncHandler(async (req, res) => {
    const { playlistId } = req.params;
    if (!playlistId) {
      throw new ApiError(400, "playlistId is required");
    }

    await prisma.playlist.delete({
      where: {
        id: playlistId,
        userId: req.userId,
      },
    });

    res.status(200).json(new ApiResponse(200, "Playlist delete successfully"));
  });
  editPlaylisthandler = AsyncHandler(async (req, res) => {
    const { playlistId } = req.params;
    const { name, description } = handleZodError(
      this.validateParseData(createPlaylistSchema, req.body)
    );
    if (!playlistId) {
      throw new ApiError(400, "playlistId is required");
    }

    const updatePlaylist = await prisma.playlist.update({
      where: {
        id: playlistId,
        userId: req.userId,
      },
      data: {
        name: name,
        description: description || null,
      },
    });

    if (!updatePlaylist) {
      throw new ApiError(
        404,
        "Playlist not found or you do not have permission to edit"
      );
    }

    res.status(200).json(
      new ApiResponse(200, "Playlist updated successfully", {
        playlist: updatePlaylist,
      })
    );
  });
  getAllPlaylistsHandler = AsyncHandler(async (req, res) => {
    const playlists = await prisma.playlist.findMany({
      where: {
        userId: req.userId,
      },
      include: {
        problems: {
          include: {
            problem: true,
          },
        },
      },
    });

    if (!playlists || playlists.length === 0) {
      throw new ApiError(404, "No playlists found");
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, "Playlists fetched successfully", { playlists })
      );
  });
  getPlaylistByIdHandler = AsyncHandler(async (req, res) => {
    const { playlistId } = req.params;
    if (!playlistId) {
      throw new ApiError(400, "playlistId is required");
    }
    const playlist = await prisma.playlist.findUnique({
      where: {
        userId: req.userId,
        id: playlistId,
      },
      include: {
        problems: {
          include: {
            problem: true,
          },
        },
      },
    });

    if (!playlist) {
      throw new ApiError(404, "No playlist found");
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, "Playlists fetched successfully", { playlist })
      );
  });

  addProblemInPlaylistHandler = AsyncHandler(async (req, res) => {
    const { playlistId } = req.params;
    const { problemIds } = req.body;
    if (!Array.isArray(problemIds) || problemIds.length == 0) {
      throw new ApiError(400, "problemIds are required and cannot be empty");
    }
    if (!playlistId) {
      throw new ApiError(400, "playlistId is required");
    }

    const problems = await prisma.problem.findMany({
      where: {
        id: {
          in: problemIds,
        },
      },
    });

    if (!problems || problems.length == 0) {
      throw new ApiError(404, "No valid problems found with the provided IDs");
    }

    const problemInPlaylistExist = await prisma.problemInPlaylist.findMany({
      where: {
        playlistId: playlistId,
        problemId: {
          in: problemIds,
        },
      },
    });

    if (problemInPlaylistExist && problemInPlaylistExist.length) {
      throw new ApiError(
        400,
        "Some problems are already present in the playlist"
      );
    }

    const problemsInPlaylist = await prisma.problemInPlaylist.createMany({
      data: problemIds.map((id) => ({
        playlistId,
        problemId: id,
      })),
    });

    if (!problemsInPlaylist) {
      throw new ApiError(500, "Failed to add problems to the playlist");
    }

    res.status(200).json(
      new ApiResponse(200, "Problems added to playlist successfully", {
        addedCount: problemsInPlaylist,
      })
    );
  });
  removeProblemInPlaylisthandler = AsyncHandler(async (req, res) => {
    const { playlistId } = req.params;
    const { problemIds } = req.body;
    if (!Array.isArray(problemIds) || problemIds.length == 0) {
      throw new ApiError(400, "problemIds are required and cannot be empty");
    }
    if (!playlistId) {
      throw new ApiError(400, "playlistId is required");
    }

    const problems = await prisma.problem.findMany({
      where: {
        id: {
          in: problemIds,
        },
      },
    });

    if (!problems || problems.length == 0) {
      throw new ApiError(404, "No valid problems found with the provided IDs");
    }

    const problemsInPlaylistExist = await prisma.problemInPlaylist.findMany({
      where: {
        playlistId: playlistId,
        problemId: {
          in: problemIds,
        },
      },
    });

    if (!problemsInPlaylistExist || problemsInPlaylistExist.length === 0) {
      throw new ApiError(404, "No matching problems found in the playlist");
    }

    await prisma.problemInPlaylist.deleteMany({
      where: {
        playlistId: playlistId,
        problemId: {
          in: problemIds,
        },
      },
    });

    res.status(200).json(new ApiResponse(200, "Problem removed successfully"));
  });
}

export default PlaylistController;
