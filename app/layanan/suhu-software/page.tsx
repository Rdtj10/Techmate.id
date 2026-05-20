import { Metadata } from "next";
import SoftwareHeroSection from "./_sections/SoftwareHeroSection";
import SoftwareSkillsSection from "./_sections/SoftwareSkillsSection";
import SoftwarePricingSection from "./_sections/SoftwarePricingSection";
import SoftwareFaqSection from "./_sections/SoftwareFaqSection";

export const metadata: Metadata = {
  title: "Suhu Software - Jasa Pembuatan Website & Aplikasi Mobile | Techmate",
  description: "Bikin website landing page, e-commerce, sistem admin dashboard, hingga aplikasi mobile Android/iOS berkualitas tinggi & SEO-friendly bersama Techmate.",
};

export default function SuhuSoftwarePage() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden pt-16">
      {/* Hero Section */}
      <SoftwareHeroSection />

      {/* Skills Section */}
      <SoftwareSkillsSection />

      {/* Pricing Section */}
      <SoftwarePricingSection />

      {/* FAQ Section */}
      <SoftwareFaqSection />

      {/* Retro Game Footer */}
      <footer className="w-full py-12 px-4 bg-black border-t border-zinc-900 text-center font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-600 tracking-wider">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
          <p className="text-zinc-700">
            © {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED. SUHU SOFTWARE CLASS.
          </p>
        </div>
      </footer>
    </main>
  );
}
