import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-md px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        variant === "primary"
          ? "bg-brass text-white shadow-soft hover:bg-brass/90 focus-visible:outline-brass"
          : "border border-brass/50 bg-white text-ink hover:bg-parchment focus-visible:outline-brass",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
