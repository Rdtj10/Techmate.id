"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface ServiceClassCardProps {
  classNameTitle: string; 
  iconName: keyof typeof Icons;
  level: number;
  description: string;
  manaCost: string;
  castTime: string;
  cooldown: string;
  skills: string[];
  colorTheme?: "green" | "blue" | "purple" | "amber";
  href?: string;
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
  href = "#",
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
    <Link href={href} className="w-full flex">
      <motion.div
        whileHover={{ y: -4, x: -2 }}
        transition={{ duration: 0.15 }}
        className={`relative w-full bg-card border-4 ${currentTheme.border} p-6 flex flex-col justify-between transition-all rounded-none ${currentTheme.glow} ${currentTheme.glowHover} group cursor-pointer`}
      >
        
        <div className={`absolute top-[-4px] left-[-4px] w-2 h-2 bg-background z-10`} />
        <div className={`absolute top-[-4px] right-[-4px] w-2 h-2 bg-background z-10`} />
        <div className={`absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background z-10`} />
        <div className={`absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background z-10`} />

        <div>
          
          <div className="flex justify-between items-start mb-4 gap-2">
            <h3 className="font-[family-name:var(--font-press-start-2p)] text-sm md:text-base font-bold text-foreground uppercase tracking-wider leading-relaxed">
              {classNameTitle}
            </h3>
            <span className={`px-2 py-0.5 text-[9px] font-bold border-2 rounded-none font-[family-name:var(--font-press-start-2p)] ${currentTheme.badge} shrink-0`}>
              LV.{level}
            </span>
          </div>

          
          <div className="flex gap-4 items-center mb-5 p-3 bg-background border-2 border-border rounded-none">
            <div className={`p-2.5 ${currentTheme.bgText} border border-border shrink-0`}>
              <IconComponent className={`size-8 ${currentTheme.text}`} />
            </div>
            <p className="text-xs text-muted-foreground leading-normal">
              {description}
            </p>
          </div>

          
          <div className="grid grid-cols-3 gap-2 py-3 px-2 mb-5 border-t border-b border-border font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground text-center">
            <div>
              <p className="mb-1 text-zinc-600">MANA COST</p>
              <p className="font-bold text-muted-foreground">{manaCost}</p>
            </div>
            <div className="border-l border-r border-border">
              <p className="mb-1 text-zinc-600">CAST TIME</p>
              <p className="font-bold text-muted-foreground">{castTime}</p>
            </div>
            <div>
              <p className="mb-1 text-zinc-600">COOLDOWN</p>
              <p className="font-bold text-muted-foreground">{cooldown}</p>
            </div>
          </div>

          
          <div>
            <h4 className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-zinc-600 mb-3 tracking-widest uppercase">
              ACTIVE SKILLS
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-[10px] font-medium bg-background text-muted-foreground border border-border rounded-none hover:bg-zinc-800 hover:text-foreground transition-colors"
                >
                  ■ {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        
        <div className="mt-6 pt-4 border-t border-border flex justify-end">
          <span className={`text-[10px] font-bold font-[family-name:var(--font-press-start-2p)] flex items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity ${currentTheme.text}`}>
            [ SELECT CLASS ]
            <Icons.ChevronRight className="size-3 animate-pulse" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
