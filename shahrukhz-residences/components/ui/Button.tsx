// A link styled as a pill button. Every call to action is a link (anchor, tel:, wa.me),
// so there is no <button> variant to maintain.
const variants = {
  solid: "bg-ocean text-white hover:bg-navy",
  outline: "border border-current hover:bg-white/10",
  light: "bg-white text-navy hover:bg-sky",
};

type Props = React.ComponentProps<"a"> & { variant?: keyof typeof variants };

export default function Button({ variant = "solid", className = "", ...props }: Props) {
  return (
    <a
      {...props}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}
    />
  );
}
