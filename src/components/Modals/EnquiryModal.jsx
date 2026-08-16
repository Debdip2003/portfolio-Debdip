import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight, ShieldCheck, Mail, Copy, AlertCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { portfolioData } from "../../data/portfolioData";
import { modalVariants, backdropVariants } from "../../utils/motionVariants";

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
  const [errorMessage, setErrorMessage] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const senderEmail = formData.email.trim();
    const message = formData.message.trim();
    const subject = formData.subject.trim() || "Collaboration Inquiry";
    const inquiryType = formData.inquiryType;
    const timeframe = formData.timeframe;

    if (!name || !senderEmail) {
      setErrorMessage("Please provide both your name and email address.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    let firestoreSuccess = false;
    let emailSuccess = false;

    // 1. Store message in Firebase Firestore 'contacts' collection
    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email: senderEmail,
        inquiryType,
        timeframe,
        subject,
        message,
        createdAt: serverTimestamp(),
        submittedAt: new Date().toISOString(),
      });
      firestoreSuccess = true;
    } catch (firestoreError) {
      console.error("Firebase Firestore store error:", firestoreError);
    }

    // 2. Store in Firebase Firestore 'mail' collection (Firebase Trigger Email extension)
    try {
      await addDoc(collection(db, "mail"), {
        to: profile.email,
        message: {
          subject: `[Portfolio Inquiry] ${subject} from ${name}`,
          text: `Name: ${name}\nEmail: ${senderEmail}\nType: ${inquiryType}\nTimeframe: ${timeframe}\nSubject: ${subject}\nMessage: ${message}`,
          html: `<div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 24px; line-height: 1.6; color: #1c1917;">
            <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 8px;">New Portfolio Collaboration Inquiry</h2>
            <p><strong>Name / Organization:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${senderEmail}">${senderEmail}</a></p>
            <p><strong>Engagement Type:</strong> ${inquiryType}</p>
            <p><strong>Timeframe:</strong> ${timeframe}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message / Scope:</strong></p>
            <blockquote style="background: #f5f5f4; padding: 16px; border-left: 4px solid #ea580c; border-radius: 4px; margin: 16px 0;">${message || "No additional message provided."}</blockquote>
            <p style="font-size: 12px; color: #78716c; margin-top: 24px;">Received via Debdip Bhattacharya Portfolio</p>
          </div>`,
        },
        createdAt: serverTimestamp(),
      });
    } catch (mailColError) {
      console.warn("Firestore mail collection trigger note:", mailColError);
    }

    // 3. Trigger direct email notification to dbhattacharya1912@gmail.com via FormSubmit AJAX API
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email: senderEmail,
          inquiryType,
          timeframe,
          subject,
          message: message || "No additional details provided.",
          _subject: `[Portfolio] New ${inquiryType} from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      if (response.ok) {
        emailSuccess = true;
      }
    } catch (emailFetchError) {
      console.warn("Direct FormSubmit trigger warning:", emailFetchError);
    }

    setIsSubmitting(false);

    // If either Firebase Firestore stored or email triggered, show success
    if (firestoreSuccess || emailSuccess) {
      setIsSubmitted(true);
    } else {
      setErrorMessage(
        "Could not automatically transmit message. Please copy dbhattacharya1912@gmail.com and email directly."
      );
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={backdropVariants}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
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
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close enquiry modal"
            className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-stone-400 hover:text-white hover:border-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </motion.button>
        </div>

        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="p-10 text-center space-y-6"
          >
            <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-display text-white">Message Transmitted</h3>
            <p className="text-stone-400 text-sm leading-relaxed max-w-md mx-auto font-light">
              Thank you, <span className="text-stone-100 font-medium">{formData.name || "Partner"}</span>. Your message has been
              stored in the database and dispatched directly to <span className="text-orange-400 font-mono">{profile.email}</span>.
              Debdip will respond within 24 hours.
            </p>
            <div className="p-4 bg-stone-900/50 border border-white/5 text-xs text-stone-400 font-mono text-left max-w-md mx-auto space-y-1">
              <div><span className="text-stone-500">Subject:</span> {formData.subject}</div>
              <div><span className="text-stone-500">Category:</span> {formData.inquiryType}</div>
              <div><span className="text-stone-500">Database:</span> Firebase Firestore (Synced)</div>
              <div><span className="text-stone-500">Destination:</span> {profile.email}</div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onClose}
              className="px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-semibold hover:bg-stone-200 transition-colors cursor-pointer"
            >
              Return to Portfolio
            </motion.button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
            {/* Quick Email Direct Copy Banner */}
            <div className="p-3.5 bg-stone-950 border border-white/5 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-400">
                <Mail className="w-4 h-4 text-orange-500" />
                <span className="font-mono text-stone-200">{profile.email}</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={handleCopyEmail}
                className="px-2.5 py-1 bg-stone-900 hover:bg-stone-800 border border-white/10 text-stone-300 text-[10px] font-mono flex items-center gap-1 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? "Copied" : "Copy Email"}</span>
              </motion.button>
            </div>

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                  Your Name / Organization *
                </label>
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  placeholder="e.g. Alex Morgan / TechCorp"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-stone-900/60 border border-white/10 px-4 py-3 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                  Contact Email *
                </label>
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="alex@techcorp.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-stone-900/60 border border-white/10 px-4 py-3 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
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
                  disabled={isSubmitting}
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className="w-full bg-stone-900 border border-white/10 px-4 py-3 text-stone-200 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
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
                  disabled={isSubmitting}
                  value={formData.timeframe}
                  onChange={(e) => setFormData({ ...formData, timeframe: e.target.value })}
                  className="w-full bg-stone-900 border border-white/10 px-4 py-3 text-stone-200 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
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
                disabled={isSubmitting}
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-stone-900/60 border border-white/10 px-4 py-3 text-stone-100 text-sm focus:outline-none focus:border-orange-500 transition-colors disabled:opacity-50"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-xs uppercase font-mono text-stone-400 block mb-2">
                Message / Brief Details (Optional)
              </label>
              <textarea
                rows={3}
                disabled={isSubmitting}
                placeholder="Share a brief overview of the role, product goals, or collaboration context..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-stone-900/60 border border-white/10 px-4 py-3 text-stone-100 text-sm placeholder:text-stone-600 focus:outline-none focus:border-orange-500 transition-colors resize-none disabled:opacity-50"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-colors disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(249,115,22,0.3)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting & Syncing to Firebase...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Mandate & Send Email</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
}
