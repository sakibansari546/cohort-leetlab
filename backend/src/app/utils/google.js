import { google } from "googleapis";
import { env } from "../../libs/env.js";

const GOOGLE_CLIENT_ID = env.GOOGLE_AUTH_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = env.GOOGLE_AUTH_CLIENT_SECRET;

export const oauth2Client = new google.auth.OAuth2({
  clientId: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  redirectUri: "postmessage",
});
