import { GoogleGenAI } from "@google/genai";
import { env } from "../../libs/env.js";

export const geminiClient = new GoogleGenAI({ apiKey: env.GEMINI_API_KEY });
