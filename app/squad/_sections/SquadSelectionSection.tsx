"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import { Icon } from "@iconify/react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  class: string;
  level: string;
  colorTheme: "green" | "blue" | "amber" | "purple";
  iconName: keyof typeof Icons;
  quote: string;
  description: string;
  stats: {
    hp: number;
    mp: number;
    str: number;
    int: number;
    agi: number;
  };
  skills: string[];
  socials: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    youtube?: string;
  };
}

const squadList: TeamMember[] = [
  {
    id: "owner",
    name: "Rian 'The Visionary'",
    role: "Owner & CEO",
    class: "Guild Master",
    level: "Lv. 99",
    colorTheme: "amber",
    iconName: "Crown",
    quote: "Kerja keras bagai kuda boleh aja, tapi push rank ML tetep nomor satu. Utamakan sinergi guild, hindari player toxic!",
    description: "Pimpinan tertinggi guild Techmate. Kerjaan utamanya mikirin arah bisnis dan masa depan IT Indonesia sambil diselingi ngopi robusta sachet di sore hari. Ahli negosiasi level dewa yang siap deal dengan klien kelas naga.",
    stats: { hp: 100, mp: 80, str: 60, int: 95, agi: 70 },
    skills: ["Business Strategy", "Deal Maker", "Resource Allocation", "Funding Catalyst"],
    socials: { instagram: "https://instagram.com/techmate", linkedin: "https://linkedin.com" },
  },
  {
    id: "tech-lead",
    name: "Aris 'The Compiler'",
    role: "Tech Lead",
    class: "Archmage",
    level: "Lv. 95",
    colorTheme: "green",
    iconName: "Wand2",
    quote: "Tenang, sistemnya ga bakal meledak kok... Paling cuma eror stack overflow di production pas weekend.",
    description: "Penyihir kode yang ahli merancang arsitektur sistem raksasa. Hobi benerin bug kritis yang sebenernya dia sendiri yang tulis di hari Jum'at sore. Secangkir kopi hitam tanpa gula adalah ramuan mana wajibnya.",
    stats: { hp: 80, mp: 120, str: 40, int: 99, agi: 80 },
    skills: ["System Design", "Code Hardening", "Bug Exorcism", "Mentorship Spell"],
    socials: { instagram: "https://instagram.com/techmate", linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "swe",
    name: "Dani 'The Debugger'",
    role: "Software Engineer",
    class: "Shadow Blade",
    level: "Lv. 92",
    colorTheme: "blue",
    iconName: "Cpu",
    quote: "Eror 404: Pacar Not Found. Tapi runtime website ini dijamin 99.9% anti-down. Prioritas hidup terpampang nyata.",
    description: "Ngoding gesit di balik bayang-bayang terminal gelap. Bergerak cepat mendeploy fitur baru sebelum klien sempat meminta revisi tambahan. Paling pusing kalau disuruh benerin styling layout browser jadul.",
    stats: { hp: 75, mp: 95, str: 50, int: 92, agi: 95 },
    skills: ["Fullstack Dev", "Database Warp", "API Sprinter", "Git Mastery"],
    socials: { instagram: "https://instagram.com/techmate", linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    id: "developer",
    name: "Bimo 'The Padding'",
    role: "Frontend Developer",
    class: "Paladin",
    level: "Lv. 88",
    colorTheme: "purple",
    iconName: "Sparkles",
    quote: "Pixel-perfect itu harga mati. Geser 1px ke kiri demi keselarasan estetika kosmik web adalah jalan ninja saya.",
    description: "Penjaga setia tampilan antarmuka (frontend). Paling rajin menumpuk tag div demi membuat transisi hover yang super smooth dan estetik. Selalu tahu library UI paling modern dan trendi.",
    stats: { hp: 90, mp: 75, str: 65, int: 80, agi: 88 },
    skills: ["Pixel Perfect UI", "Tailwind Shield", "Micro-Animations", "Responsiveness Guard"],
    socials: { instagram: "https://instagram.com/techmate", github: "https://github.com" },
  },
  {
    id: "teknisi",
    name: "Eko 'The Solderer'",
    role: "Hardware Technician",
    class: "Berserker",
    level: "Lv. 90",
    colorTheme: "amber",
    iconName: "Wrench",
    quote: "Laptop mati total atau kemasukan kopi? Jangan dibuang! Selama solder & timah panas masih ada, masih ada harapan.",
    description: "Petarung garis depan perbaikan fisik perangkat. Ahli membongkar laptop mati total, melakukan reballing chip VGA/CPU, dan merakit PC gaming estetik dengan airflow super adem. Napasnya sudah beraroma asap solder.",
    stats: { hp: 120, mp: 40, str: 99, int: 60, agi: 65 },
    skills: ["BGA Reballing", "Solder Mastery", "Airflow Tuning", "Short-Circuit Finder"],
    socials: { instagram: "https://instagram.com/techmate", youtube: "https://youtube.com" },
  },
];

const themes = {
  green: {
    border: "border-green-500",
    borderActive: "border-green-400 shadow-[0_0_15px_rgba(34,197,94,0.4)]",
    text: "text-green-400",
    bgText: "bg-green-500/10",
    badge: "bg-green-500 text-black border-green-400",
    bar: "bg-green-500",
    glow: "shadow-[6px_6px_0_0_rgba(34,197,94,0.3)]",
  },
  blue: {
    border: "border-blue-500",
    borderActive: "border-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.4)]",
    text: "text-blue-400",
    bgText: "bg-blue-500/10",
    badge: "bg-blue-500 text-black border-blue-400",
    bar: "bg-blue-500",
    glow: "shadow-[6px_6px_0_0_rgba(59,130,246,0.3)]",
  },
  amber: {
    border: "border-amber-500",
    borderActive: "border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]",
    text: "text-amber-400",
    bgText: "bg-amber-500/10",
    badge: "bg-amber-500 text-black border-amber-400",
    bar: "bg-amber-500",
    glow: "shadow-[6px_6px_0_0_rgba(245,158,11,0.3)]",
  },
  purple: {
    border: "border-purple-500",
    borderActive: "border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.4)]",
    text: "text-purple-400",
    bgText: "bg-purple-500/10",
    badge: "bg-purple-500 text-black border-purple-400",
    bar: "bg-purple-500",
    glow: "shadow-[6px_6px_0_0_rgba(168,85,247,0.3)]",
  },
};

export default function SquadSelectionSection() {
  const [selectedId, setSelectedId] = useState<string>("owner");
  const selectedMember = squadList.find((m) => m.id === selectedId) || squadList[0];
  const theme = themes[selectedMember.colorTheme] || themes.green;

  // Render stats bar in retro style: [■■■■■□□□□□]
  const renderStatBar = (val: number, maxVal: number = 120) => {
    const blocksCount = 10;
    const filledCount = Math.min(blocksCount, Math.round((val / maxVal) * blocksCount));
    const emptyCount = blocksCount - filledCount;

    return (
      <div className="flex items-center gap-1 text-[10px] md:text-xs">
        <span className="text-zinc-400 font-mono tracking-wider w-8 inline-block text-right pr-1">
          {val}
        </span>
        <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[10px] tracking-tight flex">
          <span className={theme.text}>{"■".repeat(filledCount)}</span>
          <span className="text-zinc-800">{"■".repeat(emptyCount)}</span>
        </span>
      </div>
    );
  };

  return (
    <section className="relative w-full pb-20 bg-black text-white px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT SIDE: CHARACTER GRID SELECTOR */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-2">
              <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-500 tracking-wider">
                CHARACTER SELECT ({squadList.length}/{squadList.length})
              </span>
              <div className="w-2.5 h-2.5 bg-green-500 animate-ping rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {squadList.map((member) => {
                const isSelected = member.id === selectedId;
                const memberTheme = themes[member.colorTheme];
                // const MemberIcon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[member.iconName] || Icons.User;

                return (
                  <button
                    key={member.id}
                    onClick={() => setSelectedId(member.id)}
                    className={`relative w-full text-left p-3.5 bg-zinc-950 border-2 transition-all duration-150 rounded-none flex items-center gap-4 cursor-pointer group ${isSelected
                        ? `${memberTheme.borderActive} bg-zinc-900/40`
                        : "border-zinc-800 hover:border-zinc-700"
                      }`}
                  >
                    {/* Retro Corner Pixels */}
                    <div className="absolute top-[-2px] left-[-2px] w-1 h-1 bg-black z-10" />
                    <div className="absolute top-[-2px] right-[-2px] w-1 h-1 bg-black z-10" />
                    <div className="absolute bottom-[-2px] left-[-2px] w-1 h-1 bg-black z-10" />
                    <div className="absolute bottom-[-2px] right-[-2px] w-1 h-1 bg-black z-10" />

                    {/* Avatar Icon Box */}
                    <div
                      className={`p-2 border-2 ${isSelected ? memberTheme.border : "border-zinc-800"
                        } bg-black shrink-0`}
                    >
                      {/* <MemberIcon
                        className={`size-6 ${
                          isSelected ? memberTheme.text : "text-zinc-500 group-hover:text-zinc-300"
                        }`}
                      /> */}
                    </div>

                    {/* Meta Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-start gap-1">
                        <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] block text-zinc-500 uppercase tracking-wide">
                          {member.class}
                        </span>
                        <span
                          className={`font-[family-name:var(--font-press-start-2p)] text-[7px] px-1 bg-zinc-900 border border-zinc-800 text-zinc-400`}
                        >
                          {member.level}
                        </span>
                      </div>
                      <h3
                        className={`font-sans font-bold text-sm leading-snug truncate ${isSelected ? "text-white" : "text-zinc-400 group-hover:text-white"
                          }`}
                      >
                        {member.name}
                      </h3>
                      <p className="text-[11px] text-zinc-500 truncate">{member.role}</p>
                    </div>

                    {/* Selector Arrow */}
                    {isSelected && (
                      <div className={`absolute right-2 text-xs ${memberTheme.text} animate-bounce-horizontal`}>
                        &lt;
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE: ACTIVE CHARACTER DETAILS STATUS BOARD */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMember.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className={`relative w-full bg-zinc-950 border-4 ${theme.border} p-6 flex flex-col justify-between rounded-none shadow-[8px_8px_0_0_rgba(255,255,255,0.02)]`}
              >
                {/* Corner Retro Pixels */}
                <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-black z-20" />
                <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-black z-20" />
                <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-black z-20" />
                <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-black z-20" />

                {/* Status Bar Header */}
                <div className="flex flex-wrap items-center justify-between border-b-2 border-zinc-900 pb-4 mb-6 gap-3">
                  <div>
                    <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest block mb-1">
                      ACTIVE HERO STATUS
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {selectedMember.name}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px]">
                    <span className={`px-2 py-1 border-2 font-bold ${theme.badge} rounded-none`}>
                      {selectedMember.class}
                    </span>
                    <span className="px-2 py-1 bg-zinc-900 border-2 border-zinc-800 text-zinc-300">
                      {selectedMember.level}
                    </span>
                  </div>
                </div>

                {/* Character Split Info */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">

                  {/* Left sub-column: Large portrait + Stats */}
                  <div className="md:col-span-6 flex flex-col gap-4">
                    {/* Big Avatar Container */}
                    <div className="w-full aspect-video md:aspect-square bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                      {/* Grid background on preview */}
                      <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:10px_10px]" />

                      {/* Big Icon */}
                      {/* {(() => {
                        const LargeIcon = (Icons as Record<string, React.ComponentType<{ className?: string }>>)[selectedMember.iconName] || Icons.User;
                        return (
                          <div className={`p-6 bg-black border-4 ${theme.border} ${theme.glow} z-10 transition-transform duration-300 group-hover:scale-110`}>
                            <LargeIcon className={`size-14 md:size-16 ${theme.text}`} />
                          </div>
                        );
                      })()} */}

                      <span className="absolute bottom-2 left-2 text-[8px] font-mono text-zinc-600">
                        SPRITE_RENDER_OK
                      </span>
                    </div>

                    {/* Social Media Links */}
                    <div className="flex flex-col gap-2">
                      <span className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-zinc-600 tracking-wider">
                        CONNECT SOCIALS
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.socials.instagram && (
                          <a
                            href={selectedMember.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-colors rounded-none flex items-center gap-1.5 text-xs font-mono"
                          >
                            <Icon icon="ph:instagram-logo-fill" className="size-4 text-pink-500" />
                            <span>Instagram</span>
                          </a>
                        )}
                        {selectedMember.socials.linkedin && (
                          <a
                            href={selectedMember.socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-colors rounded-none flex items-center gap-1.5 text-xs font-mono"
                          >
                            <Icon icon="bxl:linkedin" className="size-4 text-blue-400" />
                            <span>LinkedIn</span>
                          </a>
                        )}
                        {selectedMember.socials.github && (
                          <a
                            href={selectedMember.socials.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-colors rounded-none flex items-center gap-1.5 text-xs font-mono"
                          >
                            <Icon icon="ant-design:github-outlined" className="size-4 text-zinc-200" />
                            <span>GitHub</span>
                          </a>
                        )}
                        {selectedMember.socials.youtube && (
                          <a
                            href={selectedMember.socials.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 hover:bg-zinc-800 transition-colors rounded-none flex items-center gap-1.5 text-xs font-mono"
                          >
                            <Icon icon="brandix:youtube" className="size-4 text-red-500" />
                            <span>YouTube</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Right sub-column: Stats & Info description */}
                  <div className="md:col-span-6 flex flex-col gap-6 justify-between">

                    {/* Status RPG Board */}
                    <div className="p-4 bg-zinc-900 border-2 border-zinc-800 rounded-none relative">
                      <span className="absolute top-[-8px] left-3 bg-zinc-900 px-2 font-[family-name:var(--font-press-start-2p)] text-[7px] text-zinc-500 tracking-wider">
                        SPELL STATS
                      </span>
                      <div className="space-y-3 mt-1.5">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] md:text-xs font-mono text-red-400 font-bold">HP (Health)</span>
                          {renderStatBar(selectedMember.stats.hp)}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] md:text-xs font-mono text-blue-400 font-bold">MP (Mana)</span>
                          {renderStatBar(selectedMember.stats.mp)}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] md:text-xs font-mono text-amber-500 font-bold">STR (Strength)</span>
                          {renderStatBar(selectedMember.stats.str)}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] md:text-xs font-mono text-green-400 font-bold">INT (Intellect)</span>
                          {renderStatBar(selectedMember.stats.int)}
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] md:text-xs font-mono text-purple-400 font-bold">AGI (Agility)</span>
                          {renderStatBar(selectedMember.stats.agi)}
                        </div>
                      </div>
                    </div>

                    {/* Active Skill List */}
                    <div className="p-4 bg-zinc-900 border-2 border-zinc-800 rounded-none relative">
                      <span className="absolute top-[-8px] left-3 bg-zinc-900 px-2 font-[family-name:var(--font-press-start-2p)] text-[7px] text-zinc-500 tracking-wider">
                        ACTIVE SPELLS
                      </span>
                      <div className="flex flex-wrap gap-2 mt-1.5">
                        {selectedMember.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-[10px] font-mono bg-black text-zinc-300 border border-zinc-800 rounded-none"
                          >
                            ⭐ {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote Box (Gen-Z) */}
                <div className="p-4 bg-zinc-900 border-2 border-zinc-800 rounded-none relative mb-6">
                  <span className="absolute top-[-8px] left-3 bg-zinc-900 px-2 font-[family-name:var(--font-press-start-2p)] text-[7px] text-zinc-500 tracking-wider">
                    SPEAKER_QUOTE.TXT
                  </span>
                  <p className={`text-xs md:text-sm font-medium italic ${theme.text} leading-relaxed`}>
                    &quot;{selectedMember.quote}&quot;
                  </p>
                </div>

                {/* Description Text */}
                <div className="p-4 bg-zinc-900 border-2 border-zinc-800 rounded-none relative">
                  <span className="absolute top-[-8px] left-3 bg-zinc-900 px-2 font-[family-name:var(--font-press-start-2p)] text-[7px] text-zinc-500 tracking-wider">
                    GUILD_LOG_ENTRY
                  </span>
                  <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-sans mt-1">
                    {selectedMember.description}
                  </p>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
