"use client";

import SkillTree, { SkillPath } from "@/app/_components/SkillTree";

const softwarePaths: SkillPath[] = [
  {
    title: "FRONTEND PATH",
    description: "Bikin antarmuka web interaktif, super responsif, dan SEO-friendly.",
    skills: [
      {
        id: "fe-1",
        name: "Next.js Apprentice",
        level: "Lv. 4/5",
        description: "Menguasai struktur Next.js App Router, SSR, dan routing dinamis buat SEO tingkat dewa.",
        iconName: "Monitor",
        status: "unlocked",
      },
      {
        id: "fe-2",
        name: "UI/UX Sorcerer",
        level: "Lv. 5/5",
        description: "Bikin animasi micro-interaction smooth pake Framer Motion dan layout ciamik Tailwind CSS.",
        iconName: "Sparkles",
        status: "maxed",
      },
      {
        id: "fe-3",
        name: "Jamstack Archmage",
        level: "Lv. MAX",
        description: "Integrasi headless CMS, CDN caching, dan optimalisasi Core Web Vitals untuk speed 0.1 detik.",
        iconName: "Zap",
        status: "maxed",
      },
    ],
  },
  {
    title: "BACKEND PATH",
    description: "Desain arsitektur database, sistem API, dan keamanan server.",
    skills: [
      {
        id: "be-1",
        name: "API Architect",
        level: "Lv. 4/5",
        description: "Rancang RESTful API dan GraphQL yang bersih, efisien, lengkap dengan dokumentasi OpenAPI/Swagger.",
        iconName: "Cpu",
        status: "unlocked",
      },
      {
        id: "be-2",
        name: "Database Overlord",
        level: "Lv. 4/5",
        description: "Kelola relational (PostgreSQL, MySQL) & NoSQL (MongoDB, Redis) DB dengan optimasi query cepat.",
        iconName: "Database",
        status: "unlocked",
      },
      {
        id: "be-3",
        name: "Cloud Conqueror",
        level: "Lv. LOCKED",
        description: "Orkestrasi Docker container di AWS/GCP, setup CI/CD, auto-scaling, dan security hardening tingkat tinggi.",
        iconName: "Cloud",
        status: "locked",
      },
    ],
  },
  {
    title: "MOBILE PATH",
    description: "Bikin aplikasi native untuk Android dan iOS satu codebase.",
    skills: [
      {
        id: "mb-1",
        name: "Cross-Platform Cadet",
        level: "Lv. 3/5",
        description: "Ngoding app Android & iOS sekaligus pake React Native atau Flutter hemat budget dan waktu.",
        iconName: "Smartphone",
        status: "unlocked",
      },
      {
        id: "mb-2",
        name: "Hardware Integration",
        level: "Lv. LOCKED",
        description: "Akses native API internal hp seperti Kamera, GPS, Bluetooth, Sensor, dan Local Storage dengan mulus.",
        iconName: "Layers",
        status: "locked",
      },
      {
        id: "mb-3",
        name: "Playstore Legend",
        level: "Lv. LOCKED",
        description: "Submit & optimasi listing di Google Play Store & Apple App Store hingga sukses disetujui publik.",
        iconName: "Award",
        status: "locked",
      },
    ],
  },
];

export default function SoftwareSkillsSection() {
  return (
    <section className="relative w-full py-16 bg-zinc-950 border-t-2 border-b-2 border-zinc-900 overflow-hidden text-white">
      {/* Title */}
      <div className="container mx-auto max-w-5xl px-4 flex flex-col items-center mb-12 text-center">
        <span className="px-2.5 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
          SPELL & SKILLS
        </span>
        <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-white mb-4">
          POHON SIHIR SOFTWARE
        </h2>
        <p className="max-w-2xl text-xs md:text-sm text-zinc-400 font-sans leading-relaxed">
          Hover node skill di bawah buat intip deskripsi lengkapnya. Kita terus leveling up skill-tree ini biar software yang kita bikin selalu pake teknologi paling termutakhir!
        </p>
      </div>

      {/* Skill Tree wrapper */}
      <div className="container mx-auto max-w-5xl px-4">
        <div className="p-6 md:p-8 bg-black border-4 border-zinc-800 rounded-none relative">
          {/* Pixel corners */}
          <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-black z-20" />
          <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-black z-20" />
          <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-black z-20" />
          <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-black z-20" />

          <SkillTree paths={softwarePaths} colorTheme="green" />
        </div>
      </div>
    </section>
  );
}
