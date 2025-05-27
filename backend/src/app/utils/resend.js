import { Resend } from "resend";
import { env } from "../../libs/env.js";

export const resend = new Resend(env.RESEND_MAIL_API_KEY);
