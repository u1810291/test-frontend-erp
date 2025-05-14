import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

type TokenType = {
  user: {
    id: string;
    email: string;
    name?: string;
    user_type?: string;
    token?: string;
  };
  accessToken?: string;
  refreshToken?: string;
}

const credentials = {
  mode: { label: "Mode", type: "text" },
  email: { label: "Email", type: "text" },
  phone: { label: "Phone", type: "text" },
  password: { label: "Password", type: "password" },
  otp: { label: "OTP", type: "text", optional: true },
  user_type: { label: "User Type", type: "text", optional: true },
}

const credentialsProvider = CredentialsProvider({
  name: "Credentials",
  credentials,
  async authorize(credentials) {
    const { email, password, otp, user_type, mode } = credentials ?? {};

    let endpoint = "";
    let payload: any = {};

    switch (mode) {
      case "login":
        endpoint = "user/login";
        payload = { email, password, user_type };
        break;

      case "signup":
        endpoint = "user/signup";
        payload = { email, password, phone: credentials?.phone, user_type };
        break;

      case "verify_otp":
        endpoint = "user/verify-otp";
        payload = { email, otp, user_type };
        break;

      default:
        throw new Error("Invalid auth mode");
    }

    const headers: HeadersInit = {
      "Content-Type": "application/json",
    }

    if (process.env.BACKEND_API_V1_KEY) {
      headers["api_key"] = process.env.BACKEND_API_V1_KEY
    }
    const res = await fetch(`${process.env.BACKEND_URL}${endpoint}`, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok || !data) {
      throw new Error(data.message || data.detail || "Authentication failed");
    }

    return data.user ?? data;
  },
})

export const authOptions: AuthOptions = {
  providers: [credentialsProvider],
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
        token.accessToken = user.access_token;
        token.refreshToken = user.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      const typedToken = token as TokenType;
      session.user = typedToken.user;
      session.accessToken = typedToken.accessToken;
      session.refreshToken = typedToken.refreshToken;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
}