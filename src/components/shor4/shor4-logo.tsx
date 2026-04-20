/* Logo SVG de SHOR4 — approximación del bull head con diamond gem ámbar.
   Usado en navbar y footer. */

export function Shor4Logo({ size = 40 }: { size?: number }) {
  const h = Math.round(size * 0.9);
  return (
    <svg width={size} height={h} viewBox="0 0 80 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="SHOR4 logo">
      {/* Left horn — curva hacia afuera y arriba */}
      <path
        d="M33 36 C31 28 26 16 20 8 C17 3 11 2 13 10 C15 18 22 28 30 38"
        fill="white"
        strokeLinejoin="round"
      />
      {/* Right horn */}
      <path
        d="M47 36 C49 28 54 16 60 8 C63 3 69 2 67 10 C65 18 58 28 50 38"
        fill="white"
        strokeLinejoin="round"
      />
      {/* Skull / head — forma orgánica redondeada */}
      <path
        d="M30 38 C26 38 22 44 22 52 C22 62 30 70 40 70 C50 70 58 62 58 52 C58 44 54 38 50 38 C50 38 46 34 40 34 C34 34 30 38 30 38Z"
        fill="white"
      />
      {/* Diamond gem — amber */}
      <path d="M40 40 L49 52 L40 64 L31 52 Z" fill="#F59E0B" />
      {/* Detalle: highlight en el gem */}
      <path d="M40 40 L49 52 L40 46 Z" fill="#FCD34D" opacity="0.5" />
    </svg>
  );
}
