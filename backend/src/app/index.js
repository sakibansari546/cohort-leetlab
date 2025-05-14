import express from "express";
import cookieParser from "cookie-parser";

import { register as registerHealthRoutes } from "./routes/health/route.js";
import { register as registerAuthRoutes } from "./routes/auth/route.js";
import { register as registerUserRoutes } from "./routes/user/route.js";
import { register as registerProblemRoutes } from "./routes/problem/route.js";
import { register as registerExecuteCodeRoutes } from "./routes/executeCode/route.js";
import { register as registerSubmissionRoutes } from "./routes/submission/route.js";
import { register as registerPlaylistRoutes } from "./routes/playlist/route.js";

import { prisma } from "../libs/db.js";

import ApiResponse from "./utils/api-response.js";

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
  app.use("/api/v1/submission", registerSubmissionRoutes());
  app.use("/api/v1/playlist", registerPlaylistRoutes());

  app.use((err, req, res, next) => {
    res
      .status(err.statusCode || 500)
      .json(
        new ApiResponse(err.statusCode || 500, err.message, { error: err })
      );
  });

  return app;
}
