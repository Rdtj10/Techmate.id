"use client";

import { motion } from "framer-motion";
import StatProgressBar from "../_components/StatProgressBar";
import { Shield, Swords, Trophy } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      label: "KECEPATAN & KUALITAS KODING",
      value: 96,
      colorTheme: "green" as const,
      statBuffText: "+96% KODING KILAT",
    },
    {
      label: "AKURASI BASMI BUG SISTEM",
      value: 98,
      colorTheme: "blue" as const,
      statBuffText: "+98% BEBAS BUG",
    },
    {
      label: "PERTAHANAN SERVER & DATA",
      value: 94,
      colorTheme: "purple" as const,
      statBuffText: "+94% ANTI-JEBOL",
    },
    {
      label: "TINGKAT KEPUASAN MABAR",
      value: 100,
      colorTheme: "amber" as const,
      statBuffText: "MAX PUAS: 100%",
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 bg-black text-white overflow-hidden border-t border-zinc-900">
      {/* Retro decorative scanlines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%]" />

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Character Status Screen Layout */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 w-full bg-zinc-950 border-4 border-zinc-800 p-6 rounded-none relative shadow-[6px_6px_0_0_rgba(255,255,255,0.03)]"
          >
            {/* Pixel corners */}
            <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-black z-10" />
            <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-black z-10" />
            <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-black z-10" />
            <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-black z-10" />

            {/* Character Header Badge */}
            <div className="flex items-center gap-3 border-b-2 border-zinc-800 pb-4 mb-5">
              <div className="w-12 h-12 bg-green-500/10 border-2 border-green-500 rounded-none flex items-center justify-center text-green-400 font-bold text-xl font-[family-name:var(--font-press-start-2p)]">
                TM
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-press-start-2p)] text-xs font-bold text-white uppercase tracking-wider">
                  SQUAD TECHMATE
                </h3>
                <span className="text-[9px] font-[family-name:var(--font-press-start-2p)] text-zinc-500">
                  SQUAD: HIGH-TIER MABAR
                </span>
              </div>
            </div>

            {/* RPG Stats Sheet */}
            <div className="flex flex-col gap-4 font-[family-name:var(--font-press-start-2p)] text-[9px] md:text-xs">
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-600">PANGKAT SQUAD:</span>
                <span className="text-amber-400 font-bold">SEPUH S-TIER ★★★</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-600">MISI CLEARED:</span>
                <span className="text-zinc-200 font-bold">150+ SELESAI</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-600">ANGGOTA SEPUH:</span>
                <span className="text-zinc-200 font-bold">5 JAGOAN OP</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-600">BUFF PASIF:</span>
                <span className="text-green-400 font-bold">ANTI-ERROR & LEMOT</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-zinc-900">
                <span className="text-zinc-600">SENJATA UTAMA:</span>
                <span className="text-blue-400 font-bold">TECH STACK KEKINIAN</span>
              </div>
            </div>

            {/* Retro Trophy / Badges row */}
            <div className="flex justify-around items-center mt-6 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-none">
              <div className="flex flex-col items-center gap-1 opacity-85">
                <Trophy className="size-6 text-amber-400" />
                <span className="text-[6px] font-[family-name:var(--font-press-start-2p)] text-zinc-500">99.9% NYALA</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-85">
                <Swords className="size-6 text-green-400" />
                <span className="text-[6px] font-[family-name:var(--font-press-start-2p)] text-zinc-500">RESPON KILAT</span>
              </div>
              <div className="flex flex-col items-center gap-1 opacity-85">
                <Shield className="size-6 text-blue-400" />
                <span className="text-[6px] font-[family-name:var(--font-press-start-2p)] text-zinc-500">AMAN BANGET</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Status/Stat Bars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="mb-8">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="px-3 py-1 bg-zinc-900 border-2 border-zinc-800 text-zinc-400 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]"
              >
                Level 3: Buff Status Squad
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-white mb-6 uppercase"
              >
                STATUS SQUAD KAMI
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-zinc-400 text-sm md:text-base leading-relaxed"
              >
                Kami gak cuma ngerjain tugas lo, tapi juga ngasih buff status super gede ke sistem lo. Nih statistik keunggulan squad kami yang siap bantu mabar!
              </motion.p>
            </div>

            {/* List of Stat Progress Bars */}
            <div className="flex flex-col">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <StatProgressBar {...stat} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
