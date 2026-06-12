"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4 shadow-sm" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-display font-bold text-xl tracking-tight text-foreground">
          LK<span className="text-primary">.</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-foreground/80">
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="#studenthub" className="hover:text-primary transition-colors">Project</Link>
          <Link href="#skills" className="hover:text-primary transition-colors">Skills</Link>
          <Link href="#education" className="hover:text-primary transition-colors">Education</Link>
        </div>

        <Link
          href="#contact"
          className="text-sm font-medium bg-surface hover:bg-surface-hover border border-border px-4 py-2 rounded-full transition-all"
        >
          Contact Me
        </Link>
      </div>
    </motion.nav>
  );
}
