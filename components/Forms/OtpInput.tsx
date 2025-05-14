import { useState, useRef } from "react";

export default function OTPInput({ length = 6, onComplete }: { length?: number; onComplete: (otp: string) => void }) {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(""));
  const inputs = useRef<HTMLInputElement[]>([]);

  const handleChange = (val: string, index: number) => {
    if (!/^[0-9]?$/.test(val)) return;

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);

    if (val && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div className="my-4 flex space-x-2 sm:space-x-4 md:my-6">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputs.current[index] = el!)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="focus:border-ghred-500 focus:ring-ghred-500 dark:focus:border-ghred-500 dark:focus:ring-ghred-500 block size-12 rounded-lg border border-gray-300 bg-white py-3 text-center text-2xl font-extrabold text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:size-16 sm:py-4 sm:text-4xl"
        />
      ))}
    </div>
  );
}
