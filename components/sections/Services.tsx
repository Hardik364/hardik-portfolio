"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Layers, Code2, Database, Cloud } from "lucide-react";

const SERVICES = [
  {
    icon: Layers,
    title: "Full-Stack Web Apps",
    description:
      "Complete web applications with React/Next.js frontends and Node.js/Python backends. From MVP to production-ready.",
    color: "text-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]",
    hint: "Starting from ₹50k",
  },
  {
    icon: Code2,
    title: "API Development",
    description:
      "Scalable REST and GraphQL APIs. Authentication, rate limiting, caching, documentation, and full test coverage.",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]",
    hint: "Starting from ₹30k",
  },
  {
    icon: Database,
    title: "Database & Architecture",
    description:
      "Schema design, query optimization, migrations, and caching strategy for PostgreSQL, MongoDB, and Redis.",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
    hint: "Starting from ₹20k",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "AWS/GCP deployment, Docker containerization, CI/CD pipelines with GitHub Actions, Nginx reverse proxy setup.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/30",
    glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    hint: "Starting from ₹25k",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-[#060606]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            Services
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white mb-3">
            What I Build
          </h2>
          <p className="text-[#64748B] text-lg">
            End-to-end development, from idea to deployment
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 + 0.2, ease: "easeOut" }}
                className={`group relative rounded-2xl p-8 bg-[#111111] border ${service.border} ${service.glow} hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
              >
                {/* Glass bg effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                {/* Icon */}
                <div className={`inline-flex w-12 h-12 items-center justify-center rounded-xl ${service.bg} ${service.color} mb-5 border ${service.border}`}>
                  <Icon size={22} />
                </div>

                <h3 className="font-grotesk font-bold text-xl text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#64748B] leading-relaxed text-sm mb-6">
                  {service.description}
                </p>

                {/* Hint */}
                <div className={`inline-block text-xs px-3 py-1 rounded-full ${service.bg} border ${service.border} ${service.color} font-medium`}>
                  {service.hint}
                </div>

                {/* Hover border glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  style={{ boxShadow: "inset 0 0 0 1px rgba(99,102,241,0.3)" }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
