import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, TrendingUp, DollarSign, Layers } from "lucide-react";

export default function VentureModal({ venture, onClose, onEnquire }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  if (!venture) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 overflow-y-auto hide-scrollbar shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs text-orange-500 font-mono tracking-widest uppercase">Strategic Venture</span>
            <span className="text-stone-600">•</span>
            <span className="text-xs text-stone-400 font-medium">{venture.subtext}</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-stone-400 hover:text-white hover:border-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Header & Thesis Banner */}
        <div className="p-6 md:p-8 border-b border-white/10 bg-stone-950">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h2 className="text-2xl md:text-4xl font-display text-white mb-2">{venture.title}</h2>
              <p className="text-stone-400 text-sm font-light leading-relaxed">{venture.description}</p>
            </div>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
            <div className="p-3 bg-stone-900/60 border border-white/5">
              <span className="text-[10px] uppercase font-mono text-stone-500 block">Target IRR</span>
              <span className="text-base md:text-lg font-display text-orange-400">{venture.targetIRR}</span>
            </div>
            <div className="p-3 bg-stone-900/60 border border-white/5">
              <span className="text-[10px] uppercase font-mono text-stone-500 block">Deployed</span>
              <span className="text-base md:text-lg font-display text-white">{venture.deployed}</span>
            </div>
            <div className="p-3 bg-stone-900/60 border border-white/5">
              <span className="text-[10px] uppercase font-mono text-stone-500 block">Status</span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {venture.stage}
              </span>
            </div>
            <div className="p-3 bg-stone-900/60 border border-white/5">
              <span className="text-[10px] uppercase font-mono text-stone-500 block">Scale</span>
              <span className="text-xs font-mono text-stone-300 mt-1 block">{venture.companiesCount}</span>
            </div>
          </div>
        </div>

        {/* Investment Thesis & Portfolio Details */}
        <div className="p-6 md:p-8 space-y-8">
          <div>
            <h4 className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" /> Investment Thesis
            </h4>
            <p className="text-stone-300 text-sm leading-relaxed font-light bg-stone-900/30 p-4 border border-white/5">
              {venture.thesis}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-stone-400 font-semibold mb-3 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5" /> Key Holdings & Deployments
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {venture.keyInvestments?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-stone-900/40 border border-white/5 text-xs text-stone-200">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-500">Allocations open for accredited institutional partners.</span>
            <button
              onClick={() => {
                onClose();
                onEnquire(`Venture: ${venture.title}`);
              }}
              className="w-full sm:w-auto px-6 py-3 bg-stone-100 hover:bg-white text-black text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <span>Request Fund Memo</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
