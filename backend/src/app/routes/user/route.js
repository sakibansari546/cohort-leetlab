import express from "express";

import UserController from "./controller.js";
import { isAuth } from "../../middleware/auth.js";

export function register() {
  const router = express.Router();
  const controller = new UserController();

  router.get("/me", isAuth, controller.getUserHandler.bind(controller));
  router.patch(
    "/update",
    isAuth,
    controller.updateUserHandler.bind(controller)
  );

  return router;
}
