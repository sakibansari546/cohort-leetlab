import express from "express";
import SheetController from "./controller.js";

import { isAuth, checkAdmin } from "../../middleware/auth.js";

export function register() {
  const router = express.Router();
  const controller = new SheetController();

  router.use(isAuth);

  router.get("/all", controller.getAllSheetsHandler.bind(controller));
  router.get("/sheets", controller.getUserSheets.bind(controller));
  router.get("/:sheetId", controller.getSheetByIdHandler.bind(controller));

  router.get(
    "/:sheetId/free/details",
    controller.getSheetFreeDetails.bind(controller)
  );

  router.post(
    "/create",
    checkAdmin,
    controller.createSheetHandler.bind(controller)
  );
  router.delete(
    "/:sheetId/delete",
    checkAdmin,
    controller.deleteSheetHandler.bind(controller)
  );
  router.put(
    "/:sheetId/edit",
    checkAdmin,
    controller.editSheetHandler.bind(controller)
  );

  router.post(
    "/:sheetId/problems/add",
    controller.addProblemsInSheetHandler.bind(controller)
  );
  router.delete(
    "/:sheetId/problem/remove",
    controller.removeProblemInSheetHandler.bind(controller)
  );

  return router;
}
