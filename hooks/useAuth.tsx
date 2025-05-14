"use client"

import { toast } from "sonner";
import auth from '@/services/user/auth';
import { signIn, useSession } from "next-auth/react";
import { useState, useCallback, useEffect } from "react";
import { AllExceptionFilter } from "@/infrastructure/allExceptions";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter()

  const login = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = event.currentTarget?.email?.value;
    const password = event?.currentTarget?.password?.value;

    localStorage.setItem("email", email);
    const operation = () => signIn("credentials", {
      redirect: false,
      email,
      password,
      user_type: "root",
      mode: "login",
      callbackUrl: "/otp"
    });

    await AllExceptionFilter(operation, toast.error, setLoading)
  }, [])

  const verify = useCallback((otp: string | undefined) => async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const operation = () => signIn("credentials", {
      redirect: false,
      otp: otp,
      email: localStorage.getItem("email"),
      user_type: "root",
      mode: "verify_otp",
      callbackUrl: "/dashboard"
    })
    await AllExceptionFilter(operation, toast.error, setLoading)
    localStorage.removeItem("email")
  }, [])

  useEffect(() => {
    if (session?.user?.message && status === "authenticated") {
      toast.success(session.user.message);
      return router.push("/otp");
    } else if (session?.user?.token && status === "authenticated") {
      toast.success(session.user.message);
      return router.push("/dashboard");
    }
    return () => { }
  }, [])

  return {
    login,
    verify,
    loading,
  }
}