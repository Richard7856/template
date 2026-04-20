"use client";

/* Visualización de red logística animada en SVG.
   WHY: reemplaza el "3D pesado" (three.js/Spline ~500kb+) con una animación vectorial
   que pesa <3kb, corre suave incluso en móvil, y comunica el mismo mensaje
   ("nodos conectados en movimiento"). Los dashes en stroke-dashoffset crean el efecto
   de paquetes viajando por la red. */

type Node = { x: number; y: number; label?: string; accent?: boolean };
type Edge = { from: number; to: number; curve?: number };

const nodes: Node[] = [
  { x: 60, y: 220, label: "Polanco" },
  { x: 200, y: 120, accent: true },
  { x: 340, y: 260, label: "Condesa" },
  { x: 480, y: 140 },
  { x: 600, y: 240, accent: true },
  { x: 750, y: 160, label: "Del Valle" },
  { x: 280, y: 330, label: "Narvarte" },
  { x: 560, y: 330, label: "Coyoacán" },
];

const edges: Edge[] = [
  { from: 0, to: 1, curve: -40 },
  { from: 1, to: 2, curve: 30 },
  { from: 2, to: 3, curve: -35 },
  { from: 3, to: 4, curve: 40 },
  { from: 4, to: 5, curve: -30 },
  { from: 0, to: 6, curve: 50 },
  { from: 6, to: 7, curve: 20 },
  { from: 7, to: 5, curve: -60 },
  { from: 2, to: 4, curve: 0 },
];

function curvedPath(a: Node, b: Node, curve = 0) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2 + curve;
  return `M ${a.x} ${a.y} Q ${mx} ${my} ${b.x} ${b.y}`;
}

export function RouteViz() {
  return (
    <svg
      viewBox="0 0 820 400"
      className="h-full w-full"
      role="img"
      aria-label="Red de entregas locales mostrando paquetes moviéndose entre colonias de la ciudad"
    >
      <defs>
        <linearGradient id="pathGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <filter id="softBlur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      {/* Glow de fondo para dar profundidad (efecto pseudo-3D sin 3D real) */}
      <circle cx="410" cy="200" r="300" fill="url(#glow)" opacity="0.6" />

      {/* Grid sutil — recuerda a dashboards/mapas sin ser literal */}
      <g opacity="0.15">
        {Array.from({ length: 17 }).map((_, i) => (
          <line
            key={`v${i}`}
            x1={i * 50}
            y1={0}
            x2={i * 50}
            y2={400}
            stroke="currentColor"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={0}
            y1={i * 50}
            x2={820}
            y2={i * 50}
            stroke="currentColor"
            strokeWidth="0.5"
          />
        ))}
      </g>

      {/* Paths base — finos, etéreos */}
      {edges.map((e, i) => (
        <path
          key={`base-${i}`}
          d={curvedPath(nodes[e.from], nodes[e.to], e.curve)}
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.15"
          strokeWidth="1"
        />
      ))}

      {/* Paths animados — dashes que "viajan" como paquetes por la red */}
      {edges.map((e, i) => (
        <path
          key={`flow-${i}`}
          d={curvedPath(nodes[e.from], nodes[e.to], e.curve)}
          fill="none"
          stroke="url(#pathGrad)"
          strokeWidth="2"
          strokeDasharray="6 18"
          style={{
            animation: `dash-flow ${4 + (i % 3)}s linear infinite`,
            animationDelay: `${i * 0.3}s`,
          }}
        />
      ))}

      {/* Nodos */}
      {nodes.map((n, i) => (
        <g key={i}>
          {/* Halo animado solo en nodos "accent" */}
          {n.accent && (
            <circle
              cx={n.x}
              cy={n.y}
              r="14"
              fill="var(--accent)"
              opacity="0.25"
              style={{
                animation: `node-pulse 2.5s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
                transformOrigin: `${n.x}px ${n.y}px`,
              }}
              filter="url(#softBlur)"
            />
          )}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.accent ? 6 : 4}
            fill={n.accent ? "var(--accent)" : "currentColor"}
            opacity={n.accent ? 1 : 0.6}
          />
          {n.label && (
            <text
              x={n.x}
              y={n.y - 16}
              textAnchor="middle"
              className="fill-current"
              fontSize="11"
              fontFamily="var(--font-geist-mono)"
              opacity="0.75"
            >
              {n.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
