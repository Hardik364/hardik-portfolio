"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SkillBar {
  name: string;
  pct: number;
}

interface SkillCard {
  title: string;
  color: string;
  border: string;
  glow: string;
  colSpan?: string;
  skills: string[];
  bars?: SkillBar[];
  accent?: boolean;
}

const SKILL_CARDS: SkillCard[] = [
  {
    title: "Frontend",
    color: "from-indigo-500/20 to-transparent",
    border: "border-indigo-500/40",
    glow: "shadow-[0_0_30px_rgba(99,102,241,0.15)]",
    colSpan: "lg:col-span-2",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"],
    bars: [
      { name: "React", pct: 95 },
      { name: "Next.js", pct: 90 },
      { name: "TypeScript", pct: 88 },
      { name: "Tailwind CSS", pct: 92 },
    ],
  },
  {
    title: "Backend",
    color: "from-cyan-500/20 to-transparent",
    border: "border-cyan-500/40",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    skills: ["Node.js", "Express", "Python", "FastAPI", "GraphQL", "REST APIs"],
    bars: [
      { name: "Node.js", pct: 90 },
      { name: "Python", pct: 82 },
      { name: "GraphQL", pct: 78 },
    ],
  },
  {
    title: "Database",
    color: "from-emerald-500/20 to-transparent",
    border: "border-emerald-500/40",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "MySQL"],
    bars: [
      { name: "PostgreSQL", pct: 88 },
      { name: "MongoDB", pct: 85 },
      { name: "Redis", pct: 75 },
    ],
  },
  {
    title: "DevOps & Cloud",
    color: "from-orange-500/20 to-transparent",
    border: "border-orange-500/40",
    glow: "shadow-[0_0_30px_rgba(249,115,22,0.15)]",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "GitHub Actions", "Vercel", "Nginx", "Linux"],
    bars: [
      { name: "AWS", pct: 80 },
      { name: "Docker", pct: 85 },
      { name: "CI/CD", pct: 78 },
    ],
  },
  {
    title: "Currently Learning",
    color: "from-purple-500/20 to-transparent",
    border: "border-purple-500/40",
    glow: "shadow-[0_0_30px_rgba(168,85,247,0.15)]",
    skills: ["Rust", "Web3 / Solidity", "LLM integrations", "Edge computing"],
    accent: true,
  },
];

function ProgressBar({ name, pct, isInView }: { name: string; pct: number; isInView: boolean }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-[#64748B]">
        <span>{name}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${pct}%` : 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function SkillCardComp({ card, isInView, delay }: { card: SkillCard; isInView: boolean; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={`relative rounded-2xl p-6 bg-[#111111] border ${card.border} ${card.glow} hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 overflow-hidden ${card.colSpan || ""}`}
    >
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${card.color}`} />
      <div className={`absolute inset-0 bg-gradient-to-b ${card.color} opacity-30 pointer-events-none`} />

      <h3 className="font-grotesk font-semibold text-lg text-white mb-4 relative z-10">
        {card.title}
        {card.accent && <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">🔬 Active</span>}
      </h3>

      {/* Skill tags */}
      <div className="flex flex-wrap gap-2 mb-4 relative z-10">
        {card.skills.map((s) => (
          <span
            key={s}
            className="text-xs px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-[#94A3B8] font-mono hover:border-indigo-500/40 hover:text-white transition-colors"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Progress bars */}
      {card.bars && (
        <div className="space-y-3 relative z-10 mt-4">
          {card.bars.map((b) => (
            <ProgressBar key={b.name} name={b.name} pct={b.pct} isInView={isInView} />
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="py-24 bg-[#060606]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            Tech Stack
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white mb-3">
            My Tech Stack
          </h2>
          <p className="text-[#64748B] text-lg">Tools I use to bring ideas to life</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Large frontend card */}
          <SkillCardComp card={SKILL_CARDS[0]} isInView={isInView} delay={0.1} />
          {/* Backend */}
          <SkillCardComp card={SKILL_CARDS[1]} isInView={isInView} delay={0.2} />
          {/* Database */}
          <SkillCardComp card={SKILL_CARDS[2]} isInView={isInView} delay={0.3} />
          {/* DevOps */}
          <SkillCardComp card={SKILL_CARDS[3]} isInView={isInView} delay={0.4} />
          {/* Currently Learning */}
          <SkillCardComp card={SKILL_CARDS[4]} isInView={isInView} delay={0.5} />
        </div>
      </div>
    </section>
  );
}
