import { InputHTMLAttributes } from "react";
import clsx from "clsx";

export default function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        "w-full rounded-md border border-brass/40 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-brass focus:ring-1 focus:ring-brass",
        className,
      )}
      {...props}
    />
  );
}
