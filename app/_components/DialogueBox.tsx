"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface DialogueBoxProps {
  speakerName: string;
  speakerTitle: string; // e.g. "Lead Developer", "Client / Gamer"
  dialogueText: string;
  avatarIcon?: keyof typeof Icons;
  reputationBuff?: string; // e.g. "+5 REP"
  colorTheme?: "green" | "blue" | "purple" | "amber";
}

export default function DialogueBox({
  speakerName,
  speakerTitle,
  dialogueText,
  avatarIcon = "User",
  reputationBuff = "+5 REP",
  colorTheme = "green",
}: DialogueBoxProps) {
  const IconComponent = (Icons[avatarIcon] as LucideIcon) || Icons.User;

  const themes = {
    green: {
      border: "border-green-500",
      text: "text-green-400",
      bgText: "bg-green-500/10",
      headerBg: "bg-green-600 text-black border-green-400",
      cursorGlow: "bg-green-500 shadow-[0_0_8px_#22c55e]",
    },
    blue: {
      border: "border-blue-500",
      text: "text-blue-400",
      bgText: "bg-blue-500/10",
      headerBg: "bg-blue-600 text-black border-blue-400",
      cursorGlow: "bg-blue-500 shadow-[0_0_8px_#3b82f6]",
    },
    purple: {
      border: "border-purple-500",
      text: "text-purple-400",
      bgText: "bg-purple-500/10",
      headerBg: "bg-purple-600 text-black border-purple-400",
      cursorGlow: "bg-purple-500 shadow-[0_0_8px_#a855f7]",
    },
    amber: {
      border: "border-amber-500",
      text: "text-amber-400",
      bgText: "bg-amber-500/10",
      headerBg: "bg-amber-600 text-black border-amber-400",
      cursorGlow: "bg-amber-500 shadow-[0_0_8px_#f59e0b]",
    },
  };

  const currentTheme = themes[colorTheme] || themes.green;

  return (
    <div className={`relative w-full bg-zinc-950 border-4 ${currentTheme.border} p-5 md:p-6 rounded-none flex flex-col md:flex-row gap-5 shadow-[4px_4px_0_0_rgba(255,255,255,0.05)]`}>
      {/* Corner retro pixels */}
      <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-black z-10" />
      <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-black z-10" />
      <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-black z-10" />
      <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-black z-10" />

      {/* Speaker Name Tag / Badge */}
      <div className="absolute top-[-20px] left-4 flex gap-2 z-10 font-[family-name:var(--font-press-start-2p)]">
        <span className={`px-3 py-1 text-[8px] md:text-[9px] font-bold border-2 rounded-none ${currentTheme.headerBg}`}>
          {speakerName}
        </span>
        {reputationBuff && (
          <span className="px-2 py-1 text-[8px] md:text-[9px] font-bold border-2 border-zinc-800 bg-zinc-900 text-zinc-300 rounded-none">
            {reputationBuff}
          </span>
        )}
      </div>

      {/* Avatar Section */}
      <div className="flex flex-col items-center shrink-0 mt-2">
        <div className="w-16 h-16 bg-zinc-900 border-2 border-zinc-800 rounded-none flex items-center justify-center p-2 relative">
          <div className={`w-full h-full ${currentTheme.bgText} flex items-center justify-center border border-zinc-800`}>
            <IconComponent className={`size-8 ${currentTheme.text}`} />
          </div>
          {/* Active Player Light */}
          <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 border border-black rounded-full" />
        </div>
        <span className="mt-2 text-[9px] font-[family-name:var(--font-press-start-2p)] text-zinc-500 uppercase tracking-wider text-center max-w-[80px]">
          {speakerTitle}
        </span>
      </div>

      {/* Speech Box */}
      <div className="flex-1 flex flex-col justify-between mt-2">
        <div className="relative">
          {/* Retro text dialog */}
          <p className="text-sm md:text-base text-zinc-300 font-mono leading-relaxed mb-4">
            &ldquo;{dialogueText}&rdquo;
          </p>
        </div>

        {/* Flashing "Next Dialog" cursor indicators */}
        <div className="flex justify-between items-center text-[8px] font-[family-name:var(--font-press-start-2p)] text-zinc-600">
          <span>[ CHAT BERES ]</span>
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className={`w-3.5 h-3.5 ${currentTheme.cursorGlow} flex items-center justify-center border border-black cursor-pointer`}
          >
            <span className="text-[6px] text-black font-extrabold font-mono">▼</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
