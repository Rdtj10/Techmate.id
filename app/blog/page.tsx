"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import ArcadeBackground from "@/components/ArcadeBackground";
import { blogPosts } from "@/data/blog";
import type { BlogPost } from "./types";
import { Clock, CalendarDays, Search, Tag } from "lucide-react";

type Category = "all" | BlogPost["category"];

const categoryConfig: Record<string, { label: string; color: string }> = {
  all: { label: "SEMUA", color: "text-foreground" },
  software: { label: "⚗ SOFTWARE", color: "text-green-400" },
  hardware: { label: "🛡 HARDWARE", color: "text-blue-400" },
  konsultasi: { label: "🔥 KONSULTASI IT", color: "text-amber-400" },
};

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/blog/${post.slug}`} className="group block h-full">
        <motion.article
          whileHover={{ y: -4, x: -2 }}
          transition={{ duration: 0.15 }}
          className="h-full bg-card border-2 border-border hover:border-green-500/60 shadow-[4px_4px_0_0_rgba(0,0,0,0.05)] hover:shadow-[6px_6px_0_0_rgba(34,197,94,0.2)] transition-all duration-200 flex flex-col relative overflow-hidden"
        >
          <div className="absolute top-[-2px] left-[-2px] w-1.5 h-1.5 bg-background z-10" />
          <div className="absolute top-[-2px] right-[-2px] w-1.5 h-1.5 bg-background z-10" />
          <div className="absolute bottom-[-2px] left-[-2px] w-1.5 h-1.5 bg-background z-10" />
          <div className="absolute bottom-[-2px] right-[-2px] w-1.5 h-1.5 bg-background z-10" />

          <div className={`h-28 bg-linear-to-br ${post.coverGradient} flex items-center justify-center text-5xl relative overflow-hidden`}>
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            <span className="relative z-10 drop-shadow-lg">{post.coverIcon}</span>
          </div>

          <div className="p-4 flex flex-col flex-1 gap-2">
            <div className="flex items-center justify-between gap-2">
              <span className={`font-(family-name:--font-press-start-2p) text-[7px] ${categoryConfig[post.category].color}`}>
                {categoryConfig[post.category].label}
              </span>
              <span className="flex items-center gap-1 text-[8px] text-muted-foreground/60">
                <Clock className="size-2.5" />{post.readTime}
              </span>
            </div>

            <h2 className="font-(family-name:--font-press-start-2p) text-[10px] md:text-xs text-foreground leading-relaxed group-hover:text-green-400 transition-colors line-clamp-2">
              {post.title}
            </h2>

            <p className="text-xs text-muted-foreground leading-relaxed flex-1 line-clamp-3">{post.excerpt}</p>

            <div className="flex items-center justify-between pt-2 border-t border-border mt-auto">
              <span className="flex items-center gap-1 text-[8px] text-muted-foreground/60">
                <CalendarDays className="size-2.5" />
                {new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })}
              </span>
              <span className="font-(family-name:--font-press-start-2p) text-[8px] text-green-400 opacity-60 group-hover:opacity-100 transition-opacity">
                BACA →
              </span>
            </div>
          </div>
        </motion.article>
      </Link>
    </motion.div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [search, setSearch] = useState("");

  const filtered = blogPosts.filter((p) => {
    const matchCat = activeCategory === "all" || p.category === activeCategory;
    const matchSearch = search === "" || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <main className="flex min-h-screen flex-col bg-background transition-colors duration-500 overflow-x-hidden">
      <ArcadeBackground />
      <div className="relative z-10 flex flex-col flex-1">
        <section className="w-full pt-28 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col items-center text-center mb-12">
              <span className="px-3 py-1 bg-card border-2 border-border text-muted-foreground text-[10px] font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-(family-name:--font-press-start-2p)">
                TECHMATE — PATCH NOTES
              </span>
              <h1 className="text-3xl md:text-5xl font-bold font-(family-name:--font-press-start-2p) leading-tight text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600 mb-6 uppercase">
                BLOG & TIPS IT
              </h1>
              <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
                Tips, tutorial, dan insight seputar dunia teknologi dari squad Techmate. Update mingguan, gratis, dan gak ada paywall!
              </p>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-3 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/50" />
                <input
                  type="text"
                  placeholder="Cari artikel..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-card border-2 border-border font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-green-500 focus:outline-none rounded-none transition-colors"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {(Object.keys(categoryConfig) as Category[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`flex items-center gap-1.5 px-3 py-2 font-(family-name:--font-press-start-2p) text-[8px] border-2 rounded-none transition-all cursor-pointer ${activeCategory === cat ? "bg-green-500 text-black border-green-400" : "bg-card text-muted-foreground border-border hover:border-green-500/50"}`}
                  >
                    <Tag className="size-2.5" />{categoryConfig[cat].label}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div key={activeCategory + search} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {filtered.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)}
                  </div>
                ) : (
                  <div className="text-center py-20 text-muted-foreground">
                    <p className="font-(family-name:--font-press-start-2p) text-xs">Tidak ada artikel yang cocok...</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
        <footer className="w-full py-10 px-4 bg-card/80 backdrop-blur-sm border-t border-border text-center font-(family-name:--font-press-start-2p) text-[8px] text-muted-foreground">
          <p>© {new Date().getFullYear()} TECHMATE. ALL RIGHTS RESERVED.</p>
        </footer>
      </div>
    </main>
  );
}
