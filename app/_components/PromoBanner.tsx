"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Zap } from "lucide-react";

const PROMO_END = new Date("2026-07-01T00:00:00+07:00");

function useCountdown(target: Date) {
  const calc = () => {
    const diff = Math.max(0, target.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      mins: Math.floor((diff % 3600000) / 60000),
      secs: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  });
  return time;
}

export default function PromoBanner() {
  const [visible, setVisible] = useState(false);
  const { days, hours, mins, secs } = useCountdown(PROMO_END);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("promo-dismissed");
    if (!dismissed) setTimeout(() => setVisible(true), 0);
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem("promo-dismissed", "1");
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="w-full bg-green-600 border-b-2 border-green-400 px-4 py-2 flex items-center justify-between gap-4 relative">
            <div className="flex items-center gap-3 flex-1 min-w-0 flex-wrap justify-center">
              <span className="flex items-center gap-1.5 font-[family-name:var(--font-press-start-2p)] text-[7px] md:text-[8px] text-black font-bold whitespace-nowrap">
                <Zap className="size-3 text-yellow-300 animate-pulse" />
                PROMO: DISKON 20% WEB UMKM!
              </span>
              <div className="flex items-center gap-1 font-[family-name:var(--font-press-start-2p)] text-[7px] text-black/80">
                <span>Berakhir:</span>
                <span className="bg-black/20 px-1.5 py-0.5 font-bold text-black">{pad(days)}H</span>
                <span className="bg-black/20 px-1.5 py-0.5 font-bold text-black">{pad(hours)}J</span>
                <span className="bg-black/20 px-1.5 py-0.5 font-bold text-black">{pad(mins)}M</span>
                <span className="bg-black/20 px-1.5 py-0.5 font-bold text-black">{pad(secs)}D</span>
              </div>
              <a
                href="https://wa.me/628123456789?text=Halo!+Saya+mau+tanya+promo+diskon+20%+web+UMKM."
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-press-start-2p)] text-[7px] bg-black text-green-400 px-2 py-1 border border-green-400 hover:bg-green-900 transition-colors whitespace-nowrap"
              >
                KLAIM SEKARANG →
              </a>
            </div>
            <button
              onClick={dismiss}
              aria-label="Tutup banner promo"
              className="shrink-0 text-black/70 hover:text-black transition-colors cursor-pointer"
            >
              <X className="size-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
