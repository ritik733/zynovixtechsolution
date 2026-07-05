import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Stats from "@/components/sections/Stats";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import CTA from "@/components/sections/CTA";
import Navbar from "@/components/layout/Navbar";

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

// export default function Home() {
//   return (
//     <main className="relative overflow-hidden bg-[#060818]">

//       {/* Purple Glow */}
//       <div className="absolute left-1/2 top-[-120px]
//       -translate-x-1/2
//       w-[900px]
//       h-[300px]
//       rounded-full
//       bg-violet-600/30
//       blur-[140px]" />

//       <Navbar />

//       <Hero />

//       ...
//     </main>
//   )
// }