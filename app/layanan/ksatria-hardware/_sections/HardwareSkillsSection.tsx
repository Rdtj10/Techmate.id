"use client";

import SkillTree, { SkillPath } from "@/app/_components/SkillTree";

const hardwarePaths: SkillPath[] = [
  {
    title: "REPAIR PATH",
    description: "Pertolongan pertama dan servis mendalam buat perangkat sekarat.",
    skills: [
      {
        id: "hw-rep-1",
        name: "Deep Cleansing",
        level: "Lv. 5/5",
        description: "Bongkar total casing, bersihin debu tebal, dan ganti thermal paste premium biar temperatur dingin lagi.",
        iconName: "Wind",
        status: "maxed",
      },
      {
        id: "hw-rep-2",
        name: "Component Replacement",
        level: "Lv. 5/5",
        description: "Ganti layar LCD kedip, keyboard ngetik sendiri, baterai kembung, kipas berisik, atau engsel patah.",
        iconName: "Layers",
        status: "maxed",
      },
      {
        id: "hw-rep-3",
        name: "IC Board Repair",
        level: "Lv. 4/5",
        description: "Solder ulang komponen kapasitor mikro, ganti IC Power, repair jalur putus akibat korsleting.",
        iconName: "Cpu",
        status: "unlocked",
      },
    ],
  },
  {
    title: "UPGRADE PATH",
    description: "Suntik performa biar loading secepat kilat dan lancar multitasking.",
    skills: [
      {
        id: "hw-upg-1",
        name: "RAM Booster",
        level: "Lv. 5/5",
        description: "Upgrade kapasitas RAM (DDR4/DDR5) ke dual channel biar buka Chrome puluhan tab anti-lag.",
        iconName: "Zap",
        status: "maxed",
      },
      {
        id: "hw-upg-2",
        name: "SSD Warp Drive",
        level: "Lv. 5/5",
        description: "Ganti HDD lemot ke SSD SATA/NVMe M.2 super ngebut, clone OS aman tanpa kehilangan data penting.",
        iconName: "Gauge",
        status: "maxed",
      },
      {
        id: "hw-upg-3",
        name: "Custom Liquid Cooling",
        level: "Lv. LOCKED",
        description: "Merakit custom water loop system (hardline/softube) demi pendinginan maksimal PC spesifikasi tinggi.",
        iconName: "Droplet",
        status: "locked",
      },
    ],
  },
  {
    title: "BUILD PATH",
    description: "Konsultasi spek dan perakitan PC monster sesuai budget lo.",
    skills: [
      {
        id: "hw-bld-1",
        name: "Part Synthesizer",
        level: "Lv. 4/5",
        description: "Riset komponen PC paling value-for-money sesuai kebutuhan gaming, editing, atau server, anti-bottleneck.",
        iconName: "ListFilter",
        status: "unlocked",
      },
      {
        id: "hw-bld-2",
        name: "PC Assembler",
        level: "Lv. 5/5",
        description: "Merakit PC dengan teliti, perhatikan airflow casing, plus merapikan manajemen kabel (cable management) estetik.",
        iconName: "Wrench",
        status: "maxed",
      },
      {
        id: "hw-bld-3",
        name: "Overclock Spell",
        level: "Lv. LOCKED",
        description: "Tuning BIOS kustom, atur voltage, overclock RAM (XMP/EXPO) & CPU untuk FPS gratisan secara aman.",
        iconName: "Flame",
        status: "locked",
      },
    ],
  },
];

export default function HardwareSkillsSection() {
  return (
    <section className="relative w-full py-16 bg-card border-t-2 border-b-2 border-border overflow-hidden text-foreground transition-colors duration-300">
      
      <div className="container mx-auto max-w-5xl px-4 flex flex-col items-center mb-12 text-center">
        <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
          SPELL & SKILLS
        </span>
        <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-foreground mb-4">
          POHON SIHIR HARDWARE
        </h2>
        <p className="max-w-2xl text-xs md:text-sm text-muted-foreground font-sans leading-relaxed">
          Ubek-ubek pohon keahlian Ksatria Hardware di bawah. Kami garansi penanganan fisik laptop & PC dikerjakan dengan standar profesional dan penuh kehati-hatian.
        </p>
      </div>

      
      <div className="container mx-auto max-w-5xl px-4">
        <div className="p-6 md:p-8 bg-background border-4 border-border rounded-none relative">
          
          <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background z-20" />
          <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background z-20" />
          <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background z-20" />
          <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background z-20" />

          <SkillTree paths={hardwarePaths} colorTheme="blue" />
        </div>
      </div>
    </section>
  );
}
