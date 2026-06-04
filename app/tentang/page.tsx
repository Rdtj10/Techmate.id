"use client";

import { motion } from "framer-motion";
import ArcadeBackground from "@/components/ArcadeBackground";

const techStack = [
  { name: "Next.js", icon: "▲", color: "text-foreground", category: "Frontend" },
  { name: "React", icon: "⚛", color: "text-blue-400", category: "Frontend" },
  { name: "TypeScript", icon: "TS", color: "text-blue-500", category: "Frontend" },
  { name: "Tailwind CSS", icon: "🎨", color: "text-cyan-400", category: "Frontend" },
  { name: "React Native", icon: "📱", color: "text-blue-400", category: "Mobile" },
  { name: "Flutter", icon: "🐦", color: "text-blue-500", category: "Mobile" },
  { name: "Node.js", icon: "🟢", color: "text-green-400", category: "Backend" },
  { name: "Python", icon: "🐍", color: "text-yellow-400", category: "Backend" },
  { name: "PostgreSQL", icon: "🐘", color: "text-blue-400", category: "Database" },
  { name: "MongoDB", icon: "🍃", color: "text-green-400", category: "Database" },
  { name: "AWS", icon: "☁️", color: "text-amber-400", category: "Cloud" },
  { name: "Docker", icon: "🐳", color: "text-blue-400", category: "DevOps" },
  { name: "Vercel", icon: "▲", color: "text-foreground", category: "Cloud" },
  { name: "Nginx", icon: "🔵", color: "text-green-400", category: "DevOps" },
  { name: "Git & GitHub", icon: "🐙", color: "text-foreground", category: "DevOps" },
  { name: "Figma", icon: "🎯", color: "text-purple-400", category: "Design" },
];

const certifications = [
  { name: "AWS Certified Solutions Architect", level: "Associate", icon: "☁️", color: "amber" },
  { name: "Google Professional Cloud Developer", level: "Professional", icon: "🌐", color: "blue" },
  { name: "Meta React Developer", level: "Certificate", icon: "⚛", color: "blue" },
  { name: "CompTIA A+", level: "Hardware Certified", icon: "🛡", color: "green" },
];

const timeline = [
  { year: "2021", title: "TECHMATE DIDIRIKAN", desc: "Mulai dari garasi, 2 orang founder yang passionate sama teknologi.", color: "green" },
  { year: "2022", title: "50 MISI CLEARED", desc: "Milestone pertama! 50 proyek selesai, rekrut 3 anggota baru.", color: "blue" },
  { year: "2023", title: "BUKA DIVISI HARDWARE", desc: "Ekspansi ke layanan service dan rakit PC gaming.", color: "amber" },
  { year: "2024", title: "100 MISI CLEARED", desc: "Seratus proyek! Launch layanan konsultasi IT enterprise.", color: "purple" },
  { year: "2025", title: "SQUAD 5 JAGOAN OP", desc: "Tim lengkap 5 orang, 150+ proyek, dan terus bertumbuh.", color: "green" },
];

const colorMap: Record<string, string> = {
  green: "border-green-500 text-green-400 bg-green-500/10",
  blue: "border-blue-500 text-blue-400 bg-blue-500/10",
  amber: "border-amber-500 text-amber-400 bg-amber-500/10",
  purple: "border-purple-500 text-purple-400 bg-purple-500/10",
};

export default function TentangPage() {
  const categories = [...new Set(techStack.map((t) => t.category))];

  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-500 overflow-x-hidden">
      <ArcadeBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <section className="w-full pt-28 pb-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-16">
              <span className="px-3 py-1 bg-card border-2 border-border text-muted-foreground text-[10px] font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)]">
                TECHMATE — LORE
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6 uppercase">
                TENTANG KAMI
              </h1>
              <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
                Techmate adalah tim teknologi yang berdedikasi membantu bisnis dan individu memenangkan pertempuran digital — dari kode yang bersih hingga hardware yang dingin.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {[
                { title: "VISI", icon: "🎯", text: "Menjadi squad teknologi pilihan utama di Indonesia — yang gercep, jujur, dan selalu deliver hasil terbaik untuk setiap klien." },
                { title: "MISI", icon: "⚔️", text: "Memberikan solusi teknologi berkualitas tinggi yang accessible untuk semua skala bisnis, dengan harga yang fair dan proses yang transparan." },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="bg-card border-2 border-border p-6 relative">
                  <div className="absolute top-[-2px] left-[-2px] w-1.5 h-1.5 bg-background" />
                  <div className="absolute top-[-2px] right-[-2px] w-1.5 h-1.5 bg-background" />
                  <div className="absolute bottom-[-2px] left-[-2px] w-1.5 h-1.5 bg-background" />
                  <div className="absolute bottom-[-2px] right-[-2px] w-1.5 h-1.5 bg-background" />
                  <p className="text-3xl mb-3">{item.icon}</p>
                  <h2 className="font-[family-name:var(--font-press-start-2p)] text-xs text-green-400 mb-3">{item.title}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
              <h2 className="font-[family-name:var(--font-press-start-2p)] text-sm md:text-base text-foreground text-center mb-10 uppercase">⚙ TECH STACK KAMI</h2>
              <div className="flex flex-col gap-6">
                {categories.map((cat) => (
                  <div key={cat}>
                    <p className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground mb-3">{cat.toUpperCase()}:</p>
                    <div className="flex flex-wrap gap-3">
                      {techStack.filter((t) => t.category === cat).map((tech, i) => (
                        <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} whileHover={{ y: -3 }} className="flex items-center gap-2 px-3 py-2 bg-card border-2 border-border hover:border-green-500/50 transition-all">
                          <span className={`${tech.color} font-bold text-sm`}>{tech.icon}</span>
                          <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-foreground">{tech.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
              <h2 className="font-[family-name:var(--font-press-start-2p)] text-sm md:text-base text-foreground text-center mb-10 uppercase">🏆 SERTIFIKASI & PENCAPAIAN</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, i) => (
                  <motion.div key={cert.name} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`flex items-center gap-4 p-4 bg-card border-2 ${colorMap[cert.color]} relative`}>
                    <div className="absolute top-[-2px] left-[-2px] w-1.5 h-1.5 bg-background" />
                    <div className="absolute top-[-2px] right-[-2px] w-1.5 h-1.5 bg-background" />
                    <div className="absolute bottom-[-2px] left-[-2px] w-1.5 h-1.5 bg-background" />
                    <div className="absolute bottom-[-2px] right-[-2px] w-1.5 h-1.5 bg-background" />
                    <span className="text-3xl shrink-0">{cert.icon}</span>
                    <div>
                      <p className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-foreground leading-relaxed">{cert.name}</p>
                      <p className={`font-[family-name:var(--font-press-start-2p)] text-[7px] mt-1 ${colorMap[cert.color].split(" ")[1]}`}>{cert.level}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-16">
              <h2 className="font-[family-name:var(--font-press-start-2p)] text-sm md:text-base text-foreground text-center mb-10 uppercase">📜 TIMELINE TECHMATE</h2>
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
                <div className="flex flex-col gap-8">
                  {timeline.map((item, i) => (
                    <motion.div key={item.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className={`relative flex ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-4 md:gap-8 pl-10 md:pl-0`}>
                      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-card border-2 border-green-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500" />
                      </div>
                      <div className={`${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} flex-1`}>
                        <span className={`font-[family-name:var(--font-press-start-2p)] text-[8px] ${colorMap[item.color].split(" ")[1]}`}>{item.year}</span>
                        <h3 className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-foreground mt-1 mb-1">{item.title}</h3>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                      <div className="hidden md:block flex-1" />
                    </motion.div>
                  ))}
                </div>
              </div>
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
