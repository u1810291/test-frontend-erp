"use client";

import { useState } from "react";
import OTPInput from '@/components/Forms/OtpInput';
import { Button } from "flowbite-react/components/Button";
import useAuth from '@/hooks/useAuth';

export default function EmailVerificationOTPForm() {
  const [otp, setOtp] = useState<string>();
  const { verify, loading } = useAuth()

  return (
    <section className="bg-white px-4 py-8 dark:bg-gray-900 lg:py-0">
      <div className="lg:flex">
        <div className="bg-primary-600 hidden w-full max-w-md p-12 lg:block lg:h-screen">
          <div className="mb-8 flex items-center space-x-4">
            <a
              href="#"
              className="flex items-center text-2xl font-semibold text-white"
            >
              <img alt="" src="./gh_small_logo.svg" className="mr-2 size-11" />
            </a>
            <a
              href="/login"
              className="text-primary-100 inline-flex items-center text-sm font-medium hover:text-white"
            >
              <svg
                className="mr-1 size-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Go back
            </a>
          </div>
        </div>
        <div className="mx-auto flex items-center md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <div className="mb-8 flex items-center justify-center space-x-4 lg:hidden">
              <a href="#" className="flex items-center text-2xl font-semibold">
                <img
                  alt=""
                  className="mr-2 size-8"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                />
                <span className="text-gray-900 dark:text-white">Flowbite</span>
              </a>
            </div>
            <h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              Verify your email address
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              We emailed you a six-digit code to&nbsp;
              <span className="font-medium text-gray-900 dark:text-white">
                name@company.com
              </span>
              . Enter the code below to confirm your email address.
            </p>
            <form onSubmit={verify(otp)}>
              <OTPInput onComplete={setOtp} />
              <p className="mb-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-500 dark:bg-gray-800 dark:text-gray-400 md:mb-6">
                Make sure to keep this window open while checking your inbox.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="submit"
                  size="xl"
                  className="bg-ghred-500 hover:bg-ghred-600 w-full"
                >
                  Verify account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
