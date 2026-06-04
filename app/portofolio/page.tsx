"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArcadeBackground from "@/components/ArcadeBackground";
import NavBar from "@/app/_components/NavBar";
import PortfolioCard from "@/app/_components/PortfolioCard";
import { portfolioItems } from "@/data/portfolio";
import type { PortfolioCategory } from "@/app/_components/PortfolioCard";
import { Trophy, Filter, ChevronDown } from "lucide-react";

type FilterCategory = PortfolioCategory | "all";

const filterOptions: { label: string; value: FilterCategory; icon: string }[] = [
  { label: "SEMUA MISI", value: "all", icon: "🗡️" },
  { label: "SUHU SOFTWARE", value: "software", icon: "⚗" },
  { label: "KSATRIA HARDWARE", value: "hardware", icon: "🛡" },
  { label: "SUHU CURHAT IT", value: "konsultasi", icon: "🔥" },
];

const stats = [
  { label: "Total Misi", value: "9+", color: "text-green-400" },
  { label: "S-Rank Clear", value: "6", color: "text-amber-400" },
  { label: "Klien Puas", value: "100%", color: "text-blue-400" },
  { label: "Tahun Aktif", value: "3+", color: "text-purple-400" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [showFilter, setShowFilter] = useState(false);

  const filtered =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const activeLabel = filterOptions.find((f) => f.value === activeFilter)?.label ?? "SEMUA MISI";

  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-500 overflow-x-hidden">
      <ArcadeBackground />

      <div className="relative z-10 flex flex-col flex-1">
        <NavBar />

        <section className="w-full pt-28 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center mb-12"
            >
              <span className="px-3 py-1 bg-card border-2 border-border text-muted-foreground text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]">
                HALL OF FAME — TECHMATE
              </span>

              <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6 uppercase tracking-wide drop-shadow-lg">
                PAPAN MISI
              </h1>

              <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
                Rekap lengkap semua misi yang udah berhasil di-clear squad Techmate. Mulai dari software kenceng, hardware adem, sampai cloud aman. Semuanya terdokumentasi rapi!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-card border-2 border-border p-4 text-center relative"
                >
                  <div className="absolute top-[-2px] left-[-2px] w-1.5 h-1.5 bg-background" />
                  <div className="absolute top-[-2px] right-[-2px] w-1.5 h-1.5 bg-background" />
                  <div className="absolute bottom-[-2px] left-[-2px] w-1.5 h-1.5 bg-background" />
                  <div className="absolute bottom-[-2px] right-[-2px] w-1.5 h-1.5 bg-background" />
                  <p className={`font-[family-name:var(--font-press-start-2p)] text-2xl md:text-3xl font-bold ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground mt-2 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8"
            >
              <div className="hidden md:flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1.5 font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground mr-2">
                  <Filter className="size-3" /> FILTER:
                </span>
                {filterOptions.map((opt) => (
                  <button
                    key={opt.value}
                    id={`filter-${opt.value}`}
                    onClick={() => setActiveFilter(opt.value)}
                    className={`px-3 py-2 font-[family-name:var(--font-press-start-2p)] text-[8px] border-2 rounded-none transition-all cursor-pointer ${
                      activeFilter === opt.value
                        ? "bg-green-500 text-black border-green-400 shadow-[2px_2px_0_0_rgba(34,197,94,0.4)]"
                        : "bg-card text-muted-foreground border-border hover:border-green-500/50 hover:text-foreground"
                    }`}
                  >
                    {opt.icon} {opt.label}
                  </button>
                ))}
              </div>

              <div className="md:hidden relative">
                <button
                  onClick={() => setShowFilter(!showFilter)}
                  className="w-full flex items-center justify-between px-4 py-3 bg-card border-2 border-border font-[family-name:var(--font-press-start-2p)] text-[9px] text-foreground cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Filter className="size-3" />
                    {activeLabel}
                  </span>
                  <ChevronDown className={`size-4 transition-transform ${showFilter ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {showFilter && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="absolute top-full left-0 right-0 z-20 bg-card border-2 border-t-0 border-border overflow-hidden"
                    >
                      {filterOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => { setActiveFilter(opt.value); setShowFilter(false); }}
                          className={`w-full text-left px-4 py-3 font-[family-name:var(--font-press-start-2p)] text-[8px] border-b border-border transition-colors cursor-pointer ${
                            activeFilter === opt.value
                              ? "bg-green-500/20 text-green-400"
                              : "text-muted-foreground hover:bg-background hover:text-foreground"
                          }`}
                        >
                          {opt.icon} {opt.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((item, index) => (
                  <PortfolioCard key={item.id} item={item} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground font-[family-name:var(--font-press-start-2p)] text-xs">
                <Trophy className="size-12 mx-auto mb-4 opacity-20" />
                <p>Belum ada misi di kategori ini...</p>
              </div>
            )}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-16 p-6 bg-card/80 backdrop-blur-sm border-2 border-green-500/40 text-center relative"
            >
              <div className="absolute top-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute top-[-2px] right-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] right-[-2px] w-2 h-2 bg-background" />

              <p className="font-[family-name:var(--font-press-start-2p)] text-xs md:text-sm text-green-400 mb-2">
                ⚔ PUNYA MISI BUAT KAMI?
              </p>
              <p className="text-sm text-muted-foreground mb-5 max-w-lg mx-auto">
                Siap nerima misi baru! Hubungi squad Techmate dan kita mulai brainstorm bareng.
              </p>
              <a
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold border-2 border-green-400 shadow-[4px_4px_0_0_rgba(74,222,128,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(74,222,128,0.4)] transition-all rounded-none"
              >
                MULAI MISI BARU →
              </a>
            </motion.div>
          </div>
        </section>

        <footer className="w-full py-10 px-4 bg-card/80 backdrop-blur-sm border-t border-border text-center font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground tracking-wider">
          <p>© {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </main>
  );
}
