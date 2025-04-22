import crypto from "crypto";
import bcrypt, { compare } from "bcryptjs";

import { prisma } from "../../../libs/db.js";
import { logger } from "../../../logger.js";

import { signupSchema, loginSchema } from "../../validation/auth/index.js";
import ApiResponse from "../../utils/api-response.js";

import { sendMail } from "../../utils/emails/nodemailer.js";
import { verificationEmailTemplate } from "../../utils/emails/templates.js";
import { env } from "../../../env.js";
class AuthColtroller {
  validateParseData(body, schema, res) {
    const parsedData = schema.safeParse(body);
    console.log(parsedData.error);

    if (!parsedData.success) {
      const errors = parsedData.error.errors.map((err) => err.message);
      res.status(400).json({ message: errors[0], errors }); // Send one error at a time
      return;
    }
    return parsedData.data;
  }

  generateTemporaryToken() {
    const unHashedToken = crypto.randomBytes(32).toString("hex");

    const hashedToken = crypto
      .createHash("sha256")
      .update(unHashedToken)
      .digest("hex");

    const tokenExpiry = new Date(Date.now() + 1 * 60 * 60 * 1000); // for 1 hour

    return { unHashedToken, hashedToken, tokenExpiry };
  }

  passwordhashAndCompare = {
    async generateHashedPassword(password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      return hashedPassword;
    },
    async comparePassword(password, hashedPassword) {
      const isPassowrdCorrect = await bcrypt.compare(password, hashedPassword);
      return isPassowrdCorrect;
    },
  };

  async signupHandler(req, res) {
    // 1. get data and validate - done
    // 2. check user exist or verified - done
    // 3. check user exist but notVerified and token not exipire - done
    // 4. generate verification token and expiry - done
    // 5. hashed password - done
    // 6. create new user - done
    // 7. send email - done
    // 8. sned res - done
    try {
      const { email, fullname, password } = this.validateParseData(
        req.body,
        signupSchema,
        res
      );

      const existUser = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (existUser && existUser.isEmailVerified) {
        return res
          .status(400)
          .json(
            new ApiResponse(
              400,
              false,
              "User with this email or username already exists"
            )
          );
      }

      if (existUser && !existUser.isEmailVerified) {
        if (existUser.emailVerificationExpiry > Date.now()) {
          return res
            .status(400)
            .json(
              new ApiResponse(
                400,
                false,
                "Email not verified. Please verify your email."
              )
            );
        }
      }

      const { hashedToken, unHashedToken, tokenExpiry } =
        this.generateTemporaryToken();

      const hashedPassowrd =
        await this.passwordhashAndCompare.generateHashedPassword(password);

      const newUser = await prisma.user.create({
        data: {
          fullname,
          email,
          password: hashedPassowrd,
          emailVerificationToken: hashedToken,
          emailVerificationExpiry: tokenExpiry,
        },
      });

      if (!newUser) {
        return res
          .status(401)
          .json(new ApiResponse(401, false, "Error - while create new user"));
      }

      await sendMail({
        email,
        subject: "Verify your email!",
        mailgenContent: verificationEmailTemplate(
          fullname,
          `${env.FRONTEND_BASE_URL}/verify-email/${unHashedToken}`
        ),
      });

      res
        .status(201)
        .json(
          new ApiResponse(
            201,
            true,
            "User created successfully. Please verify your email."
          )
        );
    } catch (error) {
      logger.error(`Internal Sever while signup ${error}`);
      res
        .status(500)
        .json(new ApiResponse(500, false, "Internal Server error!", {}));
    }
  }

  async verifyEmailHandler(req, res) {
    
  }

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
