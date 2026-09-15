"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-[72px] flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-semibold tracking-tight text-paper">
          ajith<span className="text-indigo">.</span>kumar
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-fog hover:text-paper transition-colors underline-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="text-sm font-medium px-4 py-2 rounded-full bg-paper text-ink hover:bg-indigo hover:text-paper transition-colors"
        >
          Let&rsquo;s talk
        </a>
      </div>
    </header>
  );
}
