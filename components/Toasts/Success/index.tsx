import { HiCheck } from "react-icons/hi";
import { ToastTypes } from "@/components/Toasts/interfaces";
import { ToastToggle } from "flowbite-react/components/Toast";

export default function Success({ message }: Pick<ToastTypes, "message">) {
  return (
    <>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
        <HiCheck className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <ToastToggle />
    </>
  )
}
