import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";

import ApiError from "../../utils/api-error.js";
import ApiResponse from "../../utils/api-response.js";
import AsyncHandler from "../../utils/async-handler.js";

class SheetController {
  createSheetHandler = AsyncHandler(async (req, res) => {
    res.send("Sheet Created");
  });
  deleteSheetHandler = AsyncHandler(async (req, res) => {
    res.send("Sheet Created");
  });
  editSheetHandler = AsyncHandler(async (req, res) => {
    res.send("Sheet Created");
  });
  addProblemsInSheetHandler = AsyncHandler(async (req, res) => {
    res.send("Sheet Created");
  });

  getAllSheetsHandler = AsyncHandler(async (req, res) => {
    res.send("Sheet Created");
  });
  getSheetByIdHandler = AsyncHandler(async (req, res) => {
    res.send("Sheet Created");
  });
}

export default SheetController;
