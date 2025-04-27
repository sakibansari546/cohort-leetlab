import jwt from "jsonwebtoken";

import { env } from "../../libs/env.js";
import { logger } from "../../libs/logger.js";
import { prisma } from "../../libs/db.js";

import ApiResponse from "../utils/api-response.js";
import ApiError from "../utils/api-error.js";

export async function isAuth(req, res, next) {
  const accessToken =
    req.cookies.accessToken ||
    req.header("authorization")?.replace("Bearer ", "");

  if (!accessToken) {
    throw new ApiError(404, "Unauthorized - No token provided!");
  }
  let decoded;
  try {
    decoded = jwt.verify(accessToken, env.ACCESS_TOKEN_SECRET);
    if (!decoded) {
      throw new ApiError(401, "Unauthorized - Invalid token");
    }
    req.userId = decoded.id;
    next();
  } catch (error) {
    logger.error(`Error ${error}`);
    if (error.name === "TokenExpiredError") {
      throw new ApiError(401, "Unauthorized - Token has expired", error);
    }
    throw new ApiError(500, "Internal Server Error", error);
  }
}

export function checkAdmin(req, _, next) {
  try {
    const user = prisma.user.findUnique({
      where: {
        id: req.userId,
      },
      select: {
        role: true,
      },
    });

    if (!user || !user.role === "ADMIN")
      throw new ApiError(400, "Access denied only access admin!");

    next();
  } catch (error) {
    logger.error(`Error - checking admin in checkAdmin middleware ${error}`);
    throw new ApiError(500, "Internal server error", error);
  }
}
