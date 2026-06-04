"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";
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
    name: "Hamizan 'The Visionary'",
    role: "Owner & CEO",
    class: "Guild Master",
    level: "Lv. 99",
    colorTheme: "amber",
    iconName: "Crown",
    quote:
      "Kerja keras bagai kuda boleh aja, tapi push rank ML tetep nomor satu. Utamakan sinergi guild, hindari player toxic!",
    description:
      "Pimpinan tertinggi guild Techmate. Kerjaan utamanya mikirin arah bisnis dan masa depan IT Indonesia sambil diselingi ngopi robusta sachet di sore hari. Ahli negosiasi level dewa yang siap deal dengan klien kelas naga.",
    stats: { hp: 100, mp: 80, str: 60, int: 95, agi: 70 },
    skills: [
      "Business Strategy",
      "Deal Maker",
      "Resource Allocation",
      "Funding Catalyst",
    ],
    socials: {
      instagram: "https://www.instagram.com/hamizan_024/",
      linkedin: "https://www.linkedin.com/in/hamizanrafiqiazuris/",
    },
  },
  {
    id: "software-lead",
    name: "Dimas 'The Software Sage'",
    role: "Software Technical Lead",
    class: "Code Conjurer",
    level: "Lv. 94",
    colorTheme: "blue",
    iconName: "Terminal",
    quote: "Semua bisa jadi software, termasuk bahlil",
    description:
      "Seorang pembawa sabda bahwa segalanya di dunia ini bisa diramu menjadi program komputer. Ahli menyulap ide serumit apa pun menjadi untaian kode bersih. Hobinya merancang arsitektur software sambil memantau berita politik hangat tanah air.",
    stats: { hp: 85, mp: 110, str: 55, int: 96, agi: 85 },
    skills: [
      "Software Engineering",
      "Team Work",
      "Frontend",
      "Backend",
      "User Testing",
    ],
    socials: {
      instagram: "https://www.instagram.com/dhodols/",
      linkedin: "https://www.linkedin.com/in/ridho-dimas-tj/",
      github: "https://github.com/Rdtj10",
    },
  },
  {
    id: "swe",
    name: "Kelvin 'The Debugger'",
    role: "Software Engineer",
    class: "Shadow Blade",
    level: "Lv. 92",
    colorTheme: "blue",
    iconName: "Cpu",
    quote:
      "Kalo nge-bug fix itu kayak nyari jarum di tumpukan jerami. Bedanya, jeraminya juga bug semua dan jarumnya nambah tiap jam.",
    description:
      "Software Engineer yang beroperasi di balik layar terminal gelap. Jago nge-trace bug sampe ke akar-akarnya dan deploy fitur baru secepat kilat sebelum deadline menghantui. Senjata utamanya: logika besi dan caffeine overdose. Kalo udah masuk flow state, jangan ganggu — bisa-bisa satu sprint kelar dalam sehari.",
    stats: { hp: 75, mp: 95, str: 50, int: 92, agi: 95 },
    skills: [
      "Fullstack Dev",
      "Bug Slayer",
      "API Architect",
      "Git Mastery",
      "Performance Tuning",
    ],
    socials: {
      instagram: "https://instagram.com/kelvinawlsn_",
      linkedin: "https://www.linkedin.com/in/kelvinauliawilson/",
      github: "https://github.com",
    },
  },

  {
    id: "uiux",
    name: "Dika 'The Vibe Coder'",
    role: "UI/UX Designer",
    class: "Pixel Artisan",
    level: "Lv. 89",
    colorTheme: "purple",
    iconName: "Palette",
    quote: "gabisa ngoding tapi bisa vibe coding",
    description:
      "Penyihir visual yang handal dalam drag and drop, dan tempel-tempel aset di atas canvas Figma. Meskipun gabisa ngoding, energinya dalam melakukan vibe coding mampu meningkatkan estetika tampilan antarmuka game ke tingkat maksimal!",
    stats: { hp: 80, mp: 90, str: 30, int: 85, agi: 90 },
    skills: [
      "Problem Solving",
      "Design Thinking",
      "UX Research",
      "UI Design",
      "Prototyping",
      "User Testing",
    ],
    socials: {
      instagram: "https://www.instagram.com/dik_alkad/",
      linkedin: "https://www.linkedin.com/in/dika-alkadri/",
      github: "https://github.com/dikaakadri",
    },
  },
  {
    id: "uiux2",
    name: "Mus 'The Pixel Whisperer'",
    role: "UI/UX Designer",
    class: "Pixel Master",
    level: "Lv. 90",
    colorTheme: "amber",
    iconName: "PenTool",
    quote:
      "User nggak peduli kodingan lo sekeren apa. Yang mereka peduli cuma: tombolnya gampang diklik nggak? Warnanya enak diliat nggak? Itu aja sih, simpel.",
    description:
      "Penjaga gerbang pengalaman pengguna. Mus adalah UI/UX Designer yang obsesif terhadap detail — dari jarak antar elemen, kontras warna, sampai micro-interaction yang bikin user betah scroll. Senjata utamanya Figma dan FigJam, dipadukan intuisi tajam soal apa yang bikin desain terasa 'klik' di mata user. Kalau ada yang bilang 'udah bagus kok', dia tetap revisi 3x lagi.",
    stats: { hp: 85, mp: 95, str: 35, int: 88, agi: 92 },
    skills: [
      "Figma Mastery",
      "Design System",
      "UX Research",
      "Wireframing",
      "Prototyping",
      "Usability Testing",
    ],
    socials: {
      instagram: "https://instagram.com/khairulmusstafa",
      linkedin: "https://www.linkedin.com/in/khairulmusstafa/",
      github: "https://github.com/khairulmusstafa",
    },
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
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const selectedMember =
    squadList.find((m) => m.id === selectedId) || squadList[0];
  const theme = themes[selectedMember.colorTheme] || themes.green;

  const root = squadList.find((m) => m.id === "owner")!;
  const dimas = squadList.find((m) => m.id === "software-lead")!;
  const kelvin = squadList.find((m) => m.id === "swe")!;
  const dika = squadList.find((m) => m.id === "uiux")!;
  const mus = squadList.find((m) => m.id === "uiux2")!;

  const activeId = hoveredId || selectedId;
  const activeMember =
    squadList.find((m) => m.id === activeId) || selectedMember;
  const activeColorTheme = activeMember.colorTheme;

  const getLineStyles = (
    isActive: boolean,
    themeColor?: "green" | "blue" | "amber" | "purple",
  ) => {
    if (!isActive) {
      return {
        bg: "bg-zinc-300 dark:bg-zinc-800 hover:bg-zinc-400 dark:hover:bg-zinc-700",
        border:
          "border-zinc-300 dark:border-zinc-800 hover:border-zinc-400 dark:hover:bg-zinc-700",
        text: "text-zinc-350 dark:text-zinc-800",
      };
    }
    switch (themeColor) {
      case "amber":
        return {
          bg: "bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]",
          border: "border-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]",
          text: "text-amber-500",
        };
      case "blue":
        return {
          bg: "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]",
          border: "border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]",
          text: "text-blue-500",
        };
      case "purple":
        return {
          bg: "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]",
          border: "border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]",
          text: "text-purple-500",
        };
      default:
        return {
          bg: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]",
          border: "border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]",
          text: "text-green-500",
        };
    }
  };

  const styleSegA = getLineStyles(true, activeColorTheme);
  const styleSegB = getLineStyles(true, activeColorTheme);
  const styleSegCLeft = getLineStyles(
    activeId === "software-lead" || activeId === "swe",
    "blue",
  );
  const styleSegCRight = getLineStyles(
    activeId === "uiux" || activeId === "uiux2",
    activeColorTheme === "purple" ? "purple" : "amber",
  );
  const styleSegDLeft = getLineStyles(
    activeId === "software-lead" || activeId === "swe",
    "blue",
  );
  const styleSegDRight = getLineStyles(
    activeId === "uiux" || activeId === "uiux2",
    activeColorTheme === "purple" ? "purple" : "amber",
  );
  const styleSegELeft = getLineStyles(activeId === "swe", "blue");
  const styleSegERight = getLineStyles(activeId === "uiux2", "amber");

  const renderStatBar = (val: number, maxVal: number = 120) => {
    const blocksCount = 10;
    const filledCount = Math.min(
      blocksCount,
      Math.round((val / maxVal) * blocksCount),
    );
    const emptyCount = blocksCount - filledCount;

    return (
      <div className="flex items-center gap-1 text-[10px] md:text-xs">
        <span className="text-muted-foreground font-mono tracking-wider w-8 inline-block text-right pr-1">
          {val}
        </span>
        <span className="font-(family-name:--font-press-start-2p) text-[8px] md:text-[10px] tracking-tight flex">
          <span className={theme.text}>{"■".repeat(filledCount)}</span>
          <span className="text-zinc-300 dark:text-zinc-800">
            {"■".repeat(emptyCount)}
          </span>
        </span>
      </div>
    );
  };

  const renderOrgNode = (member: TeamMember) => {
    const isSelected = member.id === selectedId;
    const memberTheme = themes[member.colorTheme];
    const MemberIcon = ((Icons as unknown as Record<string, LucideIcon>)[
      member.iconName
    ] || Icons.User) as LucideIcon;

    return (
      <button
        onClick={() => setSelectedId(member.id)}
        onMouseEnter={() => setHoveredId(member.id)}
        onMouseLeave={() => setHoveredId(null)}
        className={`relative p-2.5 md:p-3 bg-card border-2 transition-all duration-150 rounded-none flex items-center gap-2.5 md:gap-3 cursor-pointer group w-full max-w-[200px] md:max-w-[220px] ${
          isSelected
            ? `${memberTheme.borderActive} bg-zinc-100/40 dark:bg-zinc-900/40`
            : "border-border hover:border-zinc-400 dark:hover:border-zinc-700 hover:bg-zinc-100/20 dark:hover:bg-zinc-900/20"
        }`}
      >
        <div className="absolute top-[-2px] left-[-2px] w-1 h-1 bg-background z-10" />
        <div className="absolute top-[-2px] right-[-2px] w-1 h-1 bg-background z-10" />
        <div className="absolute bottom-[-2px] left-[-2px] w-1 h-1 bg-background z-10" />
        <div className="absolute bottom-[-2px] right-[-2px] w-1 h-1 bg-background z-10" />

        <div
          className={`p-1.5 border-2 ${isSelected ? memberTheme.border : "border-border"} bg-background shrink-0`}
        >
          <MemberIcon
            className={`size-4 md:size-5 ${isSelected ? memberTheme.text : "text-muted-foreground group-hover:text-foreground"}`}
          />
        </div>

        <div className="min-w-0 flex-1 text-left">
          <span className="font-(family-name:--font-press-start-2p) text-[6px] md:text-[7px] text-muted-foreground block uppercase tracking-wide">
            {member.class}
          </span>
          <h3
            className={`font-sans font-bold text-[11px] md:text-xs leading-tight truncate ${isSelected ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
          >
            {member.name}
          </h3>
          <p className="text-[9px] md:text-[10px] text-muted-foreground/80 truncate">
            {member.role}
          </p>
        </div>
      </button>
    );
  };

  return (
    <section className="relative w-full pb-20 bg-background text-foreground px-4 transition-colors duration-300">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center w-full mb-12 md:mb-16">
          {renderOrgNode(root)}

          <div
            className={`w-[3px] h-6 md:h-8 transition-all duration-300 ${styleSegA.bg}`}
          />

          <div
            className={`w-2.5 h-2.5 transition-all duration-300 ${styleSegB.bg} border-2 ${styleSegB.border}`}
          />

          <div className="flex w-full max-w-lg md:max-w-2xl">
            <div className="flex-1 flex flex-col items-center">
              <div className="self-stretch flex">
                <div className="flex-1" />
                <div
                  className={`flex-1 border-t-[3px] transition-all duration-300 ${styleSegCLeft.border}`}
                />
              </div>

              <div
                className={`w-[3px] h-4 md:h-6 transition-all duration-300 ${styleSegDLeft.bg}`}
              />
              {renderOrgNode(dimas)}

              <div
                className={`w-[3px] h-5 md:h-6 transition-all duration-300 ${styleSegELeft.bg}`}
              />
              <div
                className={`w-2 h-2 transition-all duration-300 ${styleSegELeft.bg} border-2 ${styleSegELeft.border}`}
              />
              <div
                className={`w-[3px] h-3 md:h-4 transition-all duration-300 ${styleSegELeft.bg}`}
              />
              {renderOrgNode(kelvin)}
            </div>

            <div className="flex-1 flex flex-col items-center">
              <div className="self-stretch flex">
                <div
                  className={`flex-1 border-t-[3px] transition-all duration-300 ${styleSegCRight.border}`}
                />
                <div className="flex-1" />
              </div>

              <div
                className={`w-[3px] h-4 md:h-6 transition-all duration-300 ${styleSegDRight.bg}`}
              />
              {renderOrgNode(dika)}

              <div
                className={`w-[3px] h-5 md:h-6 transition-all duration-300 ${styleSegERight.bg}`}
              />
              <div
                className={`w-2 h-2 transition-all duration-300 ${styleSegERight.bg} border-2 ${styleSegERight.border}`}
              />
              <div
                className={`w-[3px] h-3 md:h-4 transition-all duration-300 ${styleSegERight.bg}`}
              />
              {renderOrgNode(mus)}
            </div>
          </div>

          <p className="mt-8 text-[9px] md:text-[10px] text-muted-foreground/60 font-(family-name:--font-press-start-2p) tracking-wider animate-pulse">
            ▲ KLIK MEMBER UNTUK LIHAT DETAIL ▲
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedMember.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`relative w-full bg-card border-4 ${theme.border} p-6 flex flex-col justify-between rounded-none shadow-[8px_8px_0_0_rgba(0,0,0,0.04)] transition-colors duration-300`}
          >
            <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background z-20" />
            <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background z-20" />
            <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background z-20" />
            <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background z-20" />

            <div className="flex flex-wrap items-center justify-between border-b-2 border-border pb-4 mb-6 gap-3">
              <div>
                <span className="font-(family-name:--font-press-start-2p) text-[8px] md:text-[9px] text-muted-foreground uppercase tracking-widest block mb-1">
                  ACTIVE HERO STATUS
                </span>
                <h2 className="text-xl md:text-2xl font-bold text-foreground tracking-wide">
                  {selectedMember.name}
                </h2>
              </div>
              <div className="flex items-center gap-2 font-(family-name:--font-press-start-2p) text-[8px] md:text-[9px]">
                <span
                  className={`px-2 py-1 border-2 font-bold ${theme.badge} rounded-none`}
                >
                  {selectedMember.class}
                </span>
                <span className="px-2 py-1 bg-background border-2 border-border text-muted-foreground transition-colors duration-300">
                  {selectedMember.level}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6">
              <div className="md:col-span-6 flex flex-col gap-4">
                <div className="w-full aspect-video md:aspect-square bg-background border-2 border-border flex items-center justify-center relative overflow-hidden group transition-colors duration-300">
                  <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(var(--border)_1px,transparent_1px),linear-gradient(90deg,var(--border)_1px,transparent_1px)] bg-size-[10px_10px]" />

                  {(() => {
                    const LargeIcon = ((
                      Icons as unknown as Record<string, LucideIcon>
                    )[selectedMember.iconName] || Icons.User) as LucideIcon;
                    return (
                      <div
                        className={`p-6 bg-card border-4 ${theme.border} ${theme.glow} z-10 transition-transform duration-300 group-hover:scale-110`}
                      >
                        <LargeIcon
                          className={`size-14 md:size-16 ${theme.text}`}
                        />
                      </div>
                    );
                  })()}

                  <span className="absolute bottom-2 left-2 text-[8px] font-mono text-muted-foreground/50">
                    SPRITE_RENDER_OK
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="font-(family-name:--font-press-start-2p) text-[7px] text-muted-foreground/60 tracking-wider">
                    CONNECT SOCIALS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.socials.instagram && (
                      <a
                        href={selectedMember.socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background border-2 border-border text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all rounded-none flex items-center gap-1.5 text-xs font-mono"
                      >
                        <Icon
                          icon="ph:instagram-logo-fill"
                          className="size-4 text-pink-500"
                        />
                        <span>Instagram</span>
                      </a>
                    )}
                    {selectedMember.socials.linkedin && (
                      <a
                        href={selectedMember.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background border-2 border-border text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all rounded-none flex items-center gap-1.5 text-xs font-mono"
                      >
                        <Icon
                          icon="bxl:linkedin"
                          className="size-4 text-blue-400"
                        />
                        <span>LinkedIn</span>
                      </a>
                    )}
                    {selectedMember.socials.github && (
                      <a
                        href={selectedMember.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background border-2 border-border text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all rounded-none flex items-center gap-1.5 text-xs font-mono"
                      >
                        <Icon
                          icon="ant-design:github-outlined"
                          className="size-4 text-zinc-600 dark:text-zinc-200"
                        />
                        <span>GitHub</span>
                      </a>
                    )}
                    {selectedMember.socials.youtube && (
                      <a
                        href={selectedMember.socials.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-background border-2 border-border text-muted-foreground hover:text-foreground hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all rounded-none flex items-center gap-1.5 text-xs font-mono"
                      >
                        <Icon
                          icon="brandix:youtube"
                          className="size-4 text-red-500"
                        />
                        <span>YouTube</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 flex flex-col gap-6 justify-between">
                <div className="p-4 bg-background border-2 border-border rounded-none relative transition-colors duration-300">
                  <span className="absolute top-[-8px] left-3 bg-card px-2 font-(family-name:--font-press-start-2p) text-[7px] text-muted-foreground/60 tracking-wider transition-colors duration-300">
                    SPELL STATS
                  </span>
                  <div className="space-y-3 mt-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs font-mono text-red-500 dark:text-red-400 font-bold">
                        HP (Health)
                      </span>
                      {renderStatBar(selectedMember.stats.hp)}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs font-mono text-blue-500 dark:text-blue-400 font-bold">
                        MP (Mana)
                      </span>
                      {renderStatBar(selectedMember.stats.mp)}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs font-mono text-amber-600 dark:text-amber-500 font-bold">
                        STR (Strength)
                      </span>
                      {renderStatBar(selectedMember.stats.str)}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs font-mono text-green-600 dark:text-green-400 font-bold">
                        INT (Intellect)
                      </span>
                      {renderStatBar(selectedMember.stats.int)}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] md:text-xs font-mono text-purple-500 dark:text-purple-400 font-bold">
                        AGI (Agility)
                      </span>
                      {renderStatBar(selectedMember.stats.agi)}
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-background border-2 border-border rounded-none relative transition-colors duration-300">
                  <span className="absolute top-[-8px] left-3 bg-card px-2 font-(family-name:--font-press-start-2p) text-[7px] text-muted-foreground/60 tracking-wider transition-colors duration-300">
                    ACTIVE SPELLS
                  </span>
                  <div className="flex flex-wrap gap-2 mt-1.5">
                    {selectedMember.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-[10px] font-mono bg-card text-muted-foreground border border-border rounded-none transition-colors duration-300"
                      >
                        ⭐ {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-background border-2 border-border rounded-none relative mb-6 transition-colors duration-300">
              <span className="absolute top-[-8px] left-3 bg-card px-2 font-(family-name:--font-press-start-2p) text-[7px] text-muted-foreground/60 tracking-wider transition-colors duration-300">
                SPEAKER_QUOTE.TXT
              </span>
              <p
                className={`text-xs md:text-sm font-medium italic ${theme.text} leading-relaxed`}
              >
                &quot;{selectedMember.quote}&quot;
              </p>
            </div>

            <div className="p-4 bg-background border-2 border-border rounded-none relative transition-colors duration-300">
              <span className="absolute top-[-8px] left-3 bg-card px-2 font-(family-name:--font-press-start-2p) text-[7px] text-muted-foreground/60 tracking-wider transition-colors duration-300">
                GUILD_LOG_ENTRY
              </span>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans mt-1">
                {selectedMember.description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
