"use client"

import Error from "@/components/Toasts/Error";
import Success from "@/components/Toasts/Success";
import Warning from "@/components/Toasts/Warning";
import { Toast } from "flowbite-react/components/Toast";
import { ToastTypes } from '@/components/Toasts/interfaces';

export default function ToastComponent({ success, error, warn, message }: ToastTypes) {
  return (
    <div className="flex flex-col gap-4">
      <Toast>
        {success && <Success message={message} />}
        {error && <Error message={message} />}
        {warn && <Warning message={message} />}
      </Toast>
    </div>
  );
}
