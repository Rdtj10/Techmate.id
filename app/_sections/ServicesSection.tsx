"use client";

import { motion } from "framer-motion";
import ServiceClassCard from "../_components/ServiceClassCard";

export default function ServicesSection() {
  const services = [
    {
      classNameTitle: "Suhu Software",
      iconName: "Wand2" as const,
      level: 99,
      description: "Jagoan nulis kode ajaib buat bikin web kenceng dan aplikasi HP yang super smooth. Anti-lemot, estetik, dan kece badai!",
      manaCost: "Medium",
      castTime: "Fast",
      cooldown: "Instant",
      skills: ["Bikin Web Keren", "Aplikasi Mobile", "Sihir Database", "API Gercep"],
      colorTheme: "green" as const,
    },
    {
      classNameTitle: "Ksatria Hardware",
      iconName: "Shield" as const,
      level: 95,
      description: "Spesialis penyelamat laptop/PC lo yang lagi sekarat. Dari rakit PC gaming estetik, ganti thermal paste biar adem, sampai benerin komponen rusak.",
      manaCost: "Low",
      castTime: "Normal",
      cooldown: "Medium",
      skills: ["Rakit PC Estetik", "Benerin Laptop Sekarat", "Instal Ulang Anti-Ribet", "Bikin Adem PC"],
      colorTheme: "blue" as const,
    },
    {
      classNameTitle: "Suhu Curhat IT",
      iconName: "Flame" as const,
      level: 92,
      description: "Suhu tempat curhat masalah IT. Jago ngerancang sistem cloud biar aman, ngasih buff strategi digital bisnis lo, biar anti-boncos.",
      manaCost: "High",
      castTime: "Instant",
      cooldown: "Long",
      skills: ["Arsitektur Cloud", "Buff Strategi IT", "Audit Sistem Aman", "Solusi Anti-Boncos"],
      colorTheme: "amber" as const,
    },
  ];

  return (
    <section className="relative w-full py-20 px-4 bg-zinc-950 text-white overflow-hidden border-t border-zinc-900">
      {/* Background Decorative Neon Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"
           style={{
             backgroundImage: "linear-gradient(#4b5563 1px, transparent 1px), linear-gradient(90deg, #4b5563 1px, transparent 1px)",
             backgroundSize: "80px 80px"
           }}
      />

      <div className="container relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 bg-zinc-900 border-2 border-zinc-800 text-zinc-400 text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]"
          >
            Level 2: Pilih Squad Lo
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-white mb-6 uppercase tracking-wide"
          >
            PILIH JOB KELAS LO
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl text-sm md:text-base text-zinc-400"
          >
            Pilih peran sepuh yang lo butuhin buat kelarin masalah teknologi lo. Tiap job punya skill op (overpowered) buat libas tuntas semua eror!
          </motion.p>
        </div>

        {/* Grid Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex"
            >
              <ServiceClassCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
