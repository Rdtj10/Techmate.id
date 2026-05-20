import { Metadata } from "next";
import ConsultHeroSection from "./_sections/ConsultHeroSection";
import ConsultSkillsSection from "./_sections/ConsultSkillsSection";
import ConsultPricingSection from "./_sections/ConsultPricingSection";
import ConsultFaqSection from "./_sections/ConsultFaqSection";

export const metadata: Metadata = {
  title: "Suhu Curhat IT - Jasa Konsultasi IT, Audit & Cloud | Techmate",
  description: "Konsultasi arsitektur cloud server, audit keamanan siber, optimasi biaya IT, automasi workflow kerja, hingga CTO virtual bulanan bersama Techmate.",
};

export default function SuhuCurhatItPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden pt-16">
      {/* Hero Section */}
      <ConsultHeroSection />

      {/* Skills Section */}
      <ConsultSkillsSection />

      {/* Pricing Section */}
      <ConsultPricingSection />

      {/* FAQ Section */}
      <ConsultFaqSection />

      {/* Retro Game Footer */}
      <footer className="w-full py-12 px-4 bg-black border-t border-zinc-900 text-center font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-600 tracking-wider">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
          <p className="text-zinc-700">
            © {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED. SUHU CURHAT IT CLASS.
          </p>
        </div>
      </footer>
    </main>
  );
}
