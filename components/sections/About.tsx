"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, CheckCircle2 } from "lucide-react";

const OFFERS = [
  "Full-stack web applications (React + Node.js)",
  "REST & GraphQL API design and development",
  "Database architecture & optimization",
  "Cloud deployment & DevOps (AWS, Docker, CI/CD)",
  "Performance audits & code reviews",
];

const METRICS = [
  { value: "15+", label: "Projects" },
  { value: "3+", label: "Years Exp" },
  { value: "10+", label: "Happy Clients" },
];

function CodeTerminal() {
  return (
    <div className="rounded-xl overflow-hidden border border-white/[0.08] bg-[#111111] font-mono text-sm shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1A1A1A] border-b border-white/[0.06]">
        <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
        <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
        <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        <span className="ml-2 text-xs text-[#64748B]">hardik.tsx</span>
      </div>
      {/* Code content */}
      <div className="p-5 space-y-1 leading-relaxed">
        <div><span className="text-indigo-400">const</span> <span className="text-cyan-400">hardik</span> <span className="text-white">= {"{"}</span></div>
        <div className="pl-4"><span className="text-green-400">name</span><span className="text-white">:</span> <span className="text-yellow-300">"Hardik"</span><span className="text-white">,</span></div>
        <div className="pl-4"><span className="text-green-400">role</span><span className="text-white">:</span> <span className="text-yellow-300">"Full-Stack Dev"</span><span className="text-white">,</span></div>
        <div className="pl-4"><span className="text-green-400">location</span><span className="text-white">:</span> <span className="text-yellow-300">"Sirhind, India"</span><span className="text-white">,</span></div>
        <div className="pl-4"><span className="text-green-400">stack</span><span className="text-white">: [</span></div>
        <div className="pl-8"><span className="text-yellow-300">"React"</span><span className="text-white">,</span> <span className="text-yellow-300">"Node.js"</span><span className="text-white">,</span></div>
        <div className="pl-8"><span className="text-yellow-300">"PostgreSQL"</span><span className="text-white">,</span> <span className="text-yellow-300">"AWS"</span></div>
        <div className="pl-4"><span className="text-white">],</span></div>
        <div className="pl-4"><span className="text-green-400">available</span><span className="text-white">:</span> <span className="text-indigo-400">true</span><span className="text-white">,</span></div>
        <div><span className="text-white">{"}"}</span><span className="text-[#64748B] cursor-blink">|</span></div>
      </div>
    </div>
  );
}

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Terminal + Metrics */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <CodeTerminal />
            <div className="grid grid-cols-3 gap-4">
              {METRICS.map((m) => (
                <div
                  key={m.label}
                  className="glass rounded-xl p-4 text-center border border-white/[0.08] hover:border-indigo-500/30 transition-colors"
                >
                  <div className="text-2xl font-bold font-grotesk text-gradient-indigo">{m.value}</div>
                  <div className="text-xs text-[#64748B] mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              About Me
            </span>

            <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white leading-tight">
              A developer who cares about
              <br />
              the <em className="not-italic text-gradient-indigo">details.</em>
            </h2>

            <p className="text-[#64748B] leading-relaxed text-lg">
              I'm Hardik, a full-stack developer from Sirhind, India. I build
              end-to-end web applications — from polished React frontends to
              scalable Node.js backends and cloud-deployed APIs.
            </p>

            <p className="text-[#64748B] leading-relaxed">
              I've worked with startups and early-stage founders to take ideas
              from zero to shipped product. I care deeply about performance,
              clean code, and user experience.
            </p>

            <div className="space-y-3">
              {OFFERS.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-[#94A3B8] text-sm">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-200 font-medium text-sm"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
