"use client";

import { Sparkles } from "lucide-react";

export default function SquadHeroSection() {
  return (
    <section className="relative w-full pt-24 pb-10 md:pt-32 md:pb-12 overflow-hidden bg-background text-foreground transition-colors duration-300">
      
      <div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#22c55e 1px, transparent 1px), linear-gradient(90deg, #22c55e 1px, transparent 1px)",
          backgroundSize: "45px 45px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
        
        <div className="inline-flex items-center gap-1.5 font-(family-name:--font-press-start-2p) text-[8px] md:text-[9px] px-2.5 py-1 bg-green-950/50 border border-green-500/30 text-green-400 mb-6">
          <Sparkles className="size-3 animate-pulse" />
          <span>LEVEL 3: SQUAD SELECTION</span>
        </div>

        
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-bold font-(family-name:--font-press-start-2p) text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-500 leading-tight mb-6 uppercase"
          style={{ textShadow: "3px 3px 0px rgba(34,197,94,0.15)" }}
        >
          MEET OUR SQUAD
        </h1>

        
        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground font-sans leading-relaxed">
          Kenalan sama barisan sepuh Techmate Indonesia yang siap nge-carry project IT lo dari jurang eror. Tiap guild member punya spesialisasi OP (Overpowered) masing-masing, siap dipanggil buat kelarin quest tersulit sekalipun!
        </p>
      </div>
    </section>
  );
}
