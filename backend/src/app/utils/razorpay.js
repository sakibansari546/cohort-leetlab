import { env } from "../../libs/env.js";
import Razorpay from "razorpay";

export const razorpayInstance = new Razorpay({
  key_id: env.RAZORPAY_API_KEY,
  key_secret: env.RAZORPAY_API_SECRET,
});
