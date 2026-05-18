"use client";

import { Linkedin, Mail, Github } from "lucide-react";

const QUICK_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
  { label: "Blog", href: "#", muted: true },
];

const SOCIALS = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/hardikbajaj364/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/Hardik364", label: "GitHub" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    if (id === "#") return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060606] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left */}
          <div className="space-y-3">
            <div className="w-10 h-10 border border-indigo-500/60 rounded flex items-center justify-center text-white font-grotesk font-bold text-lg">
              H.
            </div>
            <p className="text-sm font-medium text-white">Full-Stack Developer</p>
            <p className="text-xs text-[#64748B] leading-relaxed max-w-xs">
              Building digital products that scale, perform, and deliver real value. Based in Sirhind, Punjab, India.
            </p>
          </div>

          {/* Center */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-4">Quick Links</p>
            <ul className="space-y-2">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className={`text-sm transition-colors ${
                      l.muted
                        ? "text-[#64748B]/60 cursor-default"
                        : "text-[#64748B] hover:text-white"
                    }`}
                  >
                    {l.label}
                    {l.muted && <span className="ml-1.5 text-xs text-[#64748B]/50">(coming soon)</span>}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-4">Connect</p>
            <div className="flex gap-3 mb-4">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/[0.08] flex items-center justify-center text-[#64748B] hover:text-white hover:border-indigo-500/40 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <a
              href="mailto:Hardikbajaj364@gmail.com"
              className="flex items-center gap-2 text-sm text-[#64748B] hover:text-white transition-colors"
            >
              <Mail size={14} />
              Hardikbajaj364@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] text-center">
          <p className="text-xs text-[#64748B]">
            © 2025 Hardik Bajaj · Built with Next.js, TypeScript & ♥ · Sirhind, Punjab, India
          </p>
        </div>
      </div>
    </footer>
  );
}
