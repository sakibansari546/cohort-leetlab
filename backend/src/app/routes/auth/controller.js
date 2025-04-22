import { env } from "../../../env.js";
import { logger } from "../../../logger.js";
import { signupSchema, loginSchema } from "../../validation/auth/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../../../libs/db.js";

class AuthColtroller {
  validateParseData(body, schema, res) {
    const parsedData = schema.safeParse(body);
    // console.log(parsedData);

    if (!parsedData.success) {
      const errors = parsedData.error.errors.map((err) => err.message);
      res.status(400).json({ message: errors[0], errors }); // Send one error at a time
      return;
    }
    return parsedData.data;
  }

  async signupHandler(req, res) {
    try {
    } catch (error) {}
  }

  async verifyEmailHandler(req, res) {}

  async loginHandler(req, res) {
    res.status(200).json({
      message: "Login route",
    });
  }

  logoutHandler(req, res) {
    res.status(200).json({
      message: "Logout route",
    });
  }

  async refreshTokenHandler(req, res) {}

  async forgotPasswordHandler(req, res) {}
  async resetPasswordHandler(req, res) {}
}
export default AuthColtroller;
