"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trophy } from "lucide-react";

interface Bug {
  id: number;
  x: number;
  y: number;
  speed: number;
}

interface Bullet {
  id: number;
  x: number;
  y: number;
}

interface EasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

const CANVAS_W = 400;
const CANVAS_H = 300;
const BUG_SIZE = 24;
const BULLET_SIZE = 6;
const SHIP_Y = CANVAS_H - 36;
const SHIP_W = 32;

let nextId = 0;

export default function EasterEgg({ isOpen, onClose }: EasterEggProps) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);

  const shipX = useRef(CANVAS_W / 2);
  const bugs = useRef<Bug[]>([]);
  const bullets = useRef<Bullet[]>([]);
  const keys = useRef<Set<string>>(new Set());
  const rafRef = useRef<number>(0);
  const lastBug = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const scoreRef = useRef(0);
  const livesRef = useRef(3);
  const gameOverRef = useRef(false);

  const startGame = useCallback(() => {
    bugs.current = [];
    bullets.current = [];
    shipX.current = CANVAS_W / 2;
    scoreRef.current = 0;
    livesRef.current = 3;
    gameOverRef.current = false;
    setScore(0);
    setLives(3);
    setGameOver(false);
    setStarted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setStarted(false);
      setGameOver(false);
      setScore(0);
      setLives(3);
      cancelAnimationFrame(rafRef.current);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!started || gameOver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const onKey = (e: KeyboardEvent) => {
      keys.current.add(e.key);
      if (e.key === " " || e.key === "ArrowUp") {
        e.preventDefault();
        bullets.current.push({ id: nextId++, x: shipX.current, y: SHIP_Y - 10 });
      }
    };
    const onKeyUp = (e: KeyboardEvent) => keys.current.delete(e.key);
    window.addEventListener("keydown", onKey);
    window.addEventListener("keyup", onKeyUp);

    let lastTime = 0;
    const loop = (time: number) => {
      if (gameOverRef.current) return;
      const dt = Math.min(time - lastTime, 50);
      lastTime = time;

      if (keys.current.has("ArrowLeft") || keys.current.has("a"))
        shipX.current = Math.max(SHIP_W / 2, shipX.current - 4);
      if (keys.current.has("ArrowRight") || keys.current.has("d"))
        shipX.current = Math.min(CANVAS_W - SHIP_W / 2, shipX.current + 4);

      bullets.current = bullets.current
        .map((b) => ({ ...b, y: b.y - 7 }))
        .filter((b) => b.y > 0);

      if (time - lastBug.current > Math.max(600, 1800 - scoreRef.current * 5)) {
        lastBug.current = time;
        bugs.current.push({
          id: nextId++,
          x: BUG_SIZE + Math.random() * (CANVAS_W - BUG_SIZE * 2),
          y: -BUG_SIZE,
          speed: 1.2 + Math.random() * 1.5 + scoreRef.current * 0.01,
        });
      }

      bugs.current = bugs.current.map((bug) => ({ ...bug, y: bug.y + bug.speed * (dt / 16) }));

      const hitBugs = new Set<number>();
      const hitBullets = new Set<number>();
      bugs.current.forEach((bug) => {
        bullets.current.forEach((bullet) => {
          if (Math.abs(bug.x - bullet.x) < BUG_SIZE && Math.abs(bug.y - bullet.y) < BUG_SIZE) {
            hitBugs.add(bug.id);
            hitBullets.add(bullet.id);
            scoreRef.current += 10;
            setScore(scoreRef.current);
          }
        });
      });
      bugs.current = bugs.current.filter((b) => !hitBugs.has(b.id));
      bullets.current = bullets.current.filter((b) => !hitBullets.has(b.id));

      const escaped = bugs.current.filter((b) => b.y > CANVAS_H + BUG_SIZE);
      if (escaped.length > 0) {
        bugs.current = bugs.current.filter((b) => b.y <= CANVAS_H + BUG_SIZE);
        livesRef.current -= escaped.length;
        setLives(livesRef.current);
        if (livesRef.current <= 0) {
          gameOverRef.current = true;
          setGameOver(true);
          setHighScore((h) => Math.max(h, scoreRef.current));
          return;
        }
      }

      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);
      ctx.fillStyle = "rgba(0,0,0,0)";
      ctx.clearRect(0, 0, CANVAS_W, CANVAS_H);

      ctx.font = `${BUG_SIZE}px serif`;
      ctx.textBaseline = "middle";
      bugs.current.forEach((bug) => {
        ctx.fillText("🐛", bug.x - BUG_SIZE / 2, bug.y);
      });

      ctx.fillStyle = "#4ade80";
      ctx.shadowColor = "rgba(74,222,128,0.8)";
      ctx.shadowBlur = 8;
      ctx.font = "bold 22px monospace";
      ctx.fillText("▲", shipX.current - 10, SHIP_Y);
      ctx.shadowBlur = 0;

      bullets.current.forEach((b) => {
        ctx.fillStyle = "#facc15";
        ctx.shadowColor = "rgba(250,204,21,0.8)";
        ctx.shadowBlur = 6;
        ctx.fillRect(b.x - BULLET_SIZE / 2, b.y, BULLET_SIZE, 12);
        ctx.shadowBlur = 0;
      });

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [started, gameOver]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-background border-4 border-green-500 p-4 relative shadow-[8px_8px_0_0_rgba(34,197,94,0.4)] max-w-[440px] w-full"
          >
            <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background" />
            <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background" />
            <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background" />
            <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background" />

            <div className="flex items-center justify-between mb-3">
              <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-green-400">🎮 BASMI BUG!</p>
              <div className="flex items-center gap-4">
                <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-foreground">SCORE: {score}</span>
                <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-amber-400">HI: {highScore}</span>
                <span className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-red-400">{"❤".repeat(Math.max(0, lives))}</span>
                <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <X className="size-4" />
                </button>
              </div>
            </div>

            <div className="relative border-2 border-border bg-black" style={{ width: CANVAS_W, height: CANVAS_H, maxWidth: "100%" }}>
              <canvas ref={canvasRef} width={CANVAS_W} height={CANVAS_H} className="block w-full h-full" style={{ imageRendering: "pixelated" }} />

              {!started && !gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 gap-4">
                  <p className="font-[family-name:var(--font-press-start-2p)] text-[9px] text-green-400 text-center">BASMI SEMUA BUG!</p>
                  <p className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-muted-foreground text-center">← → atau A D: gerak<br />SPACE / ↑: tembak</p>
                  <button onClick={startGame} className="px-4 py-2 bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[8px] font-bold border-2 border-green-400 cursor-pointer hover:bg-green-400 transition-colors">
                    MULAI GAME
                  </button>
                </div>
              )}

              {gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 gap-4">
                  <Trophy className="size-10 text-amber-400" />
                  <p className="font-[family-name:var(--font-press-start-2p)] text-[10px] text-red-400">GAME OVER</p>
                  <p className="font-[family-name:var(--font-press-start-2p)] text-[8px] text-foreground">SCORE: {score}</p>
                  {score === highScore && score > 0 && <p className="font-[family-name:var(--font-press-start-2p)] text-[7px] text-amber-400 animate-pulse">🏆 NEW HIGH SCORE!</p>}
                  <button onClick={startGame} className="px-4 py-2 bg-green-500 text-black font-[family-name:var(--font-press-start-2p)] text-[8px] font-bold border-2 border-green-400 cursor-pointer hover:bg-green-400 transition-colors">
                    MAIN LAGI
                  </button>
                </div>
              )}
            </div>

            <p className="font-[family-name:var(--font-press-start-2p)] text-[6px] text-muted-foreground/40 mt-2 text-center">
              🥚 EASTER EGG — KLIK LOGO TECHMATE 5X UNTUK BUKA
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
