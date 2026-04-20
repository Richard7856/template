import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* Instrument Serif — italic editorial para touches tipográficos.
   Usado en eyebrows y palabras clave del hero para dar contraste serif/sans. */
const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taimingo · Logística inteligente para eCommerce",
  description:
    "Envíos, fulfillment y puntos de retiro operados por IA. Entregamos más rápido y hasta 32% más barato para marcas que venden online.",
  metadataBase: new URL("https://taimingo.example.com"),
  openGraph: {
    title: "Taimingo · Logística inteligente para eCommerce",
    description:
      "Envíos, fulfillment y puntos de retiro operados por IA. Entregamos más rápido y hasta 32% más barato.",
    type: "website",
    locale: "es_ES",
  },
};

/* Script inline que se ejecuta ANTES del primer paint para aplicar la clase .dark
   si el usuario la eligió previamente. Evita el flash blanco→negro en dark mode.
   Default: light. Solo entra a dark si localStorage lo pidió explícitamente. */
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
