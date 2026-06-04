"use client";

import PricingCard from "@/app/_components/PricingCard";

const packages = [
  {
    tier: "CURHAT KILAT",
    price: "Rp 100 K",
    priceNote: "Per Sesi (1 Jam)",
    description: "Sesi tanya jawab cepat via chat WhatsApp. Pas banget buat cari saran tools, verifikasi masalah, atau minta pendapat cepat.",
    features: [
      { text: "Tanya Jawab Fast Response via WA", included: true },
      { text: "Rekomendasi Tools & Alternatif Murah", included: true },
      { text: "Bebas Tanya Apa Saja Terkait IT", included: true },
      { text: "Sesi Panggilan Video (Zoom/GMeet)", included: false },
      { text: "Laporan Rekomendasi Tertulis", included: false },
      { text: "Remote Access / Audit Server Langsung", included: false },
    ],
    ctaLabel: "MULAI CHAT",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Suhu%20Curhat%20IT,%20saya%20mau%20order%20Paket%20Curhat%20Kilat%20dong!",
    isPopular: false,
    colorTheme: "amber" as const,
  },
  {
    tier: "DEEP AUDIT",
    price: "Rp 350 K",
    priceNote: "Per Sesi (90 Menit)",
    description: "Konsultasi tatap muka online via Zoom/Meet dengan sharing screen. Tim kita bakal audit infrastruktur atau kode lo secara real-time.",
    features: [
      { text: "Panggilan Video Eksklusif 90 Menit", included: true },
      { text: "Real-time Code / Cloud Server Audit", included: true },
      { text: "Analisis Penyebab Sistem Lambat/Error", included: true },
      { text: "Laporan & Rencana Aksi Perbaikan", included: true },
      { text: "Rekomendasi Hemat Biaya Layanan Cloud", included: true },
      { text: "Free Follow-up WA Chat (1 Hari)", included: true },
      { text: "Pendampingan Rekrutmen Developer", included: false },
    ],
    ctaLabel: "BOOKING SESI ZOOM",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Suhu%20Curhat%20IT,%20saya%20tertarik%20booking%20sesi%20Deep%20Audit%20dong!",
    isPopular: true,
    colorTheme: "amber" as const,
    badgeLabel: "TERFAVORIT",
  },
  {
    tier: "RETAINER CTO",
    price: "Hubungi Kami",
    priceNote: "Kontrak Bulanan",
    description: "Pendampingan kustom CTO bulanan untuk startup/perusahaan. Solusi hemat daripada bayar CTO internal puluhan juta.",
    features: [
      { text: "Kontak Konsultasi Prioritas 24/7 WA", included: true },
      { text: "Review Arsitektur & Kodingan Mingguan", included: true },
      { text: "Bimbingan Teknisi & Developer Internal", included: true },
      { text: "Rencana Skala Server & Keamanan", included: true },
      { text: "Bantuan Interview Calon Dev Baru", included: true },
      { text: "Diskon Jasa Pembuatan Software 20%", included: true },
      { text: "Garansi Sistem Tidak Down (99.9% Uptime)", included: true },
    ],
    ctaLabel: "KONTRAK SUHU",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Suhu%20Curhat%20IT,%20saya%20mau%20tanya%20detail%20mengenai%20Paket%20Retainer%20CTO%20bulanan!",
    isPopular: false,
    colorTheme: "amber" as const,
  },
];

export default function ConsultPricingSection() {
  return (
    <section className="relative w-full py-16 bg-background overflow-hidden text-foreground">
      <div className="container mx-auto max-w-5xl px-4">
        
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
            ITEM SHOP
          </span>
          <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-foreground mb-4">
            PAKET CURHAT IT
          </h2>
          <p className="max-w-2xl text-xs md:text-sm text-muted-foreground font-sans leading-relaxed">
            Investasi kecil buat ngindarin kerugian jutaan rupiah akibat salah beli spek server atau arsitektur software yang gagal.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 items-stretch">
          {packages.map((pkg, i) => (
            <PricingCard key={i} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
