import express from "express";
import cookieParser from "cookie-parser";

import { register as registerHealthRoutes } from "./routes/health/route.js";
import { register as registerAuthRoutes } from "./routes/auth/route.js";
import { register as registerUserRoutes } from "./routes/user/route.js";
import { register as registerProblemRoutes } from "./routes/problem/route.js";
import { register as registerExecuteCodeRoutes } from "./routes/executeCode/route.js";

import { prisma } from "../libs/db.js";

export function createExpressApp() {
  const app = express();

  // Middlewares
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  app.post("/delete", async (req, res) => {
    const deleteAllUser = await prisma.user.deleteMany({});
    res.json({ deleteAllUser });
  });

  // Routes
  app.use("/api/v1/health", registerHealthRoutes());
  app.use("/api/v1/auth", registerAuthRoutes());
  app.use("/api/v1/user", registerUserRoutes());
  app.use("/api/v1/problem", registerProblemRoutes());
  app.use("/api/v1/execute/code", registerExecuteCodeRoutes());

  return app;
}
