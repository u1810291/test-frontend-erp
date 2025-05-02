import { service } from ".";

const base = "user";

export default {
  signup: (data: any) => service.post(`${base}/signup`, data),
  login: (data: any) => service.post(`${base}/login`, data)
}

