// A link styled as a button. Every call to action is a link (anchor, tel:, wa.me),
// so there is no <button> variant to maintain.
const variants = {
  solid: "bg-clay text-white shadow-float hover:bg-clay-hi",
  outline: "border border-slate-200 bg-white text-slate-900 hover:border-clay hover:text-clay",
};

type Props = React.ComponentProps<"a"> & { variant?: keyof typeof variants };

export default function Button({ variant = "solid", className = "", ...props }: Props) {
  return (
    <a
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold transition-[scale,background-color,border-color,color] duration-300 motion-safe:hover:scale-[1.02] ${variants[variant]} ${className}`}
    />
  );
}
