"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface QuestStepProps {
  stepNumber: string; // e.g. "01"
  questName: string; // e.g. "Gather Requirements"
  objective: string; // e.g. "Collect client brief & target goals"
  duration: string; // e.g. "1-2 Days"
  reward: string; // e.g. "System Architecture Map"
  status: "completed" | "active" | "locked";
  iconName: keyof typeof Icons;
}

export default function QuestStep({
  stepNumber,
  questName,
  objective,
  duration,
  reward,
  status,
  iconName,
}: QuestStepProps) {
  const IconComponent = (Icons[iconName] as LucideIcon) || Icons.HelpCircle;

  const statusConfigs = {
    completed: {
      border: "border-green-500",
      text: "text-green-400",
      statusText: "BERES",
      statusBadge: "bg-green-500 text-black border-green-400",
      iconBg: "bg-green-500/10",
      lineColor: "bg-green-500",
    },
    active: {
      border: "border-blue-500",
      text: "text-blue-400",
      statusText: "LAGI DIKERJAIN",
      statusBadge: "bg-blue-500 text-black border-blue-400 animate-pulse",
      iconBg: "bg-blue-500/10",
      lineColor: "bg-blue-500",
    },
    locked: {
      border: "border-zinc-800",
      text: "text-zinc-600",
      statusText: "TERKUNCI",
      statusBadge: "bg-zinc-900 text-zinc-500 border-zinc-800",
      iconBg: "bg-zinc-950",
      lineColor: "bg-zinc-800",
    },
  };

  const config = statusConfigs[status] || statusConfigs.locked;

  return (
    <div className="relative flex flex-col md:flex-row gap-6 items-start group">
      {/* Side Icon & Number Badge */}
      <div className="flex md:flex-col items-center gap-3 shrink-0 self-stretch md:self-auto relative">
        <div className={`w-14 h-14 bg-zinc-950 border-4 ${config.border} flex items-center justify-center p-2 rounded-none relative z-10 transition-all group-hover:scale-105`}>
          <div className={`w-full h-full ${config.iconBg} flex items-center justify-center border border-zinc-800`}>
            <IconComponent className={`size-6 ${config.text}`} />
          </div>
        </div>

        {/* Quest Number indicator */}
        <div className="font-[family-name:var(--font-press-start-2p)] text-center text-[10px] bg-zinc-900 border-2 border-zinc-800 text-white px-2 py-1 rounded-none z-10">
          Q-{stepNumber}
        </div>
      </div>

      {/* Quest Details Panel */}
      <motion.div
        whileHover={{ x: status !== "locked" ? 4 : 0 }}
        className={`flex-1 w-full bg-zinc-950 border-4 ${config.border} p-5 rounded-none flex flex-col justify-between relative shadow-[4px_4px_0_0_rgba(0,0,0,0.5)]`}
      >
        {/* Pixel Corners */}
        <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-black z-10" />
        <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-black z-10" />
        <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-black z-10" />
        <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-black z-10" />

        {/* Quest Name and Status */}
        <div className="flex justify-between items-start gap-4 mb-3">
          <h4 className={`text-base font-bold font-[family-name:var(--font-press-start-2p)] leading-tight ${status === "locked" ? "text-zinc-500" : "text-white"}`}>
            {questName}
          </h4>
          <span className={`px-2 py-0.5 text-[8px] font-bold border-2 rounded-none font-[family-name:var(--font-press-start-2p)] shrink-0 ${config.statusBadge}`}>
            {config.statusText}
          </span>
        </div>

        {/* Objective */}
        <p className={`text-xs md:text-sm mb-4 leading-relaxed ${status === "locked" ? "text-zinc-600" : "text-zinc-400"}`}>
          <span className="font-semibold text-zinc-300 mr-1">{`>`} Target Misi:</span> {objective}
        </p>

        {/* Quest Meta: EXP, Reward, Time */}
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-zinc-900 text-[8px] font-[family-name:var(--font-press-start-2p)]">
          <div className="flex flex-col gap-1">
            <span className="text-zinc-600 uppercase">WAKTU MISI</span>
            <span className={status === "locked" ? "text-zinc-600" : "text-zinc-300"}>{duration}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-zinc-600 uppercase">BONUS CLEAR</span>
            <span className={status === "locked" ? "text-zinc-600" : config.text}>{reward}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
