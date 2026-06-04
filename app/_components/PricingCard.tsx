"use client";

import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import Link from "next/link";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  tier: string; 
  price: string; 
  priceNote?: string; 
  description: string;
  features: PricingFeature[];
  ctaLabel: string;
  ctaHref: string;
  isPopular?: boolean;
  colorTheme?: "green" | "blue" | "amber" | "purple";
  badgeLabel?: string; 
}

export default function PricingCard({
  tier,
  price,
  priceNote,
  description,
  features,
  ctaLabel,
  ctaHref,
  isPopular = false,
  colorTheme = "green",
  badgeLabel,
}: PricingCardProps) {
  const themes = {
    green: {
      border: isPopular ? "border-green-500" : "border-border",
      text: "text-green-400",
      bg: "bg-green-500/10",
      badge: "bg-green-500 text-black border-green-400",
      cta: "bg-green-600 hover:bg-green-500 text-black border-green-400 shadow-[4px_4px_0_0_rgba(74,222,128,0.4)] hover:shadow-[2px_2px_0_0_rgba(74,222,128,0.4)]",
      glow: isPopular ? "shadow-[6px_6px_0_0_rgba(34,197,94,0.25)]" : "shadow-[4px_4px_0_0_rgba(255,255,255,0.03)]",
    },
    blue: {
      border: isPopular ? "border-blue-500" : "border-border",
      text: "text-blue-400",
      bg: "bg-blue-500/10",
      badge: "bg-blue-500 text-black border-blue-400",
      cta: "bg-blue-600 hover:bg-blue-500 text-black border-blue-400 shadow-[4px_4px_0_0_rgba(59,130,246,0.4)] hover:shadow-[2px_2px_0_0_rgba(59,130,246,0.4)]",
      glow: isPopular ? "shadow-[6px_6px_0_0_rgba(59,130,246,0.25)]" : "shadow-[4px_4px_0_0_rgba(255,255,255,0.03)]",
    },
    amber: {
      border: isPopular ? "border-amber-500" : "border-border",
      text: "text-amber-400",
      bg: "bg-amber-500/10",
      badge: "bg-amber-500 text-black border-amber-400",
      cta: "bg-amber-600 hover:bg-amber-500 text-black border-amber-400 shadow-[4px_4px_0_0_rgba(245,158,11,0.4)] hover:shadow-[2px_2px_0_0_rgba(245,158,11,0.4)]",
      glow: isPopular ? "shadow-[6px_6px_0_0_rgba(245,158,11,0.25)]" : "shadow-[4px_4px_0_0_rgba(255,255,255,0.03)]",
    },
    purple: {
      border: isPopular ? "border-purple-500" : "border-border",
      text: "text-purple-400",
      bg: "bg-purple-500/10",
      badge: "bg-purple-500 text-black border-purple-400",
      cta: "bg-purple-600 hover:bg-purple-500 text-black border-purple-400 shadow-[4px_4px_0_0_rgba(168,85,247,0.4)] hover:shadow-[2px_2px_0_0_rgba(168,85,247,0.4)]",
      glow: isPopular ? "shadow-[6px_6px_0_0_rgba(168,85,247,0.25)]" : "shadow-[4px_4px_0_0_rgba(255,255,255,0.03)]",
    },
  };

  const theme = themes[colorTheme] || themes.green;

  return (
    <motion.div
      whileHover={{ y: -4, x: -2 }}
      transition={{ duration: 0.15 }}
      className={`relative w-full bg-card border-4 ${theme.border} p-6 flex flex-col rounded-none ${theme.glow}`}
    >
      
      <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background z-10" />
      <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background z-10" />
      <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background z-10" />
      <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background z-10" />

      
      {(isPopular || badgeLabel) && (
        <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 z-20">
          <span
            className={`px-3 py-1 text-[7px] md:text-[8px] font-bold border-2 rounded-none font-[family-name:var(--font-press-start-2p)] ${theme.badge} flex items-center gap-1 whitespace-nowrap`}
          >
            <Sparkles className="size-2.5" />
            {badgeLabel ?? "TERLARIS"}
          </span>
        </div>
      )}

      
      <div className="mb-4">
        <span
          className={`font-[family-name:var(--font-press-start-2p)] text-[9px] tracking-widest uppercase ${theme.text}`}
        >
          PAKET
        </span>
        <h3 className="font-[family-name:var(--font-press-start-2p)] text-sm md:text-base font-bold text-foreground mt-1 uppercase tracking-wide">
          {tier}
        </h3>
      </div>

      
      <div className={`p-4 ${theme.bg} border-2 ${theme.border} mb-5 rounded-none`}>
        <p className={`font-[family-name:var(--font-press-start-2p)] text-xl md:text-2xl font-bold ${theme.text} leading-tight`}>
          {price}
        </p>
        {priceNote && (
          <span className="text-[8px] font-[family-name:var(--font-press-start-2p)] text-muted-foreground mt-1 block">
            {priceNote}
          </span>
        )}
        <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-sans">
          {description}
        </p>
      </div>

      
      <ul className="flex flex-col gap-2.5 mb-6 flex-1">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-xs">
            <span className="shrink-0 mt-0.5">
              {feature.included ? (
                <Check className="size-3.5 text-green-500" />
              ) : (
                <X className="size-3.5 text-zinc-700" />
              )}
            </span>
            <span className={feature.included ? "text-muted-foreground" : "text-zinc-600 line-through"}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      
      <Link
        href={ctaHref}
        target={ctaHref.startsWith("http") ? "_blank" : undefined}
        rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
        className={`w-full py-3.5 text-center font-[family-name:var(--font-press-start-2p)] text-[9px] md:text-xs font-bold border-2 hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-none ${theme.cta}`}
      >
        {ctaLabel}
      </Link>
    </motion.div>
  );
}
