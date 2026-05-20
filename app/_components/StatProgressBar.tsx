"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatProgressBarProps {
  label: string;
  value: number; // 0 to 100
  colorTheme?: "green" | "blue" | "purple" | "amber";
  statBuffText?: string; // e.g. "+95% BUFF"
}

export default function StatProgressBar({
  label,
  value,
  colorTheme = "green",
  statBuffText,
}: StatProgressBarProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Animate local value up to target value
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 200);
    return () => clearTimeout(timer);
  }, [value]);

  const themes = {
    green: {
      barBg: "bg-green-500",
      border: "border-green-500",
      text: "text-green-400",
      glow: "shadow-[0_0_10px_rgba(34,197,94,0.3)]",
    },
    blue: {
      barBg: "bg-blue-500",
      border: "border-blue-500",
      text: "text-blue-400",
      glow: "shadow-[0_0_10px_rgba(59,130,246,0.3)]",
    },
    purple: {
      barBg: "bg-purple-500",
      border: "border-purple-500",
      text: "text-purple-400",
      glow: "shadow-[0_0_10px_rgba(168,85,247,0.3)]",
    },
    amber: {
      barBg: "bg-amber-500",
      border: "border-amber-500",
      text: "text-amber-400",
      glow: "shadow-[0_0_10px_rgba(245,158,11,0.3)]",
    },
  };

  const currentTheme = themes[colorTheme] || themes.green;

  // Generate segment blocks for pixel art progress bar
  const totalBlocks = 20;
  const activeBlocksCount = Math.round((displayValue / 100) * totalBlocks);

  return (
    <div className="w-full mb-6 font-[family-name:var(--font-press-start-2p)]">
      {/* Label and Percentage */}
      <div className="flex justify-between items-center mb-2.5 text-[9px] md:text-xs">
        <span className="text-white tracking-wider">{label}</span>
        <div className="flex items-center gap-2">
          {statBuffText && (
            <span className={`text-[8px] px-1 py-0.5 bg-zinc-900 border border-zinc-800 font-bold ${currentTheme.text}`}>
              {statBuffText}
            </span>
          )}
          <span className="text-zinc-300 font-bold">{value}%</span>
        </div>
      </div>

      {/* The Segmented Pixel Progress Bar */}
      <div className="relative w-full h-8 bg-zinc-950 border-4 border-zinc-800 p-1 flex items-center gap-0.5 rounded-none overflow-hidden">
        {/* Render segmented pixel blocks */}
        {Array.from({ length: totalBlocks }).map((_, index) => {
          const isActive = index < activeBlocksCount;
          return (
            <motion.div
              key={index}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: isActive ? 1 : 0 }}
              transition={{ delay: index * 0.03, duration: 0.1, ease: "easeOut" }}
              className={`h-full flex-1 rounded-none origin-bottom ${
                isActive 
                  ? `${currentTheme.barBg} ${currentTheme.glow}` 
                  : "bg-zinc-900"
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
