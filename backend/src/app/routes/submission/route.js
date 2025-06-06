import express from "express";

import SubmissionController from "./controller.js";

import { isAuth } from "../../middleware/auth.js";

export function register() {
  const router = express.Router();
  const controller = new SubmissionController();

  router.get(
    "/submissions/all",
    isAuth,
    controller.getAllSubmissions.bind(controller)
  );

  router.get(
    "/submissions/:submissionId",
    isAuth,
    controller.getSubmissionById.bind(controller)
  );

  router.get(
    "/submissions/problem/:problemId",
    isAuth,
    controller.getSubmissionForProblem.bind(controller)
  );

  router.get(
    "/submissions/count/:problemId",
    isAuth,
    controller.getAllSubmissionCountForProblem.bind(controller)
  );
  router.get(
    "/submissions/count",
    isAuth,
    controller.getAllSubmissionCount.bind(controller)
  );

  return router;
}
