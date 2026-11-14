import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-border">
          
          {/* Left: Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-accent text-white flex items-center justify-center font-bold text-sm shadow-sm">
                {personalData.shortName}
              </div>
              <span className="font-bold text-lg text-foreground tracking-tight">
                {personalData.name}
              </span>
            </div>
            <p className="text-xs text-muted max-w-sm">
              Designed and developed by {personalData.name}. Building fast, accessible, and scalable web solutions.
            </p>
          </div>

          {/* Center: Quick Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-muted">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right: Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-background border border-border text-muted hover:text-foreground hover:border-accent transition-all shadow-subtle"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-background border border-border text-muted hover:text-foreground hover:border-accent transition-all shadow-subtle"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalData.contact.email}`}
              className="p-2.5 rounded-xl bg-background border border-border text-muted hover:text-foreground hover:border-accent transition-all shadow-subtle"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-accent text-white hover:bg-accent-hover transition-all shadow-sm shadow-accent/20 hover:-translate-y-0.5"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted text-center sm:text-left">
          <div>
            © 2026 {personalData.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1 text-slate-500">
            <span>Crafted with React.js & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
