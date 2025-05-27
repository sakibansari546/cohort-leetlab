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
import { logger } from "../libs/logger.js";

import ApiResponse from "./utils/api-response.js";
import ApiError from "./utils/api-error.js";

export function createExpressApp() {
  const app = express();

  app.set("trust proxy", 1);

  // Middlewares
  const corsOptions = {
    origin: [
      env.FRONTEND_BASE_URL,
      "https://hypecoding-f.vercel.app",
      "https://www.hypecoding.live",
      "https://hypecoding.live",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    // allowedHeaders: ["Content-Type", "Authorization"],
  };

  // this sets CORS on every route, including OPTIONS
  app.use(cors(corsOptions));

  // then explicitly answer all OPTIONS preflights
  // app.options("*", cors(corsOptions));

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
    if (err.code === "P2002") {
      const field = err.meta.target[0];
      return res.status(400).json({
        status: "error",
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} already exists.`,
      });
    }

    // Other known errors
    if (err instanceof ApiError) {
      return res.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }

    logger.error(err);
    logger.error(err.isCustomApiError);
    res.status(err.statusCode || 500).json(
      new ApiResponse(err.statusCode || 500, err.message, {
        error: { message: err.message || "Internal server error" },
      })
    );
  });

  return app;
}
