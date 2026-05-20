"use client";

import { motion } from "framer-motion";
import DialogueBox from "../_components/DialogueBox";

export default function PartySection() {
  const reviews = [
    {
      speakerName: "Andi Wijaya",
      speakerTitle: "Anak Start-up",
      dialogueText: "Web toko online kami dibikin cepet banget sama Suhu Software Techmate! Kenceng gila pas dibuka, omset langsung naik semenjak ganti ke Next.js. Menyala abangkuh!",
      avatarIcon: "UserCheck" as const,
      reputationBuff: "+10 REP MENYALA",
      colorTheme: "green" as const,
    },
    {
      speakerName: "Budi Santoso",
      speakerTitle: "Anak Gaming",
      dialogueText: "Laptop gaming gua yang panasnya kayak setrikaan langsung adem lagi ditangan Ksatria Hardware Techmate. Bersih total, diganti pasta premium, mabar lancar jaya!",
      avatarIcon: "Cpu" as const,
      reputationBuff: "+5 REP NO DEBAT",
      colorTheme: "blue" as const,
    },
    {
      speakerName: "Citra Lestari",
      speakerTitle: "Anak Agensi",
      dialogueText: "Nanya-nanya soal cloud server kantor beneran dapet pencerahan dari Suhu Curhat IT. File tim kreatif jadi aman gak bakal ilang lagi. Sungkem!",
      avatarIcon: "Network" as const,
      reputationBuff: "+8 REP SUNGKEM",
      colorTheme: "amber" as const,
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 bg-black text-white overflow-hidden border-t border-zinc-900">
      {/* Retro scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]" />

      <div className="container relative z-10 mx-auto max-w-4xl">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-3 py-1 bg-zinc-900 border-2 border-zinc-800 text-zinc-400 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]"
          >
            Level 5: Kata Temen Mabar
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-white mb-6 uppercase tracking-wide"
          >
            KATA TONGKRONGAN (TESTIMONI)
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-sm md:text-base text-zinc-400"
          >
            Nih kata temen-temen mabar (klien) kami setelah beresin misi teknologi bareng squad Techmate.
          </motion.p>
        </div>

        {/* Stack of DialogueBoxes */}
        <div className="flex flex-col gap-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <DialogueBox {...review} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
