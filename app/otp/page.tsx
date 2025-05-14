import React from "react";

const EmailVerificationOTPForm = React.lazy(() => import("@/app/otp/components/OtpForm"));

export default function EmailVerificationPage() {
  return <EmailVerificationOTPForm />;
}
