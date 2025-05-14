import { service } from "..";

const base = "user";

export default {
  signup: (data: any) => service.post(`${base}/signup`, data),
  login: (data: any) => service.post(`${base}/login`, data),
  verifyOtp: (data: any) => service.post(`${base}/verify-otp`, data),
  resendOtp: (data: any) => service.post(`${base}/resend-otp`, data),
  verifyEmail: (data: any) => service.post(`${base}/verify-email`, data),
  requestVerification: (data: any) => service.post(`${base}/request-verification`, data),
}

