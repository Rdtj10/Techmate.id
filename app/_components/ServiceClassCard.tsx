"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";

interface ServiceClassCardProps {
  classNameTitle: string; // e.g. "SOFTWARE SORCERER"
  iconName: keyof typeof Icons;
  level: number;
  description: string;
  manaCost: string;
  castTime: string;
  cooldown: string;
  skills: string[];
  colorTheme?: "green" | "blue" | "purple" | "amber";
}

export default function ServiceClassCard({
  classNameTitle,
  iconName,
  level,
  description,
  manaCost,
  castTime,
  cooldown,
  skills,
  colorTheme = "green",
}: ServiceClassCardProps) {
  const IconComponent = (Icons[iconName] as LucideIcon) || Icons.HelpCircle;

  const themes = {
    green: {
      border: "border-green-500",
      glow: "shadow-[6px_6px_0_0_rgba(34,197,94,0.3)]",
      glowHover: "hover:shadow-[10px_10px_0_0_rgba(34,197,94,0.5)]",
      text: "text-green-400",
      bgText: "bg-green-500/10",
      badge: "bg-green-500 text-black border-green-400",
    },
    blue: {
      border: "border-blue-500",
      glow: "shadow-[6px_6px_0_0_rgba(59,130,246,0.3)]",
      glowHover: "hover:shadow-[10px_10px_0_0_rgba(59,130,246,0.5)]",
      text: "text-blue-400",
      bgText: "bg-blue-500/10",
      badge: "bg-blue-500 text-black border-blue-400",
    },
    purple: {
      border: "border-purple-500",
      glow: "shadow-[6px_6px_0_0_rgba(168,85,247,0.3)]",
      glowHover: "hover:shadow-[10px_10px_0_0_rgba(168,85,247,0.5)]",
      text: "text-purple-400",
      bgText: "bg-purple-500/10",
      badge: "bg-purple-500 text-black border-purple-400",
    },
    amber: {
      border: "border-amber-500",
      glow: "shadow-[6px_6px_0_0_rgba(245,158,11,0.3)]",
      glowHover: "hover:shadow-[10px_10px_0_0_rgba(245,158,11,0.5)]",
      text: "text-amber-400",
      bgText: "bg-amber-500/10",
      badge: "bg-amber-500 text-black border-amber-400",
    },
  };

  const currentTheme = themes[colorTheme] || themes.green;

  return (
    <motion.div
      whileHover={{ y: -4, x: -2 }}
      transition={{ duration: 0.15 }}
      className={`relative w-full bg-zinc-950 border-4 ${currentTheme.border} p-6 flex flex-col justify-between transition-all rounded-none ${currentTheme.glow} ${currentTheme.glowHover} group`}
    >
      {/* Corner retro pixels */}
      <div className={`absolute top-[-4px] left-[-4px] w-2 h-2 bg-black z-10`} />
      <div className={`absolute top-[-4px] right-[-4px] w-2 h-2 bg-black z-10`} />
      <div className={`absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-black z-10`} />
      <div className={`absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-black z-10`} />

      <div>
        {/* Title and Level */}
        <div className="flex justify-between items-start mb-4 gap-2">
          <h3 className="font-[family-name:var(--font-press-start-2p)] text-sm md:text-base font-bold text-white uppercase tracking-wider leading-relaxed">
            {classNameTitle}
          </h3>
          <span className={`px-2 py-0.5 text-[9px] font-bold border-2 rounded-none font-[family-name:var(--font-press-start-2p)] ${currentTheme.badge} shrink-0`}>
            LV.{level}
          </span>
        </div>

        {/* Icon & Description Box */}
        <div className="flex gap-4 items-center mb-5 p-3 bg-zinc-900 border-2 border-zinc-800 rounded-none">
          <div className={`p-2.5 ${currentTheme.bgText} border border-zinc-800 shrink-0`}>
            <IconComponent className={`size-8 ${currentTheme.text}`} />
          </div>
          <p className="text-xs text-zinc-400 leading-normal">
            {description}
          </p>
        </div>

        {/* Technical Stats Board */}
        <div className="grid grid-cols-3 gap-2 py-3 px-2 mb-5 border-t border-b border-zinc-800 font-[family-name:var(--font-press-start-2p)] text-[8px] text-zinc-500 text-center">
          <div>
            <p className="mb-1 text-zinc-600">MANA COST</p>
            <p className="font-bold text-zinc-300">{manaCost}</p>
          </div>
          <div className="border-l border-r border-zinc-800">
            <p className="mb-1 text-zinc-600">CAST TIME</p>
            <p className="font-bold text-zinc-300">{castTime}</p>
          </div>
          <div>
            <p className="mb-1 text-zinc-600">COOLDOWN</p>
            <p className="font-bold text-zinc-300">{cooldown}</p>
          </div>
        </div>

        {/* Skills/Abilities List */}
        <div>
          <h4 className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-zinc-600 mb-3 tracking-widest uppercase">
            ACTIVE SKILLS
          </h4>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 text-[10px] font-medium bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-none hover:bg-zinc-800 hover:text-white transition-colors"
              >
                ■ {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Select button decoration */}
      <div className="mt-6 pt-4 border-t border-zinc-900 flex justify-end">
        <span className={`text-[10px] font-bold font-[family-name:var(--font-press-start-2p)] flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity ${currentTheme.text}`}>
          [ SELECT CLASS ]
          <Icons.ChevronRight className="size-3 animate-pulse" />
        </span>
      </div>
    </motion.div>
  );
}
