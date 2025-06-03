import express from "express";
import PurchaseController from "./controller.js";

export function register() {
  const router = express.Router();
  const controller = new PurchaseController();

  router.post("/buy/:sheetId", controller.buySheet.bind(controller));
  router.post(
    "/:sheetId/verify-payment",
    controller.verifyBuySheetPayment.bind(controller)
  );

  router.get("/razorpay/key", controller.getRazorpayKey.bind(controller));

  return router;
}
