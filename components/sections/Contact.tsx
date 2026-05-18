"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Clock, Linkedin, Send, Copy, Check } from "lucide-react";

const SOCIAL_LINKS = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/hardikbajaj364/" },
];

const PROJECT_TYPES = ["Web App", "API", "SaaS", "Consulting", "Other"];
const BUDGET_RANGES = ["< ₹50k", "₹50k–₹2L", "₹2L–₹5L", "₹5L+"];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const EMAIL = "Hardikbajaj364@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      setSubmitted(false);
      setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-[#060606] relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(99,102,241,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            Contact
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white mb-3">
            Let's Build Something{" "}
            <span className="text-gradient-indigo">Together.</span>
          </h2>
          <p className="text-[#64748B] text-lg">
            Available for freelance projects, full-time roles, and technical consulting.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Availability */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span className="text-emerald-400 font-medium text-sm">Available for new projects</span>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              <button
                onClick={copyEmail}
                className="group flex items-center gap-3 p-4 rounded-xl bg-[#111111] border border-white/[0.08] hover:border-indigo-500/30 transition-all w-full text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  {copied ? <Check size={18} /> : <Mail size={18} />}
                </div>
                <div className="flex-1">
                  <p className="text-xs text-[#64748B] mb-0.5">Email</p>
                  <p className="text-white font-medium text-sm">{EMAIL}</p>
                </div>
                <div className="text-[#64748B] group-hover:text-indigo-400 transition-colors">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </div>
              </button>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#111111] border border-white/[0.08]">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#64748B] mb-0.5">Location</p>
                  <p className="text-white font-medium text-sm">Sirhind, Punjab, India 🇮🇳</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[#111111] border border-white/[0.08]">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs text-[#64748B] mb-0.5">Response Time</p>
                  <p className="text-white font-medium text-sm">Usually replies within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#64748B] hover:text-white hover:border-indigo-500/40 hover:bg-indigo-500/10 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass rounded-2xl p-8 border border-white/[0.08] space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#64748B] mb-1.5 font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[#64748B] mb-1.5 font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="john@example.com"
                    className="w-full px-4 py-2.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[#64748B] mb-1.5 font-medium">Project Type</label>
                  <select
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#111111] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-all"
                  >
                    <option value="" disabled>Select type</option>
                    {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-[#64748B] mb-1.5 font-medium">Budget Range</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg bg-[#111111] border border-white/[0.08] text-white text-sm focus:outline-none focus:border-indigo-500/50 transition-all"
                  >
                    <option value="" disabled>Select budget</option>
                    {BUDGET_RANGES.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-[#64748B] mb-1.5 font-medium">Message</label>
                <textarea
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project..."
                  rows={4}
                  style={{ minHeight: "120px" }}
                  className="w-full px-4 py-3 rounded-lg bg-white/[0.04] border border-white/[0.08] text-white placeholder-[#64748B] text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitted}
                className="w-full py-3.5 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Send size={16} />
                {submitted ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Toast */}
      <AnimatedToast show={showToast} />
    </section>
  );
}

function AnimatedToast({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 20, x: "-50%" }}
          className="fixed bottom-8 left-1/2 z-50 px-6 py-3 rounded-xl bg-emerald-500 text-white font-medium text-sm shadow-xl"
        >
          ✓ Message sent! I'll be in touch soon.
        </motion.div>
      )}
    </AnimatePresence>
  );
}
