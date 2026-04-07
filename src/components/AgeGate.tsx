"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AgeGate() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleYes() {
    setVisible(false);
  }

  function handleNo() {
    window.location.href = "https://www.google.com";
  }

  if (!mounted || !visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-periwinkle">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-soft-coral via-periwinkle to-soft-jade" />
      {/* Lots of floating bubbles — mostly large, a few small */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top area */}
        <div className="bubble-3d absolute top-[0%] left-[0%] w-48 h-48 animate-float" />
        <div className="bubble-3d absolute top-[3%] left-[20%] w-14 h-14 animate-float-delayed" />
        <div className="bubble-3d absolute top-[1%] left-[35%] w-40 h-40 animate-float-slow" />
        <div className="bubble-3d absolute top-[5%] left-[55%] w-10 h-10 animate-float" />
        <div className="bubble-3d absolute top-[0%] left-[65%] w-52 h-52 animate-float-delayed" />
        <div className="bubble-3d absolute top-[4%] left-[90%] w-44 h-44 animate-float-slow" />

        {/* Upper-mid */}
        <div className="bubble-3d absolute top-[18%] left-[5%] w-56 h-56 animate-float" />
        <div className="bubble-3d absolute top-[22%] left-[30%] w-12 h-12 animate-float-delayed" />
        <div className="bubble-3d absolute top-[15%] left-[50%] w-36 h-36 animate-float-slow" />
        <div className="bubble-3d absolute top-[20%] left-[75%] w-48 h-48 animate-float" />

        {/* Mid — keep clear for text but add edges */}
        <div className="bubble-3d absolute top-[35%] left-[-3%] w-44 h-44 animate-float-delayed" />
        <div className="bubble-3d absolute top-[40%] left-[85%] w-52 h-52 animate-float-slow" />
        <div className="bubble-3d absolute top-[38%] left-[25%] w-10 h-10 animate-float" />
        <div className="bubble-3d absolute top-[42%] left-[70%] w-14 h-14 animate-float-delayed" />

        {/* Lower-mid */}
        <div className="bubble-3d absolute top-[58%] left-[0%] w-48 h-48 animate-float" />
        <div className="bubble-3d absolute top-[55%] left-[25%] w-12 h-12 animate-float-slow" />
        <div className="bubble-3d absolute top-[60%] left-[45%] w-40 h-40 animate-float-delayed" />
        <div className="bubble-3d absolute top-[56%] left-[75%] w-56 h-56 animate-float" />

        {/* Bottom */}
        <div className="bubble-3d absolute top-[75%] left-[8%] w-52 h-52 animate-float-slow" />
        <div className="bubble-3d absolute top-[78%] left-[35%] w-14 h-14 animate-float" />
        <div className="bubble-3d absolute top-[72%] left-[55%] w-44 h-44 animate-float-delayed" />
        <div className="bubble-3d absolute top-[80%] left-[82%] w-48 h-48 animate-float-slow" />

        {/* Very bottom */}
        <div className="bubble-3d absolute top-[90%] left-[0%] w-40 h-40 animate-float" />
        <div className="bubble-3d absolute top-[92%] left-[30%] w-10 h-10 animate-float-delayed" />
        <div className="bubble-3d absolute top-[88%] left-[50%] w-52 h-52 animate-float-slow" />
        <div className="bubble-3d absolute top-[91%] left-[80%] w-44 h-44 animate-float" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <Image
          src="/images/logo-cream.png"
          alt="BUBBLES"
          width={400}
          height={140}
          className="w-[200px] sm:w-[300px] md:w-[380px] h-auto drop-shadow-lg mb-8"
          priority
        />
        <h2 className="font-[family-name:var(--font-display)] text-3xl sm:text-4xl md:text-5xl font-bold text-ivory mb-10">
          Are you 21 or older?
        </h2>
        <div className="flex gap-5 sm:gap-8">
          <button
            onClick={handleYes}
            className="px-10 sm:px-12 py-4 sm:py-5 bg-jade text-white font-bold text-xl sm:text-2xl rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            Yes
          </button>
          <button
            onClick={handleNo}
            className="px-10 sm:px-12 py-4 sm:py-5 bg-coral text-white font-bold text-xl sm:text-2xl rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200 cursor-pointer"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
