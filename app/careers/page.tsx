import Navbar from "@/components/layout/Navbar";
import CareerHero from "@/components/careers/CareerHero";
import WhyJoin from "@/components/careers/WhyJoin";
import Benefits from "@/components/careers/Benefits";
import OpenPositions from "@/components/careers/OpenPositions";
import HiringProcess from "@/components/careers/HiringProcess";
import ApplicationForm from "@/components/careers/ApplicationForm";
import FAQ from "@/components/careers/FAQ";
import CTA from "@/components/careers/CTA";
export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#060818] text-white overflow-hidden">
      <Navbar />
        
      <CareerHero />
      <WhyJoin />
      <Benefits />
      <OpenPositions />
      <HiringProcess />
      <ApplicationForm />
        <FAQ />
        <CTA />
    </main>
  );
}