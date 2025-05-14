"use client";

import { Session } from "next-auth";
import { type PropsWithChildren } from "react";
import { SessionProvider } from "next-auth/react";

export default function SessionWrapper({ children, session }: PropsWithChildren<{ session: Session | null }>) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}