import express from "express";
import AuthColtroller from "./controller.js";

export function register() {
  const router = express.Router();
  const controller = new AuthColtroller();

  router.post("/signup", controller.signup.bind(controller));
  router.post("/login", controller.signup.bind(controller));
  router.post("/logout", controller.signup.bind(controller));

  return router;
}
