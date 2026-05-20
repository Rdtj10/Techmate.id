"use client";

import FaqAccordion from "@/app/_components/FaqAccordion";

const faqItems = [
  {
    question: "Laptop atau PC tipe apa aja yang bisa diservis di sini?",
    answer: "Kita melayani hampir seluruh tipe laptop mainstream (Asus ROG/TUF, Lenovo Legion/Thinkpad, Acer Predator/Aspire, HP, Dell, MSI) maupun laptop kantor biasa. Buat PC, kita terima segala jenis PC desktop rakitan, mini PC, all-in-one PC, hingga server kantor.",
  },
  {
    question: "Pengerjaannya bisa ditunggu atau harus ditinggal?",
    answer: "Tergantung tingkat kerusakan. Pengerjaan ringan kayak ganti thermal paste (Clean & Repaste), upgrade RAM/SSD, dan instal ulang OS bisa banget ditunggu (sekitar 1-2 jam beres). Namun untuk kerusakan berat kayak konsleting listrik di motherboard, kena air, atau reballing chip VGA harus ditinggal sekitar 3-7 hari kerja untuk proses tracing komponen.",
  },
  {
    question: "Dapet garansi nggak setelah servis selesai?",
    answer: "Pasti dapet garansi! Semua penggantian part baru (SSD, RAM, Keyboard, Layar) dapet garansi resmi distributor masing-masing (1 hingga 3 tahun). Untuk jasa perbaikan/solder motherboard, kita kasih garansi toko selama 30 hari penuh.",
  },
  {
    question: "Part pengganti harus beli di sini atau boleh bawa sendiri?",
    answer: "Sangat dibebaskan! Lo boleh banget beli SSD/RAM/casing sendiri pas diskon e-commerce, lalu bawa ke kita buat jasa rakit atau pasangnya aja. Atau kalau lo nggak mau pusing milih spek yang kompatibel, tim Ksatria Hardware siap beliin part original bergaransi resmi.",
  },
  {
    question: "Bisa dipanggil ke rumah atau ada jasa antar-jemput?",
    answer: "Saat ini kita menyediakan jasa antar-jemput perangkat (pickup & delivery) buat lo yang sibuk atau mager keluar rumah. Perangkat bakal dijemput kurir tepercaya, kita servis di lab, dan dikirim balik setelah beres.",
  },
];

export default function HardwareFaqSection() {
  return (
    <section className="relative w-full py-16 bg-zinc-950 border-t-2 border-zinc-900 overflow-hidden text-white">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Header */}
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-2.5 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
            HELP CENTER
          </span>
          <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-white mb-4">
            FAQ KSATRIA HARDWARE
          </h2>
          <p className="max-w-2xl text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
            Butuh info lebih lanjut mengenai estimasi pengerjaan atau garansi fisik hardware? Cek jawaban lengkapnya berikut ini!
          </p>
        </div>

        {/* Accordion FAQ */}
        <div className="max-w-3xl mx-auto mt-4">
          <FaqAccordion items={faqItems} colorTheme="blue" />
        </div>
      </div>
    </section>
  );
}
