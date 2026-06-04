"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";
import dynamic from "next/dynamic";

import Logo from "./Logo";

const EasterEgg = dynamic(() => import("./EasterEgg"), { ssr: false });

const navLinks = [
  { label: "HOME", href: "/" },
  {
    label: "LAYANAN",
    href: "#",
    children: [
      {
        label: "⚗ Suhu Software",
        href: "/layanan/suhu-software",
        color: "text-green-400",
      },
      {
        label: "🛡 Ksatria Hardware",
        href: "/layanan/ksatria-hardware",
        color: "text-blue-400",
      },
      {
        label: "🔥 Suhu Curhat IT",
        href: "/layanan/suhu-curhat-it",
        color: "text-amber-400",
      },
    ],
  },
  { label: "SQUAD", href: "/squad" },
  { label: "PORTOFOLIO", href: "/portofolio" },
  {
    label: "MORE",
    href: "#",
    children: [
      { label: "💰 Harga & Paket", href: "/harga", color: "text-green-400" },
      {
        label: "🧮 Kalkulator Harga",
        href: "/kalkulator",
        color: "text-blue-400",
      },
      { label: "📝 Blog & Tips", href: "/blog", color: "text-purple-400" },
      { label: "ℹ Tentang Kami", href: "/tentang", color: "text-amber-400" },
    ],
  },
  { label: "KONTAK", href: "https://wa.me/628123456789", external: true },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [easterOpen, setEasterOpen] = useState(false);
  const logoClickCount = useRef(0);
  const logoClickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTimeout(() => setTheme(isDark ? "dark" : "light"), 0);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false);
      setOpenDropdown(null);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  const handleLogoClick = () => {
    logoClickCount.current += 1;
    if (logoClickTimer.current) clearTimeout(logoClickTimer.current);
    logoClickTimer.current = setTimeout(() => {
      logoClickCount.current = 0;
    }, 1500);
    if (logoClickCount.current >= 5) {
      logoClickCount.current = 0;
      setEasterOpen(true);
    }
  };

  return (
    <>
      <EasterEgg isOpen={easterOpen} onClose={() => setEasterOpen(false)} />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b-2 border-border shadow-[0_4px_0_0_rgba(0,0,0,0.03)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-2 group cursor-pointer bg-transparent border-none p-0"
            >
              <Logo size="sm" />
              <span className="font-(family-name:--font-press-start-2p) text-[10px] md:text-xs text-foreground group-hover:text-green-400 transition-colors tracking-wider">
                TECHMATE
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button className="flex items-center gap-1 px-3 py-2 font-(family-name:--font-press-start-2p) text-[9px] text-zinc-400 hover:text-green-400 transition-colors tracking-wider uppercase cursor-pointer">
                      {link.label}
                      <ChevronDown
                        className={`size-3 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    <AnimatePresence>
                      {openDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 min-w-[210px] bg-card border-2 border-border shadow-[4px_4px_0_0_rgba(0,0,0,0.05)] py-1 z-50"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`flex items-center px-4 py-3 font-(family-name:--font-press-start-2p) text-[8px] ${child.color} hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors tracking-wider`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className={`px-3 py-2 font-(family-name:--font-press-start-2p) text-[9px] tracking-wider uppercase transition-colors ${
                      pathname === link.href
                        ? "text-green-400"
                        : "text-zinc-400 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                ),
              )}

              <Link
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-black font-(family-name:--font-press-start-2p) text-[9px] font-bold border-2 border-green-400 shadow-[2px_2px_0_0_rgba(74,222,128,0.4)] hover:translate-x-px hover:translate-y-px hover:shadow-[1px_1px_0_0_rgba(74,222,128,0.4)] transition-all"
              >
                MABAR KUY!
              </Link>
              <button
                onClick={toggleTheme}
                className="ml-2 p-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-foreground border-2 border-border cursor-pointer transition-all flex items-center justify-center rounded-none shadow-[2px_2px_0_0_rgba(0,0,0,0.15)] dark:shadow-[2px_2px_0_0_rgba(255,255,255,0.05)]"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="size-3.5 text-yellow-400 animate-pulse" />
                ) : (
                  <Moon className="size-3.5 text-indigo-600" />
                )}
              </button>
            </nav>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-card border-b-2 border-border overflow-hidden"
            >
              <nav className="flex flex-col px-4 py-4 gap-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <p className="px-3 py-2 font-(family-name:--font-press-start-2p) text-[8px] text-zinc-600 tracking-wider uppercase">
                        {link.label}
                      </p>
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`flex items-center pl-6 pr-3 py-2.5 font-(family-name:--font-press-start-2p) text-[8px] ${child.color} hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors tracking-wider`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="px-3 py-2.5 font-(family-name:--font-press-start-2p) text-[9px] text-zinc-400 hover:text-foreground tracking-wider uppercase transition-colors"
                    >
                      {link.label}
                    </Link>
                  ),
                )}
                <Link
                  href="https://wa.me/628123456789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 px-4 py-3 bg-green-600 hover:bg-green-500 text-black font-(family-name:--font-press-start-2p) text-[9px] font-bold border-2 border-green-400 text-center transition-all"
                >
                  MABAR KUY!
                </Link>
                <button
                  onClick={toggleTheme}
                  className="mt-2 px-4 py-3 border-2 border-border bg-card text-foreground font-(family-name:--font-press-start-2p) text-[9px] font-bold text-center flex items-center justify-center gap-2 transition-all cursor-pointer rounded-none"
                >
                  {theme === "dark" ? (
                    <>
                      <Sun className="size-3.5 text-yellow-400 animate-pulse" />
                      <span>LIGHT MODE</span>
                    </>
                  ) : (
                    <>
                      <Moon className="size-3.5 text-indigo-600" />
                      <span>DARK MODE</span>
                    </>
                  )}
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
