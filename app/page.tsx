import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Stats from "@/components/sections/Stats";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <main>

      <Hero />

      <TrustBar />

      <Stats />

      <AboutPreview />

      <ServicesPreview />

      <PortfolioPreview />

      <CTA />

    </main>
  );
}