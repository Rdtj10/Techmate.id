"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ArcadeBackground from "@/components/ArcadeBackground";
import type { BlogPost } from "../types";
import { ArrowLeft, Clock, CalendarDays, User } from "lucide-react";
import { blogPosts } from "@/data/blog";

const categoryConfig: Record<string, { label: string; color: string }> = {
  software: { label: "⚗ SOFTWARE", color: "text-green-400" },
  hardware: { label: "🛡 HARDWARE", color: "text-blue-400" },
  konsultasi: { label: "🔥 KONSULTASI IT", color: "text-amber-400" },
};

function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={key++} className="font-[family-name:var(--font-press-start-2p)] text-sm md:text-base text-foreground mt-8 mb-3 leading-relaxed">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={key++} className="font-[family-name:var(--font-press-start-2p)] text-xs text-green-400 mt-6 mb-2 leading-relaxed">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("```")) {
      const lang = line.replace("```", "").trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={key++} className="bg-background border-2 border-border p-4 overflow-x-auto my-4 text-xs font-mono text-green-400">
          <code data-lang={lang}>{codeLines.join("\n")}</code>
        </pre>
      );
    } else if (line.startsWith("- **")) {
      elements.push(
        <li key={key++} className="text-sm text-muted-foreground leading-relaxed ml-4 list-disc">
          <span dangerouslySetInnerHTML={{ __html: line.replace(/^- /, "").replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        </li>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(
        <li key={key++} className="text-sm text-muted-foreground leading-relaxed ml-4 list-disc">
          {line.replace(/^[-*] /, "")}
        </li>
      );
    } else if (line.match(/^\d+\. /)) {
      elements.push(
        <li key={key++} className="text-sm text-muted-foreground leading-relaxed ml-4 list-decimal">
          <span dangerouslySetInnerHTML={{ __html: line.replace(/^\d+\. /, "").replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />
        </li>
      );
    } else if (line.trim() !== "") {
      elements.push(
        <p key={key++} className="text-sm text-muted-foreground leading-relaxed my-2">
          <span dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>').replace(/`(.+?)`/g, '<code class="bg-background border border-border px-1 py-0.5 text-green-400 font-mono text-xs">$1</code>') }} />
        </p>
      );
    }
    i++;
  }

  return elements;
}

export default function BlogDetailClient({ post }: { post: BlogPost }) {
  const catCfg = categoryConfig[post.category];
  const related = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-500 overflow-x-hidden">
      <ArcadeBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <div className={`w-full h-48 md:h-64 bg-gradient-to-br ${post.coverGradient} flex items-center justify-center relative overflow-hidden pt-16`}>
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
          <motion.span initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="text-7xl md:text-8xl drop-shadow-2xl">{post.coverIcon}</motion.span>
        </div>

        <div className="container mx-auto max-w-3xl px-4 py-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-green-400 transition-colors mb-6 font-[family-name:var(--font-press-start-2p)] text-[8px]">
              <ArrowLeft className="size-3" /> KEMBALI KE BLOG
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`font-[family-name:var(--font-press-start-2p)] text-[8px] ${catCfg.color}`}>{catCfg.label}</span>
              <span className="flex items-center gap-1 text-[8px] text-muted-foreground/60"><Clock className="size-2.5" />{post.readTime}</span>
              <span className="flex items-center gap-1 text-[8px] text-muted-foreground/60"><CalendarDays className="size-2.5" />{new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}</span>
              <span className="flex items-center gap-1 text-[8px] text-muted-foreground/60"><User className="size-2.5" />{post.author}</span>
            </div>

            <h1 className="font-[family-name:var(--font-press-start-2p)] text-lg md:text-2xl text-foreground leading-relaxed mb-6">
              {post.title}
            </h1>

            <p className="text-base text-muted-foreground leading-relaxed mb-8 border-l-4 border-green-500 pl-4 bg-green-500/5 py-3 pr-3">
              {post.excerpt}
            </p>

            <div className="prose-custom">{renderContent(post.content)}</div>

            <div className="mt-12 p-6 bg-card/80 border-2 border-green-500/40 text-center relative">
              <div className="absolute top-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute top-[-2px] right-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] left-[-2px] w-2 h-2 bg-background" />
              <div className="absolute bottom-[-2px] right-[-2px] w-2 h-2 bg-background" />
              <p className="font-[family-name:var(--font-press-start-2p)] text-xs text-green-400 mb-2">⚔ BUTUH BANTUAN IMPLEMENTASI?</p>
              <p className="text-sm text-muted-foreground mb-4">Squad Techmate siap bantu wujudkan solusi teknologi lo!</p>
              <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold border-2 border-green-400 transition-all rounded-none">
                KONSULTASI GRATIS →
              </a>
            </div>

            {related.length > 0 && (
              <div className="mt-10">
                <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-muted-foreground mb-4">ARTIKEL TERKAIT:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {related.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                      <div className={`h-16 bg-gradient-to-br ${p.coverGradient} flex items-center justify-center text-2xl mb-2 relative overflow-hidden`}>
                        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "15px 15px" }} />
                        <span>{p.coverIcon}</span>
                      </div>
                      <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-foreground group-hover:text-green-400 transition-colors leading-relaxed line-clamp-2">{p.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>

        <footer className="w-full py-10 px-4 bg-card/80 backdrop-blur-sm border-t border-border text-center font-[family-name:var(--font-press-start-2p)] text-[8px] text-muted-foreground">
          <p>© {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </main>
  );
}
