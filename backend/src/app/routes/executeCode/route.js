import express from "express";

import ExecuteCodeController from "./controller.js";

import { isAuth } from "../../middleware/auth.js";

export function register() {
  const router = express.Router();
  const controller = new ExecuteCodeController();

  router.post("/:problemId", isAuth, controller.executeCode.bind(controller));

  return router;
}
