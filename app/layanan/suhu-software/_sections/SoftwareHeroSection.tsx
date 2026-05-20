"use client";

import { Sparkles, Terminal } from "lucide-react";
import DialogueBox from "@/app/_components/DialogueBox";

export default function SoftwareHeroSection() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-black text-white">
      {/* Grid Pattern Background */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        {/* Breadcrumb / Level Info */}
        <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
          <div className="flex items-center gap-2 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-zinc-500">
            <span>LAYANAN</span>
            <span>&gt;</span>
            <span className="text-green-400">SUHU-SOFTWARE</span>
          </div>
          <div className="flex items-center gap-1.5 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] px-2.5 py-1 bg-green-950 border border-green-500/30 text-green-400">
            <Sparkles className="size-3 animate-pulse" />
            <span>CLASS: WIZARD LV. 99</span>
          </div>
        </div>

        {/* Title and Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-press-start-2p)] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 leading-tight mb-6"
              style={{ textShadow: "3px 3px 0px rgba(34,197,94,0.2)" }}
            >
              SIHIR SOFTWARE
            </h1>
            <p className="text-zinc-400 text-base md:text-lg mb-8 leading-relaxed font-sans">
              Bikin web impian lo, aplikasi mobile kece, atau sistem backend tangguh yang anti-lelet dan tahan banting. Kita racik kode terbaik pake tech-stack paling update biar bisnis lo makin melaju kencang tanpa hambatan!
            </p>
            <div className="flex flex-wrap gap-4 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px]">
              <span className="px-3 py-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-300">
                ⚡ FAST LOAD
              </span>
              <span className="px-3 py-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-300">
                🛡️ SOLID SECURITY
              </span>
              <span className="px-3 py-2 bg-zinc-900 border-2 border-zinc-800 text-zinc-300">
                📱 MOBILE FIRST
              </span>
            </div>
          </div>

          {/* Code Sandbox Mockup */}
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
                  <Terminal className="size-3.5 text-green-400" />
                  <span className="text-[9px] font-[family-name:var(--font-press-start-2p)] text-zinc-500 tracking-wider">
                    techmate_wizard.js
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-700" />
                </div>
              </div>

              {/* Code display */}
              <div className="space-y-1.5 text-[11px] leading-relaxed">
                <p className="text-zinc-600">{"// Summoning ultimate software magic"}</p>
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-400">techmate</span> ={" "}
                  <span className="text-yellow-400">require</span>(
                  <span className="text-green-400">&apos;@techmate/wizard&apos;</span>
                  );
                </p>
                <p>
                  <span className="text-purple-400">async function</span>{" "}
                  <span className="text-yellow-400">castSoftwareSihir</span>(client) &#123;
                </p>
                <p className="pl-4">
                  <span className="text-purple-400">const</span> app ={" "}
                  <span className="text-purple-400">await</span> techmate.
                  <span className="text-yellow-400">createApp</span>(&#123;
                </p>
                <p className="pl-8 text-amber-300">
                  ui: <span className="text-green-400">&apos;Super Kece & Modern&apos;</span>,
                </p>
                <p className="pl-8 text-amber-300">
                  speed: <span className="text-green-400">&apos;999 FPS (Fast)&apos;</span>,
                </p>
                <p className="pl-8 text-amber-300">
                  cleanCode: <span className="text-purple-400">true</span>,
                </p>
                <p className="pl-4">&#125;);</p>
                <p className="pl-4">
                  <span className="text-purple-400">return</span> app.
                  <span className="text-yellow-400">deployToProduction</span>();
                </p>
                <p>&#125;</p>
                <p className="text-green-400">{"// Status: Sihir Siap Ditembakkan! ⚡"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dialogue Box Section */}
        <div className="mt-8">
          <DialogueBox
            speakerName="SUHU SOFTWARE"
            speakerTitle="Mage Level 99"
            dialogueText="Bikin software nggak boleh asal jalan doang, bro. Kodenya harus rapi, loading-nya wus-wus, dan UI-nya bikin user betah. Bilang aja lo mau bikin web/app apa, kita sulap jadi nyata!"
            avatarIcon="Code2"
            reputationBuff="+100 CODING EXP"
            colorTheme="green"
          />
        </div>
      </div>
    </section>
  );
}
