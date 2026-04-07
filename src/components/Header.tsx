"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="block">
          <Image
            src="/images/logo-sunrise.png"
            alt="BUBBLES"
            width={140}
            height={50}
            className="h-8 sm:h-10 w-auto"
          />
        </a>
        <div className="flex items-center gap-6">
          <a
            href="#about"
            className="text-sm font-semibold text-gray-600 hover:text-periwinkle transition-colors hidden sm:block"
          >
            About
          </a>
          <a
            href="#join-us"
            className="text-sm font-semibold text-gray-600 hover:text-periwinkle transition-colors hidden sm:block"
          >
            Join Us
          </a>
          <a
            href="#find-us"
            className="text-sm font-semibold text-gray-600 hover:text-periwinkle transition-colors hidden sm:block"
          >
            Find Us
          </a>
          <a
            href="#contact"
            className="text-sm font-semibold text-gray-600 hover:text-periwinkle transition-colors hidden sm:block"
          >
            Contact
          </a>
          <a
            href="https://www.instagram.com/bubblesvape/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-periwinkle transition-colors"
            aria-label="Instagram"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}
