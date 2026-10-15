import Image from "next/image";

export default function Logo({ className = "h-11 w-auto" }: { className?: string }) {
  return (
    <a href="#top" aria-label="Shahrukhz Residences by Danube, back to top">
      <Image src="/images/brand/logo.png" alt="" width={519} height={268} priority className={className} />
    </a>
  );
}
