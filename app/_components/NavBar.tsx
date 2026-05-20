"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Swords, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  {
    label: "LAYANAN",
    href: "#",
    children: [
      { label: "⚗ Suhu Software", href: "/layanan/suhu-software", color: "text-green-400" },
      { label: "🛡 Ksatria Hardware", href: "/layanan/ksatria-hardware", color: "text-blue-400" },
      { label: "🔥 Suhu Curhat IT", href: "/layanan/suhu-curhat-it", color: "text-amber-400" },
    ],
  },
  { label: "SQUAD", href: "/squad" },
  { label: "KONTAK", href: "https://wa.me/628123456789", external: true },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    const timer = setTimeout(() => {
      setMobileOpen(false);
      setDropdownOpen(false);
    }, 0);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b-2 border-zinc-800 shadow-[0_4px_0_0_rgba(255,255,255,0.03)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-green-500/10 border-2 border-green-500 flex items-center justify-center">
              <Swords className="size-4 text-green-400" />
            </div>
            <span className="font-[family-name:var(--font-press-start-2p)] text-[10px] md:text-xs text-white group-hover:text-green-400 transition-colors tracking-wider">
              TECHMATE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                    className="flex items-center gap-1 px-3 py-2 font-[family-name:var(--font-press-start-2p)] text-[9px] text-zinc-400 hover:text-green-400 transition-colors tracking-wider uppercase"
                  >
                    {link.label}
                    <ChevronDown className={`size-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                        className="absolute top-full left-0 min-w-[200px] bg-black border-2 border-zinc-800 shadow-[4px_4px_0_0_rgba(255,255,255,0.05)] py-1"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`flex items-center px-4 py-3 font-[family-name:var(--font-press-start-2p)] text-[8px] ${child.color} hover:bg-zinc-900 transition-colors tracking-wider`}
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
                  className={`px-3 py-2 font-[family-name:var(--font-press-start-2p)] text-[9px] tracking-wider uppercase transition-colors ${
                    pathname === link.href
                      ? "text-green-400"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* CTA */}
            <Link
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold border-2 border-green-400 shadow-[2px_2px_0_0_rgba(74,222,128,0.4)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0_0_rgba(74,222,128,0.4)] transition-all"
            >
              MABAR KUY!
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black border-b-2 border-zinc-800 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 font-[family-name:var(--font-press-start-2p)] text-[8px] text-zinc-600 tracking-wider uppercase">
                      {link.label}
                    </p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`flex items-center pl-6 pr-3 py-2.5 font-[family-name:var(--font-press-start-2p)] text-[8px] ${child.color} hover:bg-zinc-900 transition-colors tracking-wider`}
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
                    className="px-3 py-2.5 font-[family-name:var(--font-press-start-2p)] text-[9px] text-zinc-400 hover:text-white tracking-wider uppercase transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Link
                href="https://wa.me/628123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-green-600 hover:bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[9px] font-bold border-2 border-green-400 text-center transition-all"
              >
                MABAR KUY!
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
