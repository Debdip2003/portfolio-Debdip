import React, { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Loader2, AlertCircle, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";
import { portfolioData } from "../data/portfolioData";
import { fadeInUp, sectionContainerVariants } from "../utils/motionVariants";

export default function ContactSection() {
  const { profile } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "Frontend Engineering Opportunity",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formState.name.trim();
    const senderEmail = formState.email.trim();
    const subject = formState.subject.trim() || "Portfolio Contact Message";
    const message = formState.message.trim();

    if (!name || !senderEmail || !message) {
      setErrorMessage("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    let firestoreSuccess = false;
    let emailSuccess = false;

    // 1. Store the message directly in Firebase Firestore 'contacts' collection
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email: senderEmail,
        subject,
        message,
        createdAt: serverTimestamp(),
        submittedAt: new Date().toISOString(),
      });
      firestoreSuccess = true;
    } catch (firebaseErr) {
      console.error("Firebase Firestore write error:", firebaseErr);
    }

    // 2. Store in Firestore 'mail' collection (for Firebase Trigger Email extension)
    try {
      await addDoc(collection(db, "mail"), {
        to: profile.email,
        message: {
          subject: `[Portfolio] ${subject} from ${name}`,
          text: `Name: ${name}\nEmail: ${senderEmail}\nSubject: ${subject}\nMessage: ${message}`,
          html: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; line-height: 1.6; color: #1c1917;">
            <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 8px;">New Contact Message Received</h2>
            <p><strong>Sender:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${senderEmail}">${senderEmail}</a></p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background: #f5f5f4; padding: 16px; border-left: 4px solid #ea580c; border-radius: 4px;">${message}</blockquote>
          </div>`,
        },
        createdAt: serverTimestamp(),
      });
    } catch (mailColErr) {
      console.warn("Mail collection note:", mailColErr);
    }

    // 3. Dispatch direct email notification to dbhattacharya1912@gmail.com via FormSubmit AJAX API
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email: senderEmail,
          subject,
          message,
          _subject: `[Portfolio Message] ${name}: ${subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (res.ok) {
        emailSuccess = true;
      }
    } catch (emailErr) {
      console.warn("Direct email delivery notice:", emailErr);
    }

    setIsSubmitting(false);

    if (firestoreSuccess || emailSuccess) {
      setFormSubmitted(true);
      setFormState({ name: "", email: "", subject: "Frontend Engineering Opportunity", message: "" });
    } else {
      setErrorMessage("Unable to auto-transmit. Please copy dbhattacharya1912@gmail.com and email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#050505] border-b border-white/5 relative">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div>
            <span className="text-xs text-orange-500 uppercase tracking-widest font-mono block mb-2">
              Direct Contact
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-white">Let's Collaborate</h2>
          </div>
          <p className="text-stone-400 text-sm md:text-base font-light max-w-md leading-relaxed">
            Have an engineering role, full-stack product, or design system project? Send a direct message stored
            securely in Firebase with instant email delivery.
          </p>
        </motion.div>

        {/* Dual Grid Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={sectionContainerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
        >
          {/* Left Column: Direct Info */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-5 bg-stone-900/30 border border-white/10 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden luxury-border-glow"
          >
            <div>
              <div className="w-12 h-12 bg-orange-950/40 border border-orange-500/30 flex items-center justify-center text-orange-500 mb-6">
                <Mail className="w-6 h-6" />
              </div>

              <h3 className="text-2xl md:text-3xl font-display text-white mb-3">Start a Conversation</h3>
              <p className="text-stone-400 text-sm font-light leading-relaxed mb-8">
                Available for full-time frontend roles, freelance architectures, and high-impact UI/UX consultations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-stone-950 border border-white/10 flex items-center justify-between gap-3">
                <div className="overflow-hidden">
                  <p className="text-[10px] uppercase font-mono text-stone-500">Direct Email</p>
                  <p className="text-sm font-mono text-stone-200 truncate">{profile.email}</p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-stone-800 border border-white/10 text-stone-300 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
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
                </motion.button>
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 font-mono pt-2">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Encrypted transmission • Direct inbox routing</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-7 bg-stone-900/30 border border-white/10 p-8 md:p-10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-orange-500" />
                <h3 className="text-sm font-mono uppercase tracking-widest text-white">Send Direct Mandate</h3>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="py-12 flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                      <Check className="w-6 h-6" />
                    </div>
                    <h4 className="text-2xl font-display text-white">Message Dispatched!</h4>
                    <p className="text-sm text-stone-400 max-w-md font-light leading-relaxed">
                      Thank you for reaching out. Your inquiry has been stored into Firebase Firestore and transmitted directly
                      to <span className="text-stone-200 font-mono">{profile.email}</span>. I'll get back to you within 24 hours.
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setFormSubmitted(false)}
                      className="px-6 py-2.5 bg-stone-900 hover:bg-stone-800 border border-white/10 text-stone-200 text-xs uppercase font-mono tracking-wider transition-colors cursor-pointer"
                    >
                      Send Another Note
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-stone-400 mb-1.5 uppercase">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          disabled={isSubmitting}
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          placeholder="Lord Sterling Vance"
                          className="w-full px-4 py-3 bg-stone-950 border border-white/10 text-stone-200 placeholder:text-stone-600 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-stone-400 mb-1.5 uppercase">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          required
                          disabled={isSubmitting}
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          placeholder="vance@capital.ch"
                          className="w-full px-4 py-3 bg-stone-950 border border-white/10 text-stone-200 placeholder:text-stone-600 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-stone-400 mb-1.5 uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        disabled={isSubmitting}
                        value={formState.subject}
                        onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                        placeholder="Frontend Engineering Opportunity"
                        className="w-full px-4 py-3 bg-stone-950 border border-white/10 text-stone-200 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-stone-400 mb-1.5 uppercase">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        disabled={isSubmitting}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Tell me about your product vision, timeline, or engineering role..."
                        className="w-full px-4 py-3 bg-stone-950 border border-white/10 text-stone-200 placeholder:text-stone-600 text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none disabled:opacity-50"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white w-full py-3.5 font-semibold text-xs font-mono uppercase tracking-wider transition-all disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Transmitting to Firebase & Dispatching Email...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Message</span>
                          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
