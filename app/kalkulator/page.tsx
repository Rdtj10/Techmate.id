"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ArcadeBackground from "@/components/ArcadeBackground";
import { ChevronRight, ChevronLeft, Calculator, MessageCircle } from "lucide-react";

const WA = "https://wa.me/628123456789";

type Step = 0 | 1 | 2 | 3;

interface Selections {
  service: string;
  features: string[];
  timeline: string;
}

const serviceOptions = [
  { id: "landing", label: "Landing Page", base: 1500000, icon: "🌐", desc: "Halaman tunggal untuk promosi / profil bisnis" },
  { id: "web-company", label: "Website Company Profile", base: 3000000, icon: "🏢", desc: "Multi-page dengan CMS sederhana" },
  { id: "web-app", label: "Aplikasi Web", base: 7000000, icon: "⚗", desc: "Dashboard, database, auth, API" },
  { id: "mobile", label: "Aplikasi Mobile", base: 10000000, icon: "📱", desc: "Android & iOS dengan React Native" },
  { id: "service-ringan", label: "Service Laptop/PC (Ringan)", base: 150000, icon: "🔧", desc: "Instal ulang OS, bersih virus, optimasi" },
  { id: "service-full", label: "Service Laptop/PC (Full)", base: 350000, icon: "⚙️", desc: "Ganti komponen, deep clean, thermal paste" },
  { id: "rakit-pc", label: "Rakit PC Gaming/Workstation", base: 500000, icon: "🖥️", desc: "Jasa rakit (belum termasuk komponen)" },
  { id: "konsultasi", label: "Konsultasi IT", base: 200000, icon: "💡", desc: "Sesi konsultasi strategi & solusi IT" },
];

const featureOptionsByService: Record<string, { id: string; label: string; add: number }[]> = {
  landing: [
    { id: "seo", label: "SEO Optimization", add: 300000 },
    { id: "analytics", label: "Google Analytics Setup", add: 150000 },
    { id: "wa-integration", label: "WhatsApp Chat Integration", add: 100000 },
    { id: "domain-hosting", label: "Setup Domain + Hosting 1 Tahun", add: 400000 },
  ],
  "web-company": [
    { id: "cms", label: "CMS Admin Panel", add: 1000000 },
    { id: "seo", label: "SEO + Sitemap", add: 500000 },
    { id: "multi-lang", label: "Multi Bahasa (ID/EN)", add: 800000 },
    { id: "blog", label: "Fitur Blog / Artikel", add: 600000 },
  ],
  "web-app": [
    { id: "payment", label: "Payment Gateway (Midtrans)", add: 1500000 },
    { id: "notif", label: "Email + Push Notification", add: 800000 },
    { id: "export", label: "Export PDF / Excel", add: 600000 },
    { id: "realtime", label: "Realtime (WebSocket/SSE)", add: 1200000 },
  ],
  mobile: [
    { id: "payment", label: "Payment Gateway", add: 2000000 },
    { id: "push-notif", label: "Push Notification", add: 800000 },
    { id: "maps", label: "Maps & Geolocation", add: 1000000 },
    { id: "chat", label: "Fitur Chat In-App", add: 1500000 },
  ],
  "service-ringan": [
    { id: "antivirus", label: "Instal Antivirus Premium (1 tahun)", add: 100000 },
    { id: "recovery", label: "Data Recovery", add: 200000 },
    { id: "jemput", label: "Jemput-Antar (Bandung)", add: 50000 },
  ],
  "service-full": [
    { id: "thermal", label: "Thermal Paste Premium (Kryonaut)", add: 100000 },
    { id: "upgrade-ram", label: "Upgrade RAM (jasa pasang)", add: 75000 },
    { id: "upgrade-ssd", label: "Upgrade SSD (jasa pasang)", add: 75000 },
    { id: "jemput", label: "Jemput-Antar (Bandung)", add: 50000 },
  ],
  "rakit-pc": [
    { id: "rgb", label: "RGB Sync & Cable Management Estetik", add: 150000 },
    { id: "benchmark", label: "Benchmark + Stress Test Report", add: 100000 },
    { id: "os-install", label: "Instal OS + Driver Lengkap", add: 100000 },
    { id: "jemput", label: "Jemput-Antar (Bandung)", add: 75000 },
  ],
  konsultasi: [
    { id: "report", label: "Laporan Tertulis Komprehensif", add: 200000 },
    { id: "followup", label: "Follow-up Session (30 menit)", add: 100000 },
    { id: "onsite", label: "Kunjungan On-Site (Bandung)", add: 300000 },
  ],
};

const timelineOptions = [
  { id: "rush", label: "KILAT (Rush)", multiplier: 1.5, desc: "Pengerjaan express, prioritas utama" },
  { id: "normal", label: "NORMAL", multiplier: 1, desc: "Estimasi waktu standar" },
  { id: "flexible", label: "FLEKSIBEL", multiplier: 0.85, desc: "Waktu lebih longgar, harga lebih hemat" },
];

function formatRp(n: number) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);
}

export default function KalkulatorPage() {
  const [step, setStep] = useState<Step>(0);
  const [sel, setSel] = useState<Selections>({ service: "", features: [], timeline: "normal" });

  const selectedService = serviceOptions.find((s) => s.id === sel.service);
  const featureOpts = sel.service ? (featureOptionsByService[sel.service] ?? []) : [];
  const timelineOpt = timelineOptions.find((t) => t.id === sel.timeline)!;

  const basePrice = selectedService?.base ?? 0;
  const featureAdd = featureOpts.filter((f) => sel.features.includes(f.id)).reduce((s, f) => s + f.add, 0);
  const total = Math.round((basePrice + featureAdd) * timelineOpt.multiplier);

  const waMsg = `Halo Techmate!+Saya+mau+konsultasi+lebih+lanjut+soal:
Layanan: ${selectedService?.label ?? "-"}
Estimasi Budget: ${formatRp(total)}
Timeline: ${timelineOpt.label}`;

  const steps = ["LAYANAN", "FITUR", "TIMELINE", "ESTIMASI"];

  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-500 overflow-x-hidden">
      <ArcadeBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <section className="w-full pt-28 pb-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center mb-10">
              <span className="px-3 py-1 bg-card border-2 border-border text-muted-foreground text-[10px] font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]">
                TECHMATE — TOOLS
              </span>
              <h1 className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-4 uppercase flex items-center gap-3">
                <Calculator className="size-8 text-green-400" />
                KALKULATOR HARGA
              </h1>
              <p className="max-w-xl text-sm text-muted-foreground">
                Dapatkan estimasi harga cepat berdasarkan kebutuhan lo. Pilih layanan, fitur, dan timeline dalam 3 langkah!
              </p>
            </motion.div>

            <div className="flex items-center gap-0 mb-8">
              {steps.map((s, i) => (
                <div key={s} className="flex items-center flex-1">
                  <div className={`flex items-center justify-center w-8 h-8 border-2 font-[family-name:var(--font-press-start-2p)] text-[8px] font-bold transition-all ${i <= step ? "bg-green-500 text-black border-green-400" : "bg-card text-muted-foreground border-border"}`}>
                    {i + 1}
                  </div>
                  {i < steps.length - 1 && <div className={`flex-1 h-0.5 transition-all ${i < step ? "bg-green-500" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            <div className="bg-card/80 backdrop-blur-sm border-2 border-border p-6 relative min-h-[320px]">
              <div className="absolute top-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute top-[-2px] right-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] right-[-2px] w-2 h-2 bg-background" />

              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-muted-foreground mb-4">STEP 1: PILIH JENIS LAYANAN</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviceOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => setSel((s) => ({ ...s, service: opt.id, features: [] }))}
                          className={`text-left p-3 border-2 transition-all cursor-pointer rounded-none ${sel.service === opt.id ? "border-green-500 bg-green-500/10" : "border-border bg-background hover:border-green-500/50"}`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-lg">{opt.icon}</span>
                            <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-foreground">{opt.label}</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground">{opt.desc}</p>
                          <p className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-green-400 mt-1">mulai {formatRp(opt.base)}</p>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-muted-foreground mb-4">STEP 2: PILIH FITUR TAMBAHAN (OPSIONAL)</p>
                    {featureOpts.length === 0 ? (
                      <p className="text-sm text-muted-foreground">Tidak ada fitur tambahan untuk layanan ini.</p>
                    ) : (
                      <div className="flex flex-col gap-3">
                        {featureOpts.map((f) => {
                          const checked = sel.features.includes(f.id);
                          return (
                            <button
                              key={f.id}
                              onClick={() => setSel((s) => ({ ...s, features: checked ? s.features.filter((x) => x !== f.id) : [...s.features, f.id] }))}
                              className={`flex items-center justify-between p-3 border-2 transition-all cursor-pointer text-left rounded-none ${checked ? "border-green-500 bg-green-500/10" : "border-border bg-background hover:border-green-500/50"}`}
                            >
                              <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-foreground">{f.label}</span>
                              <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-green-400">+{formatRp(f.add)}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                    <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-muted-foreground mb-4">STEP 3: PILIH TIMELINE PENGERJAAN</p>
                    <div className="flex flex-col gap-3">
                      {timelineOptions.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setSel((s) => ({ ...s, timeline: t.id }))}
                          className={`flex items-center justify-between p-4 border-2 transition-all cursor-pointer text-left rounded-none ${sel.timeline === t.id ? "border-green-500 bg-green-500/10" : "border-border bg-background hover:border-green-500/50"}`}
                        >
                          <div>
                            <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-foreground">{t.label}</p>
                            <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
                          </div>
                          <span className={`font-[family-name:var(--font-press-start-2p)] text-[8px] ${t.multiplier > 1 ? "text-red-400" : t.multiplier < 1 ? "text-green-400" : "text-muted-foreground"}`}>
                            {t.multiplier > 1 ? `+${Math.round((t.multiplier - 1) * 100)}%` : t.multiplier < 1 ? `-${Math.round((1 - t.multiplier) * 100)}%` : "NORMAL"}
                          </span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col items-center text-center">
                    <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-muted-foreground mb-6">ESTIMASI HARGA LO:</p>
                    <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="bg-green-500/10 border-4 border-green-500 p-6 mb-6 w-full relative">
                      <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background" />
                      <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background" />
                      <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background" />
                      <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background" />
                      <p className="font-[family-name:var(--font-press-start-2p)] text-3xl md:text-4xl text-green-400 font-bold">{formatRp(total)}</p>
                      <p className="text-xs text-muted-foreground mt-2">*Estimasi kasar, harga final setelah diskusi detail</p>
                    </motion.div>
                    <div className="text-left w-full space-y-1.5 mb-6">
                      <div className="flex justify-between text-xs border-b border-border pb-1.5">
                        <span className="text-muted-foreground">Layanan</span>
                        <span className="text-foreground font-medium">{selectedService?.label}</span>
                      </div>
                      {featureOpts.filter((f) => sel.features.includes(f.id)).map((f) => (
                        <div key={f.id} className="flex justify-between text-xs border-b border-border pb-1.5">
                          <span className="text-muted-foreground">+ {f.label}</span>
                          <span className="text-green-400">+{formatRp(f.add)}</span>
                        </div>
                      ))}
                      <div className="flex justify-between text-xs border-b border-border pb-1.5">
                        <span className="text-muted-foreground">Timeline</span>
                        <span className={timelineOpt.multiplier > 1 ? "text-red-400" : timelineOpt.multiplier < 1 ? "text-green-400" : "text-foreground"}>{timelineOpt.label}</span>
                      </div>
                    </div>
                    <a
                      href={`${WA}?text=${encodeURIComponent(waMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold border-2 border-green-400 shadow-[4px_4px_0_0_rgba(74,222,128,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(74,222,128,0.4)] transition-all rounded-none"
                    >
                      <MessageCircle className="size-4" />
                      KONSULTASI VIA WA
                    </a>
                    <button onClick={() => { setStep(0); setSel({ service: "", features: [], timeline: "normal" }); }} className="mt-3 text-[8px] font-[family-name:var(--font-press-start-2p)] text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      ↩ HITUNG ULANG
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex justify-between mt-4 gap-4">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1) as Step)}
                disabled={step === 0}
                className="flex items-center gap-2 px-4 py-2.5 bg-card border-2 border-border font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed rounded-none"
              >
                <ChevronLeft className="size-3" /> KEMBALI
              </button>
              {step < 3 && (
                <button
                  onClick={() => setStep((s) => Math.min(3, s + 1) as Step)}
                  disabled={step === 0 && !sel.service}
                  className="flex items-center gap-2 px-6 py-2.5 bg-green-600 hover:bg-green-500 text-black border-2 border-green-400 font-[family-name:var(--font-press-start-2p)] text-[8px] font-bold transition-all cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed rounded-none shadow-[3px_3px_0_0_rgba(74,222,128,0.4)]"
                >
                  LANJUT <ChevronRight className="size-3" />
                </button>
              )}
            </div>
          </div>
        </section>
        <footer className="w-full py-10 px-4 bg-card/80 backdrop-blur-sm border-t border-border text-center font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground">
          <p>© {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </main>
  );
}
