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

  async signup(req, res) {
    try {
      const { email, fullname, password } = this.validateParseData(
        req.body,
        signupSchema,
        res
      );
      const existingUser = await db.user.findUnique({
        where: {
          email,
        },
      });

      if (existingUser)
        return res
          .status(400)
          .json({ success: false, message: "User already exist" });

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await db.user.create({
        data: {
          email,
          fullname,
          password: hashedPassword,
        },
      });

      if (!newUser)
        return res
          .status(401)
          .json({ success: false, message: "Error While creating user!" });

      const token = jwt.sign({ id: newUser.id }, env.JWT_SECRET, {
        expiresIn: env.JWT_TOKEN_EXPIRY,
      });

      res.cookie("token", token, {
        maxAge: 2 * 24 * 60 * 60 * 1000, // for 2 days
        httpOnly: true,
        secure: env.NODE_ENV !== "development",
        sameSite: "strict",
      });

      const userData = {
        id: newUser.id,
        fullname: newUser.fullname,
        email: newUser.email,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      };

      res.status(201).json({
        success: true,
        message: "User created successfully!",
        data: { newUser: userData },
      });
    } catch (error) {
      logger.error(`Error Signup controller ${error}`);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  login(req, res) {
    res.status(200).json({
      message: "Login route",
    });
  }

  logout(req, res) {
    res.status(200).json({
      message: "Logout route",
    });
  }
}
export default AuthColtroller;
