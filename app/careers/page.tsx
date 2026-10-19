import CareerHero from "@/components/careers/CareerHero";
import WhyJoin from "@/components/careers/WhyJoin";
import Benefits from "@/components/careers/Benefits";
import OpenPositions from "@/components/careers/OpenPositions";
import HiringProcess from "@/components/careers/HiringProcess";
import ApplicationForm from "@/components/careers/ApplicationForm";
import FAQ from "@/components/careers/FAQ";
import { HeroAtmosphereGlow } from "@/components/ui/TechPattern";

export default function CareersPage() {
  return (
    <main className="relative min-h-screen bg-white text-slate-900 overflow-hidden dark:bg-[#050816] dark:text-white">
      {/* Background Decor - Exact match to Homepage Hero */}
      <HeroAtmosphereGlow />
      <CareerHero />
      <WhyJoin />
      <Benefits />
      <OpenPositions />
      <HiringProcess />
      <ApplicationForm />
        <FAQ />
    </main>
  );
}