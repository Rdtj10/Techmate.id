import { Metadata } from "next";
import HardwareHeroSection from "./_sections/HardwareHeroSection";
import HardwareSkillsSection from "./_sections/HardwareSkillsSection";
import HardwarePricingSection from "./_sections/HardwarePricingSection";
import HardwareFaqSection from "./_sections/HardwareFaqSection";

export const metadata: Metadata = {
  title: "Ksatria Hardware - Jasa Servis Laptop, PC & Rakit PC | Techmate",
  description: "Servis laptop lemot, panas, mati total, rakit PC gaming/kantor, ganti LCD & keyboard, serta upgrade SSD & RAM oleh tim Ksatria Hardware Techmate.",
};

export default function KsatriaHardwarePage() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-x-hidden pt-16">
      
      <HardwareHeroSection />

      
      <HardwareSkillsSection />

      
      <HardwarePricingSection />

      
      <HardwareFaqSection />

      
      <footer className="w-full py-12 px-4 bg-background border-t border-border text-center font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-600 tracking-wider">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
          <p className="text-zinc-700">
            © {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED. KSATRIA HARDWARE CLASS.
          </p>
        </div>
      </footer>
    </main>
  );
}
