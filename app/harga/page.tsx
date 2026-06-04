"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ArcadeBackground from "@/components/ArcadeBackground";
import PricingCard from "@/app/_components/PricingCard";

const WA = "https://wa.me/628123456789";

const softwarePlans = [
  {
    tier: "STARTER",
    price: "Rp 1,5 Jt",
    priceNote: "Landing page / profile bisnis",
    description: "Cocok untuk UMKM yang butuh online presence cepat dan keren.",
    features: [
      { text: "Landing Page (1 halaman)", included: true },
      { text: "Desain custom sesuai brand", included: true },
      { text: "Mobile responsive", included: true },
      { text: "Form kontak + WA integration", included: true },
      { text: "Hosting setup (Vercel)", included: true },
      { text: "Multi-page website", included: false },
      { text: "Database & backend", included: false },
      { text: "Admin dashboard", included: false },
    ],
    ctaLabel: "MULAI STARTER",
    ctaHref: `${WA}?text=Halo!+Saya+tertarik+paket+Starter+Software.`,
    colorTheme: "green" as const,
  },
  {
    tier: "PRO",
    price: "Rp 5 Jt",
    priceNote: "Web multi-page + backend",
    description: "Ideal untuk bisnis yang butuh website lengkap dengan fitur dinamis.",
    features: [
      { text: "Multi-page website (5-10 halaman)", included: true },
      { text: "Desain custom premium", included: true },
      { text: "Database + backend API", included: true },
      { text: "Admin dashboard", included: true },
      { text: "Auth (login/register)", included: true },
      { text: "SEO optimization", included: true },
      { text: "Mobile App (Android/iOS)", included: false },
      { text: "Custom enterprise integration", included: false },
    ],
    ctaLabel: "PILIH PRO",
    ctaHref: `${WA}?text=Halo!+Saya+tertarik+paket+Pro+Software.`,
    isPopular: true,
    colorTheme: "green" as const,
  },
  {
    tier: "ENTERPRISE",
    price: "Custom",
    priceNote: "Sesuai kebutuhan bisnis",
    description: "Solusi full-stack untuk bisnis skala besar dengan kebutuhan kompleks.",
    features: [
      { text: "Full-stack web + mobile app", included: true },
      { text: "Arsitektur microservices", included: true },
      { text: "CI/CD pipeline + DevOps", included: true },
      { text: "Load balancing & auto-scaling", included: true },
      { text: "SLA & dedicated support", included: true },
      { text: "On-site consultation", included: true },
      { text: "Custom AI/ML integration", included: true },
      { text: "Security audit & penetration test", included: true },
    ],
    ctaLabel: "HUBUNGI KAMI",
    ctaHref: `${WA}?text=Halo!+Saya+mau+diskusi+paket+Enterprise.`,
    colorTheme: "green" as const,
    badgeLabel: "FULL CUSTOM",
  },
];

const hardwarePlans = [
  {
    tier: "SERVICE RINGAN",
    price: "Rp 150 Rb",
    priceNote: "Estimasi, tergantung kerusakan",
    description: "Servis ringan untuk masalah software dan perawatan rutin.",
    features: [
      { text: "Diagnosa & konsultasi", included: true },
      { text: "Instal ulang OS + driver", included: true },
      { text: "Bersih virus & malware", included: true },
      { text: "Optimasi performa software", included: true },
      { text: "Ganti thermal paste", included: false },
      { text: "Ganti komponen hardware", included: false },
      { text: "Upgrade RAM / SSD", included: false },
      { text: "Jemput-antar (Bandung)", included: false },
    ],
    ctaLabel: "PESAN SERVICE",
    ctaHref: `${WA}?text=Halo!+Saya+butuh+Service+Ringan+laptop/PC.`,
    colorTheme: "blue" as const,
  },
  {
    tier: "FULL SERVICE",
    price: "Rp 350 Rb",
    priceNote: "+ harga komponen (jika perlu)",
    description: "Servis komprehensif termasuk bongkar pasang dan ganti komponen.",
    features: [
      { text: "Semua layanan Service Ringan", included: true },
      { text: "Ganti thermal paste premium", included: true },
      { text: "Deep cleaning komponen", included: true },
      { text: "Diagnosa komponen hardware", included: true },
      { text: "Ganti RAM / SSD / HDD", included: true },
      { text: "Perbaikan port & baterai", included: true },
      { text: "Jemput-antar (Bandung)", included: false },
      { text: "Rakit PC baru", included: false },
    ],
    ctaLabel: "PILIH FULL SERVICE",
    ctaHref: `${WA}?text=Halo!+Saya+butuh+Full+Service+laptop/PC.`,
    isPopular: true,
    colorTheme: "blue" as const,
  },
  {
    tier: "PREMIUM BUILD",
    price: "Rp 500 Rb",
    priceNote: "+ harga komponen PC",
    description: "Rakit PC gaming / workstation dari nol dengan kurasi komponen terbaik.",
    features: [
      { text: "Konsultasi spesifikasi sesuai budget", included: true },
      { text: "Kurasian komponen value terbaik", included: true },
      { text: "Perakitan profesional + cable management", included: true },
      { text: "Instal OS + driver semua komponen", included: true },
      { text: "Benchmark & stress test", included: true },
      { text: "RGB sync & estetika setup", included: true },
      { text: "Garansi pengerjaan 14 hari", included: true },
      { text: "Jemput-antar (Bandung)", included: true },
    ],
    ctaLabel: "RAKIT PC SEKARANG",
    ctaHref: `${WA}?text=Halo!+Saya+mau+rakit+PC+dengan+Techmate.`,
    colorTheme: "blue" as const,
    badgeLabel: "BEST VALUE",
  },
];

const konsultasiPlans = [
  {
    tier: "SESI TUNGGAL",
    price: "Rp 200 Rb",
    priceNote: "Per sesi (60-90 menit)",
    description: "Konsultasi intensif untuk masalah IT spesifik yang butuh solusi cepat.",
    features: [
      { text: "Video call / tatap muka", included: true },
      { text: "Analisis masalah IT", included: true },
      { text: "Rekomendasi solusi", included: true },
      { text: "Summary tertulis", included: true },
      { text: "Follow-up 1 minggu", included: false },
      { text: "Implementasi langsung", included: false },
      { text: "Monthly review", included: false },
      { text: "Priority support", included: false },
    ],
    ctaLabel: "BOOKING SESI",
    ctaHref: `${WA}?text=Halo!+Saya+mau+booking+Sesi+Konsultasi+IT.`,
    colorTheme: "amber" as const,
  },
  {
    tier: "PAKET BULANAN",
    price: "Rp 1,5 Jt",
    priceNote: "Per bulan, kontrak minimal 3 bulan",
    description: "Konsultasi rutin untuk bisnis yang butuh panduan IT berkelanjutan.",
    features: [
      { text: "4 sesi konsultasi per bulan", included: true },
      { text: "Priority WhatsApp support", included: true },
      { text: "Monthly IT health report", included: true },
      { text: "Rekomendasi tools & upgrade", included: true },
      { text: "Review keamanan sistem", included: true },
      { text: "Implementasi minor (<4 jam)", included: true },
      { text: "Dedicated account manager", included: false },
      { text: "On-site visit", included: false },
    ],
    ctaLabel: "MULAI PAKET",
    ctaHref: `${WA}?text=Halo!+Saya+tertarik+Paket+Bulanan+Konsultasi+IT.`,
    isPopular: true,
    colorTheme: "amber" as const,
  },
  {
    tier: "RETAINER",
    price: "Rp 4 Jt",
    priceNote: "Per bulan, all-inclusive",
    description: "IT partner penuh untuk bisnis yang butuh dukungan teknis komprehensif.",
    features: [
      { text: "Unlimited konsultasi via WA/call", included: true },
      { text: "Dedicated IT consultant", included: true },
      { text: "On-site visit (2x/bulan)", included: true },
      { text: "Implementasi penuh", included: true },
      { text: "Monitoring infrastruktur", included: true },
      { text: "Incident response 24/7", included: true },
      { text: "Quarterly business IT review", included: true },
      { text: "Security audit tahunan", included: true },
    ],
    ctaLabel: "DISKUSI RETAINER",
    ctaHref: `${WA}?text=Halo!+Saya+mau+diskusi+paket+Retainer+IT.`,
    colorTheme: "amber" as const,
    badgeLabel: "ALL INCLUSIVE",
  },
];

const categories = [
  { id: "software", label: "⚗ SUHU SOFTWARE", plans: softwarePlans },
  { id: "hardware", label: "🛡 KSATRIA HARDWARE", plans: hardwarePlans },
  { id: "konsultasi", label: "🔥 SUHU CURHAT IT", plans: konsultasiPlans },
];

export default function HargaPage() {
  const [active, setActive] = useState("software");
  const current = categories.find((c) => c.id === active)!;

  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-500 overflow-x-hidden">
      <ArcadeBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <section className="w-full pt-28 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-12">
              <span className="px-3 py-1 bg-card border-2 border-border text-muted-foreground text-[10px] font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]">
                TECHMATE — SHOP
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6 uppercase">
                PAKET & HARGA
              </h1>
              <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
                Semua paket sudah termasuk konsultasi awal gratis. Harga transparan, gak ada biaya tersembunyi. Konsultasi dulu, bayar setelah sepakat!
              </p>
            </motion.div>

            <div className="flex justify-center gap-2 flex-wrap mb-12">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`px-4 py-2.5 font-[family-name:var(--font-press-start-2p)] text-[8px] border-2 rounded-none transition-all cursor-pointer ${active === cat.id ? "bg-green-500 text-black border-green-400 shadow-[3px_3px_0_0_rgba(34,197,94,0.4)]" : "bg-card text-muted-foreground border-border hover:border-green-500/50"}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start pt-6">
              {current.plans.map((plan, i) => (
                <motion.div key={plan.tier} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <PricingCard {...plan} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="mt-14 p-6 bg-card/80 backdrop-blur-sm border-2 border-border text-center relative">
              <div className="absolute top-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute top-[-2px] right-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] right-[-2px] w-2 h-2 bg-background" />
              <p className="font-[family-name:var(--font-press-start-2p)] text-xs text-foreground mb-2">Gak Yakin Pilih Paket yang Mana?</p>
              <p className="text-sm text-muted-foreground mb-5 max-w-md mx-auto">
                Pakai kalkulator estimasi kami untuk dapet gambaran harga yang lebih akurat sesuai kebutuhan spesifik lo.
              </p>
              <a href="/kalkulator" className="inline-flex items-center gap-2 px-6 py-3 bg-card border-2 border-green-500 text-green-400 font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold hover:bg-green-500/10 transition-colors rounded-none">
                COBA KALKULATOR HARGA →
              </a>
            </motion.div>
          </div>
        </section>
        <footer className="w-full py-10 px-4 bg-card/80 backdrop-blur-sm border-t border-border text-center font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground">
          <p>© {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </main>
  );
}
