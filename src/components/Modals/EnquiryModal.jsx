import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight, ShieldCheck, Mail, Send, Copy } from "lucide-react";
import { portfolioData } from "../../data/portfolioData";

export default function EnquiryModal({ initialSubject = "", onClose }) {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "Full-Time Frontend Role",
    timeframe: "Immediate / Within 30 Days",
    subject: initialSubject || "Frontend Engineering Mandate",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
    }
  }, [initialSubject]);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-xl max-h-[90vh] bg-[#0a0a0a] border border-white/10 overflow-y-auto hide-scrollbar shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-5 bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10">
          <div>
            <span className="text-xs text-orange-500 uppercase tracking-widest block font-mono">
              Direct Contact
            </span>
            <h2 className="text-xl font-display text-white">Start a Conversation</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close enquiry modal"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-stone-400 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-10 text-center space-y-6 animate-scale-up">
            <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display text-white">Message Transmitted</h3>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md mx-auto font-light">
              Thank you, <span className="text-stone-100 font-medium">{formData.name || "Partner"}</span>. Your message has been
              received. Debdip will review your inquiry and respond directly to <span className="text-stone-200 font-mono">{formData.email}</span> within 24 hours.
            </p>
            <div className="p-4 bg-stone-900/50 border border-white/5 text-xs text-stone-400 font-mono text-left max-w-md mx-auto space-y-1">
              <div><span className="text-stone-500">Subject:</span> {formData.subject}</div>
              <div><span className="text-stone-500">Category:</span> {formData.inquiryType}</div>
              <div><span className="text-stone-500">Destination:</span> {profile.email}</div>
            </div>
            <button
              onClick={onClose}
              className="px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-stone-200 transition-colors cursor-pointer"
            >
              Return to Portfolio
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Quick Email Direct Copy Banner */}
            <div className="p-3.5 bg-stone-950 border border-white/5 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-400">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="font-mono text-stone-200">{profile.email}</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 border border-white/10 text-stone-300 text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </button>
            </div>

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                  Your Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan / TechCorp"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-900/60 border border-white/10 px-4 py-3 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@techcorp.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-900/60 border border-white/10 px-4 py-3 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>

            {/* Inquiry Type & Timeframe */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                  Engagement Type
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-stone-900 border border-white/10 px-4 py-3 text-stone-200 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="Full-Time Frontend Role">Full-Time Frontend Engineer Role</option>
                  <option value="Contract / Freelance Project">Contract / Freelance Web Project</option>
                  <option value="UI/UX & Design System">UI/UX & Design System Mandate</option>
                  <option value="Open Source Collaboration">Open Source / Technical Collaboration</option>
                  <option value="General Conversation">General Coffee Chat / Advisory</option>
                </select>
              </div>
              <div>
                <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                  Timeframe
                </label>
                <select
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className="w-full bg-stone-900 border border-white/10 px-4 py-3 text-stone-200 text-sm focus:outline-none focus:border-orange-500 transition-colors"
                >
                  <option value="Immediate / Within 30 Days">Immediate / Within 30 Days</option>
                  <option value="1 – 3 Months">1 – 3 Months</option>
                  <option value="Flexible / Exploring">Flexible / Exploring Options</option>
                </select>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-stone-900/60 border border-white/10 px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                Message / Brief Details
              </label>
              <textarea
                rows={3}
                placeholder="Share a brief overview of the role, product goals, or collaboration context..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-900/60 border border-white/10 px-4 py-3 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
