import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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
    logger.error(parsedData.error);

    if (!parsedData.success) {
      const errors = parsedData.error.errors.map((err) => err.message);
      res.status(400).json({ message: errors[0], errors }); // Send one error at a time
      return;
    }
    return parsedData.data;
  }

  generateJWTTokens = {
    generateAccessToken(user) {
      return jwt.sign({ id: user.id }, env.ACCESS_TOKEN_SECRET, {
        expiresIn: env.ACCESS_TOKEN_EXPIRY,
      });
    },
    generateRefreshToken(user) {
      return jwt.sign({ id: user.id }, env.REFRESH_TOKEN_SECRET, {
        expiresIn: env.REFRESH_TOKEN_EXPIRY,
      });
    },

    generateAccessAndRefreshTokenAndSetCookie(user, res) {
      const accessToken = this.generateAccessToken(user);
      const refreshToken = this.generateRefreshToken(user);

      // Yaha me or optimize kr sakta hu direct refresh token ko db me store kr dakta hu

      const cookieOptions = {
        maxAge: 7 * 24 * 60 * 60 * 1000, // for 7 days
        httpOnly: true,
        secure: env.NODE_ENV !== "development",
        sameSite: "strict",
      };

      res.cookie("accessToken", accessToken, cookieOptions);
      res.cookie("refreshToken", refreshToken, cookieOptions);

      return { accessToken, refreshToken };
    },
  };

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
          `${env.BACKEND_BASE_URL}/auth/verify-email/${unHashedToken}`
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
    // get token and validate - done
    // convert unHashedToken into hashedToken - done
    // find user based on hashedToken - done
    // check isVerified or not - done
    // if verified but not expire - done
    // update isVerify - done
    // generate access And refresh token
    // send res - done
    try {
      const { token } = req.params;
      if (!token)
        return res
          .status(404)
          .json(new ApiResponse(404, false, "Token is required!"));

      const hashedToken = crypto
        .createHash("sha256")
        .update(token)
        .digest("hex");

      const user = await prisma.user.findFirst({
        where: {
          AND: [
            {
              emailVerificationToken: hashedToken,
            },
            {
              emailVerificationExpiry: {
                gt: new Date(Date.now()),
              },
            },
          ],
        },
      });

      if (!user)
        return res
          .status(404)
          .json(new ApiResponse(404, false, "Token is invalid or expire!"));

      if (user && user.isEmailVerified)
        return res
          .status(400)
          .json(new ApiResponse(400, false, "Email is already verified"));

      const updatedUser = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          isEmailVerified: true,
          emailVerificationToken: undefined,
          emailVerificationExpiry: undefined,
        },
      });

      if (!updatedUser)
        return res
          .status(401)
          .json(
            new ApiResponse(
              401,
              false,
              "Somethong went wrong while updating user"
            )
          );

      const { accessToken, refreshToken } =
        this.generateJWTTokens.generateAccessAndRefreshTokenAndSetCookie(
          updatedUser,
          res
        );

      const addingRefreshTokenInDb = await prisma.user.update({
        omit: {
          password: true,
          emailVerificationToken: true,
          emailVerificationExpiry: true,
          forgotPasswordToken: true,
          forgotPasswordExpiry: true,
        },
        where: {
          id: updatedUser.id,
        },
        data: {
          refreshToken: refreshToken,
        },
      });

      res.status(200).json(
        new ApiResponse(200, true, "Email Verified Successfully!", {
          user: addingRefreshTokenInDb,
          accessToken,
          refreshToken,
        })
      );
    } catch (error) {
      logger.error(`Internal Sever while Verify Email ${error}`);
      res
        .status(500)
        .json(new ApiResponse(500, false, "Internal Server error!", {}));
    }
  }

  async loginHandler(req, res) {
    // get data and validate - done
    // check user exist or not - done
    // check email verified or not - done
    // compare password - done
    // generate tokens and set cookie - done
    // send rees

    try {
      const { email, password } = this.validateParseData(
        req.body,
        loginSchema,
        res
      );

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user)
        return res
          .status(404)
          .json(new ApiResponse(404, false, "User doesn't exist!"));

      if (user && !user.isEmailVerified)
        return res
          .status(400)
          .json(new ApiResponse(401, false, "Email is not verified!"));

      const isPassowrdCorrect =
        await this.passwordhashAndCompare.comparePassword(
          password,
          user.password
        );

      if (!isPassowrdCorrect)
        return res
          .status(400)
          .json(new ApiResponse(400, false, "Invalid email or password!"));

      const { accessToken, refreshToken } =
        this.generateJWTTokens.generateAccessAndRefreshTokenAndSetCookie(
          user,
          res
        );

      const addingRefreshTokenInDb = await prisma.user.update({
        omit: {
          password: true,
          emailVerificationToken: true,
          emailVerificationExpiry: true,
          forgotPasswordToken: true,
          forgotPasswordExpiry: true,
        },
        where: {
          id: user.id,
        },
        data: {
          refreshToken: refreshToken,
        },
      });

      res.status(200).json(
        new ApiResponse(200, false, "Login successfully!", {
          user: addingRefreshTokenInDb,
          accessToken,
          refreshToken,
        })
      );
    } catch (error) {
      logger.error(`Internal Sever while Login ${error}`);
      res
        .status(500)
        .json(new ApiResponse(500, false, "Internal Server error!", {}));
    }
  }

  async logoutHandler(req, res) {
    // find auth user using req.userId - done
    // remove token
    // clear cookies
    // send res
    try {
      const user = await prisma.user.findUnique({
        where: {
          id: req.userId,
        },
      });

      if (!user)
        return res
          .status(404)
          .json(new ApiResponse(404, false, "User not found!"));

      const removeRefreshToken = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken: undefined,
        },
      });

      // const cookieOptions = {};

      res.clearCookie("accessToken");
      res.clearCookie("refreshToken");

      res.status(200).json(new ApiResponse(200, true, "Logout successfully"));
    } catch (error) {
      logger.error(`Internal Sever while Logout ${error}`);
      res
        .status(500)
        .json(new ApiResponse(500, false, "Internal Server error!", {}));
    }
  }

  async refreshTokenHandler(req, res) {
    // get refreshToken and validate - done
    // verify refresh token - done
    // find user based on req.userId - done
    // check userToken matched with user.refreshTOken or not -done
    // generate new tokens and update refresh token - done
    //  sned res
    try {
      const userRefreshToken =
        req.cookies.refreshToken ||
        req.header("Authorization")?.replace("Bearer ", "");

      if (!userRefreshToken)
        return res
          .status(404)
          .json(new ApiResponse(404, false, "No Refresh token - Unauthorized"));

      const decodedToken = jwt.verify(
        userRefreshToken,
        env.REFRESH_TOKEN_SECRET
      );
      if (!decodedToken)
        return res
          .status(401)
          .json(
            new ApiResponse(401, false, "Invalid Refresh token - Unauthorized")
          );

      const user = await prisma.user.findUnique({
        where: {
          id: decodedToken.id,
        },
      });
      if (!user)
        return res
          .status(404)
          .json(new ApiResponse(404, false, "Invalid refresh token"));

      if (userRefreshToken !== user.refreshToken)
        return res
          .status(401)
          .json(
            new ApiResponse(401, false, "Refresh token mismatch - Unauthorized")
          );

      const { accessToken, refreshToken } =
        this.generateJWTTokens.generateAccessAndRefreshTokenAndSetCookie(
          user,
          res
        );

      const setRefreshToken = await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          refreshToken: refreshToken,
        },
      });

      if (!setRefreshToken)
        return res
          .status(404)
          .json(
            new ApiResponse(404, false, "Error - setting refresh token in db")
          );

      res.status(200).json(
        new ApiResponse(200, true, "Token Refrehed successfully", {
          accessToken,
          refreshToken,
        })
      );
    } catch (error) {
      logger.error(`Internal Sever while refresh token ${error}`);
      res
        .status(500)
        .json(new ApiResponse(500, false, "Internal Server error!", {}));
    }
  }

  async forgotPasswordHandler(req, res) {}
  async resetPasswordHandler(req, res) {}
}
export default AuthColtroller;
