import { prisma } from "../../../libs/db.js";
import { logger } from "../../../libs/logger.js";
import { env } from "../../../libs/env.js";

import ApiResponse from "../../utils/api-response.js";
import ApiError from "../../utils/api-error.js";
import AsyncHandler from "../../utils/async-handler.js";

import { razorpayInstance } from "../../utils/razorpay.js";

import crypto from "node:crypto";

class PurchaseController {
  getRazorpayKey = AsyncHandler(async (req, res) => {
    res.status(200).json(
      new ApiResponse(200, "Razorpay key fetched successfully", {
        key: env.RAZORPAY_API_KEY,
      })
    );
  });

  buySheet = AsyncHandler(async (req, res) => {
    const { sheetId } = req.params;
    if (!sheetId) {
      throw new ApiError(400, "sheetId is required");
    }

    const sheet = await prisma.sheet.findUnique({
      where: {
        id: sheetId,
      },
    });

    const option = {
      amount: sheet.price * 100,
      currency: "INR",
      receipt: "receipt#1",
    };

    razorpayInstance.orders.create(option, (err, order) => {
      if (err) {
        throw new ApiError(500, "Failed to create Razorpay order");
      }
      console.log("After create order", order);

      return res.status(200).json(
        new ApiResponse(200, "Order created successfully", {
          order,
          sheet,
        })
      );
    });
  });

  verifyBuySheetPayment = AsyncHandler(async (req, res) => {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      amount,
      currency,
      status,
      userId,
    } = req.body;
    const { sheetId } = req.params;

    console.log(req.userId);

    if (!sheetId) {
      throw new ApiError(400, "sheetId is required");
    }

    const sheet = await prisma.sheet.findUnique({
      where: {
        id: sheetId,
      },
    });

    if (!sheet) {
      throw new ApiError(404, "Sheet not found");
    }

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", env.RAZORPAY_API_SECRET)
      .update(body.toString())
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      throw new ApiError(400, "Invalid payment signature");
    }

    const purchase = await prisma.purchase.create({
      data: {
        userId: req.userId || userId,
        sheetId: sheet.id,
      },
    });

    const payment = await prisma.payment.create({
      data: {
        userId: req.userId || userId,
        purchaseId: purchase.id,
        amount: parseFloat(amount / 100),
        currency: currency,
        status: status,
        orderId: razorpay_order_id,
        paymentId: razorpay_payment_id,
      },
    });

    res.redirect(`${env.FRONTEND_BASE_URL}/sheets/${sheetId}`);
  });
}

export default PurchaseController;
