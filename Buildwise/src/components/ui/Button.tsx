import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-medium transition-colors duration-200 cursor-pointer";

const variants: Record<string, string> = {
  primary: "bg-accent text-base-deep hover:bg-accent/90",
  ghost:
    "border border-hairline text-fg hover:border-accent hover:text-accent",
};

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
