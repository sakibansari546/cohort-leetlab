import express from "express";
import cookieParser from "cookie-parser";
import { register as registerHealthRoutes } from "./routes/health/route.js";
import { register as registerAuthRoutes } from "./routes/auth/route.js";
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
  return app;
}
