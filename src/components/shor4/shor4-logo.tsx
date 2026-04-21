import Image from "next/image";

/* Logo oficial SHOR4 — usa el PNG real del cliente en vez del SVG placeholder. */

export function Shor4Logo({ size = 40 }: { size?: number }) {
  return (
    <Image
      src="/shor4/logo.png"
      alt="SHOR4 by Magneticmark LLC"
      width={size}
      height={Math.round(size * 0.75)}
      className="object-contain"
      priority
    />
  );
}
