import express from "express";

import { isAuth, checkAdmin } from "../../middleware/auth.js";

import ProblemController from "./controller.js";

export function register() {
  const router = express.Router();
  const controller = new ProblemController();

  router.post(
    "/create",
    isAuth,
    checkAdmin,
    controller.createProblemHandler.bind(controller)
  );

  router.put(
    "/update/:id",
    isAuth,
    checkAdmin,
    controller.updateProblemHandler.bind(controller)
  );

  router.delete(
    "/delete/:id",
    isAuth,
    checkAdmin,
    controller.deleteProblemHandler.bind(controller)
  );

  router.get(
    "/problems",
    isAuth,
    controller.getAllProblemsHandler.bind(controller)
  );
  router.get("/:id", isAuth, controller.getProblemByIdHandler.bind(controller));

  router.get(
    "/problems/solved",
    isAuth,
    controller.getSolvedProblemsHandler.bind(controller)
  );

  router.get(
    "/problems/solved/count",
    isAuth,
    controller.getSolvedProblemsCountHandler.bind(controller)
  );
  router.get(
    "/problems/count",
    isAuth,
    controller.getProblemsCountHandler.bind(controller)
  );

  return router;
}
