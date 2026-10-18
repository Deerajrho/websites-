// A link styled as a button. Every call to action is a link (anchor, tel:, wa.me),
// so there is no <button> variant to maintain.
// solid: the sunlit-water gradient. outline: a hairline frame in the text colour of the water it sits in.
const variants = {
  solid: "sea",
  outline: "border border-ink/40 text-ink transition-colors duration-300 hover:border-accent hover:text-accent",
};

type Props = React.ComponentProps<"a"> & { variant?: keyof typeof variants };

export default function Button({ variant = "solid", className = "", ...props }: Props) {
  return (
    <a
      {...props}
      className={`chart-label inline-flex min-h-12 items-center justify-center gap-3 px-6 ${variants[variant]} ${className}`}
    />
  );
}
