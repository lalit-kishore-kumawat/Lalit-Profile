"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold font-display text-foreground mb-12">Education</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-surface border border-border p-8 rounded-3xl max-w-2xl mx-auto relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
          
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-background rounded-full">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground">REVA University, Bengaluru</h3>
            
            <div className="text-lg text-foreground/80 font-medium">
              B.Tech in Computer Science and Engineering
              <span className="block mt-1 text-primary">Specialization in AI & ML</span>
            </div>
            
            <div className="flex items-center gap-2 text-foreground/60 mt-4 bg-background px-4 py-2 rounded-full text-sm font-mono">
              <Calendar className="w-4 h-4" />
              2025 – 2029
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
