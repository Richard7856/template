import { Shor4Navbar } from "@/components/shor4/shor4-navbar";
import { Shor4Hero } from "@/components/shor4/shor4-hero";
import { Shor4Brands } from "@/components/shor4/shor4-brands";
import { Shor4Products } from "@/components/shor4/shor4-products";
import { Shor4Market } from "@/components/shor4/shor4-market";
import { Shor4CTA } from "@/components/shor4/shor4-cta";
import { Shor4Footer } from "@/components/shor4/shor4-footer";
import { PadelCursor } from "@/components/shor4/padel-cursor";

export const metadata = {
  title: "SHOR4 — Premium Custom Padel Equipment",
  description:
    "Your brand on premium Padel equipment. Custom rackets, balls, bags and accessories that turn every match into a high-impact advertising campaign.",
};

export default function Shor4Page() {
  return (
    /* cursor-none hides the native cursor so only the padel ball/racket shows */
    <div className="min-h-screen bg-[#0A0A0A] [&_*]:cursor-none cursor-none">
      <PadelCursor />
      <Shor4Navbar />
      <main>
        <Shor4Hero />
        <Shor4Brands />
        <Shor4Products />
        <Shor4Market />
        <Shor4CTA />
      </main>
      <Shor4Footer />
    </div>
  );
}
