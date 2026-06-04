"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarCheck, User, Mail, MessageSquare, Briefcase, ChevronRight } from "lucide-react";

const serviceOptions = [
  "Suhu Software — Web / Aplikasi",
  "Suhu Software — Mobile App",
  "Ksatria Hardware — Service Laptop/PC",
  "Ksatria Hardware — Rakit PC",
  "Suhu Curhat IT — Konsultasi",
  "Suhu Curhat IT — Migrasi / Cloud",
  "Lainnya (ceritain dulu via WA)",
];

const WA_NUM = "628123456789";

export default function BookingSection() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo Techmate! Saya ingin booking konsultasi gratis.

Nama: ${form.name}
Email: ${form.email}
Layanan: ${form.service || "-"}
Pesan: ${form.message || "-"}`;

    window.open(`https://wa.me/${WA_NUM}?text=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      id="booking"
      className="relative w-full py-20 px-4 bg-background/70 backdrop-blur-sm text-foreground overflow-hidden border-t border-border transition-colors duration-300"
    >
      <div className="container relative z-10 mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="px-3 py-1 bg-card border-2 border-border text-muted-foreground text-[10px] font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]"
          >
            Level 8: Form Bergabung
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-4xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-foreground mb-6 uppercase tracking-wide"
          >
            BOOKING KONSULTASI
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl text-sm md:text-base text-muted-foreground"
          >
            Isi form di bawah dan tim Techmate akan terhubung via WhatsApp untuk jadwalin sesi konsultasi gratis bareng lo!
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start"
        >
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              { icon: <CalendarCheck className="size-5 text-green-400" />, title: "Konsultasi GRATIS", desc: "Sesi pertama selalu gratis. Gak ada kewajiban apapun." },
              { icon: <MessageSquare className="size-5 text-blue-400" />, title: "Respon Cepat", desc: "Tim kami biasanya balas dalam 1-2 jam di jam kerja." },
              { icon: <Briefcase className="size-5 text-amber-400" />, title: "Fleksibel", desc: "Bisa via WA, Zoom, Google Meet, atau tatap muka di Bandung." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 bg-card border-2 border-border relative"
              >
                <div className="absolute top-[-2px] left-[-2px] w-1.5 h-1.5 bg-background" />
                <div className="absolute top-[-2px] right-[-2px] w-1.5 h-1.5 bg-background" />
                <div className="absolute bottom-[-2px] left-[-2px] w-1.5 h-1.5 bg-background" />
                <div className="absolute bottom-[-2px] right-[-2px] w-1.5 h-1.5 bg-background" />
                <div className="shrink-0 mt-0.5">{item.icon}</div>
                <div>
                  <p className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-foreground mb-1">{item.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-3">
            <div className="bg-card border-2 border-border p-6 relative">
              <div className="absolute top-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute top-[-2px] right-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] right-[-2px] w-2 h-2 bg-background" />

              {submitted ? (
                <div className="flex flex-col items-center text-center py-8 gap-4">
                  <span className="text-5xl">🎉</span>
                  <p className="font-[family-name:var(--font-press-start-2p)] text-xs text-green-400">WA SUDAH TERBUKA!</p>
                  <p className="text-sm text-muted-foreground max-w-xs">Kalau WA gak terbuka otomatis, klik tombol di bawah ini.</p>
                  <a
                    href={`https://wa.me/${WA_NUM}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-green-600 hover:bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold border-2 border-green-400 rounded-none transition-colors"
                  >
                    BUKA WHATSAPP →
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-[8px] font-[family-name:var(--font-press-start-2p)] text-muted-foreground hover:text-foreground transition-colors cursor-pointer mt-2"
                  >
                    ↩ KIRIM LAGI
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground flex items-center gap-1.5">
                      <User className="size-3" /> NAMA
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nama lo..."
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="px-3 py-2.5 bg-background border-2 border-border focus:border-green-500 focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/50 rounded-none transition-colors font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground flex items-center gap-1.5">
                      <Mail className="size-3" /> EMAIL
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="email@lo.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="px-3 py-2.5 bg-background border-2 border-border focus:border-green-500 focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/50 rounded-none transition-colors font-sans"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground flex items-center gap-1.5">
                      <Briefcase className="size-3" /> LAYANAN YANG DIMINATI
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                      className="px-3 py-2.5 bg-background border-2 border-border focus:border-green-500 focus:outline-none text-sm text-foreground rounded-none transition-colors font-sans cursor-pointer"
                    >
                      <option value="">Pilih layanan...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground flex items-center gap-1.5">
                      <MessageSquare className="size-3" /> CERITAIN KEBUTUHANMU
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Singkat aja dulu, nanti diskusi lebih lanjut via WA..."
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="px-3 py-2.5 bg-background border-2 border-border focus:border-green-500 focus:outline-none text-sm text-foreground placeholder:text-muted-foreground/50 rounded-none transition-colors resize-none font-sans"
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-green-600 hover:bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold border-2 border-green-400 shadow-[4px_4px_0_0_rgba(74,222,128,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(74,222,128,0.4)] transition-all rounded-none cursor-pointer"
                  >
                    KIRIM & BUKA WHATSAPP
                    <ChevronRight className="size-4" />
                  </button>

                  <p className="text-[9px] text-muted-foreground/60 text-center">
                    * Form ini akan membuka WhatsApp dengan pesan yang sudah terisi otomatis
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
