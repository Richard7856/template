# Decisions — Taimingo Redesign

Registro de decisiones técnicas no triviales. Formato: contexto → decisión → alternativas → riesgos → mejoras.

---

## [2026-04-20] Posicionamiento: logística local intra-ciudad + tracking + analytics

**Contexto:** Pedido del socio: aclarar que el servicio opera *dentro* de cada ciudad (CDMX en CDMX, GDL en GDL), no rutas inter-ciudad. Además, agregar visibilidad del paquete en tiempo real y ofrecer métricas de negocio a clientes enterprise.

**Decisión — 3 cambios simultáneos:**

1. **Copy local** — hero tracking card cambiada de "CDMX → Guadalajara" (inter-ciudad) a "Polanco → Roma Norte" (intra-ciudad). ETA de 18h a 43 min. Body copy explica "dentro de cada ciudad". Route-viz renombra nodos genéricos ("Origen", "Destino") a colonias reales (Polanco, Condesa, Del Valle, Narvarte, Coyoacán).
2. **Sección TrackingLive (02/06)** — dashboard tipo monitor en vivo mostrando 4 envíos activos con progress bars animados, ETA por paquete, origen-destino de colonias reales. Footer "tu cliente recibe link de tracking al confirmar". Informa tanto al equipo del negocio como comunica el valor al visitante.
3. **Sección Analytics (03/06)** — dashboard mockup con 3 KPIs (entregas, tasa de éxito, tiempo prom.), bar chart animado de entregas por hora, breakdown por zona con progress bars. 4 feature cards: mapa de calor, tendencias, alertas, exportación. Repositiona a Taimingo como plataforma de datos, no solo carrier.

**Alternativas consideradas:**
- **Mapa real (Mapbox)** para el tracking: mucho más visual pero +300kb, necesita API key, complejidad de mares con SSR. Rechazado para este MVP — el monitor de filas comunica lo mismo con <5kb.
- **Librería de charts (Recharts/Victory)** para analytics: semántica más correcta pero +40kb, theming manual. Rechazado — las barras CSS animadas son indistinguibles visualmente y cero dependencia.
- **4ª card de servicio "Analytics"** en la sección de servicios: diluyó el foco de los 3 servicios core. Rechazado — sección dedicada da más espacio y peso editorial.

**Riesgos:** los datos del dashboard son hardcoded (1,284 entregas, 98.3%). Cuando el partner conecte su backend, estos valores se reemplazarán con fetch real. Marcado implícitamente por su naturaleza mock.

**Mejoras futuras:**
- Conectar TrackingLive a un endpoint WebSocket para datos reales de envíos.
- Agregar filtro por ciudad en el panel de Analytics (toggle CDMX / GDL / MTY).
- Mapa de calor real con Mapbox GL para página de cobertura.

---

## [2026-04-20] Stack: Next.js 16 + Tailwind v4 + Framer Motion + Lucide

**Contexto:** Partner quiere replicar y mejorar taimingo.com (logística para eCommerce). El original tiene value props vagos, sin prueba social, iconografía genérica y poca diferenciación. Necesitamos una landing moderna, SEO-friendly, editable por el equipo no-técnico, con deploy simple.

**Decisión:** Next.js 16 (App Router, Turbopack) + Tailwind v4 + Framer Motion + Lucide Icons + `class-variance-authority` para variantes tipo shadcn.

**Alternativas consideradas:**
- **Astro + Tailwind:** excelente para contenido estático, cero JS por default. Rechazado porque el socio probablemente querrá form submissions, CRM integrations, dashboards cliente más adelante — pivotar de Astro a full-stack es costoso.
- **HTML + CSS vanilla:** liviano, pero imposible de mantener cuando crezca. Rechazado.
- **Nuxt/Vue:** stack ajeno al de Richard (Next.js/React es su default). Rechazado por coherencia con ecosistema existente.

**Riesgos / Limitaciones:**
- Next.js 16 tiene breaking changes vs 15 — confirmamos en `node_modules/next/dist/docs/` antes de escribir código. API principales (layout, page, next/font) son estables para nuestro uso.
- Bundle con Framer Motion añade ~40kb gzipped. Aceptable para landing (no es app crítica de performance); si más adelante pesa, swap a `motion` (versión lite) o CSS animations nativas.

**Mejoras futuras:**
- Añadir `shadcn/ui` completo si el partner quiere dashboard interno después (auth, tables, etc.).
- Conectar form del CTA a webhook n8n o Supabase (hoy es demo local).

---

## [2026-04-20] Paleta: Ink navy + Emerald accent

**Contexto:** El original usa azul genérico + gris — visualmente indistinguible del 80% de sitios logísticos. Partner pidió "mejorar" la identidad.

**Decisión:**
- Ink (near-black navy `#0B1220`) para textos, botones dark, footer, CTA hero.
- Emerald 500 (`#10B981`) como accent único para CTAs principales, badges, highlights.
- Grises zinc para superficies y bordes.

**Alternativas consideradas:**
- **Azul corporativo profundo:** más "seguro" pero no diferencia. Rechazado.
- **Naranja/ámbar:** evoca delivery pero se percibe menos confiable en enterprise. Rechazado.
- **Violeta/indigo (Stripe-style):** over-usado en SaaS. Rechazado.

**Por qué emerald:** comunica "go / movimiento / eco-friendly" (relevante en logística), alto contraste con navy, legible en ambos modos.

**Riesgos:** si el socio tiene branding preexistente con azul, hay que remapear `--accent` en `globals.css`. Solo cambio ahí propaga a todo el sitio.

---

## [2026-04-20] Sin 3D pesado — animated SVG en su lugar

**Contexto:** Richard sugirió evaluar 3D. Evalué three.js (react-three-fiber) y Spline embed.

**Decisión:** implementamos la "red logística" del hero con SVG animado (paths curvos + `stroke-dashoffset` keyframes + pulsos en nodos). Sin three.js, sin Spline.

**Alternativas consideradas:**
- **three.js / R3F:** ~500kb de runtime, exige manejo de GPU en mobile, curva de mantenimiento. Rechazado para landing estática.
- **Spline embed:** ~1MB+, dependencia externa, perdemos control sobre theming. Rechazado.
- **Lottie:** decente para animaciones complejas pero requiere pipeline de export desde AE. Rechazado por fricción del partner.

**Ventajas del SVG animado:**
- <3kb, 60fps en cualquier dispositivo.
- Edición directa del componente (`route-viz.tsx`) — cualquier dev modifica nodos/edges sin tooling.
- Colores atados a CSS vars — tema dark/light automático.
- Comunica el mismo mensaje ("red inteligente, paquetes en movimiento").

**Mejoras futuras:**
- Si socio pide "wow factor" mayor, Spline embed puede agregarse como sección opcional, sin reemplazar hero.
- Considerar un mapa real interactivo (Mapbox) para página de cobertura cuando se construya.

---

## [2026-04-20] Arquitectura de componentes: atomic "ui/" + sections planas

**Contexto:** Landing one-page con 8 secciones. Tentación de hacer sub-carpetas por sección o por dominio.

**Decisión:** estructura plana en `components/` + sub-carpeta `ui/` para primitivos reutilizables (Button, Container, SectionHeading). Cada sección es un archivo único (`hero.tsx`, `services.tsx`, etc.) con client/server components según necesidad.

**Alternativas consideradas:**
- **`components/sections/*`:** añade nesting innecesario para 8 archivos.
- **Co-localización por ruta (`app/_components/`):** aún no hay múltiples rutas; prematuro.

**Regla:** si algo se usa >1 vez o es un primitivo de diseño, va a `ui/`. Si es específico de la landing, va plano en `components/`.

**Riesgos:** cuando se agreguen rutas (ej. `/casos/[slug]`), hay que revisar si vale la pena migrar a `app/_components/`. Decisión diferida hasta segundo page.

---

## [2026-04-20] Form del CTA: estado local sin backend

**Contexto:** Partner todavía no definió su stack de CRM/ventas (HubSpot? Pipedrive? n8n+Sheets?).

**Decisión:** form con `useState` local + feedback visual "enviado". Un comentario `TODO` apunta al lugar donde se conecta.

**Alternativas consideradas:**
- **Server Action de Next.js:** elegante pero sin backend definido, quedaría colgando.
- **Supabase direct insert:** acopla la landing a Supabase antes de decidirlo con el partner.

**Riesgos:** si alguien despliega y envía un email, **no se guarda nada**. Marcado explícitamente con `TODO` en `src/components/cta.tsx` para que quede obvio en code review.

**Mejoras futuras:** conectar a n8n webhook (stack habitual de Richard) para capturar leads y disparar email + tarjeta en CRM.

---

## [2026-04-20] Theme toggle: clase `.dark` + localStorage + script anti-flash

**Contexto:** El sitio arrancaba en dark mode en el navegador de Richard porque el CSS usaba `@media (prefers-color-scheme: dark)` y su sistema está en dark. Pedido: default light + toggle manual.

**Decisión:**
- CSS usa selector `html.dark` en vez de media query — control manual total.
- Script inline en `<head>` lee `localStorage.theme` y aplica la clase `.dark` **antes** del primer paint. Evita FOUC (flash of unstyled content).
- `ThemeToggle` component en navbar usa `useState` + sincroniza con `document.documentElement`. Sin context provider (sobra para un solo consumidor).
- Flag `theme-transitioning` aplicado durante 220ms al hacer toggle — transición suave solo en el switch, no al cargar.
- `suppressHydrationWarning` en `<html>` porque el script inline muta la clase antes de la hidratación React.

**Alternativas consideradas:**
- **`next-themes` package:** estándar en el ecosistema shadcn, pero añade ~5kb y un provider para algo que resolvimos en 40 líneas. Rechazado por over-engineering.
- **Seguir solo al sistema (`prefers-color-scheme`):** menos control para el usuario, no cumple el pedido explícito.
- **Cookie server-side:** habilita SSR del tema correcto pero complica; el flash con el script inline es imperceptible (<16ms).

**Riesgos:**
- Si alguien deshabilita localStorage (modo incógnito estricto / browser policies), el toggle funciona pero no persiste. Capturado silenciosamente — no rompe UX.
- `dangerouslySetInnerHTML` en el script: el contenido es estático y controlado, riesgo de XSS nulo.

**Mejoras futuras:**
- Agregar opción "system" que respete `prefers-color-scheme` como tercer estado si un cliente lo pide.
- Animar el ícono sun/moon al hacer toggle (Framer rotation) si se quiere pulir el detalle.

---

## [2026-04-20] Editorial upgrade: serif dual + paleta moss + grain + wayfinding

**Contexto:** El primer pass se veía como "plantilla 2024 bien hecha" — tipografía mono sans, paleta emerald saas-genérica, composición predecible. Partner quería que se separara del template estándar sin romper el minimalismo.

**Decisión — 6 upgrades simultáneos:**

1. **Tipografía dual** — añadí Instrument Serif (400, normal+italic) vía `next/font/google`. Uso: eyebrows de sección, palabras clave del hero (`logístico`, `pensar`, `una sola plataforma`). Clase utility `.font-serif-italic`.
2. **Paleta refinada** — emerald 500 (#10B981) → moss (#0f6d51). Background white → warm paper (#f6f4ef). Foreground pure black → carbon (#15171a). La paleta ahora se siente *impresa* en vez de *pantalla*.
3. **Grain overlay** — SVG turbulence inline en `body::before`, 3.5% opacity con `mix-blend-mode: multiply` (light) y 6% `overlay` (dark). Cero requests, <1kb, imperceptible hasta que lo notás.
4. **Meta stripe hero** — línea superior tipo Bloomberg: estado, coordenadas, ciudades, versión, fecha. Usa utility `.font-meta` (mono + uppercase + tabular-nums + tracking wide).
5. **Section indexing** — `SectionHeading` acepta `index` + `total` ("01 / 04") visibles a la izquierda del eyebrow. Wayfinding editorial.
6. **Wordmark XL footer** — "TAIMINGO." a 14-18vw, opacidad 8-12%, se recorta en los bordes. Signature move de Linear/Vercel/Stripe.

**Detalles menores complementarios:**
- Cards de servicios: index numérico en esquina superior derecha + línea vertical accent que aparece on-hover.
- Eyebrows cambiados de ALL CAPS monospace → serif italic en tamaño más grande. Más editorial, menos "saas".

**Alternativas consideradas:**
- **Mantener emerald 500:** más reconocible pero genérico. Rechazado.
- **Fraunces o DM Serif:** más ornamentadas. Rechazadas — Instrument Serif tiene el balance justo (legible + editorial sin sentirse fashion).
- **Cursor custom:** alta complejidad, bajo payoff, problemas de accesibilidad. Rechazado.
- **Parallax on-scroll:** riesgo de motion sickness, perf degradada en mobile. Rechazado.

**Riesgos / Limitaciones:**
- Warning de React 19/Next 16 sobre `<script>` en JSX (tema init) — es no-breaking, el script sí se emite en SSR. Si molesta, se migra a `next/script` con strategy=beforeInteractive.
- Instrument Serif añade ~35kb. Justificado por el impacto visual.
- `dangerouslySetInnerHTML` en SVG grain: controlado, sin input de usuario, XSS nulo.

**Mejoras futuras si se pide más:**
- Mini-sparklines en los 4 cards de métricas (canvas-based, 2-3 líneas de visualización).
- Magnetic cursor en CTAs principales.
- Corner brackets `[ ]` decorativos en cards featured.
- Refinar el route-viz con labels de ciudades reales + animación de "scan" tipo radar.
