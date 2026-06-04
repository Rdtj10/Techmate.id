"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, CheckCircle2, Clock, Lock } from "lucide-react";

export type PortfolioCategory = "software" | "hardware" | "konsultasi";
export type PortfolioStatus = "completed" | "ongoing" | "private";

export interface PortfolioItem {
  id: string;
  title: string;
  subtitle: string;
  category: PortfolioCategory;
  status: PortfolioStatus;
  year: string;
  description: string;
  techStack: string[];
  rank: "S" | "A" | "B";
  accentColor: "green" | "blue" | "amber" | "purple" | "rose";
  href?: string;
}

const categoryLabel: Record<PortfolioCategory, string> = {
  software: "⚗ SUHU SOFTWARE",
  hardware: "🛡 KSATRIA HARDWARE",
  konsultasi: "🔥 SUHU CURHAT IT",
};

const statusConfig: Record<
  PortfolioStatus,
  { label: string; icon: React.ReactNode; className: string }
> = {
  completed: {
    label: "CLEARED",
    icon: <CheckCircle2 className="size-3" />,
    className: "text-green-400 border-green-500/50 bg-green-500/10",
  },
  ongoing: {
    label: "IN PROGRESS",
    icon: <Clock className="size-3" />,
    className: "text-amber-400 border-amber-500/50 bg-amber-500/10",
  },
  private: {
    label: "CLASSIFIED",
    icon: <Lock className="size-3" />,
    className: "text-zinc-400 border-zinc-500/50 bg-zinc-500/10",
  },
};

const accentThemes = {
  green: {
    border: "border-green-500",
    glow: "shadow-[4px_4px_0_0_rgba(34,197,94,0.3)]",
    glowHover: "hover:shadow-[8px_8px_0_0_rgba(34,197,94,0.5)]",
    text: "text-green-400",
    bg: "bg-green-500/10",
    badge: "bg-green-500 text-black",
    bar: "bg-green-500",
    grid: "from-green-500/5",
  },
  blue: {
    border: "border-blue-500",
    glow: "shadow-[4px_4px_0_0_rgba(59,130,246,0.3)]",
    glowHover: "hover:shadow-[8px_8px_0_0_rgba(59,130,246,0.5)]",
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    badge: "bg-blue-500 text-black",
    bar: "bg-blue-500",
    grid: "from-blue-500/5",
  },
  amber: {
    border: "border-amber-500",
    glow: "shadow-[4px_4px_0_0_rgba(245,158,11,0.3)]",
    glowHover: "hover:shadow-[8px_8px_0_0_rgba(245,158,11,0.5)]",
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    badge: "bg-amber-500 text-black",
    bar: "bg-amber-500",
    grid: "from-amber-500/5",
  },
  purple: {
    border: "border-purple-500",
    glow: "shadow-[4px_4px_0_0_rgba(168,85,247,0.3)]",
    glowHover: "hover:shadow-[8px_8px_0_0_rgba(168,85,247,0.5)]",
    text: "text-purple-400",
    bg: "bg-purple-500/10",
    badge: "bg-purple-500 text-black",
    bar: "bg-purple-500",
    grid: "from-purple-500/5",
  },
  rose: {
    border: "border-rose-500",
    glow: "shadow-[4px_4px_0_0_rgba(244,63,94,0.3)]",
    glowHover: "hover:shadow-[8px_8px_0_0_rgba(244,63,94,0.5)]",
    text: "text-rose-400",
    bg: "bg-rose-500/10",
    badge: "bg-rose-500 text-black",
    bar: "bg-rose-500",
    grid: "from-rose-500/5",
  },
};

export default function PortfolioCard({
  item,
  index = 0,
}: {
  item: PortfolioItem;
  index?: number;
}) {
  const theme = accentThemes[item.accentColor];
  const status = statusConfig[item.status];

  const CardContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4, x: -2 }}
      className={`relative w-full h-full bg-card border-2 ${theme.border} ${theme.glow} ${theme.glowHover} transition-all duration-200 rounded-none cursor-pointer group overflow-hidden flex flex-col`}
    >
      <div className={`absolute top-[-2px] left-[-2px] w-1.5 h-1.5 bg-background z-10`} />
      <div className={`absolute top-[-2px] right-[-2px] w-1.5 h-1.5 bg-background z-10`} />
      <div className={`absolute bottom-[-2px] left-[-2px] w-1.5 h-1.5 bg-background z-10`} />
      <div className={`absolute bottom-[-2px] right-[-2px] w-1.5 h-1.5 bg-background z-10`} />

      <div
        className={`absolute inset-0 opacity-30 bg-gradient-to-br ${theme.grid} to-transparent pointer-events-none`}
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className={`px-4 py-2.5 border-b-2 ${theme.border} flex items-center justify-between gap-2 bg-background/40`}>
        <span className={`font-[family-name:var(--font-press-start-2p)] text-[7px] ${theme.text} tracking-wider uppercase`}>
          {categoryLabel[item.category]}
        </span>
        <span
          className={`flex items-center gap-1 px-2 py-0.5 border text-[7px] font-[family-name:var(--font-press-start-2p)] font-bold rounded-none ${status.className}`}
        >
          {status.icon}
          {status.label}
        </span>
      </div>

      <div className="p-4 flex flex-col flex-1 gap-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-[family-name:var(--font-press-start-2p)] text-[10px] md:text-xs font-bold text-foreground uppercase leading-relaxed">
              {item.title}
            </h3>
            <p className="text-[10px] text-muted-foreground mt-0.5">{item.subtitle}</p>
          </div>
          <span
            className={`shrink-0 w-8 h-8 flex items-center justify-center border-2 font-[family-name:var(--font-press-start-2p)] text-xs font-bold ${theme.badge} ${theme.border}`}
          >
            {item.rank}
          </span>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed flex-1">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {item.techStack.map((tech) => (
            <span
              key={tech}
              className={`px-1.5 py-0.5 text-[9px] font-medium border border-border bg-background text-muted-foreground rounded-none`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <span className="text-[9px] font-[family-name:var(--font-press-start-2p)] text-muted-foreground/60">
            {item.year}
          </span>
          <span
            className={`flex items-center gap-1 text-[9px] font-[family-name:var(--font-press-start-2p)] font-bold ${theme.text} opacity-60 group-hover:opacity-100 transition-opacity`}
          >
            {item.href ? (
              <>[ LIHAT DEMO ] <ExternalLink className="size-2.5" /></>
            ) : (
              <>[ DETAIL ]</>
            )}
          </span>
        </div>
      </div>
    </motion.div>
  );

  if (item.href) {
    return (
      <Link href={item.href} target="_blank" rel="noopener noreferrer" className="flex h-full">
        {CardContent}
      </Link>
    );
  }

  return <div className="flex h-full">{CardContent}</div>;
}
