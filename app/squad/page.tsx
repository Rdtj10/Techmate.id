import { Metadata } from "next";
import SquadHeroSection from "./_sections/SquadHeroSection";
import SquadSelectionSection from "./_sections/SquadSelectionSection";

export const metadata: Metadata = {
  title: "Squad - Profil Tim & Sepuh Techmate | Techmate",
  description: "Kenalan dengan tim sepuh Techmate Indonesia. Temui Guild Master, Archmage, Shadow Blade, Paladin, dan Berserker kami yang siap melibas eror coding & hardware.",
};

export default function SquadPage() {
  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-300 overflow-x-hidden pt-16">
      
      <SquadHeroSection />

      
      <SquadSelectionSection />

      
      <footer className="w-full py-12 px-4 bg-card border-t border-border text-center font-(family-name:--font-press-start-2p) text-[8px] md:text-[9px] text-muted-foreground tracking-wider transition-colors duration-300">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
          <p className="text-muted-foreground/60">
            © {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED. CHOOSE YOUR HERO.
          </p>
        </div>
      </footer>
    </main>
  );
}
