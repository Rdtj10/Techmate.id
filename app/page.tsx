import ArcadeBackground from "@/components/ArcadeBackground";
import HeroSection from "./_sections/HeroSection";
import ServicesSection from "./_sections/ServicesSection";
import StatsSection from "./_sections/StatsSection";
import QuestSection from "./_sections/QuestSection";
import PartySection from "./_sections/PartySection";
import PortfolioSection from "./_sections/PortfolioSection";
import FaqSection from "./_sections/FaqSection";
import BookingSection from "./_sections/BookingSection";
import BossSection from "./_sections/BossSection";
import NewsletterFooter from "./_components/NewsletterFooter";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-500 overflow-x-hidden">
      <ArcadeBackground />

      <div className="relative z-10 flex flex-col flex-1">
        <HeroSection />

        <div id="services">
          <ServicesSection />
        </div>

        <div id="stats">
          <StatsSection />
        </div>

        <div id="quests">
          <QuestSection />
        </div>

        <div id="party">
          <PartySection />
        </div>

        <div id="portofolio">
          <PortfolioSection />
        </div>

        <div id="faq">
          <FaqSection />
        </div>

        <div id="booking">
          <BookingSection />
        </div>

        <div id="boss-battle">
          <BossSection />
        </div>

        <NewsletterFooter />
      </div>
    </main>
  );
}
