import express from "express";

import UserController from "./controller.js";

import { isAuth } from "../../middleware/auth.js";
import { handleProfileImageWithMulter } from "../../middleware/multer.js";

export function register() {
  const router = express.Router();
  const controller = new UserController();

  router.get("/me", isAuth, controller.getUserHandler.bind(controller));

  router.patch(
    "/update/profile-image",
    isAuth,
    handleProfileImageWithMulter("profileImage"),
    controller.updateProfileImageHandler.bind(controller)
  );

  router.patch(
    "/update/basic/info",
    isAuth,
    controller.updateBasicInfoHandler.bind(controller)
  );

  return router;
}
