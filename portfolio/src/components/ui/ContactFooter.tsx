"use client";

import { motion } from "framer-motion";
import { Terminal, Briefcase, Mail, Globe } from "lucide-react";

export default function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-12 px-6 border-t border-border/50 bg-surface/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold font-display text-foreground mb-4">Let's Connect</h2>
            <p className="text-foreground/70 mb-8 max-w-sm">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <div className="flex gap-4">
              <a href="mailto:lalitkishorek7@gmail.com" className="p-3 bg-surface hover:bg-primary hover:text-background border border-border rounded-xl transition-all">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/lalit-kishorekumawat-27a34a352" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface hover:bg-[#0077b5] hover:text-white border border-border rounded-xl transition-all">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="https://github.com/lalit-kishore-kumawat" target="_blank" rel="noopener noreferrer" className="p-3 bg-surface hover:bg-white hover:text-black border border-border rounded-xl transition-all">
                <Terminal className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-6 md:justify-self-end">
            <div>
              <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-primary" />
                Languages
              </h3>
              <ul className="space-y-2 text-foreground/70">
                <li className="flex justify-between w-48">
                  <span>Hindi</span>
                  <span className="text-primary font-medium">Native</span>
                </li>
                <li className="flex justify-between w-48">
                  <span>English</span>
                  <span className="text-primary font-medium">Fluent</span>
                </li>
                <li className="flex justify-between w-48">
                  <span>Kannada</span>
                  <span className="text-foreground/50">Basic</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border/50 text-center text-foreground/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Lalit Kishore Kumawat. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
