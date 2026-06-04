"use client";

import { motion } from "framer-motion";
import FaqAccordion from "../_components/FaqAccordion";

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan website?",
    answer:
      "Tergantung kompleksitas proyek. Landing page simpel bisa selesai 3-7 hari kerja. Aplikasi web dengan fitur lengkap (dashboard, database, auth) biasanya 2-6 minggu. Kita selalu bikin timeline yang transparan di awal sebelum mulai ngerjain.",
  },
  {
    question: "Berapa estimasi harga buat bikin website?",
    answer:
      "Harga mulai dari Rp 500.000 untuk landing page sederhana, hingga puluhan juta untuk aplikasi enterprise. Cek halaman /harga atau pakai kalkulator estimasi di /kalkulator untuk gambaran lebih detail. Konsultasi awal gratis!",
  },
  {
    question: "Apakah ada garansi setelah proyek selesai?",
    answer:
      "Ya! Semua proyek software mendapat garansi bug fix selama 30 hari setelah serah terima. Kalau ada error atau bug yang muncul dalam 30 hari, kita perbaiki gratis. Untuk hardware, garansi pengerjaan 14 hari.",
  },
  {
    question: "Metode pembayaran apa yang diterima?",
    answer:
      "Kita nerima transfer bank (BCA, Mandiri, BRI), dompet digital (GoPay, OVO, DANA, ShopeePay), dan tunai untuk layanan hardware yang dikerjakan offline. Pembayaran biasanya DP 50% di awal, 50% saat serah terima.",
  },
  {
    question: "Apakah bisa revisi setelah desain jadi?",
    answer:
      "Tentu! Setiap paket sudah termasuk 2-3 putaran revisi. Revisi tambahan di luar paket bisa dibicarakan dengan biaya yang wajar. Kita juga selalu ada sesi review bersama di tiap milestone agar hasilnya sesuai ekspektasi.",
  },
  {
    question: "Apakah bisa konsultasi dulu sebelum deal?",
    answer:
      "Wajib malah! Konsultasi awal via WhatsApp atau video call GRATIS. Kita bakal diskusi kebutuhan, scope proyek, dan estimasi anggaran bareng-bareng sebelum ada komitmen apapun. Gak ada paksaan sama sekali.",
  },
  {
    question: "Apa bedanya Techmate dengan freelancer biasa?",
    answer:
      "Kita tim, bukan individu. Ada developer, desainer, dan QA tester yang bekerja bareng. Ini berarti lebih cepat, ada quality check berlapis, dan tidak akan kabur di tengah proyek. Plus kita udah punya track record 150+ proyek yang bisa dicek di halaman portofolio.",
  },
  {
    question: "Apakah bisa handle proyek dari luar kota?",
    answer:
      "Sudah pasti! Mayoritas klien kita justru dari berbagai kota di Indonesia. Semua koordinasi bisa via WhatsApp, Zoom, atau Google Meet. Untuk service hardware, kita bisa handle pengiriman perangkat dengan packing aman dan layanan jemput-antar untuk area Bandung.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full py-20 px-4 bg-background/70 backdrop-blur-sm text-foreground overflow-hidden border-t border-border transition-colors duration-300"
    >
      <div className="container relative z-10 mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 bg-card border-2 border-border text-muted-foreground text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-(family-name:--font-press-start-2p)"
          >
            Level 7: Papan Pertanyaan
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold font-(family-name:--font-press-start-2p) leading-tight text-foreground mb-6 uppercase tracking-wide"
          >
            PERTANYAAN UMUM (FAQ)
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-sm md:text-base text-muted-foreground"
          >
            Ada pertanyaan sebelum mulai mabar? Cek dulu jawaban dari pertanyaan yang paling sering ditanyain klien kami.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <FaqAccordion items={faqs} colorTheme="green" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">
            Pertanyaan kamu gak ada di sini?
          </p>
          <a
            href="https://wa.me/628123456789?text=Halo+Techmate!+Saya+punya+pertanyaan."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border-2 border-green-500 text-green-400 font-(family-name:--font-press-start-2p) text-[9px] font-bold hover:bg-green-500/10 transition-colors rounded-none"
          >
            TANYA LANGSUNG VIA WA →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
