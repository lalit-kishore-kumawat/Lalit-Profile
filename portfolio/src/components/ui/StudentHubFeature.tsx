"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Database, LayoutTemplate, Activity } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function StudentHubFeature() {
  const [mockRank, setMockRank] = useState(45000);
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setMockRank((prev) => (prev > 10000 ? prev - Math.floor(Math.random() * 5000) : 85000));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsCalculating(true);
    setResult(null);
    const timer = setTimeout(() => {
      setIsCalculating(false);
      setResult(mockRank < 30000 ? 92 : mockRank < 60000 ? 65 : 24);
    }, 800);
    return () => clearTimeout(timer);
  }, [mockRank]);

  return (
    <section id="studenthub" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-surface/30 skew-y-[-2deg] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold font-display text-foreground mb-4">Featured Project</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A practical tool built to solve a real problem for Karnataka engineering aspirants.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold font-display text-primary mb-2">StudentHub</h3>
              <p className="text-xl text-foreground/80">KCET College Predictor & Cutoff Engine</p>
            </div>

            <p className="text-foreground/70 leading-relaxed text-lg">
              A free, probability-based predictor engine utilizing 2024 & 2025 KEA cutoff data. 
              It features detailed college profiles and SGPA calculation tools to help students make informed decisions about their academic future.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-border">
                <Database className="w-5 h-5 text-secondary mt-1" />
                <div>
                  <h4 className="font-medium">Data-Driven</h4>
                  <p className="text-sm text-foreground/60">Built on historical KEA cutoffs</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-surface p-4 rounded-xl border border-border">
                <Activity className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Probability Engine</h4>
                  <p className="text-sm text-foreground/60">Algorithmic admission chances</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <Link
                href="https://studenthub-live.vercel.app" // Placeholder, to be updated
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-primary hover:bg-primary-hover text-background px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Project
              </Link>
              <Link
                href="https://github.com/lalit-kishore-kumawat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-transparent hover:bg-surface border border-border text-foreground px-6 py-3 rounded-lg font-medium transition-colors"
              >
                <Github className="w-4 h-4" />
                Repository
              </Link>
            </div>
          </motion.div>

          {/* Right: Mock UI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl -z-10 rounded-full" />
            
            <div className="bg-surface/80 backdrop-blur-md border border-border rounded-2xl overflow-hidden shadow-2xl">
              {/* Mock Browser Header */}
              <div className="bg-surface border-b border-border p-4 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 flex-1 bg-background/50 rounded text-xs text-center py-1 text-foreground/50 font-mono">
                  studenthub.in/predictor
                </div>
              </div>

              {/* Mock Content */}
              <div className="p-8 space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-foreground/70">Estimated KCET Rank</span>
                    <span className="font-mono text-primary font-bold">{mockRank.toLocaleString()}</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary"
                      animate={{ width: `${(100000 - mockRank) / 1000}%` }}
                      transition={{ type: "spring", stiffness: 50 }}
                    />
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6 border border-border/50">
                  <h4 className="text-sm font-medium text-foreground/70 mb-4 uppercase tracking-wider">Prediction Engine Output</h4>
                  
                  {isCalculating ? (
                    <div className="flex items-center gap-3 text-primary">
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span className="text-sm animate-pulse">Running ML model against 2024 cutoffs...</span>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-2xl font-bold font-display text-foreground">Top College Match</span>
                        <span className={`text-xl font-bold ${result && result > 80 ? 'text-green-400' : result && result > 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {result}% Match
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 w-full bg-surface rounded" />
                        <div className="h-2 w-2/3 bg-surface rounded" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
