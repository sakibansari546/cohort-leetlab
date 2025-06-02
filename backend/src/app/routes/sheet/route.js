import express from "express";
import SheetController from "./controller.js";

import { isAuth, checkAdmin } from "../../middleware/auth.js";

export function register() {
  const router = express.Router();
  const controller = new SheetController();

  router.use(isAuth);

  router.post(
    "/create",
    checkAdmin,
    controller.createSheetHandler.bind(controller)
  );
  router.get(
    "/all",
    checkAdmin,
    controller.createSheetHandler.bind(controller)
  );


  return router;
}
