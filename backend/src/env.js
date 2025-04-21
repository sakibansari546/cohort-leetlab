import { config } from "dotenv";
config();

import { z } from "zod";

const envSchema = z.object({
  PORT: z.string().optional(),
  NODE_ENV: z.string().optional(),
  JWT_SECRET: z.string(),
  JWT_TOKEN_EXPIRY: z.string(),
});

function createENV(env) {
  const validationResult = envSchema.safeParse(env);
  // console.log(validationResult);

  if (!validationResult.success)
    throw new Error(`Error env validate ${validationResult.error.message}`);
  return validationResult.data;
}

export const env = createENV(process.env);
