import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { LogosStrip } from "@/components/logos-strip";
import { Services } from "@/components/services";
import { TrackingLive } from "@/components/tracking-live";
import { Analytics } from "@/components/analytics";
import { HowItWorks } from "@/components/how-it-works";
import { Metrics } from "@/components/metrics";
import { Testimonials } from "@/components/testimonials";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LogosStrip />
        <Services />
        <TrackingLive />
        <Analytics />
        <HowItWorks />
        <Metrics />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
