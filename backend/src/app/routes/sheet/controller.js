import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";

import ApiError from "../../utils/api-error.js";
import ApiResponse from "../../utils/api-response.js";
import AsyncHandler from "../../utils/async-handler.js";

import { handleZodError } from "../../utils/handle-zod-error.js";
import {
  createSheetSchema,
  editSheetSchema,
} from "../../validation/sheet/index.js";

class SheetController {
  validateParseData(schema, body) {
    return schema.safeParse(body || {});
  }

  createSheetHandler = AsyncHandler(async (req, res) => {
    const parsedData = handleZodError(
      this.validateParseData(createSheetSchema, req.body)
    );

    const { title, description, languages, price, isPremium, tags } =
      parsedData;

    const newSheet = await prisma.sheet.create({
      data: {
        title: title,
        description: description,
        languages: languages,
        price: price,
        tags,
        isPremium: isPremium,
      },
    });

    if (!newSheet) {
      throw new ApiError(500, "Failed to create sheet");
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, "Sheet Created success fully", { sheet: newSheet })
      );
  });

  deleteSheetHandler = AsyncHandler(async (req, res) => {
    const { sheetId } = req.params;
    if (!sheetId) {
      throw new ApiError(400, "Sheet ID is required");
    }

    await prisma.sheet.delete({
      where: {
        id: sheetId,
      },
    });

    res.status(200).json(new ApiResponse(200, "Sheet deleted successfully"));
  });

  editSheetHandler = AsyncHandler(async (req, res) => {
    const parsedData = handleZodError(
      this.validateParseData(editSheetSchema, req.body)
    );
    const { title, description, languages, price, isPremium } = parsedData;

    const { sheetId } = req.params;
    if (!sheetId) {
      throw new ApiError(400, "Sheet ID is required");
    }

    const updatedSheet = await prisma.sheet.update({
      where: {
        id: sheetId,
      },
      data: {
        title: title,
        description: description,
        languages: languages,
        price: price,
        isPremium: isPremium,
      },
    });

    if (!updatedSheet) {
      throw new ApiError(500, "Failed to create sheet");
    }

    res.status(200).json(
      new ApiResponse(200, "Sheet updated successfully", {
        sheet: updatedSheet,
      })
    );
  });

  addProblemsInSheetHandler = AsyncHandler(async (req, res) => {
    const { problemIds } = req.body;
    const { sheetId } = req.params;

    if (!Array.isArray(problemIds) || problemIds.length === 0) {
      throw new ApiError(400, "problemIds must be a non-empty array");
    }
    const invalidIds = problemIds.filter(
      (id) => typeof id !== "string" || !id.trim()
    );
    if (invalidIds.length > 0) {
      throw new ApiError(400, "All problemIds must be non-empty strings");
    }

    if (!sheetId) {
      throw new ApiError(400, "Sheet ID is required");
    }

    const sheetExists = await prisma.sheet.findUnique({
      where: { id: sheetId },
      select: { id: true },
    });
    if (!sheetExists) {
      throw new ApiError(404, "Sheet not found");
    }

    const validProblems = await prisma.problem.findMany({
      where: { id: { in: problemIds } },
      select: { id: true },
    });
    const validIds = validProblems.map((p) => p.id);
    const notFound = problemIds.filter((pid) => !validIds.includes(pid));
    if (notFound.length > 0) {
      throw new ApiError(
        404,
        `These problem IDs were not found: ${notFound.join(", ")}`
      );
    }

    const result = await prisma.sheetProblem.createMany({
      data: problemIds.map((pid, idx) => ({
        sheetId,
        problemId: pid,
        orderIndex: idx,
      })),
      skipDuplicates: true,
    });

    res.status(200).json(
      new ApiResponse(200, "Problems added to sheet successfully", {
        addedCount: result.count,
      })
    );
  });
  removeProblemInSheetHandler = AsyncHandler(async (req, res) => {
    const { problemId } = req.body;
    const { sheetId } = req.params;
    if (!problemId || typeof problemId !== "string" || !problemId.trim()) {
      throw new ApiError(400, "problemId must be a non-empty string");
    }
    if (!sheetId) {
      throw new ApiError(400, "Sheet ID is required");
    }

    // Check if the sheetProblem exists
    const sheetProblem = await prisma.sheetProblem.findUnique({
      where: {
        sheetId_problemId: {
          sheetId,
          problemId,
        },
      },
    });
    if (!sheetProblem) {
      throw new ApiError(404, "Problem not found in the sheet");
    }

    // Delete the problem from the sheet
    await prisma.sheetProblem.delete({
      where: {
        sheetId_problemId: {
          sheetId,
          problemId,
        },
      },
    });

    res
      .status(200)
      .json(new ApiResponse(200, "Problem removed from sheet successfully"));
  });

  getAllSheetsHandler = AsyncHandler(async (req, res) => {
    const sheets = await prisma.sheet.findMany({});
    res
      .status(200)
      .json(new ApiResponse(200, "Sheets fetched successfully", { sheets }));
  });
  getSheetByIdHandler = AsyncHandler(async (req, res) => {
    const { sheetId } = req.params;
    const userId = req.userId;

    if (!sheetId) {
      throw new ApiError(400, "Sheet ID is required");
    }

    const purchase = await prisma.purchase.findUnique({
      where: {
        userId_sheetId: {
          userId,
          sheetId,
        },
      },
    });
    if (!purchase) {
      throw new ApiError(403, "You do not have access to this sheet");
    }

    const sheet = await prisma.sheet.findUnique({
      where: { id: sheetId },
      include: {
        sheetAssignments: {
          orderBy: { orderIndex: "asc" },
          include: {
            problem: {
              include: {
                solvedBy: true
              }
            }
          },
        },
      },
    });
    if (!sheet) {
      throw new ApiError(404, "Sheet not found");
    }

    res
      .status(200)
      .json(new ApiResponse(200, "Sheet fetched successfully", { sheet }));
  });

  getSheetFreeDetails = AsyncHandler(async (req, res) => {
    const { sheetId } = req.params;
    if (!sheetId) {
      throw new ApiError(400, "Sheet ID is required");
    }
    const sheet = await prisma.sheet.findUnique({
      where: { id: sheetId },
    });
    if (!sheet) {
      throw new ApiError(404, "Sheet not found");
    }
    res
      .status(200)
      .json(new ApiResponse(200, "Sheet fetched successfully", { sheet }));
  });

  getUserSheets = AsyncHandler(async (req, res) => {
    const userId = req.userId;
    const sheets = await prisma.sheet.findMany({
      where: {
        purchases: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        purchases: {
          select: {
            boughtAt: true,
          },
        },
        _count: {
          select: {
            sheetAssignments: true,
          },
        },
      },
    });

    res
      .status(200)
      .json(new ApiResponse(200, "Sheets fetched successfully", { sheets }));
  });
}

export default SheetController;
