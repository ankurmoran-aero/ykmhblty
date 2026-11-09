import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { InteractivePlayground } from "@/components/InteractivePlayground";
import { VercelShowcase } from "@/components/VercelShowcase";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090a0f] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <BentoGrid />
        <InteractivePlayground />
        <VercelShowcase />
      </div>
      <Footer />
    </main>
  );
}
