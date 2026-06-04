"use client";

import SkillTree, { SkillPath } from "@/app/_components/SkillTree";

const consultPaths: SkillPath[] = [
  {
    title: "CLOUD ARCHITECTURE",
    description: "Desain sistem server awan (cloud) aman, hemat biaya, dan siap skala besar.",
    skills: [
      {
        id: "con-cld-1",
        name: "Cloud Architect",
        level: "Lv. 4/5",
        description: "Rancang infrastruktur cloud di AWS, GCP, atau Azure dengan setup VPC, Subnet, dan Security Group standar industri.",
        iconName: "Cloud",
        status: "unlocked",
      },
      {
        id: "con-cld-2",
        name: "Cost Optimizer",
        level: "Lv. 5/5",
        description: "Audit biaya server cloud, matikan resource mubazir, atur pricing plans, hemat biaya server bulanan hingga 50%.",
        iconName: "Scale",
        status: "maxed",
      },
      {
        id: "con-cld-3",
        name: "DevOps Overseer",
        level: "Lv. LOCKED",
        description: "Setup server CI/CD pipeline, monitoring log terpusat (Grafana/Kibana), auto-healing server kluster.",
        iconName: "Activity",
        status: "locked",
      },
    ],
  },
  {
    title: "SECURITY & AUDIT",
    description: "Deteksi celah keamanan sistem dan perlindungan data sensitif perusahaan.",
    skills: [
      {
        id: "con-sec-1",
        name: "Vulnerability Scan",
        level: "Lv. 4/5",
        description: "Melakukan penetration testing (pentest) ringan untuk temukan celah SQL injection, XSS, atau bad configurations.",
        iconName: "Search",
        status: "unlocked",
      },
      {
        id: "con-sec-2",
        name: "System Hardening",
        level: "Lv. 5/5",
        description: "Amankan server dengan setup SSH key, disable root login, batasi IP akses, serta setup SSL dan enkripsi DB.",
        iconName: "ShieldAlert",
        status: "maxed",
      },
      {
        id: "con-sec-3",
        name: "Compliance Consultant",
        level: "Lv. LOCKED",
        description: "Bantu persiapkan tim internal untuk lolos sertifikasi keamanan cyber kelas enterprise.",
        iconName: "Award",
        status: "locked",
      },
    ],
  },
  {
    title: "IT STRATEGY",
    description: "Konsultasi bisnis & automasi proses kerja digital biar hemat tenaga.",
    skills: [
      {
        id: "con-str-1",
        name: "Stack Inspector",
        level: "Lv. 5/5",
        description: "Analisis penggunaan tools & SaaS kantor lo (Google Workspace, Slack, Jira, dll) biar nggak bayar dobel.",
        iconName: "Briefcase",
        status: "maxed",
      },
      {
        id: "con-str-2",
        name: "Workflow Optimizer",
        level: "Lv. 4/5",
        description: "Automasi tugas admin manual pake platform n8n/Make atau coding Python script kustom biar serba otomatis.",
        iconName: "Play",
        status: "unlocked",
      },
      {
        id: "con-str-3",
        name: "CTO as a Service",
        level: "Lv. LOCKED",
        description: "Pendampingan khusus buat founders startup merancang arsitektur produk & interview calon developer internal.",
        iconName: "UserCheck",
        status: "locked",
      },
    ],
  },
];

export default function ConsultSkillsSection() {
  return (
    <section className="relative w-full py-16 bg-card border-t-2 border-b-2 border-border overflow-hidden text-foreground transition-colors duration-300">
      
      <div className="container mx-auto max-w-5xl px-4 flex flex-col items-center mb-12 text-center">
        <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-widest uppercase mb-4">
          SPELL & SKILLS
        </span>
        <h2 className="text-xl md:text-3xl font-[family-name:var(--font-press-start-2p)] font-bold tracking-wide text-foreground mb-4">
          POHON SIHIR KONSULTASI
        </h2>
        <p className="max-w-2xl text-xs md:text-sm text-muted-foreground font-sans leading-relaxed">
          Pelajari keahlian khusus Suhu Curhat IT kami. Solusi yang kami berikan didesain agar praktis, tidak teoritis, dan langsung memecahkan akar masalah bisnis lo.
        </p>
      </div>

      
      <div className="container mx-auto max-w-5xl px-4">
        <div className="p-6 md:p-8 bg-background border-4 border-border rounded-none relative">
          
          <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background z-20" />
          <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background z-20" />
          <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background z-20" />
          <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background z-20" />

          <SkillTree paths={consultPaths} colorTheme="amber" />
        </div>
      </div>
    </section>
  );
}
