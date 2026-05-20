"use client";

import FaqAccordion from "@/app/_components/FaqAccordion";

const faqItems = [
  {
    question: "Berapa lama sih proses pengerjaan software-nya?",
    answer: "Tergantung tingkat kerumitan quest lo, bro. Landing page simpel (Starter Deck) biasanya kelar dalam 5-10 hari kerja. Buat web app dinamis (Pro Quest) butuh sekitar 3-6 minggu. Kalau mobile app (Epic Boss) bisa makan waktu 8-12 minggu karena butuh proses testing di berbagai tipe hp Android & iOS.",
  },
  {
    question: "Apakah dapet source code aslinya pas serah terima?",
    answer: "Dapet 100% full source code! Begitu project selesai dan pembayaran dilunasi, kita bakal serah terimakan seluruh file kodingannya lewat repository GitHub pribadi lo. Nggak ada lisensi tahunan tersembunyi yang bikin lo rugi.",
  },
  {
    question: "Tech stack apa aja yang biasanya dipake sama Suhu Software?",
    answer: "Kita selalu update gear dengan tech stack modern. Frontend web pake Next.js, React.js, dan Tailwind CSS. Backend pake Node.js (NestJS/Express) atau Go. Database pake PostgreSQL, MongoDB, atau Redis. Untuk mobile app, kita andalkan React Native biar performanya deket ke native tapi development-nya efisien.",
  },
  {
    question: "Bisa dibantu setup domain dan hosting-nya juga?",
    answer: "Bisa banget! Lo tinggal terima beres aja. Semua paket kita sudah include setup hosting gratis (pake Vercel/Netlify atau VPS kustom) dan domain pilihan lo (.com / .id) gratis untuk tahun pertama.",
  },
  {
    question: "Kalo ada bug atau error setelah web-nya live gimana?",
    answer: "Jangan panik, kita nggak bakal kabur! Setiap project dapet free maintenance (perbaikan bug gratis jika ada error sistem) selama 3 sampai 6 bulan (tergantung paket yang dipilih). Setelah masa garansi habis, lo bisa perpanjang kontrak maintenance bulanan yang ramah kantong.",
  },
];

export default function SoftwareFaqSection() {
  return (
    <section className="relative w-full py-16 bg-zinc-950 border-t-2 border-zinc-900 overflow-hidden text-white">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-2.5 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
            HELP CENTER
          </span>
          <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-white mb-4">
            FAQ SIHIR SOFTWARE
          </h2>
          <p className="max-w-2xl text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
            Punya pertanyaan seputar cara kerja sihir kodingan kita? Baca dulu rangkuman tanya-jawab di bawah ini ya!
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className="max-w-3xl mx-auto mt-4">
          <FaqAccordion items={faqItems} colorTheme="green" />
        </div>
      </div>
    </section>
  );
}
