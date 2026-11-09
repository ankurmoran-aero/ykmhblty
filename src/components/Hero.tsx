"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, Flame, Compass } from "lucide-react";
import confetti from "canvas-confetti";

export function Hero() {
  const triggerCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#00F5FF", "#A855F7", "#EC4899", "#3B82F6"],
    });
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Gradients & Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[130px]" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-cyan-500/25 rounded-full blur-[130px]" />
        <div className="absolute top-48 left-1/2 -translate-x-1/2 w-[600px] h-72 bg-indigo-500/20 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] backdrop-blur-md mb-8 hover:border-cyan-500/40 transition-colors"
          >
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-mono text-cyan-300 tracking-wider uppercase font-semibold">
              Next.js 14 + Framer Motion + Vercel
            </span>
            <span className="text-slate-400 text-xs">/</span>
            <span className="text-xs text-slate-300">Ready for Global Edge</span>
          </motion.div>

          {/* Headline with Exclusive Font */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6"
          >
            Smooth transitions meet{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              exclusive typography
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-base sm:text-xl text-slate-300/90 leading-relaxed max-w-2xl mx-auto mb-10 font-normal"
          >
            Crafted with TypeScript, Syne display fonts, and fluid physics-based gestures. Pre-configured with zero-friction Vercel Edge deployment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-16"
          >
            <button
              onClick={triggerCelebration}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-600 to-purple-600 hover:from-cyan-400 hover:via-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/20 hover:shadow-cyan-500/35 active:scale-95 transition-all flex items-center gap-2.5 group"
            >
              <Sparkles className="w-4 h-4 text-cyan-200" />
              <span>Experience Motion</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#playground"
              className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.09] border border-white/[0.1] text-slate-200 hover:text-white font-semibold text-sm backdrop-blur-md active:scale-95 transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 text-slate-400" />
              <span>Interactive Lab</span>
            </a>
          </motion.div>

          {/* Feature Badges list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-left max-w-3xl mx-auto"
          >
            {[
              { label: "Vercel Optimized", desc: "Edge ready preset", icon: ShieldCheck, color: "text-emerald-400" },
              { label: "Syne & Jakarta", desc: "Zero layout shift", icon: Compass, color: "text-cyan-400" },
              { label: "Framer Motion", desc: "60 FPS GPU physics", icon: Flame, color: "text-purple-400" },
              { label: "Type Safe", desc: "100% Strict TypeScript", icon: CheckCircle2, color: "text-pink-400" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.12] transition-colors"
              >
                <item.icon className={`w-4 h-4 ${item.color} mb-2`} />
                <h4 className="text-xs font-semibold text-white tracking-wide">{item.label}</h4>
                <p className="text-[11px] text-slate-400">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
