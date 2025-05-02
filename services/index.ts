
import axios from "axios";
import { setupInterceptorsTo } from "./interceptors";

const baseURL = process.env.BACKEND_URL

export const service = setupInterceptorsTo(axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
}));