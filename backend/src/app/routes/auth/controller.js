import crypto from "crypto";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import axios from "axios";

import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";
import { env } from "../../../libs/env.js";

import ApiResponse from "../../utils/api-response.js";
import ApiError from "../../utils/api-error.js";
import AsyncHandler from "../../utils/async-handler.js";

import {
  signupSchema,
  loginSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from "../../validation/auth/index.js";

import { sendMail } from "../../utils/emails/nodemailer.js";
import {
  forgotPasswordEmailTemplate,
  verificationEmailTemplate,
} from "../../utils/emails/templates.js";
import { handleZodError } from "../../utils/handle-zod-error.js";

import { oauth2Client } from "../../utils/google.js";

class AuthColtroller {
  validateParseData(schema, body) {
    return schema.safeParse(body || {});
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

  signupHandler = AsyncHandler(async (req, res) => {
    // 1. get data and validate - done
    // 2. check user exist or verified - done
    // 3. check user exist but notVerified and token not exipire - done
    // 4. generate verification token and expiry - done
    // 5. hashed password - done
    // 6. create new user - done
    // 7. send email - done
    // 8. sned res - done
    const parsedData = handleZodError(
      this.validateParseData(signupSchema, req.body)
    );
    const { fullname, email, password } = parsedData;

    const existUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existUser && existUser.isEmailVerified) {
      throw new ApiError(
        400,
        "User with this email or username already exists"
      );
    }

    if (existUser && !existUser.isEmailVerified) {
      if (existUser.emailVerificationExpiry > Date.now()) {
        throw new ApiError(
          400,
          "Email not verified. Please verify your email."
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
      throw new ApiError(401, "Error - while creating new user");
    }

    await sendMail({
      email,
      subject: "Verify your email!",
      mailgenContent: verificationEmailTemplate(
        fullname,
        `${env.BACKEND_BASE_URL}/api/v1/auth/verify-email/${unHashedToken}`
      ),
    });

    res
      .status(201)
      .json(
        new ApiResponse(
          201,
          "User created successfully. Please verify your email."
        )
      );
  });

  verifyEmailHandler = AsyncHandler(async (req, res) => {
    // get token and validate - done
    // convert unHashedToken into hashedToken - done
    // find user based on hashedToken - done
    // check isVerified or not - done
    // if verified but not expire - done
    // update isVerify - done
    // generate access And refresh token
    // send res - done

    const { token } = req.params;
    if (!token) {
      throw new ApiError(404, "Token is required!");
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

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

    if (!user) {
      throw new ApiError(404, "Token is invalid or expired!");
    }

    if (user && user.isEmailVerified) {
      throw new ApiError(400, "Email is already verified");
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        isEmailVerified: true,
        emailVerificationToken: null,
        emailVerificationExpiry: null,
      },
    });

    if (!updatedUser) {
      throw new ApiError(401, "Something went wrong while updating user");
    }

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

    // res.status(200).json(
    //   new ApiResponse(200, "Email Verified Successfully!", {
    //     user: addingRefreshTokenInDb,
    //     accessToken,
    //     refreshToken,
    //   })
    // );
    res.redirect(env.FRONTEND_BASE_URL);
  });

  loginHandler = AsyncHandler(async (req, res) => {
    // get data and validate - done
    // check user exist or not - done
    // check email verified or not - done
    // compare password - done
    // generate tokens and set cookie - done
    // send rees
    const parsedData = handleZodError(
      this.validateParseData(loginSchema, req.body)
    );

    const { email, password } = parsedData;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ApiError(404, "User doesn't exist!");
    }

    if (user && user.isGoogleAuth) {
      throw new ApiError(400, "Please login using Google authentication.");
    }

    if (user && !user.isEmailVerified) {
      throw new ApiError(401, "Email is not verified!");
    }

    const isPasswordCorrect = await this.passwordhashAndCompare.comparePassword(
      password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new ApiError(400, "Invalid email or password!");
    }

    const { accessToken, refreshToken } =
      this.generateJWTTokens.generateAccessAndRefreshTokenAndSetCookie(
        user,
        res
      );

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken: refreshToken,
      },
      select: {
        id: true,
        fullname: true,
        email: true,
        isEmailVerified: true,
      },
    });

    res.status(200).json(
      new ApiResponse(200, "Login successfully!", {
        user: updatedUser,
        accessToken,
        refreshToken,
      })
    );
  });

  googleAuth = AsyncHandler(async (req, res) => {
    const { code } = req.body;
    const googleRes = await oauth2Client.getToken(code);
    console.log(googleRes);
    oauth2Client.setCredentials(googleRes.tokens);

    const userInfo = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );

    console.log("user info", userInfo);
    const { email, name: fullname, picture } = userInfo;

    const existUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!existUser) {
      const newUser = await prisma.user.create({
        data: {
          fullname,
          email,
          isEmailVerified: true,
          isGoogleAuth: true,
          profileImage: picture,
        },
      });
      const { accessToken, refreshToken } =
        this.generateJWTTokens.generateAccessAndRefreshTokenAndSetCookie(
          newUser,
          res
        );

      const updateUser = await prisma.user.update({
        where: {
          id: newUser.id,
        },
        data: {
          refreshToken: refreshToken,
        },
        select: {
          email: true,
          fullname: true,
          profileImage: true,
          isEmailVerified: true,
          isGoogleAuth: true,
        },
      });

      return res.status(200).json(
        new ApiResponse(200, "Login successfully", {
          user: updateUser,
          accessToken,
          refreshToken,
        })
      );
    }

    if (existUser && !existUser.isEmailVerified) {
      throw new ApiError(400, "Email is not verified please verify you email");
    }

    if (existUser && !existUser.isGoogleAuth) {
      throw new ApiError(
        400,
        "Account exists with this email but is not linked to Google. Please login with your password."
      );
    }

    const { accessToken, refreshToken } =
      this.generateJWTTokens.generateAccessAndRefreshTokenAndSetCookie(
        existUser,
        res
      );

    const updateUser = await prisma.user.update({
      where: {
        id: existUser.id,
      },
      data: {
        refreshToken: refreshToken,
      },
      select: {
        email: true,
        fullname: true,
        profileImage: true,
        isEmailVerified: true,
        isGoogleAuth: true,
      },
    });

    res.status(200).json(
      new ApiResponse(200, "Login successfully", {
        user: updateUser,
        accessToken,
        refreshToken,
      })
    );
  });

  logoutHandler = AsyncHandler(async (req, res) => {
    // find auth user using req.userId - done
    // remove token
    // clear cookies
    // send res

    const user = await prisma.user.findUnique({
      where: {
        id: req.userId,
      },
    });

    if (!user) {
      throw new ApiError(404, "User not found!");
    }
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        refreshToken: null,
      },
    });

    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(200).json(new ApiResponse(200, "Logout successfully"));
  });

  refreshTokenHandler = async (req, res) => {
    // get refreshToken and validate - done
    // verify refresh token - done
    // find user based on req.userId - done
    // check userToken matched with user.refreshTOken or not -done
    // generate new tokens and update refresh token - done
    //  sned res
    const userRefreshToken =
      req.cookies.refreshToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!userRefreshToken) {
      throw new ApiError(404, "No Refresh token - Unauthorized");
    }

    const decodedToken = jwt.verify(userRefreshToken, env.REFRESH_TOKEN_SECRET);
    if (!decodedToken) {
      throw new ApiError(401, "Invalid Refresh token - Unauthorized");
    }

    const user = await prisma.user.findUnique({
      where: {
        id: decodedToken.id,
      },
    });
    if (!user) {
      throw new ApiError(404, "Invalid refresh token");
    }

    if (userRefreshToken !== user.refreshToken) {
      throw new ApiError(401, "Refresh token mismatch - Unauthorized");
    }

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

    if (!setRefreshToken) {
      throw new ApiError(404, "Error - setting refreshed token in db");
    }

    res.status(200).json(
      new ApiResponse(200, "Token Refreshed successfully", {
        accessToken,
        refreshToken,
      })
    );
  };

  forgotPasswordHandler = AsyncHandler(async (req, res) => {
    // get email and validate - done
    // chekc user exist or not - done
    // chekc user verified or not - done
    // check if token exist or not expire - done
    // generate token - done
    // set token in db - done
    // sned email - done
    // send res - done
    const parsedData = handleZodError(
      this.validateParseData(forgotPasswordSchema, req.body)
    );
    const { email } = parsedData;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new ApiError(404, "User doesn't exist!");
    }

    if (user && !user.isEmailVerified) {
      throw new ApiError(400, "Email is not verified!");
    }

    if (
      user &&
      user.forgotPasswordToken &&
      user.forgotPasswordExpiry > new Date(Date.now())
    ) {
      throw new ApiError(400, "Token already generated. Check your email!");
    }

    const { hashedToken, unHashedToken, tokenExpiry } =
      this.generateTemporaryToken();

    const updatedUser = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        forgotPasswordToken: hashedToken,
        forgotPasswordExpiry: tokenExpiry,
      },
    });

    if (!updatedUser) {
      throw new ApiError(400, "Error while updating user with token");
    }

    await sendMail({
      email,
      subject: "Reset your password!",
      mailgenContent: forgotPasswordEmailTemplate(
        updatedUser.fullname,
        `${env.FRONTEND_BASE_URL}/reset-password/${unHashedToken}`
      ),
    });

    res.status(200).json(new ApiResponse(200, "Email sent successfully!"));
  });
  resetPasswordHandler = AsyncHandler(async (req, res) => {
    // get passwords and validate - done
    // get token and velidate - done
    // find user based on token - done
    // chekc user exist or not - done
    // check token expire or not - done
    // ganerate hashedPassword - done
    // change password - db - done
    // sned res
    const parsedData = handleZodError(
      this.validateParseData(resetPasswordSchema, req.body)
    );
    const { password, confirmPassword } = parsedData;

    const { token } = req.params;
    if (!token) {
      throw new ApiError(400, "Token is required!");
    }

    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await prisma.user.findFirst({
      where: {
        forgotPasswordToken: hashedToken,
      },
    });

    if (!user) {
      throw new ApiError(404, "User doesn't exist!");
    }

    if (user && user.forgotPasswordExpiry < new Date(Date.now())) {
      throw new ApiError(
        400,
        "Token is expired. Please request a new password reset token."
      );
    }

    const hashedPassword =
      await this.passwordhashAndCompare.generateHashedPassword(password);

    const setPassword = await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        password: hashedPassword,
        forgotPasswordToken: null,
        forgotPasswordExpiry: null,
      },
    });

    if (!setPassword) {
      throw new ApiError(401, "Error - While setting new password");
    }

    res.status(200).json(new ApiResponse(200, "Password updated successfully"));
  });
}
export default AuthColtroller;
