"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Github, ExternalLink, Zap } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#090a0f]/80 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-2xl shadow-purple-950/20"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 flex items-center justify-center p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
            <div className="w-full h-full bg-[#090a0f] rounded-[11px] flex items-center justify-center">
              <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <span className="font-heading font-extrabold text-xl tracking-tight text-white">
            ykmhblty<span className="text-purple-400">.</span>
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-white transition-colors">
            Architecture
          </a>
          <a href="#typography" className="hover:text-white transition-colors">
            Typography
          </a>
          <a href="#playground" className="hover:text-white transition-colors">
            Motion Lab
          </a>
          <a href="#deployment" className="hover:text-white transition-colors">
            Vercel Ready
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/ankurmoran-aero/ykmhblty"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono text-slate-300 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group overflow-hidden rounded-lg p-[1px] font-semibold text-xs transition-transform active:scale-95"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 group-hover:opacity-100 transition-opacity" />
            <div className="relative px-3.5 py-1.5 rounded-[7px] bg-[#090a0f] group-hover:bg-[#090a0f]/80 transition-colors flex items-center gap-1.5 text-white">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Deploy to Vercel</span>
              <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
