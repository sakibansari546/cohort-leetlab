import axios from "axios";

export const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_BASE_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});
