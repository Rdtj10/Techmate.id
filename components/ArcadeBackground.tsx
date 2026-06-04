"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  twinkleSpeed: number;
  twinkleOffset: number;
}

interface FloatingEntity {
  x: number;
  y: number;
  vy: number;
  vx: number;
  char: string;
  color: string;
  glowColor: string;
  size: number;
  opacity: number;
  floatOffset: number;
  floatSpeed: number;
}

function useIsDark() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

const DARK_PARTICLE_COLORS = [
  "rgba(74,222,128,",
  "rgba(52,211,153,",
  "rgba(167,243,208,",
  "rgba(134,239,172,",
  "rgba(255,255,255,",
];
const LIGHT_PARTICLE_COLORS = [
  "rgba(20,120,60,",
  "rgba(16,100,80,",
  "rgba(30,150,90,",
  "rgba(60,160,110,",
  "rgba(100,100,100,",
];

const ARCADE_CHARS = [
  "★",
  "♦",
  "♥",
  "⬛",
  "▲",
  "●",
  "◆",
  "▶",
  "✦",
  "⚡",
  "🎮",
  "⚔️",
  "🏆",
  "🛡️",
  "💎",
  "🔥",
];

const ENTITY_COLORS_DARK = [
  { color: "#4ade80", glow: "rgba(74,222,128,0.5)" },
  { color: "#facc15", glow: "rgba(250,204,21,0.5)" },
  { color: "#60a5fa", glow: "rgba(96,165,250,0.5)" },
  { color: "#f472b6", glow: "rgba(244,114,182,0.5)" },
  { color: "#a78bfa", glow: "rgba(167,139,250,0.5)" },
  { color: "#34d399", glow: "rgba(52,211,153,0.5)" },
];

const ENTITY_COLORS_LIGHT = [
  { color: "#166534", glow: "rgba(22,101,52,0.4)" },
  { color: "#92400e", glow: "rgba(146,64,14,0.4)" },
  { color: "#1e40af", glow: "rgba(30,64,175,0.4)" },
  { color: "#9d174d", glow: "rgba(157,23,77,0.4)" },
  { color: "#6d28d9", glow: "rgba(109,40,217,0.4)" },
  { color: "#065f46", glow: "rgba(6,95,70,0.4)" },
];

function createParticles(
  count: number,
  width: number,
  height: number,
  isDark: boolean
): Particle[] {
  const colors = isDark ? DARK_PARTICLE_COLORS : LIGHT_PARTICLE_COLORS;
  return Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.15,
    vy: -Math.random() * 0.3 - 0.05,
    size: Math.random() < 0.5 ? 2 : Math.random() < 0.8 ? 3 : 4,
    opacity: isDark ? 0.55 + Math.random() * 0.45 : 0.35 + Math.random() * 0.45,
    color: colors[Math.floor(Math.random() * colors.length)],
    twinkleSpeed: 0.015 + Math.random() * 0.03,
    twinkleOffset: Math.random() * Math.PI * 2,
  }));
}

function createEntities(
  count: number,
  width: number,
  height: number,
  isDark: boolean
): FloatingEntity[] {
  const palette = isDark ? ENTITY_COLORS_DARK : ENTITY_COLORS_LIGHT;
  return Array.from({ length: count }, (_, i) => {
    const colorSet = palette[i % palette.length];
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.15,
      char: ARCADE_CHARS[Math.floor(Math.random() * ARCADE_CHARS.length)],
      color: colorSet.color,
      glowColor: colorSet.glow,
      size: 20 + Math.floor(Math.random() * 18),
      opacity: isDark ? 0.55 + Math.random() * 0.35 : 0.35 + Math.random() * 0.3,
      floatOffset: Math.random() * Math.PI * 2,
      floatSpeed: 0.008 + Math.random() * 0.012,
    };
  });
}

export default function ArcadeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const entitiesRef = useRef<FloatingEntity[]>([]);
  const animFrameRef = useRef<number>(0);
  const timeRef = useRef(0);
  const isDark = useIsDark();
  const isDarkRef = useRef(isDark);
  const scrollYRef = useRef(0);

  useEffect(() => {
    isDarkRef.current = isDark;
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      scrollYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particlesRef.current = createParticles(
        120,
        width,
        height,
        isDarkRef.current
      );
      entitiesRef.current = createEntities(18, width, height, isDarkRef.current);
    };

    resize();
    window.addEventListener("resize", resize);

    const drawGrid = (scrollY: number, dark: boolean) => {
      const gridColor = dark
        ? "rgba(74,222,128,0.18)"
        : "rgba(20,100,50,0.12)";
      const gridSize = 52;
      const offsetY = ((-scrollY * 0.06) % gridSize) - gridSize;

      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;
      ctx.shadowColor = dark ? "rgba(74,222,128,0.25)" : "rgba(20,100,50,0.15)";
      ctx.shadowBlur = dark ? 4 : 2;
      ctx.beginPath();

      for (let x = 0; x <= width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
      }
      for (let y = offsetY; y <= height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;
    };

    const drawScanlines = (dark: boolean) => {
      const alpha = dark ? 0.025 : 0.018;
      for (let y = 0; y < height; y += 3) {
        ctx.fillStyle = `rgba(0,0,0,${alpha})`;
        ctx.fillRect(0, y, width, 1);
      }
    };

    const drawVignette = (dark: boolean) => {
      const outerAlpha = dark ? 0.28 : 0.12;
      const gradient = ctx.createRadialGradient(
        width / 2,
        height / 2,
        height * 0.4,
        width / 2,
        height / 2,
        height * 0.9
      );
      gradient.addColorStop(0, "rgba(0,0,0,0)");
      gradient.addColorStop(1, `rgba(0,0,0,${outerAlpha})`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGlow = (dark: boolean) => {
      if (!dark) return;
      const gx = ctx.createRadialGradient(
        width / 2,
        height * 0.3,
        0,
        width / 2,
        height * 0.3,
        width * 0.7
      );
      gx.addColorStop(0, "rgba(74,222,128,0.12)");
      gx.addColorStop(0.4, "rgba(52,211,153,0.055)");
      gx.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gx;
      ctx.fillRect(0, 0, width, height);
    };

    const tick = () => {
      timeRef.current += 1;
      const t = timeRef.current;
      const dark = isDarkRef.current;
      const scrollY = scrollYRef.current;

      ctx.clearRect(0, 0, width, height);

      drawGrid(scrollY, dark);
      drawGlow(dark);

      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -4) p.y = height + 4;
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;

        const twinkle =
          0.5 + 0.5 * Math.sin(t * p.twinkleSpeed + p.twinkleOffset);
        const alpha = Math.min(1, p.opacity * (0.6 + 0.4 * twinkle));

        ctx.fillStyle = `${p.color}${alpha.toFixed(3)})`;
        ctx.fillRect(
          Math.round(p.x),
          Math.round(p.y),
          p.size,
          p.size
        );
      }

      const entities = entitiesRef.current;
      ctx.save();
      for (let i = 0; i < entities.length; i++) {
        const e = entities[i];

        const floatY = Math.sin(t * e.floatSpeed + e.floatOffset) * 8;
        const floatX = Math.cos(t * e.floatSpeed * 0.7 + e.floatOffset) * 4;

        e.x += e.vx;
        e.y += e.vy;
        if (e.x < -60) e.x = width + 60;
        if (e.x > width + 60) e.x = -60;
        if (e.y < -60) e.y = height + 60;
        if (e.y > height + 60) e.y = -60;

        const pulse = 0.75 + 0.25 * Math.sin(t * e.floatSpeed * 1.4 + e.floatOffset);
        const alpha = Math.min(1, e.opacity * pulse);

        ctx.globalAlpha = alpha;
        ctx.shadowColor = e.glowColor;
        ctx.shadowBlur = 28;
        ctx.fillStyle = e.color;
        ctx.font = `bold ${e.size}px monospace`;
        ctx.textBaseline = "middle";
        ctx.fillText(e.char, e.x + floatX, e.y + floatY);
        ctx.shadowBlur = 18;
        ctx.fillText(e.char, e.x + floatX, e.y + floatY);
      }
      ctx.restore();

      drawScanlines(dark);
      drawVignette(dark);

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const width = canvas.width;
    const height = canvas.height;
    if (width === 0 || height === 0) return;
    particlesRef.current = createParticles(120, width, height, isDark);
    entitiesRef.current = createEntities(18, width, height, isDark);
  }, [isDark]);

  return (
    <div
      className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-background transition-colors duration-500"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ imageRendering: "pixelated" }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(74,222,128,0.18) 0%, rgba(52,211,153,0.06) 50%, transparent 75%)"
            : "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(20,100,50,0.1) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isDark
            ? "linear-gradient(to bottom, transparent 65%, rgba(0,0,0,0.35) 100%)"
            : "linear-gradient(to bottom, transparent 65%, rgba(240,240,235,0.4) 100%)",
        }}
      />
    </div>
  );
}
