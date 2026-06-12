"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-surface/50 border border-border backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-foreground/80 font-medium">B.Tech CSE (AIML) Student</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight text-balance">
            Hi, I'm <span className="text-gradient">Lalit Kishore Kumawat</span>
          </h1>

          <p className="text-xl text-foreground/70 max-w-2xl leading-relaxed text-balance">
            Builder of practical tools for students, passionate about diving deep into AI/ML and crafting modern web experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="#studenthub"
              className="group flex items-center gap-2 bg-primary text-background px-6 py-3 rounded-lg font-medium transition-all hover:bg-primary-hover hover:scale-105"
            >
              View StudentHub
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link
              href="https://github.com/lalit-kishore-kumawat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-surface hover:bg-surface-hover border border-border text-foreground px-6 py-3 rounded-lg font-medium transition-all"
            >
              <Terminal className="w-4 h-4" />
              GitHub
            </Link>

            <Link
              href="mailto:lalitkishorek7@gmail.com"
              className="flex items-center gap-2 bg-transparent hover:bg-surface text-foreground px-6 py-3 rounded-lg font-medium transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
