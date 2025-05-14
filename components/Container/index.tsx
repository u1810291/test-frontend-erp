"use client"

import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { PropsWithChildren, useEffect } from "react";

export default function Container({ children }: PropsWithChildren) {
  const { data: session, status } = useSession();
  const { push } = useRouter()

  useEffect(() => {
    if (session?.user?.message && status === "authenticated") {
      console.log(session)
      toast.success(session.user.message);
      push("/otp");
    } else if (session?.user?.token && status === "authenticated") {
      push("/dashboard");
    }
  }, [session]);

  return (
    <div>{children}</div>
  )
}
