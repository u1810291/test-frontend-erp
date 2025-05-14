import React from "react";

const LoginForm = React.lazy(() => import("@/app/login/components/LoginForm"));

export default function LoginPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
      <LoginForm />
    </div>
  );
}
