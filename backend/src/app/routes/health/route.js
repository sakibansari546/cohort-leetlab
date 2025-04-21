import express from "express";
import HealthController from "./controller.js";

export function register() {
  const router = express.Router();
  const controller = new HealthController();

  router.get("/", controller.healthCheckHandler.bind(controller));
  return router;
}
