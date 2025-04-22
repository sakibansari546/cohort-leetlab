import express from "express";
import AuthColtroller from "./controller.js";

export function register() {
  const router = express.Router();
  const controller = new AuthColtroller();

  router.post("/signup", controller.signupHandler.bind(controller));
  router.get("/verify-email/:token", controller.signupHandler.bind(controller));

  router.post("/refresh", controller.refreshTokenHandler.bind(controller));

  router.post("/login", controller.loginHandler.bind(controller));
  router.post("/logout", controller.logoutHandler.bind(controller));

  router.post(
    "/forgot-password",
    controller.forgotPasswordHandler.bind(controller)
  );
  router.post(
    "/reset-password/:token",
    controller.resetPasswordHandler.bind(controller)
  );

  return router;
}
