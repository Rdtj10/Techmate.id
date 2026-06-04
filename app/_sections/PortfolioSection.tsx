"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Trophy } from "lucide-react";
import PortfolioCard from "../_components/PortfolioCard";
import { featuredPortfolio } from "@/data/portfolio";

export default function PortfolioSection() {
  return (
    <section className="relative w-full py-20 px-4 bg-background/70 backdrop-blur-sm text-foreground overflow-hidden border-t border-border transition-colors duration-300">
      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 bg-card border-2 border-border text-muted-foreground text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)] transition-colors duration-300"
          >
            Level 6: Hall of Fame
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-foreground mb-6 uppercase tracking-wide"
          >
            MISI YANG UDAH CLEAR
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-sm md:text-base text-muted-foreground"
          >
            Koleksi misi S-Rank yang udah berhasil diselesaikan squad Techmate. Dari web kenceng sampai PC dingin, semua ada catatannya!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {featuredPortfolio.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-2 text-muted-foreground font-[family-name:var(--font-press-start-2p)] text-[9px]">
            <Trophy className="size-3.5 text-amber-400" />
            <span className="text-amber-400 font-bold">9+ MISI CLEARED</span>
            <span>— dan terus bertambah!</span>
          </div>

          <Link
            href="/portofolio"
            className="group flex items-center gap-2 px-6 py-3 bg-card border-2 border-green-500 text-green-400 font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold shadow-[4px_4px_0_0_rgba(34,197,94,0.3)] hover:shadow-[2px_2px_0_0_rgba(34,197,94,0.3)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-none"
          >
            LIHAT SEMUA MISI
            <ChevronRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
