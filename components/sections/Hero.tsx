"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowRight, ChevronDown } from "lucide-react";

const TYPEWRITER_WORDS = ["Scale.", "Perform.", "Convert.", "Impress."];

function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef<Array<{
    x: number; y: number; vx: number; vy: number;
    ox: number; oy: number; size: number; opacity: number;
  }>>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      const count = 3000;
      particlesRef.current = Array.from({ length: count }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x, y, ox: x, oy: y,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * 1.5 + 0.3,
          opacity: Math.random() * 0.8 + 0.2,
        };
      });
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const REPEL_RADIUS = 120;
      const REPEL_STRENGTH = 5;

      particlesRef.current.forEach((p) => {
        const dx = p.x - mx;
        const dy = p.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS) {
          const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
          p.vx += (dx / dist) * force * REPEL_STRENGTH * 0.1;
          p.vy += (dy / dist) * force * REPEL_STRENGTH * 0.1;
        }

        // drift back toward origin
        p.vx += (p.ox - p.x) * 0.003;
        p.vy += (p.oy - p.y) * 0.003;

        // damping
        p.vx *= 0.95;
        p.vy *= 0.95;

        p.x += p.vx;
        p.y += p.vy;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = TYPEWRITER_WORDS[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < word.length) {
      timeout = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 50);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % TYPEWRITER_WORDS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-gradient-indigo font-grotesk">
      {displayed}
      <span className="inline-block w-0.5 h-[0.85em] bg-indigo-400 ml-1 animate-pulse align-middle" />
    </span>
  );
}

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Layer 1: Starfield */}
      <StarfieldCanvas />

      {/* Layer 2: Radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)",
          zIndex: 1,
        }}
      />

      {/* Layer 3: Foreground Content */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-sm text-indigo-300 font-medium">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            ✦ Open to Freelance & Full-Time
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="font-grotesk font-bold text-5xl md:text-7xl text-white leading-tight mb-3"
        >
          I Build Digital Products
        </motion.h1>

        <motion.h2
          variants={fadeUp}
          className="font-grotesk font-bold text-4xl md:text-6xl leading-tight mb-6"
        >
          That <TypewriterText />
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeUp}
          className="text-[#64748B] font-light text-lg md:text-xl mb-10 max-w-2xl"
        >
          Full-Stack Developer · React · Node.js · PostgreSQL · AWS
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 mb-10">
          <button
            onClick={() => {
              document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-7 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-[0_0_25px_rgba(99,102,241,0.4)]"
          >
            View My Work <ArrowRight size={18} />
          </button>
          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-200"
          >
            Let's Talk
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={fadeUp} className="flex items-center gap-5">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-[#64748B] hover:text-white transition-colors duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-[#64748B]"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
