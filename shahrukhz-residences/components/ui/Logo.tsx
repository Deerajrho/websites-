import Image from "next/image";

// The logo artwork is white on transparent; brightness-0 turns it slate-black for the light theme.
export default function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <a href="#top" aria-label="Shahrukhz Residences by Danube, back to top">
      <Image src="/images/brand/logo.png" alt="" width={519} height={268} priority className={`brightness-0 ${className}`} />
    </a>
  );
}
