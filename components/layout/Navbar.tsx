"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["work", "about", "stack", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/[0.08]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="group relative"
          >
            <div className="w-10 h-10 border border-indigo-500/60 rounded flex items-center justify-center text-white font-grotesk font-bold text-lg transition-all duration-300 group-hover:border-indigo-400 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.4)]">
              H.
            </div>
          </a>

          {/* Center Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? "text-white"
                      : "text-[#64748B] hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-indigo-500"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2 text-sm font-medium border border-indigo-500/60 text-indigo-400 rounded-lg transition-all duration-300 hover:border-indigo-400 hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] hover:bg-indigo-500/10"
            >
              Hire Me →
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#64748B] hover:text-white transition-colors"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-[#111111] border-l border-white/[0.08] z-50 md:hidden flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-grotesk font-bold text-xl text-white">H.</span>
                <button onClick={() => setMobileOpen(false)} className="text-[#64748B] hover:text-white">
                  <X size={24} />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-lg font-medium text-[#64748B] hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              <div className="mt-auto">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full py-3 border border-indigo-500/60 text-indigo-400 rounded-lg font-medium hover:bg-indigo-500/10 transition-colors"
                >
                  Hire Me →
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
