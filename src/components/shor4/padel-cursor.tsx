"use client";

import { useEffect, useRef, useState } from "react";

/* Cursor personalizado: pelota de padel (ámbar) + raqueta con lag.
   La raqueta sigue al mouse con interpolación 10% por frame y rota
   según la dirección del movimiento para simular el swing. */

export function PadelCursor() {
  const ballRef = useRef<HTMLDivElement>(null);
  const racketRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const racketPos = useRef({ x: -200, y: -200 });
  const raf = useRef<number>(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
      if (ballRef.current) {
        ballRef.current.style.transform = `translate(${e.clientX - 9}px, ${e.clientY - 9}px)`;
      }
    };

    const tick = () => {
      // Lerp racket toward ball position
      racketPos.current.x += (mouse.current.x - racketPos.current.x) * 0.1;
      racketPos.current.y += (mouse.current.y - racketPos.current.y) * 0.1;

      if (racketRef.current) {
        const dx = mouse.current.x - racketPos.current.x;
        const dy = mouse.current.y - racketPos.current.y;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        racketRef.current.style.transform =
          `translate(${racketPos.current.x - 16}px, ${racketPos.current.y - 22}px) rotate(${angle + 135}deg)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  if (typeof window === "undefined") return null;

  return (
    <>
      {/* Pelota de padel — sigue al mouse directo */}
      <div
        ref={ballRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] transition-opacity duration-300"
        style={{ willChange: "transform", opacity: visible ? 1 : 0 }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <circle cx="9" cy="9" r="8.5" fill="#F59E0B" stroke="#D97706" strokeWidth="0.5"/>
          {/* Curvas características de la pelota de padel */}
          <path d="M2.5 6 Q9 9.5 15.5 6" stroke="white" strokeWidth="0.9" opacity="0.45" fill="none"/>
          <path d="M2.5 12 Q9 8.5 15.5 12" stroke="white" strokeWidth="0.9" opacity="0.45" fill="none"/>
        </svg>
      </div>

      {/* Raqueta de padel — sigue con retraso y rota según dirección */}
      <div
        ref={racketRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] transition-opacity duration-300"
        style={{ willChange: "transform", opacity: visible ? 0.88 : 0 }}
      >
        <svg width="30" height="40" viewBox="0 0 30 40" fill="none" aria-hidden>
          {/* Cabeza de la raqueta */}
          <ellipse cx="15" cy="14" rx="13" ry="13" fill="rgba(255,255,255,0.07)" stroke="white" strokeWidth="1.6"/>
          {/* Agujeros en patrón de raqueta de padel */}
          {[7, 11, 15, 19, 23].flatMap(x =>
            [8, 12, 16, 20].map(y => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="0.9" fill="white" opacity="0.55"/>
            ))
          )}
          {/* Garganta */}
          <path d="M9 26 L11 27 M19 26 L21 27" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2" strokeLinecap="round"/>
          {/* Mango */}
          <rect x="12" y="27" width="6" height="12" rx="3" fill="white" opacity="0.9"/>
          {/* Grip tape visual */}
          <line x1="12" y1="31" x2="18" y2="31" stroke="rgba(245,158,11,0.7)" strokeWidth="1"/>
          <line x1="12" y1="34" x2="18" y2="34" stroke="rgba(245,158,11,0.7)" strokeWidth="1"/>
        </svg>
      </div>
    </>
  );
}
