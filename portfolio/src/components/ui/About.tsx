"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-border/50 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
        >
          <div>
            <h2 className="text-3xl font-bold font-display text-foreground">About Me</h2>
            <div className="h-1 w-12 bg-primary mt-4 rounded-full" />
          </div>

          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              I am a tech and AI enthusiast currently studying Data Science and C programming. 
              My passion lies in bridging the gap between complex algorithms and practical utility.
            </p>
            <p>
              While I spend a lot of time diving into <span className="text-primary font-medium">Python, Pandas, and scikit-learn</span>, 
              what truly drives me is building tools that solve real problems. I believe that technology should empower, 
              which is why I focus on crafting practical applications that help other students navigate their academic journeys.
            </p>
            <p>
              Whether it's analyzing datasets to predict college cutoffs or writing clean, efficient code, 
              I approach every project with a builder's mindset and a researcher's curiosity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
