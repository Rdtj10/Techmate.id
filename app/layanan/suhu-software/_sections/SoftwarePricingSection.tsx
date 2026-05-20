"use client";

import PricingCard from "@/app/_components/PricingCard";

const packages = [
  {
    tier: "STARTER DECK",
    price: "Rp 3 - 5 Jt",
    priceNote: "Sekali Bayar",
    description: "Cocok buat lo yang butuh landing page, portofolio, company profile, atau website promo produk simpel yang eye-catching.",
    features: [
      { text: "1 Halaman Landing Page Kece", included: true },
      { text: "Desain Responsive & Mobile-friendly", included: true },
      { text: "Integrasi Link WhatsApp & Medsos", included: true },
      { text: "Domain .com / .id (1 Tahun)", included: true },
      { text: "Revisi Ringan 3 Kali", included: true },
      { text: "Admin Panel / Dashboard", included: false },
      { text: "Integrasi Database & User Login", included: false },
    ],
    ctaLabel: "BELI ITEM SHOP",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Suhu%20Software,%20saya%20mau%20order%20Paket%20Starter%20Deck%20dong!",
    isPopular: false,
    colorTheme: "green" as const,
  },
  {
    tier: "PRO QUEST",
    price: "Rp 8 - 15 Jt",
    priceNote: "Sekali Bayar",
    description: "Buat startup atau bisnis yang butuh sistem kelola data, e-commerce lengkap, dashboard admin, atau aplikasi web interaktif.",
    features: [
      { text: "Halaman Dinamis & Unlimited Content", included: true },
      { text: "User Login & Role Access Management", included: true },
      { text: "Integrasi Database PostgreSQL / MongoDB", included: true },
      { text: "Admin Panel (CMS) buat kelola data", included: true },
      { text: "Integrasi Payment Gateway (Midtrans)", included: true },
      { text: "Free Maintenance & Support (3 Bulan)", included: true },
      { text: "Aplikasi Mobile Android/iOS (Native)", included: false },
    ],
    ctaLabel: "AMBIL QUEST INI",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Suhu%20Software,%20saya%20tertarik%20Paket%20Pro%20Quest%20nih!",
    isPopular: true,
    colorTheme: "green" as const,
    badgeLabel: "TERLARIS",
  },
  {
    tier: "EPIC BOSS",
    price: "Rp 25 Jt+",
    priceNote: "Estimasi Project",
    description: "Sempurna buat aplikasi mobile cross-platform Android & iOS sekaligus, marketplace berskala besar, atau sistem ERP kustom.",
    features: [
      { text: "App Mobile Android & iOS (React Native)", included: true },
      { text: "Full Custom UI/UX Design & Animations", included: true },
      { text: "Backend API Server dengan Keamanan Tinggi", included: true },
      { text: "Auto-scaling Cloud Deployment", included: true },
      { text: "Integrasi Pihak Ketiga (Maps, OTP, dll)", included: true },
      { text: "Free Maintenance & Support (6 Bulan)", included: true },
      { text: "Pendampingan Upload App Store & Playstore", included: true },
    ],
    ctaLabel: "LAWAN BOS FINAL",
    ctaHref: "https://wa.me/628123456789?text=Halo%20Suhu%20Software,%20saya%20mau%20konsultasi%20jasa%20Paket%20Epic%20Boss%20Software!",
    isPopular: false,
    colorTheme: "green" as const,
  },
];

export default function SoftwarePricingSection() {
  return (
    <section className="relative w-full py-16 bg-black overflow-hidden text-white">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-2.5 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
            ITEM SHOP
          </span>
          <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-white mb-4">
            PAKET SIHIR SOFTWARE
          </h2>
          <p className="max-w-2xl text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
            Pilih perlengkapan tempur lo sesuai budget dan target quest. Nggak ada biaya tersembunyi, semua transparan demi keberhasilan party kita!
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
