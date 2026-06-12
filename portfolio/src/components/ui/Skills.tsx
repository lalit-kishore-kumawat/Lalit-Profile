"use client";

import { motion } from "framer-motion";
import { Code2, Database, Terminal } from "lucide-react";

const skillCategories = [
  {
    title: "Data & ML",
    icon: <Database className="w-6 h-6 text-primary" />,
    skills: ["Python", "Pandas", "scikit-learn", "Data Analysis", "Predictive Modeling"],
  },
  {
    title: "Web Development",
    icon: <Code2 className="w-6 h-6 text-secondary" />,
    skills: ["JavaScript", "React", "Next.js", "Tailwind CSS", "HTML/CSS"],
  },
  {
    title: "Core CS",
    icon: <Terminal className="w-6 h-6 text-foreground/80" />,
    skills: ["C Programming", "Data Structures", "Algorithms", "Git/GitHub", "Vercel"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold font-display text-foreground mb-4">Technical Arsenal</h2>
          <div className="h-1 w-12 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-surface/50 border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors group"
            >
              <div className="mb-6 p-3 bg-background inline-block rounded-xl group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold font-display text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-foreground/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
