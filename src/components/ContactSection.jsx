import React, { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare } from "lucide-react";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const email = "debdipBhattacharya2003@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-white/5"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[#81D8D0]" />
            <span className="text-xs uppercase tracking-widest text-[#81D8D0] font-mono">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-2">
            Let's Collaborate
          </h2>
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide max-w-lg">
            Have a project in mind or looking for a talented designer & engineer? Let's build something exceptional.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Contact Info Card */}
        <div className="lg:col-span-5 ios-glass p-8 rounded-[32px] flex flex-col justify-between group tiffany-glow">
          <div>
            <div className="w-12 h-12 rounded-2xl bg-[#81D8D0]/10 flex items-center justify-center text-[#81D8D0] mb-6">
              <Mail className="w-6 h-6" />
            </div>

            <h3 className="text-2xl font-medium text-white tracking-tight mb-2">
              Start a Conversation
            </h3>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-8">
              Available for full-time opportunities, design consultations, and high-impact engineering projects.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email pill button */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between gap-3">
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-mono text-white/40">Direct Email</p>
                <p className="text-sm font-medium text-white tracking-tight truncate">{email}</p>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-[#81D8D0] hover:text-black text-white/70 transition-all flex items-center gap-1.5 text-xs font-medium shrink-0"
                title="Copy Email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <div className="lg:col-span-7 ios-glass p-8 rounded-[32px] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-[#81D8D0]" />
              <h3 className="text-lg font-medium text-white">Send a Message</h3>
            </div>

            {formSubmitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center">
                <div className="w-14 h-14 rounded-full bg-[#81D8D0]/20 text-[#81D8D0] flex items-center justify-center mb-4">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
                <p className="text-sm text-white/50 max-w-xs">
                  Thank you for reaching out. I'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-white/50 mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#81D8D0] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-white/50 mb-1.5">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#81D8D0] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-white/50 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#81D8D0] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 bg-[#81D8D0] text-black w-full py-3.5 rounded-full font-medium text-sm hover:brightness-110 active:scale-[0.99] transition-all shadow-[0_0_20px_-5px_rgba(129,216,208,0.5)]"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
