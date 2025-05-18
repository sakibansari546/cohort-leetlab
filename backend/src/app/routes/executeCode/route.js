import express from "express";

import ExecuteCodeController from "./controller.js";

import { isAuth } from "../../middleware/auth.js";

export function register() {
  const router = express.Router();
  const controller = new ExecuteCodeController();

  router.post(
    "/submit/:problemId",
    isAuth,
    controller.submitCode.bind(controller)
  );

  router.post("/run/:problemId", isAuth, controller.runCode.bind(controller));

  return router;
}
