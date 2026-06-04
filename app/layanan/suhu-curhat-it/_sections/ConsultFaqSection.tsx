"use client";

import FaqAccordion from "@/app/_components/FaqAccordion";

const faqItems = [
  {
    question: "Konsultasinya nanti lewat media apa?",
    answer: "Untuk Paket Curhat Kilat, konsultasi dilakukan via chat teks dan voice note WhatsApp. Sedangkan untuk Paket Deep Audit, kita bakal tatap muka via video call Google Meet atau Zoom sambil share screen biar proses peninjauan server atau codingan lebih gampang.",
  },
  {
    question: "Apakah privasi data dan kodingan saya terjamin aman?",
    answer: "Keamanan data lo adalah prioritas utama. Semua informasi server, source code, data keuangan, hingga ide bisnis lo dijamin aman 100%. Kita sangat terbuka untuk menandatangani NDA (Non-Disclosure Agreement) tertulis sebelum sesi audit dimulai.",
  },
  {
    question: "Kalo sesinya kelar tapi masih ada pertanyaan mengganjal gimana?",
    answer: "Khusus Paket Deep Audit, lo dapet gratis layanan tanya-jawab via chat WA (follow-up) selama 24 jam setelah sesi video call berakhir. Jika butuh konsultasi rutin jangka panjang, Paket Retainer CTO bulanan adalah solusi paling tepat.",
  },
  {
    question: "Di sesi Deep Audit, apa aja sih yang bisa dibedah?",
    answer: "Macam-macam! Bisa review skema database biar query-nya nggak lemot, optimasi setup VM/Server VPS biar biayanya turun, pasang SSL/Firewall, cek celah keamanan web (penetration testing), sampai konsultasi roadmap produk kustom.",
  },
  {
    question: "Bisa bantu carikan atau tes koding developer baru untuk tim saya?",
    answer: "Bisa banget! Lewat Paket Retainer CTO bulanan, kita bisa bertindak sebagai penilai independen. Kita bantu bikinin soal tes koding yang relevan, mendampingi sesi interview teknis, hingga kasih ulasan objektif mengenai kompetensi calon karyawan lo.",
  },
];

export default function ConsultFaqSection() {
  return (
    <section className="relative w-full py-16 bg-card border-t-2 border-border overflow-hidden text-foreground transition-colors duration-300">
      <div className="container mx-auto max-w-4xl px-4">
        
        <div className="flex flex-col items-center mb-12 text-center">
          <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
            HELP CENTER
          </span>
          <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-foreground mb-4">
            FAQ CURHAT IT
          </h2>
          <p className="max-w-2xl text-xs md:text-sm text-muted-foreground font-sans leading-relaxed">
            Nggak usah malu bertanya. Temukan jawaban seputar teknis konsultasi dan jaminan keamanan data lo di sini!
          </p>
        </div>

        
        <div className="max-w-3xl mx-auto mt-4">
          <FaqAccordion items={faqItems} colorTheme="amber" />
        </div>
      </div>
    </section>
  );
}
