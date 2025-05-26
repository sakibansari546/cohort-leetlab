import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { register as registerHealthRoutes } from "./routes/health/route.js";
import { register as registerAuthRoutes } from "./routes/auth/route.js";
import { register as registerUserRoutes } from "./routes/user/route.js";
import { register as registerProblemRoutes } from "./routes/problem/route.js";
import { register as registerExecuteCodeRoutes } from "./routes/executeCode/route.js";
import { register as registerSubmissionRoutes } from "./routes/submission/route.js";
import { register as registerPlaylistRoutes } from "./routes/playlist/route.js";

import { register as registerAdminRoutes } from "./routes/admin/route.js";

import { prisma } from "../libs/db.js";
import { env } from "../libs/env.js";

import ApiResponse from "./utils/api-response.js";

export function createExpressApp() {
  const app = express();

  // Middlewares
  app.use(
    cors({
      origin: ["*", env.FRONTEND_BASE_URL],
      credentials: true,
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    })
  );
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
  app.use("/api/v1/code/", registerExecuteCodeRoutes());
  app.use("/api/v1/submission", registerSubmissionRoutes());
  app.use("/api/v1/playlist", registerPlaylistRoutes());

  app.use("/api/v1/admin", registerAdminRoutes());

  app.use((err, req, res, next) => {
    if (err.code == "P2002" && err.meta.target[0] === "email") {
      return res
        .status(400)
        .json(new ApiResponse(400, "Email is already exist", { error: err }));
    }
    if (
      err.code == "P2002" &&
      err.meta.target[0] === "name" &&
      err.meta.target[1] === "userId" &&
      err.meta.modelName === "Playlist"
    ) {
      return res
        .status(400)
        .json(
          new ApiResponse(400, "Playlist name should be unique", { error: err })
        );
    }
    res
      .status(err.statusCode || 500)
      .json(
        new ApiResponse(err.statusCode || 500, err.message, { error: err })
      );
  });

  return app;
}
