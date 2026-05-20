"use client";

import PricingCard from "@/app/_components/PricingCard";

const packages = [
  {
    tier: "CLEAN & REPASTE",
    price: "Rp 150 - 250 K",
    priceNote: "Per Perangkat (Jasa)",
    description: "Solusi laptop/PC yang gampang panas (overheat), sering mati sendiri, atau berdebu parah.",
    features: [
      { text: "Bongkar Total & Bersihkan Debu Kipas", included: true },
      { text: "Ganti Thermal Paste Premium (Arctic/Thermal Grizzly)", included: true },
      { text: "Cek Kesehatan Storage & Baterai", included: true },
      { text: "Uji Stress Test Suhu & Benchmark", included: true },
      { text: "Backup Data Penting", included: false },
      { text: "Instal Ulang Sistem Operasi", included: false },
    ],
    ctaLabel: "BERSIHKAN APPARATUS",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Ksatria%20Hardware,%20saya%20mau%20order%20Paket%20Clean%20%26%20Repaste%20dong!",
    isPopular: false,
    colorTheme: "blue" as const,
  },
  {
    tier: "SPEED UPGRADE",
    price: "Rp 300 - 500 K",
    priceNote: "Jasa + Backup (Excl. Part)",
    description: "Upgrade RAM/SSD biar loading secepat kedipan mata. PC/laptop jadul langsung kayak komputer gaming!",
    features: [
      { text: "Jasa Pemasangan RAM & SSD", included: true },
      { text: "Instal Ulang OS Windows/Linux Bersih & Driver", included: true },
      { text: "Backup Data Lama (Maksimal 50GB)", included: true },
      { text: "Optimasi Startup & Bloatware Cleaning", included: true },
      { text: "Deep Cleansing & Thermal Paste Baru", included: true },
      { text: "Gratis Konsultasi Pemilihan Spek SSD/RAM", included: true },
      { text: "Reparasi Motherboard Mati Total", included: false },
    ],
    ctaLabel: "SUNTIK SPEED UPGRADE",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Ksatria%20Hardware,%20saya%20mau%20upgrade%20SSD/RAM%20paket%20Speed%20Upgrade!",
    isPopular: true,
    colorTheme: "blue" as const,
    badgeLabel: "REKOMENDASI",
  },
  {
    tier: "RAKIT PC MONSTER",
    price: "Rp 400 - 800 K",
    priceNote: "Jasa Rakit + Stress Test",
    description: "Layanan rakit PC idaman kustom. Kabel super rapi, sirkulasi udara optimal, aman dikirim atau dipajang.",
    features: [
      { text: "Jasa Perakitan PC Lengkap dari Nol", included: true },
      { text: "Manajemen Kabel Estetik & Rapi (Cable Management)", included: true },
      { text: "Update BIOS Terbaru & Aktifkan XMP/EXPO RAM", included: true },
      { text: "Instalasi OS, Driver Terbaru, & Software Dasar", included: true },
      { text: "Stress Test Suhu & Performa 1 Jam Nonstop", included: true },
      { text: "Bebas Konsultasi Racikan Spek Anti-Bottleneck", included: true },
      { text: "Termasuk Custom Water Cooling Loop", included: false },
    ],
    ctaLabel: "SUMMON PC BARU",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Ksatria%20Hardware,%20saya%20mau%20jasa%20Rakit%20PC%20Monster%20dong!",
    isPopular: false,
    colorTheme: "blue" as const,
  },
];

export default function HardwarePricingSection() {
  return (
    <section className="relative w-full py-16 bg-black overflow-hidden text-white">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
            ITEM SHOP
          </span>
          <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-white mb-4">
            PAKET KESATRIAN HARDWARE
          </h2>
          <p className="max-w-2xl text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
            Harganya bersahabat dan transparan. Lo bisa bawa sparepart sendiri untuk dipasang, atau kita bantu cariin dengan harga termurah di pasaran.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 items-stretch">
          {packages.map((pkg, i) => (
            <PricingCard key={i} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
