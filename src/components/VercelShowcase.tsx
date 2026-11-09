"use client";

import React, { useState } from "react";
import { Terminal, Check, Copy, ExternalLink, Shield, Zap, Sparkles, Server } from "lucide-react";

export function VercelShowcase() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const commands = [
    { label: "Clone repository", cmd: "git clone https://github.com/ankurmoran-aero/ykmhblty.git" },
    { label: "Install packages", cmd: "cd ykmhblty && npm install" },
    { label: "Run locally", cmd: "npm run dev" },
    { label: "Deploy to Vercel", cmd: "npx vercel deploy --prod" },
  ];

  const handleCopy = (cmd: string, index: number) => {
    navigator.clipboard.writeText(cmd);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="deployment" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase font-semibold">
            Seamless Production Workflow
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white mt-2 mb-4 tracking-tight">
            Vercel Deployment Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-body">
            Pre-configured with <span className="font-mono text-cyan-400">vercel.json</span>, edge-ready caching rules, and production security headers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Terminal / Code instructions */}
          <div className="lg:col-span-7 rounded-2xl glass-panel-glow border border-white/[0.1] overflow-hidden shadow-2xl">
            {/* Terminal Window Header */}
            <div className="bg-[#12141d] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 font-mono text-xs text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  ykmhblty ~ vercel-workflow
                </span>
              </div>
              <span className="font-mono text-[10px] text-slate-500">bash / zsh</span>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-6 space-y-4 font-mono text-xs">
              {commands.map((item, index) => (
                <div key={index} className="group">
                  <div className="text-[11px] text-slate-500 mb-1"># {item.label}</div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/50 border border-white/[0.05] group-hover:border-white/[0.12] transition-colors">
                    <span className="text-slate-200 select-all overflow-x-auto whitespace-nowrap">
                      <span className="text-cyan-400 mr-2">$</span>
                      {item.cmd}
                    </span>
                    <button
                      onClick={() => handleCopy(item.cmd, index)}
                      className="ml-3 p-1.5 rounded-md hover:bg-white/[0.08] text-slate-400 hover:text-white transition-colors shrink-0"
                      title="Copy command"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vercel configuration card & features */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl glass-panel p-6 border border-white/[0.08]">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white font-black text-sm">
                  ▲
                </div>
                <div>
                  <h3 className="font-heading font-bold text-white text-base">vercel.json Highlights</h3>
                  <p className="text-xs text-slate-400">Production ready configuration</p>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2.5">
                  <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Strict Security Headers:</strong> Includes X-Frame-Options, X-Content-Type-Options, and Referrer-Policy.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Static Asset Immutability:</strong> 1-year max-age caching for fonts and static artifacts.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Server className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-white">Clean URL Mapping:</strong> Automatic trailing slash sanitization and canonical route handling.
                  </span>
                </li>
              </ul>

              {/* Direct Deploy CTA */}
              <div className="mt-6 pt-5 border-t border-white/[0.08]">
                <a
                  href={`https://vercel.com/new/clone?repository-url=https://github.com/ankurmoran-aero/ykmhblty`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-black font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-98"
                >
                  <span className="text-sm">▲</span>
                  <span>Deploy to Vercel (1-Click)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
