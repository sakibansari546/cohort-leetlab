import express from "express";
import { register as registerHealthRoutes } from "./routes/health/route.js";
import { register as registerAuthRoutes } from "./routes/auth/route.js";
export function createExpressApp() {
  const app = express();
  app.use("/health", registerHealthRoutes());
  app.use("/auth", registerAuthRoutes());
  return app;
}
