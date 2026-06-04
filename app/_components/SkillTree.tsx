"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { useState } from "react";

export interface SkillNode {
  id: string;
  name: string;
  level: string;
  description: string;
  iconName: string; 
  status: "locked" | "unlocked" | "maxed";
}

export interface SkillPath {
  title: string;
  description: string;
  skills: SkillNode[];
}

interface SkillTreeProps {
  paths: SkillPath[];
  colorTheme?: "green" | "blue" | "amber" | "purple";
}

export default function SkillTree({ paths, colorTheme = "green" }: SkillTreeProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const themes = {
    green: {
      border: "border-green-500",
      borderLocked: "border-border",
      borderMaxed: "border-green-400",
      text: "text-green-400",
      textLocked: "text-zinc-600",
      bgMaxed: "bg-green-950/30",
      bgUnlocked: "bg-background",
      bgLocked: "bg-card/20",
      line: "bg-green-500/30",
      lineActive: "bg-green-400",
      glow: "shadow-[0_0_15px_rgba(34,197,94,0.3)]",
    },
    blue: {
      border: "border-blue-500",
      borderLocked: "border-border",
      borderMaxed: "border-blue-400",
      text: "text-blue-400",
      textLocked: "text-zinc-600",
      bgMaxed: "bg-blue-950/30",
      bgUnlocked: "bg-background",
      bgLocked: "bg-card/20",
      line: "bg-blue-500/30",
      lineActive: "bg-blue-400",
      glow: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
    },
    amber: {
      border: "border-amber-500",
      borderLocked: "border-border",
      borderMaxed: "border-amber-400",
      text: "text-amber-400",
      textLocked: "text-zinc-600",
      bgMaxed: "bg-amber-950/30",
      bgUnlocked: "bg-background",
      bgLocked: "bg-card/20",
      line: "bg-amber-500/30",
      lineActive: "bg-amber-400",
      glow: "shadow-[0_0_15px_rgba(245,158,11,0.3)]",
    },
    purple: {
      border: "border-purple-500",
      borderLocked: "border-border",
      borderMaxed: "border-purple-400",
      text: "text-purple-400",
      textLocked: "text-zinc-600",
      bgMaxed: "bg-purple-950/30",
      bgUnlocked: "bg-background",
      bgLocked: "bg-card/20",
      line: "bg-purple-500/30",
      lineActive: "bg-purple-400",
      glow: "shadow-[0_0_15px_rgba(168,85,247,0.3)]",
    },
  };

  const theme = themes[colorTheme] || themes.green;

  return (
    <div className="w-full">
      
      <div className="flex justify-center gap-6 mb-8 text-[8px] md:text-[9px] font-[family-name:var(--font-press-start-2p)] tracking-wider text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-card border-2 border-border" />
          <span>LOCKED</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 bg-background border-2 ${theme.border}`} />
          <span>ACTIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <div className={`w-3 h-3 ${theme.bgMaxed} border-2 ${theme.borderMaxed} ${theme.glow}`} />
          <span className={theme.text}>MAX LEVEL</span>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {paths.map((path, pathIdx) => (
          <div key={pathIdx} className="flex flex-col items-center">
            
            <div className="text-center mb-6 w-full py-2 bg-zinc-900/50 border border-border px-4">
              <h4 className={`font-[family-name:var(--font-press-start-2p)] text-[9px] md:text-[10px] uppercase font-bold tracking-wider ${theme.text}`}>
                {path.title}
              </h4>
              <p className="text-[11px] text-muted-foreground mt-1 font-sans">
                {path.description}
              </p>
            </div>

            
            <div className="flex flex-col items-center gap-8 w-full relative">
              {path.skills.map((skill, skillIdx) => {
                const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[skill.iconName] || Icons.HelpCircle;
                const isLocked = skill.status === "locked";
                const isMaxed = skill.status === "maxed";
                const isHovered = hoveredSkill === skill.id;

                
                const nodeBorder = isLocked ? theme.borderLocked : isMaxed ? theme.borderMaxed : theme.border;
                const nodeText = isLocked ? theme.textLocked : isMaxed ? theme.text : "text-foreground";
                const nodeBg = isLocked ? theme.bgLocked : isMaxed ? theme.bgMaxed : theme.bgUnlocked;
                const glowClass = isMaxed ? theme.glow : "";

                return (
                  <div key={skill.id} className="relative flex flex-col items-center w-full z-10">
                    
                    {skillIdx < path.skills.length - 1 && (
                      <div className="absolute top-[68px] bottom-[-36px] w-[4px] left-1/2 -translate-x-1/2 z-0">
                        
                        <div className={`w-full h-full ${path.skills[skillIdx + 1].status !== "locked" ? theme.lineActive : theme.line}`} />
                      </div>
                    )}

                    
                    <div className="relative group cursor-pointer w-48">
                      <motion.div
                        whileHover={!isLocked ? { scale: 1.05 } : {}}
                        onMouseEnter={() => !isLocked && setHoveredSkill(skill.id)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`w-full p-4 border-4 ${nodeBorder} ${nodeBg} ${glowClass} transition-all duration-200 flex flex-col items-center text-center relative`}
                      >
                        
                        <div className="absolute top-[-4px] left-[-4px] w-2 h-2 bg-background z-20" />
                        <div className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-background z-20" />
                        <div className="absolute bottom-[-4px] left-[-4px] w-2 h-2 bg-background z-20" />
                        <div className="absolute bottom-[-4px] right-[-4px] w-2 h-2 bg-background z-20" />

                        
                        <div className={`mb-2 p-2 border-2 ${isLocked ? "border-border" : isMaxed ? theme.borderMaxed : theme.border} bg-background`}>
                          <IconComponent className={`size-6 ${isLocked ? "text-zinc-700" : isMaxed ? theme.text : theme.text}`} />
                        </div>

                        
                        <span className={`font-[family-name:var(--font-press-start-2p)] text-[8px] md:text-[9px] block leading-tight ${nodeText} tracking-wider font-bold mb-1 min-h-[16px]`}>
                          {skill.name}
                        </span>

                        
                        <span className={`font-[family-name:var(--font-press-start-2p)] text-[7px] block tracking-widest ${isLocked ? "text-zinc-700" : isMaxed ? theme.text : "text-muted-foreground"}`}>
                          {skill.level}
                        </span>
                      </motion.div>

                      
                      {isHovered && (
                        <div className="absolute bottom-[105%] left-1/2 -translate-x-1/2 w-64 bg-card border-2 border-border p-3 shadow-xl z-50 text-left">
                          
                          <div className="absolute top-[-2px] left-[-2px] w-1 h-1 bg-background z-30" />
                          <div className="absolute top-[-2px] right-[-2px] w-1 h-1 bg-background z-30" />
                          <div className="absolute bottom-[-2px] left-[-2px] w-1 h-1 bg-background z-30" />
                          <div className="absolute bottom-[-2px] right-[-2px] w-1 h-1 bg-background z-30" />
                          
                          <p className={`font-[family-name:var(--font-press-start-2p)] text-[8px] ${theme.text} mb-1.5 uppercase font-bold tracking-wider`}>
                            {skill.name}
                          </p>
                          <p className="text-xs text-muted-foreground font-sans leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
