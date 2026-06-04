"use client";

import { Sparkles, MessagesSquare } from "lucide-react";
import DialogueBox from "@/app/_components/DialogueBox";

export default function ConsultHeroSection() {
  return (
    <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-background text-foreground">
      
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#f59e0b 1px, transparent 1px), linear-gradient(90deg, #f59e0b 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        
        <div className="flex flex-wrap justify-between items-center gap-3 mb-8">
          <div className="flex items-center gap-2 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] text-muted-foreground">
            <span>LAYANAN</span>
            <span>&gt;</span>
            <span className="text-amber-400">SUHU-CURHAT-IT</span>
          </div>
          <div className="flex items-center gap-1.5 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] px-2.5 py-1 bg-amber-950 border border-amber-500/30 text-amber-400">
            <Sparkles className="size-3 animate-pulse" />
            <span>CLASS: ARCHMAGE LV. 99</span>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-press-start-2p)] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-500 leading-tight mb-6"
              style={{ textShadow: "3px 3px 0px rgba(245,158,11,0.2)" }}
            >
              SUHU CURHAT IT
            </h1>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed font-sans">
              Bingung milih server cloud yang murah tapi aman? Mau migrasi data kantor tapi takut hilang? Atau butuh nanya-nanya seputar tren teknologi terbaru langsung ke praktisi berpengalaman? Sini curhatin semuanya, kami kasih solusi paling masuk akal!
            </p>
            <div className="flex flex-wrap gap-4 font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px]">
              <span className="px-3 py-2 bg-background border-2 border-border text-muted-foreground">
                💬 1-ON-1 CHAT
              </span>
              <span className="px-3 py-2 bg-background border-2 border-border text-muted-foreground">
                ☁️ CLOUD STRATEGY
              </span>
              <span className="px-3 py-2 bg-background border-2 border-border text-muted-foreground">
                🛡️ SECURITY AUDIT
              </span>
            </div>
          </div>

          
          <div className="lg:col-span-5 relative w-full">
            <div className="w-full bg-card border-4 border-border p-4 relative font-mono text-xs text-muted-foreground shadow-[8px_8px_0_0_rgba(255,255,255,0.03)]">
              
              <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background z-10" />
              <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background z-10" />
              <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background z-10" />
              <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background z-10" />

              
              <div className="flex items-center justify-between border-b border-border pb-2.5 mb-4">
                <div className="flex items-center gap-1.5">
                  <MessagesSquare className="size-3.5 text-amber-400" />
                  <span className="text-[9px] font-[family-name:var(--font-press-start-2p)] text-muted-foreground tracking-wider">
                    curhat_session.log
                  </span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-800" />
                  <div className="w-2.5 h-2.5 rounded-none bg-zinc-700" />
                </div>
              </div>

              
              <div className="space-y-3.5 text-[11px] leading-relaxed">
                <div>
                  <p className="text-muted-foreground font-bold">[CLIENT] 23:45</p>
                  <p className="text-muted-foreground">Suhu, startup saya mau launching, enakan pake hosting gratisan atau lgsg sewa VPS AWS biar ga jebol pas traffic rame ya?</p>
                </div>
                <div>
                  <p className="text-amber-400 font-bold">[SUHU CURHAT IT] 23:46</p>
                  <p className="text-amber-100">Buat MVP awal, jangan langsung bakar duit di AWS. Mending pake Vercel/Netlify gratisan dulu buat frontend, server backend-nya taruh di VPS VPS murah sekelas DigitalOcean (5$/bln) + setup Docker. Nanti kalo user udah naik signifikan, baru kita bantu migrasi cloud pake load balancer. Hemat dan efektif!</p>
                </div>
                <p className="text-amber-400 font-bold animate-pulse text-[10px]">
                  &gt; CONNECTED: SUHU ONLINE & READY TO HELP!
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-8">
          <DialogueBox
            speakerName="SUHU CURHAT IT"
            speakerTitle="Consultant Level 99"
            dialogueText="Banyak orang boncos puluhan juta cuma gara-gara salah pilih infrastruktur atau langganan software yang sebenernya nggak mereka butuhin. Sini ceritain masalah IT bisnis lo, kita cari jalan keluar yang hemat & taktis!"
            avatarIcon="MessagesSquare"
            reputationBuff="+100 CONSULTING EXP"
            colorTheme="amber"
          />
        </div>
      </div>
    </section>
  );
}
