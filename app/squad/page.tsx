import { Metadata } from "next";
import SquadHeroSection from "./_sections/SquadHeroSection";
import SquadSelectionSection from "./_sections/SquadSelectionSection";

export const metadata: Metadata = {
  title: "Squad - Profil Tim & Sepuh Techmate | Techmate",
  description: "Kenalan dengan tim sepuh Techmate Indonesia. Temui Guild Master, Archmage, Shadow Blade, Paladin, dan Berserker kami yang siap melibas eror coding & hardware.",
};

export default function SquadPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden pt-16">
      {/* Squad Hero Section */}
      <SquadHeroSection />

      {/* Interactive Squad Character Selection Section */}
      <SquadSelectionSection />

      {/* Footer */}
      <footer className="w-full py-12 px-4 bg-black border-t border-zinc-900 text-center font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-600 tracking-wider">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
          <p className="text-zinc-700">
            © {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED. CHOOSE YOUR HERO.
          </p>
        </div>
      </footer>
    </main>
  );
}
