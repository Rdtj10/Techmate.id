"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  // Define dimensions based on size prop
  const sizeClasses = {
    sm: {
      box: "w-12 h-12",
      image: 44,
    },
    md: {
      box: "w-16 h-16",
      image: 60,
    },
    lg: {
      box: "w-20 h-20",
      image: 76,
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`relative flex items-center justify-center select-none ${currentSize.box} ${className}`}>
      <Image
        src="/asset/techmate-logo.png"
        alt="Techmate Logo"
        width={currentSize.image}
        height={currentSize.image}
        className="object-contain transition-all duration-300 group-hover:scale-110 filter drop-shadow-[0_0_6px_rgba(74,222,128,0.25)]"
        priority
      />
    </div>
  );
}
