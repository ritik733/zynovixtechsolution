import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Stats from "@/components/sections/Stats";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import ProjectEstimator from "@/components/interactive/ProjectEstimator";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";
import MouseGlow from "@/components/MouseGlow";

export default function Home() {
  return (
    <main className="relative">
      <MouseGlow />
      <Hero />
      <TrustBar />
      <Stats />
      <AboutPreview />
      <ServicesPreview />
      <PortfolioPreview />
      <ProjectEstimator />
      <Testimonials />
      <CTA />
    </main>
  );
}