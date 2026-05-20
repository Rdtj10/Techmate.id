"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
           style={{
             backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
             backgroundSize: "40px 40px"
           }}
      />
      
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block"
        >
          <span className="px-3 py-1 bg-green-500 text-black text-xs md:text-sm font-bold tracking-widest uppercase rounded-full mb-4 inline-block font-[family-name:var(--font-press-start-2p)]">
            Level 1: Mulai Petualangan Lo!
          </span>
        </motion.div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-[family-name:var(--font-press-start-2p)] text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 leading-tight drop-shadow-lg"
          style={{ textShadow: "4px 4px 0px rgba(0,255,0,0.3)" }}
        >
          TECHMATE
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10"
        >
          Solusi gercep buat segala keribetan teknologi lo. Dari bikin <span className="text-white font-semibold">Software Mobile & Web</span> kece badai, sampai benerin dan rakit <span className="text-white font-semibold">PC/Laptop (Hardware)</span> sekarat. No debat!
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            onClick={() => {
              const element = document.getElementById("services");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-green-600 hover:bg-green-500 text-black font-bold font-[family-name:var(--font-press-start-2p)] text-xs md:text-sm h-14 px-8 rounded-none border-2 border-green-400 shadow-[4px_4px_0_0_rgba(74,222,128,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(74,222,128,0.5)] transition-all cursor-pointer"
          >
            MULAI MABAR
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => {
              const element = document.getElementById("quests");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="h-14 px-8 rounded-none border-2 border-zinc-600 text-zinc-300 font-bold font-[family-name:var(--font-press-start-2p)] text-xs md:text-sm hover:bg-zinc-800 hover:text-white transition-all cursor-pointer"
          >
            CARA MABAR
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

