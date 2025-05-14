import { HiExclamation } from "react-icons/hi";
import { ToastToggle } from "flowbite-react/components/Toast";
import { ToastTypes } from "@/components/Toasts/interfaces";

export default function Warning({ message }: Pick<ToastTypes, "message">) {
  return (
    <>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
        <HiExclamation className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <ToastToggle />
    </>
  )
}
