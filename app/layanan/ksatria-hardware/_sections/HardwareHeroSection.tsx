"use client";

import { Sparkles, Cpu } from "lucide-react";
import DialogueBox from "@/app/_components/DialogueBox";

export default function HardwareHeroSection() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-black text-white">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        {/* Breadcrumb / Level Info */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
          <div className="flex items-center gap-2 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-500">
            <span>LAYANAN</span>
            <span>&gt;</span>
            <span className="text-blue-400">KSATRIA-HARDWARE</span>
          </div>
          <div className="flex items-center gap-1.5 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] px-2.5 py-1 bg-blue-950 border border-blue-500/30 text-blue-400">
            <Sparkles className="size-3 animate-pulse" />
            <span>CLASS: WARRIOR LV. 99</span>
          </div>
        </div>

        {/* Title and Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-press-start-2p)] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 leading-tight mb-6"
              style={{ textShadow: "3px 3px 0px rgba(59,130,246,0.2)" }}
            >
              KSATRIA HARDWARE
            </h1>
            <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-sans">
              Laptop lo lemot? PC mati total atau sering kena Blue Screen? Tenang! Ksatria Hardware siap turun tangan buat diagnosis, benerin, dan upgrade mesin tempur lo biar kembali ngebut kayak baru lagi. Anti-lelet, anti-boncos!
            </p>
            <div className="flex flex-wrap gap-4 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px]">
              <span className="px-3 py-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-300">
                🔧 CLEANSING
              </span>
              <span className="px-3 py-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-300">
                ⚡ SPEED UPGRADE
              </span>
              <span className="px-3 py-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-300">
                🖥️ PC ASSEMBLY
              </span>
            </div>
          </div>

          {/* Diagnostics Display */}
          <div className="lg:col-span-5 relative w-full">
            <div className="w-full bg-zinc-950 border-4 border-zinc-800 p-4 relative font-mono text-xs text-zinc-400 shadow-[8px_8px_0_0_rgba(255,255,255,0.03)]">
              {/* Pixel corners */}
              <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-black z-10" />
              <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-black z-10" />
              <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-black z-10" />
              <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-black z-10" />

              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 mb-4">
                <div className="flex items-center gap-1.5">
                  <Cpu className="size-3.5 text-blue-400" />
                  <span className="text-[9px] font-[family-name:var(--font-press-start-2p)] text-zinc-500 tracking-wider">
                    hw_diagnose_tool.sh
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-700" />
                </div>
              </div>

              {/* Hardware diagnostics info */}
              <div className="space-y-2 text-[11px] leading-relaxed">
                <p className="text-zinc-600"># Scanning hardware defects...</p>
                <p className="text-zinc-400">
                  CPU Temp: <span className="text-red-400">95°C (THROTTLING!)</span>
                </p>
                <p className="text-zinc-400">
                  RAM Usage: <span className="text-yellow-400">98% (8GB DDR3)</span>
                </p>
                <p className="text-zinc-400">
                  Storage Health: <span className="text-red-400">22% (HDD Bad Sector)</span>
                </p>
                <div className="p-2.5 bg-blue-950/40 border border-blue-500/20 text-[10px] text-blue-300">
                  <p className="font-bold uppercase tracking-wider mb-1">🛡️ RECOMMENDED ACTION:</p>
                  <p>1. Repaste & Deep Cleansing</p>
                  <p>2. Swap HDD with NVMe SSD</p>
                  <p>3. Upgrade RAM to 16GB Dual Channel</p>
                </div>
                <p className="text-blue-400 font-bold animate-pulse">
                  &gt; STATUS: APPARATUS REQUIRES REPAIR!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dialogue Box Section */}
        <div className="mt-8">
          <DialogueBox
            speakerName="KSATRIA HARDWARE"
            speakerTitle="Warrior Level 99"
            dialogueText="Jangan biarin laptop lo tersiksa panas berlebih atau loading lemot bikin emosi pas push rank. Sini, biar kita bedah dalemannya, ganti part loyo, dan kasih ramuan pendingin terbaik!"
            avatarIcon="Wrench"
            reputationBuff="+100 HARDWARE EXP"
            colorTheme="blue"
          />
        </div>
      </div>
    </section>
  );
}
