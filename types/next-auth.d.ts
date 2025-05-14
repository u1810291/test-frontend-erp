import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    user: {
      id: string;
      email: string;
      name?: string;
      user_type?: string;
      token?: string;
      message?: string;
      is_email_verified?: boolean;
      [key: string]: any;
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string;
    user_type?: string;
    token?: string;
    is_email_verified?: boolean;
    [key: string]: any;
  }

  interface JWT {
    accessToken?: string;
    refreshToken?: string;
    user?: User;
  }
}