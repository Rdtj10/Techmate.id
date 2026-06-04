"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swords, Sparkles, AlertTriangle } from "lucide-react";

export default function BossSection() {
  const [bossHp, setBossHp] = useState(10000);
  const maxHp = 10000;
  const [isShaking, setIsShaking] = useState(false);
  const [damageFloater, setDamageFloater] = useState<{ id: number; x: number; y: number; amount: number }[]>([]);

  const handleAttack = () => {
    if (bossHp <= 0) return;

    
    const isCrit = Math.random() > 0.6;
    const baseDmg = 800;
    const dmg = isCrit ? Math.floor(baseDmg * 2.2) : baseDmg;

    
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 200);

    
    setBossHp((prev) => Math.max(0, prev - dmg));

    
    const newFloater = {
      id: Date.now(),
      x: Math.random() * 120 - 60, 
      y: Math.random() * 40 - 20,
      amount: dmg,
    };
    setDamageFloater((prev) => [...prev, newFloater]);

    
    setTimeout(() => {
      setDamageFloater((prev) => prev.filter((f) => f.id !== newFloater.id));
    }, 800);
  };

  const resetBoss = () => {
    setBossHp(maxHp);
  };

  const hpPercentage = (bossHp / maxHp) * 100;

  return (
    <section className="relative w-full py-24 px-4 bg-background/70 backdrop-blur-sm text-foreground overflow-hidden border-t border-border flex items-center justify-center transition-colors duration-300">
      
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.15)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        
        
        <div className="flex flex-col items-center mb-8">
          <span className="px-3 py-1 bg-red-600 border-2 border-red-500 text-black text-[10px] md:text-xs font-bold tracking-widest uppercase rounded-none mb-4 inline-block font-[family-name:var(--font-press-start-2p)] animate-pulse flex items-center gap-2">
            <AlertTriangle className="size-3.5" />
            PERINGATAN: BOS BESAR MASALAH TIBA
          </span>
        </div>

        
        <motion.div
          animate={isShaking ? { x: [-10, 10, -10, 10, 0], y: [-5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-xl mx-auto bg-card border-4 border-red-600 p-6 md:p-8 rounded-none mb-12 shadow-[8px_8px_0_0_rgba(220,38,38,0.2)] transition-colors duration-300"
        >
          
          <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background z-10" />
          <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background z-10" />
          <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background z-10" />
          <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background z-10" />

          
          <div className="flex flex-col items-center justify-center mb-6 min-h-[140px] relative">
            <AnimatePresence>
              {bossHp > 0 ? (
                <motion.div
                  key="alive-boss"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5, rotate: 45 }}
                  className="flex flex-col items-center"
                >
                  
                  <AlertTriangle className="size-20 text-red-500 animate-bounce mb-3 filter drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]" />
                  <h3 className="font-[family-name:var(--font-press-start-2p)] text-sm md:text-base text-red-500 font-bold tracking-wider">
                    BOS BUG & EROR SISTEM
                  </h3>
                  <span className="text-[9px] font-[family-name:var(--font-press-start-2p)] text-muted-foreground mt-1">
                    STATUS: NGAMUK (BIKIN PUSING)
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key="dead-boss"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center"
                >
                  <Sparkles className="size-20 text-yellow-400 animate-spin mb-3 filter drop-shadow-[0_0_20px_rgba(234,179,8,0.8)]" />
                  <h3 className="font-[family-name:var(--font-press-start-2p)] text-base text-yellow-400 font-bold tracking-wider animate-pulse">
                    MENANG TOTAL!
                  </h3>
                  <span className="text-[9px] font-[family-name:var(--font-press-start-2p)] text-muted-foreground mt-1 animate-pulse">
                    BUG MOKAD, SISTEM AMAN!
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            
            <AnimatePresence>
              {damageFloater.map((floater) => (
                <motion.div
                  key={floater.id}
                  initial={{ opacity: 1, y: 0, scale: 1.5 }}
                  animate={{ opacity: 0, y: -80, scale: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ left: `calc(50% + ${floater.x}px)`, top: `calc(50% + ${floater.y}px)` }}
                  className="absolute font-[family-name:var(--font-press-start-2p)] text-sm md:text-lg font-black text-yellow-400 pointer-events-none select-none tracking-widest filter drop-shadow-[2px_2px_0px_#000]"
                >
                  -{floater.amount}!
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          
          <div className="w-full">
            <div className="flex justify-between items-center text-[8px] font-[family-name:var(--font-press-start-2p)] text-muted-foreground mb-2">
              <span>HP: {bossHp} / {maxHp}</span>
              <span className="text-red-500 font-bold">{Math.ceil(hpPercentage)}%</span>
            </div>
            
            
            <div className="w-full h-6 bg-background border-4 border-border p-0.5 flex rounded-none overflow-hidden relative transition-colors duration-300">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: `${hpPercentage}%` }}
                transition={{ duration: 0.1 }}
                className={`h-full rounded-none ${
                  hpPercentage > 50
                    ? "bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]"
                    : hpPercentage > 20
                    ? "bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"
                    : "bg-red-500 animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.8)]"
                }`}
              />
            </div>
          </div>

          
          {bossHp > 0 ? (
            <button
              onClick={handleAttack}
              className="mt-6 w-full py-3.5 bg-red-600 hover:bg-red-500 text-black font-[family-name:var(--font-press-start-2p)] text-xs md:text-sm font-bold border-2 border-red-400 shadow-[4px_4px_0_0_rgba(239,68,68,0.4)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_rgba(239,68,68,0.4)] transition-all flex items-center justify-center gap-2 select-none cursor-pointer"
            >
              <Swords className="size-4" />
              HAJAR BARENG TECHMATE!
            </button>
          ) : (
            <button
              onClick={resetBoss}
              className="mt-6 w-full py-3 bg-zinc-800 hover:bg-zinc-700 text-foreground font-[family-name:var(--font-press-start-2p)] text-[9px] md:text-xs font-bold border-2 border-border shadow-[4px_4px_0_0_rgba(255,255,255,0.05)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_0_rgba(255,255,255,0.05)] transition-all cursor-pointer"
            >
              PANGGIL BUG BARU (MAIN LAGI)
            </button>
          )}
        </motion.div>

        
        <h2 className="text-3xl md:text-5xl font-bold font-[family-name:var(--font-press-start-2p)] leading-tight text-foreground mb-6 uppercase">
          SIAP MABAR BARENG KAMI?
        </h2>
        
        <p className="max-w-2xl mx-auto text-sm md:text-base text-muted-foreground mb-10 leading-relaxed">
          Masalah eror web, laptop lemot, atau server down itu kayak Bos Besar di akhir game. Jangan dilawan sendirian! Panggil squad Techmate biar kita mabar bantai bosnya!
        </p>

        
        <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
          <a
            href="https://wa.me/628123456789" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 bg-green-600 hover:bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-xs md:text-sm font-bold border-2 border-green-400 shadow-[4px_4px_0_0_rgba(74,222,128,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgba(74,222,128,0.5)] transition-all select-none"
          >
            MABAR KUY! (HUBUNGI KAMI)
          </a>
          <button
            onClick={() => {
              if (bossHp > 0) {
                
                setBossHp(0);
              } else {
                resetBoss();
              }
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center h-14 px-8 border-2 border-border hover:bg-zinc-100 dark:hover:bg-zinc-800 text-foreground font-[family-name:var(--font-press-start-2p)] text-xs md:text-sm font-bold transition-all select-none cursor-pointer"
          >
            {bossHp > 0 ? "KILAT MATI" : "PANGGIL LAGI"}
          </button>
        </div>
      </div>
    </section>
  );
}
