import React, { useEffect } from "react";
import { X, MapPin, Layers } from "lucide-react";

export default function ImageLightbox({ item, onClose, onEnquire }) {
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

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="flex justify-between items-center z-10" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-3">
          <span className="text-xs text-orange-500 font-mono tracking-widest uppercase">Interior Sanctum</span>
          <span className="text-stone-600">•</span>
          <span className="text-xs text-stone-300 font-medium">{item.project}</span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close interior image viewer"
          className="w-10 h-10 rounded-full border border-white/20 hover:border-white text-stone-300 hover:text-white flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div className="relative max-w-6xl max-h-[75vh] mx-auto my-auto flex items-center justify-center overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[75vh] w-auto object-contain rounded-none border border-white/10 shadow-2xl"
        />
      </div>

      {/* Bottom Info Bar */}
      <div
        className="max-w-4xl mx-auto w-full bg-[#0a0a0a]/90 backdrop-blur border border-white/10 p-4 md:p-6 z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <div className="flex items-center gap-2 text-xs text-stone-500 font-mono mb-1">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>{item.location}</span>
          </div>
          <h3 className="text-xl md:text-2xl font-display text-white mb-2">{item.title}</h3>
          <p className="text-xs md:text-sm text-stone-400 font-light max-w-xl">{item.description}</p>
          {item.materials && (
            <div className="flex flex-wrap gap-2 mt-3">
              {item.materials.map((mat, i) => (
                <span key={i} className="text-[10px] font-mono px-2 py-0.5 bg-stone-900 border border-white/10 text-stone-300">
                  {mat}
                </span>
              ))}
            </div>
          )}
        </div>

        <button
          onClick={() => {
            onClose();
            onEnquire(`Interior: ${item.title}`);
          }}
          className="px-5 py-2.5 bg-white hover:bg-stone-200 text-black text-xs uppercase tracking-widest font-semibold shrink-0 transition-colors"
        >
          Request Specification
        </button>
      </div>
    </div>
  );
}
