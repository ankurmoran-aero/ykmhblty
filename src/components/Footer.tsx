import React from "react";
import { Zap, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#07080c] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center p-[1px]">
              <div className="w-full h-full bg-[#07080c] rounded-[7px] flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
            <span className="font-heading font-bold text-white text-base">ykmhblty</span>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 font-body">Crafted for smoothness & typography</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ankurmoran-aero/ykmhblty"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Vercel
            </a>
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Next.js 14
            </a>
          </div>

          <div className="font-mono text-[11px] text-slate-500 flex items-center gap-1">
            <span>Built with precision</span>
            <span className="text-slate-600">•</span>
            <span>Edge Ready</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
