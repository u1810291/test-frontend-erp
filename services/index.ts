
import axios from "axios";
import { setupInterceptorsTo } from "./interceptors";

const baseURL = process.env.BACKEND_URL
const API_KEY = process.env.BACKEND_API_V1_KEY

export const service = setupInterceptorsTo(axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    api_key: API_KEY,
  },
}));