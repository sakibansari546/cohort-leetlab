import express from "express";

import AuthColtroller from "./controller.js";
import { isAuth } from "../../middleware/auth.js";

export function register() {
  const router = express.Router();
  const controller = new AuthColtroller();
  // Done
  router.post("/signup", controller.signupHandler.bind(controller));
  router.get(
    "/verify-email/:token",
    controller.verifyEmailHandler.bind(controller)
  );

  router.post("/google-auth", controller.googleAuth.bind(controller));
  router.post("/login", controller.loginHandler.bind(controller));
  router.post("/logout", isAuth, controller.logoutHandler.bind(controller));

  router.post(
    "/forgot-password",
    controller.forgotPasswordHandler.bind(controller)
  );
  router.post(
    "/reset-password/:token",
    controller.resetPasswordHandler.bind(controller)
  );

  router.post("/refresh", controller.refreshTokenHandler.bind(controller));

  return router;
}
