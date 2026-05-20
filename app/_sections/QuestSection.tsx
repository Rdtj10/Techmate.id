"use client";

import { motion } from "framer-motion";
import QuestStep from "../_components/QuestStep";

export default function QuestSection() {
  const quests = [
    {
      stepNumber: "01",
      questName: "KUMPULIN INFO (Rapat Santai)",
      objective: "Kita kumpulin semua info kemauan lo, bikin sketsa sistem, dan ngerancang database biar pas sama target lo.",
      duration: "1 - 3 Hari",
      reward: "Dokumen Blueprint & SOW",
      status: "completed" as const,
      iconName: "SearchCode" as const,
    },
    {
      stepNumber: "02",
      questName: "MULAI NEMPA (Proses Bikin)",
      objective: "Squad kami mulai nulis kodingan keren (SSR+CSR) atau benerin hardware laptop/PC lo biar kembali ngebut.",
      duration: "1 - 4 Minggu",
      reward: "Akses Demo Web & GitHub",
      status: "active" as const,
      iconName: "Hammer" as const,
    },
    {
      stepNumber: "03",
      questName: "BASMI EROR & RILIS (Launching)",
      objective: "Buru sisa-sisa eror, tes keamanan sistem, cek kecepatan web sampai dapet skor 95+, terus langsung rilis online!",
      duration: "2 - 4 Hari",
      reward: "Web Aktif + Garansi Sepuh",
      status: "locked" as const,
      iconName: "Rocket" as const,
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Neon Grid Decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
             backgroundSize: "60px 60px"
           }}
      />

      <div className="container relative z-10 mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 bg-zinc-900 border-2 border-zinc-800 text-zinc-400 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]"
          >
            Level 4: Misi Aktif Squad
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-white mb-6 uppercase tracking-wide"
          >
            PAPAN MISI (CARA KERJA)
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-sm md:text-base text-zinc-400"
          >
            Nih langkah petualangan proyek lo bareng kami dari awal sampai kelar. Alur transparan, anti-gimmick!
          </motion.p>
        </div>

        {/* Timeline Quests Steps */}
        <div className="relative flex flex-col gap-12 md:gap-16">
          
          {/* Vertical Connection Line for timeline */}
          <div className="absolute left-[26px] md:left-[28px] top-6 bottom-6 w-1 bg-zinc-800 z-0 pointer-events-none" />

          {quests.map((quest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="z-10"
            >
              <QuestStep {...quest} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
