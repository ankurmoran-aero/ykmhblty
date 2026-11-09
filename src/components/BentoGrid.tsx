"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Type,
  Layers,
  Sparkles,
  Cpu,
  Zap,
  Globe2,
  Code2,
  Palette,
  Check,
  Copy,
} from "lucide-react";

export function BentoGrid() {
  const [activeTab, setActiveTab] = useState<"syne" | "jakarta" | "mono">("syne");
  const [copied, setCopied] = useState(false);

  const copyFontSnippet = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">
            Architectural Excellence
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mt-2 mb-4 tracking-tight">
            Formatted Layout & Craftsmanship
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-body">
            Every element is structured for visual harmony, optimal contrast, and frictionless responsive adaptability.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card 1: Exclusive Font System (2 cols) */}
          <div
            id="typography"
            className="md:col-span-2 lg:col-span-2 rounded-2xl glass-panel-glow p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Type className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400">
                    Exclusive Typography Suite
                  </span>
                </div>

                {/* Font Switcher Tabs */}
                <div className="flex items-center bg-black/40 p-1 rounded-lg border border-white/[0.08]">
                  {(["syne", "jakarta", "mono"] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-2.5 py-1 text-xs rounded-md font-mono transition-all capitalize ${
                        activeTab === tab
                          ? "bg-purple-600 text-white font-semibold shadow"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Font Preview Container */}
              <div className="my-6 min-h-[140px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeTab === "syne" && (
                    <motion.div
                      key="syne"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                        Syne Geometric Display
                      </h3>
                      <p className="font-heading text-sm text-purple-300 mt-2 font-medium">
                        Designed for high-impact visual statements, headlines, and luxury brand interfaces.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "jakarta" && (
                    <motion.div
                      key="jakarta"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-body font-semibold text-2xl sm:text-3xl text-white">
                        Plus Jakarta Sans (Body)
                      </h3>
                      <p className="font-body text-sm text-slate-300 mt-2 leading-relaxed">
                        A modern geometric sans-serif engineered for clean legibility, effortless reading, and high information density.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "mono" && (
                    <motion.div
                      key="mono"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="font-mono font-medium text-xl sm:text-2xl text-emerald-400">
                        JetBrains Mono (Accents & Code)
                      </h3>
                      <p className="font-mono text-xs text-slate-400 mt-2">
                        const precision = "Zero layout shift with next/font/google";
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Quick copy snippet */}
            <div className="relative z-10 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs text-slate-400">
              <span className="font-mono text-[11px]">import &#123; Syne, Plus_Jakarta_Sans &#125; from &apos;next/font/google&apos;;</span>
              <button
                onClick={() => copyFontSnippet(`import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";`)}
                className="hover:text-white p-1 rounded hover:bg-white/[0.05] transition-colors"
                title="Copy snippet"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Card 2: GPU Smooth Transitions (1 col) */}
          <div className="rounded-2xl glass-panel p-6 flex flex-col justify-between hover:border-purple-500/30 transition-all group">
            <div>
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Framer Motion Physics
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Natural springs, continuous drag interactions, and fluid micro-transitions tuned for tactile responsiveness.
              </p>
            </div>

            <div className="mt-6 flex items-center gap-2 pt-4 border-t border-white/[0.06]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-slate-300">GPU Accelerated (60 FPS)</span>
            </div>
          </div>

          {/* Card 3: Vercel Global Edge (1 col) */}
          <div className="rounded-2xl glass-panel p-6 flex flex-col justify-between hover:border-cyan-500/30 transition-all group">
            <div>
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <Globe2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Global Edge CDN
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Deployed across 300+ Edge locations globally with automated caching, stale-while-revalidate, and smart compression.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-cyan-400">vercel.json configured</span>
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
            </div>
          </div>

          {/* Card 4: Strict TypeScript (1 col) */}
          <div className="rounded-2xl glass-panel p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all group">
            <div>
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
                <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                TypeScript Robustness
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Strict type safety, zero `any` assertions, and modular component architectures.
              </p>
            </div>

            <div className="mt-6 font-mono text-xs text-blue-300 pt-4 border-t border-white/[0.06]">
              100% Type Checked
            </div>
          </div>

          {/* Card 5: Tailored Aesthetics & Dark Glass (3 cols) */}
          <div className="md:col-span-2 lg:col-span-3 rounded-2xl glass-panel p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-purple-500/30 transition-all">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-3">
                <Palette className="w-4 h-4 text-purple-400" />
                <span className="text-xs font-mono uppercase tracking-wider text-purple-400">
                  Formatted Layout & Color Harmonies
                </span>
              </div>
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-white mb-2">
                Subtle Glows, Border Highlights & Depth
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Carefully calibrated background-clip gradients, backdrop blurs, and responsive padding provide visual depth that stays crisp on any screen density.
              </p>
            </div>

            {/* Visual Color Pill preview */}
            <div className="flex sm:flex-col gap-2 shrink-0">
              <div className="px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" /> Cyan #00F5FF
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-400" /> Purple #A855F7
              </div>
              <div className="px-3.5 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-mono flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-pink-400" /> Rose #EC4899
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
