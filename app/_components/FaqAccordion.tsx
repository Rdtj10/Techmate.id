"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  items: FaqItem[];
  colorTheme?: "green" | "blue" | "amber" | "purple";
}

export default function FaqAccordion({ items, colorTheme = "green" }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const themes = {
    green:  { border: "border-green-500", text: "text-green-400", bg: "bg-green-500/5"  },
    blue:   { border: "border-blue-500",  text: "text-blue-400",  bg: "bg-blue-500/5"   },
    amber:  { border: "border-amber-500", text: "text-amber-400", bg: "bg-amber-500/5"  },
    purple: { border: "border-purple-500",text: "text-purple-400",bg: "bg-purple-500/5" },
  };

  const theme = themes[colorTheme] || themes.green;

  return (
    <div className="flex flex-col gap-3 w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`relative bg-zinc-950 border-4 ${isOpen ? theme.border : "border-zinc-800"} rounded-none transition-colors duration-200`}
          >
            {/* Pixel corners */}
            <div className={`absolute top-[-4px] left-[-4px] w-2 h-2 bg-black z-10`} />
            <div className={`absolute top-[-4px] right-[-4px] w-2 h-2 bg-black z-10`} />
            <div className={`absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-black z-10`} />
            <div className={`absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-black z-10`} />

            {/* Question row */}
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex justify-between items-center gap-4 px-5 py-4 text-left cursor-pointer"
            >
              <div className="flex items-start gap-3">
                <span className={`font-[family-name:var(--font-press-start-2p)] text-[9px] ${theme.text} shrink-0 mt-0.5`}>
                  Q{String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-[family-name:var(--font-press-start-2p)] text-[9px] md:text-[10px] text-white leading-relaxed">
                  {item.question}
                </span>
              </div>
              <ChevronDown
                className={`size-4 shrink-0 transition-transform duration-200 ${isOpen ? `rotate-180 ${theme.text}` : "text-zinc-600"}`}
              />
            </button>

            {/* Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className={`px-5 pb-5 pt-0 border-t-2 border-zinc-800 ${theme.bg}`}>
                    <p className="text-sm text-zinc-400 leading-relaxed mt-3 font-sans">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
