import { CheckIcon, XIcon } from "@heroicons/react/solid";
import clsx from "clsx";

export function Alert({
  status,
  title,
  message,
}: {
  status: "success" | "error";
  title: string;
  message: string;
}) {
  return (
    <div
      className={clsx("border p-4 rounded-lg flex gap-2", {
        "border-green-400 text-green-400": status === "success",
        "border-red-400 text-red-400": status === "error",
      })}
    >
      {status === "success" ? (
        <CheckIcon className="w-6 h-6" />
      ) : status === "error" ? (
        <XIcon className="w-6 h-6" />
      ) : null}
      <p className="text-lg">
        <strong className="font-bold text-lg mr-2">{title}</strong>
        <span>{message}</span>
      </p>
    </div>
  );
}
