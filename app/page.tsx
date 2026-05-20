import HeroSection from "./_sections/HeroSection";
import ServicesSection from "./_sections/ServicesSection";
import StatsSection from "./_sections/StatsSection";
import QuestSection from "./_sections/QuestSection";
import PartySection from "./_sections/PartySection";
import BossSection from "./_sections/BossSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black overflow-x-hidden">
      {/* Level 1: Hero Intro */}
      <HeroSection />

      {/* Level 2: Services / Class Selection */}
      <div id="services">
        <ServicesSection />
      </div>

      {/* Level 3: Guild Stats & Buffs */}
      <div id="stats">
        <StatsSection />
      </div>

      {/* Level 4: The Quest Board (Development Process) */}
      <div id="quests">
        <QuestSection />
      </div>

      {/* Level 5: Testimonials / Party Members */}
      <div id="party">
        <PartySection />
      </div>

      {/* Final Boss: Contact / Call to Action */}
      <div id="boss-battle">
        <BossSection />
      </div>

      {/* Retro Game Footer */}
      <footer className="w-full py-12 px-4 bg-black border-t border-zinc-900 text-center font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-600 tracking-wider">
        <div className="container mx-auto max-w-4xl flex flex-col items-center gap-4">
          <div className="flex gap-6 justify-center text-zinc-500 uppercase">
            <a href="#services" className="hover:text-green-400 transition-colors">CLASSES</a>
            <a href="#quests" className="hover:text-green-400 transition-colors">QUESTS</a>
            <a href="#party" className="hover:text-green-400 transition-colors">PARTY</a>
            <a href="#boss-battle" className="hover:text-green-400 transition-colors">BOSS FIGHT</a>
          </div>
          
          <p className="mt-2 text-zinc-700">
            © {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED. INSERT COIN TO CONTINUE.
          </p>
          
          <div className="mt-1 px-3 py-1 bg-zinc-950 border border-zinc-900 rounded-none text-zinc-500 text-[6px] animate-pulse">
            [ POWERED BY NEXT.JS 16 & TAILWIND V4 ]
          </div>
        </div>
      </footer>
    </main>
  );
}
