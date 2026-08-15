import React, { useState } from "react";
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, Loader2, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../utils/firebase";

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
    },
  },
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const myEmail = "dbhattacharya1912@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = formState.name.trim();
    const senderEmail = formState.email.trim();
    const message = formState.message.trim();

    if (!name || !senderEmail || !message) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      // 1. Store the message directly in Firebase Firestore 'contacts' collection
      await addDoc(collection(db, "contacts"), {
        name,
        email: senderEmail,
        message,
        createdAt: serverTimestamp(),
      });

      // 2. Also send an email notification directly to dbhattacharya1912@gmail.com
      try {
        await fetch(`https://formsubmit.co/ajax/${myEmail}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email: senderEmail,
            message,
            _subject: `New Portfolio Message from ${name}`,
            _template: "table",
            _captcha: "false",
          }),
        });
      } catch (emailError) {
        console.warn("Direct email delivery failed, but data was stored in database:", emailError);
      }

      // 3. Store in Firestore 'mail' collection (Firebase Trigger Email extension compatibility)
      try {
        await addDoc(collection(db, "mail"), {
          to: myEmail,
          message: {
            subject: `New Portfolio Message from ${name}`,
            text: `Name: ${name}\nEmail: ${senderEmail}\nMessage: ${message}`,
            html: `<div style="font-family: sans-serif; padding: 20px; line-height: 1.6;">
              <h2 style="color: #0d9488;">New Portfolio Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${senderEmail}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="background: #f1f5f9; padding: 15px; border-left: 4px solid #0d9488; border-radius: 4px;">${message}</blockquote>
            </div>`,
          },
          createdAt: serverTimestamp(),
        });
      } catch (mailColError) {
        // Silent catch if mail collection is not strictly needed
      }

      setFormSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setErrorMessage("Unable to submit message. Please try again or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={sectionVariants}
      className="w-full max-w-7xl px-4 md:px-8 py-24 z-10 border-t border-theme-border"
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-theme-accent" />
            <span className="text-xs uppercase tracking-widest text-theme-accent font-mono">
              Get in Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-theme-text mb-2">
            Let's Collaborate
          </h2>
          <p className="text-theme-muted text-base md:text-lg font-light tracking-wide max-w-lg">
            Have a project in mind or looking for a talented designer &
            engineer? Let's build something exceptional.
          </p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Contact Info Card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25, scale: 0.97 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7 } },
          }}
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="lg:col-span-5 ios-glass p-8 rounded-[32px] flex flex-col justify-between group tiffany-glow cursor-default"
        >
          <div>
            <motion.div
              whileHover={{ rotate: 12, scale: 1.1 }}
              className="w-12 h-12 rounded-2xl bg-theme-accent-subtle flex items-center justify-center text-theme-accent mb-6"
            >
              <Mail className="w-6 h-6" />
            </motion.div>

            <h3 className="text-2xl font-medium text-theme-text tracking-tight mb-2">
              Start a Conversation
            </h3>
            <p className="text-theme-muted text-sm font-light leading-relaxed mb-8">
              Available for full-time opportunities, design consultations, and
              high-impact engineering projects.
            </p>
          </div>

          <div className="space-y-4">
            {/* Email pill button */}
            <div className="p-4 rounded-2xl bg-theme-pill border border-theme-border flex items-center justify-between gap-3">
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase font-mono text-theme-subtle">
                  Direct Email
                </p>
                <p className="text-sm font-medium text-theme-text tracking-tight truncate">
                  {myEmail}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-theme-pill-hover hover:bg-theme-accent hover:text-theme-accent-text text-theme-muted transition-all flex items-center gap-1.5 text-xs font-medium shrink-0"
                title="Copy Email"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-theme-accent" />
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
          </div>
        </motion.div>

        {/* Message Form */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 25, scale: 0.97 },
            visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, delay: 0.1 } },
          }}
          className="lg:col-span-7 ios-glass p-8 rounded-[32px] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-5 h-5 text-theme-accent" />
              <h3 className="text-lg font-medium text-theme-text">Send a Message</h3>
            </div>

            <AnimatePresence mode="wait">
              {formSubmitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="py-12 flex flex-col items-center justify-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-14 h-14 rounded-full bg-theme-accent-subtle text-theme-accent flex items-center justify-center mb-4"
                  >
                    <Check className="w-6 h-6" />
                  </motion.div>
                  <h4 className="text-xl font-medium text-theme-text mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-sm text-theme-muted max-w-xs">
                    Thank you for reaching out. Your message has been stored and sent to dbhattacharya1912@gmail.com. I'll get back to you within 24 hours.
                  </p>
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
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-theme-muted mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-2xl bg-[var(--input-bg)] border border-[var(--input-border)] text-theme-text placeholder-[var(--input-placeholder)] text-sm focus:outline-none focus:border-theme-accent transition-colors disabled:opacity-60"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-theme-muted mb-1.5">
                        Your Email
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-2xl bg-[var(--input-bg)] border border-[var(--input-border)] text-theme-text placeholder-[var(--input-placeholder)] text-sm focus:outline-none focus:border-theme-accent transition-colors disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-theme-muted mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      disabled={isSubmitting}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-2xl bg-[var(--input-bg)] border border-[var(--input-border)] text-theme-text placeholder-[var(--input-placeholder)] text-sm focus:outline-none focus:border-theme-accent transition-colors resize-none disabled:opacity-60"
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-2 bg-theme-accent text-theme-accent-text w-full py-3.5 rounded-full font-medium text-sm hover:brightness-110 transition-all shadow-lg shadow-[var(--accent-glow)] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
