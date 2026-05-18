"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const FILTER_TABS = ["All", "Web App", "API", "SaaS", "Open Source"];

const PROJECTS = [
  {
    title: "TaskFlow SaaS",
    tags: ["SaaS", "Web App"],
    description:
      "A project management SaaS with real-time collaboration, Kanban boards, and team workspaces. Built for 500+ concurrent users.",
    stack: ["Next.js", "PostgreSQL", "Prisma", "Socket.io", "AWS"],
    gradient: "from-indigo-600 to-purple-600",
    gradientHover: "from-indigo-500 to-purple-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ShopAPI",
    tags: ["API", "Backend"],
    description:
      "A production-ready e-commerce REST API with auth, payments (Stripe), inventory management, and full test coverage.",
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    gradient: "from-cyan-600 to-teal-600",
    gradientHover: "from-cyan-500 to-teal-500",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevDash",
    tags: ["Open Source", "Web App"],
    description:
      "A developer productivity dashboard aggregating GitHub activity, deployments, and analytics in one place.",
    stack: ["React", "FastAPI", "PostgreSQL", "Vercel"],
    gradient: "from-rose-600 to-orange-600",
    gradientHover: "from-rose-500 to-orange-500",
    liveUrl: "#",
    githubUrl: "#",
  },
];

function ProjectCard({ project, delay, isInView }: { project: typeof PROJECTS[0]; delay: number; isInView: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="group relative rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111111] hover:border-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient Cover */}
      <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Floating project initials */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-grotesk font-bold text-white/20 select-none">
            {project.title[0]}
          </span>
        </div>

        {/* Hover overlay */}
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: hovered ? 0 : "100%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center gap-4"
        >
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-medium text-sm hover:bg-gray-100 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} /> Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 border border-white text-white rounded-lg font-medium text-sm hover:bg-white/10 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} /> GitHub
          </a>
        </motion.div>

        {/* View Project overlay text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          className="absolute bottom-4 left-0 right-0 text-center"
        >
          <span className="text-white/80 text-sm font-medium flex items-center justify-center gap-1">
            View Project <ArrowRight size={14} />
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tags */}
        <div className="flex gap-2 mb-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-400"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-grotesk font-bold text-xl text-white mb-2 group-hover:text-indigo-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-[#64748B] text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[#64748B] font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.some((t) => t === activeFilter));

  return (
    <section id="work" className="py-24 bg-[#0A0A0A]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            Portfolio
          </span>
          <h2 className="font-grotesk font-bold text-4xl md:text-5xl text-white mb-4">
            Selected Work
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTER_TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeFilter === tab
                  ? "bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]"
                  : "text-[#64748B] border border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.1 + 0.2} isInView={isInView} />
          ))}
        </div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#64748B] hover:text-white transition-colors text-sm font-medium group"
          >
            <Github size={16} />
            View All Projects on GitHub
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
