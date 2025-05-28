import axios from "axios";
import { env } from "../../libs/env.js";

export const axiosInstance = axios.create({
  baseURL: `${env.JUDGE0_API_URL}`,
  headers: {
    Accept: "application/json",
    // Authorization: `Bearer ${env.JUDGE0_SULU_KEY}`,
  },
  withCredentials: true,
});
