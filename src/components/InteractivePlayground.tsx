"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Sliders, RotateCcw, Activity, MousePointerClick, Heart, Star, Sparkles } from "lucide-react";

export function InteractivePlayground() {
  const [stiffness, setStiffness] = useState(260);
  const [damping, setDamping] = useState(20);
  const [isToggled, setIsToggled] = useState(false);
  const [liked, setLiked] = useState(false);

  // 3D Tilt Card interactive values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <section id="playground" className="py-20 relative bg-black/30 border-y border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase mb-3">
            <Sliders className="w-3.5 h-3.5" />
            Motion & Transition Lab
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Feel the Smooth Physics
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-body mt-3">
            Interact with reactive spring curves and 3D gyroscope transforms powered by Framer Motion.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-5 rounded-2xl glass-panel p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-heading font-bold text-white text-base">Physics Parameters</span>
              <button
                onClick={() => {
                  setStiffness(260);
                  setDamping(20);
                }}
                className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Stiffness Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-300">Stiffness (Spring Tension)</span>
                <span className="text-cyan-400 font-semibold">{stiffness}</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                value={stiffness}
                onChange={(e) => setStiffness(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            {/* Damping Slider */}
            <div>
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-300">Damping (Friction / Smoothness)</span>
                <span className="text-purple-400 font-semibold">{damping}</span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                value={damping}
                onChange={(e) => setDamping(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
            </div>

            {/* Toggle Switch */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Dynamic Morph Switch</p>
                <p className="text-xs text-slate-400">Click to preview custom spring transition</p>
              </div>
              <button
                onClick={() => setIsToggled(!isToggled)}
                className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 flex items-center ${
                  isToggled ? "bg-gradient-to-r from-cyan-500 to-purple-600" : "bg-slate-800"
                }`}
              >
                <motion.div
                  className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center"
                  animate={{ x: isToggled ? 24 : 0 }}
                  transition={{ type: "spring", stiffness, damping }}
                >
                  <Sparkles className="w-3 h-3 text-purple-600" />
                </motion.div>
              </button>
            </div>
          </div>

          {/* Interactive Card Canvas */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center">
            <div style={{ perspective: 1000 }} className="w-full max-w-md">
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY }}
                animate={{ scale: isToggled ? 1.03 : 1 }}
                transition={{ type: "spring", stiffness, damping }}
                className="rounded-3xl glass-panel-glow p-8 cursor-grab active:cursor-grabbing border border-white/[0.12] shadow-2xl relative overflow-hidden group select-none"
              >
                {/* Glowing light badge */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-purple-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/25 transition-all duration-500" />

                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/[0.06] text-cyan-300 border border-white/[0.08]">
                    Interactive 3D Surface
                  </span>
                  <button
                    onClick={() => setLiked(!liked)}
                    className="p-2 rounded-full hover:bg-white/[0.08] transition-colors"
                  >
                    <Heart
                      className={`w-5 h-5 transition-colors ${
                        liked ? "text-rose-500 fill-rose-500 scale-110" : "text-slate-400"
                      }`}
                    />
                  </button>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-white mb-2">
                  Tactile Spring Dynamics
                </h3>

                <p className="font-body text-slate-300 text-sm leading-relaxed mb-6">
                  Move your cursor over this card to witness continuous 3D tilt tracking. Toggle the switch to trigger spring physics governed by your exact parameters.
                </p>

                {/* Animated progress / state display */}
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2 font-mono text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Transition Curve:</span>
                    <span className="text-cyan-400">type: &apos;spring&apos;</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Spring Config:</span>
                    <span className="text-purple-300">
                      &#123; stiffness: {stiffness}, damping: {damping} &#125;
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Active State:</span>
                    <span className={isToggled ? "text-emerald-400" : "text-slate-400"}>
                      {isToggled ? "ACTIVE_STATE" : "DEFAULT_STATE"}
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <MousePointerClick className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
                    <span>Hover & tilt card</span>
                  </div>
                  <span className="font-mono text-[11px] text-purple-400">Framer Motion 11</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
