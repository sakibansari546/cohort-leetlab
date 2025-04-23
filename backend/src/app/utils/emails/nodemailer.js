import { env } from "../../../libs/env.js";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";
import { logger } from "../../../libs/logger.js";

const transport = nodemailer.createTransport({
  host: env.MAILTRAP_SMTP_HOST,
  port: env.MAILTRAP_SMTP_PORT,
  auth: {
    user: env.MAILTRAP_SMTP_USER,
    pass: env.MAILTRAP_SMTP_PASS,
  },
});

export async function sendMail(options) {
  const mailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "LeetLab",
      link: env.FRONTEND_BASE_URL,
    },
  });
  // Generate an HTML email with the provided contents
  const emailBody = mailGenerator.generate(options.mailgenContent);

  // Generate the plaintext version of the e-mail (for clients that do not support HTML)
  const emailText = mailGenerator.generatePlaintext(options.mailgenContent);

  const mailOptions = {
    from: "leetlab.com", // sender address
    to: options.email, // list of receivers
    subject: options.subject, // Subject line
    text: emailText, // plain text body
    html: emailBody, // html body
  };

  try {
    // send mail with defined transport object
    const info = await transport.sendMail(mailOptions);
    logger.info(`Email sned ${info.messageId}`);
  } catch (error) {
    logger.error(`Error Sending Email ${error}`);
  }
}

// sendMail({
//   email: "ankitbharatwaaj@gmail.com",
//   subject: "Verify your email",
//   mailgenContent: verificationEmailTemplate("sakib", "http....."),
// });
