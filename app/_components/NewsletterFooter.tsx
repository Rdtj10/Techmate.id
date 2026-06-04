"use client";

import { useState } from "react";
import Link from "next/link";
import { Swords, Send, Check } from "lucide-react";

export default function NewsletterFooter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-card/80 backdrop-blur-sm border-t border-border transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 border-b border-border pb-10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500/10 border-2 border-green-500 flex items-center justify-center">
                <Swords className="size-4 text-green-400" />
              </div>
              <span className="font-(family-name:--font-press-start-2p) text-[10px] text-foreground">TECHMATE</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tim teknologi yang siap bantu bisnis dan individu menang di dunia digital. Software, hardware, dan IT consultation.
            </p>
            <div className="flex gap-3 flex-wrap">
              {["⚗ Software", "🛡 Hardware", "🔥 Konsultasi"].map((s) => (
                <span key={s} className="px-2 py-0.5 border border-border text-[8px] font-(family-name:--font-press-start-2p) text-muted-foreground">{s}</span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-(family-name:--font-press-start-2p) text-[9px] text-muted-foreground/60 tracking-widest uppercase mb-2">NAVIGASI</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[
                { label: "Layanan", href: "/layanan/suhu-software" },
                { label: "Portofolio", href: "/portofolio" },
                { label: "Harga", href: "/harga" },
                { label: "Kalkulator", href: "/kalkulator" },
                { label: "Blog", href: "/blog" },
                { label: "Squad", href: "/squad" },
                { label: "Tentang", href: "/tentang" },
                { label: "Kontak", href: "https://wa.me/628123456789" },
              ].map((item) => (
                <Link key={item.label} href={item.href} className="font-(family-name:--font-press-start-2p) text-[8px] text-muted-foreground hover:text-green-400 transition-colors">
                  › {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-(family-name:--font-press-start-2p) text-[9px] text-muted-foreground/60 tracking-widest uppercase mb-2">PATCH NOTES SUBSCRIBE</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dapetin tips IT, update promo, dan insight teknologi terbaru langsung ke inbox lo. No spam!
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green-400 font-(family-name:--font-press-start-2p) text-[8px]">
                <Check className="size-4" />
                BERHASIL SUBSCRIBE!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="email@lo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 bg-background border-2 border-border focus:border-green-500 focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/50 rounded-none transition-colors font-sans min-w-0"
                />
                <button
                  type="submit"
                  className="p-2 bg-green-600 hover:bg-green-500 text-black border-2 border-green-400 transition-colors cursor-pointer rounded-none shrink-0"
                  aria-label="Subscribe"
                >
                  <Send className="size-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <div className="flex gap-6 justify-center text-muted-foreground/80 font-(family-name:--font-press-start-2p) text-[8px] uppercase flex-wrap">
            <a href="#services" className="hover:text-green-400 transition-colors">CLASSES</a>
            <a href="#portofolio" className="hover:text-green-400 transition-colors">PORTOFOLIO</a>
            <a href="#faq" className="hover:text-green-400 transition-colors">FAQ</a>
            <a href="#booking" className="hover:text-green-400 transition-colors">BOOKING</a>
            <a href="#boss-battle" className="hover:text-green-400 transition-colors">BOSS FIGHT</a>
          </div>
          <p className="font-(family-name:--font-press-start-2p) text-[7px] text-muted-foreground/50">
            © {new Date().getFullYear()} TECHMATE. INSERT COIN TO CONTINUE.
          </p>
        </div>
      </div>
    </footer>
  );
}
