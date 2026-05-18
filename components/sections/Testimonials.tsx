"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "Hardik delivered our entire platform in 6 weeks — clean code, on time. Exactly the kind of developer you want on your side.",
    name: "Rahul S.",
    role: "Founder @ StartupX",
    initials: "RS",
    color: "from-indigo-500 to-purple-500",
    stars: 5,
  },
  {
    quote:
      "The API he built handles 50k requests/day without breaking a sweat. He thought about scalability from day one.",
    name: "Priya M.",
    role: "CTO @ FinTech Co.",
    initials: "PM",
    color: "from-cyan-500 to-teal-500",
    stars: 5,
  },
  {
    quote:
      "Not just a coder — he brought design instincts and product thinking to every decision. Rare combination.",
    name: "James K.",
    role: "Product Lead @ Agency",
    initials: "JK",
    color: "from-rose-500 to-orange-500",
    stars: 5,
  },
];

function TestimonialCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="relative rounded-2xl p-8 bg-[#111111] border border-white/[0.08] overflow-hidden">
      {/* Background glow */}
      <div className={`absolute top-0 left-0 w-32 h-32 rounded-full bg-gradient-to-br ${t.color} opacity-10 -translate-x-8 -translate-y-8 blur-2xl`} />

      {/* Quote icon */}
      <Quote size={32} className="text-indigo-500/30 mb-4" />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: t.stars }).map((_, i) => (
          <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#94A3B8] italic text-base leading-relaxed mb-6">
        "{t.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold font-grotesk flex-shrink-0`}>
          {t.initials}
        </div>
        <div>
          <p className="text-white font-medium text-sm">{t.name}</p>
          <p className="text-[#64748B] text-xs">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  return (
    <section id="testimonials" className="py-24 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            Testimonials
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white">
            What Clients Say
          </h2>
        </motion.div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <TestimonialCard t={t} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard t={TESTIMONIALS[current]} />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#64748B] hover:text-white hover:border-indigo-500/40 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-indigo-500" : "bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/[0.08] flex items-center justify-center text-[#64748B] hover:text-white hover:border-indigo-500/40 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
