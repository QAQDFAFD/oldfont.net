import { SelectHTMLAttributes } from "react";
import clsx from "clsx";

export default function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={clsx(
        "w-full rounded-md border border-brass/40 bg-white px-3 py-2 text-sm text-ink shadow-sm focus:border-brass focus:ring-1 focus:ring-brass",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
