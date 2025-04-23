import jwt from "jsonwebtoken";

import { env } from "../../env.js";
import { logger } from "../../logger.js";

import ApiResponse from "../utils/api-response.js";

export async function isAuth(req, res, next) {
  const accessToken =
    req.cookies.accessToken ||
    req.header("authorization")?.replace("Bearer ", "");

  if (!accessToken)
    return res
      .status(404)
      .json(new ApiResponse(404, false, "Unauthorized - No token provided!"));

  const decoded = jwt.verify(accessToken, env.ACCESS_TOKEN_SECRET);

  if (!decoded)
    return res
      .status(401)
      .json(new ApiResponse(401, false, "Unauthorized - Invalid token"));

  req.userId = decoded.id;
  next();
}
