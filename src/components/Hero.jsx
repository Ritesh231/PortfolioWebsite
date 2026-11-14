import React from 'react';
import { ArrowRight, Mail, Code2, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/personal';

export default function Hero() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-radial-gradient">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Ambient background soft blurs */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Personal Branding & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface border border-border shadow-subtle mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success"></span>
              </span>
              <span className="text-xs font-semibold text-foreground tracking-wide uppercase">
                {personalData.availabilityBadge}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.12] mb-6">
              Building{' '}
              <span className="text-accent relative inline-block">
                Digital Experiences
                <svg className="absolute -bottom-1 left-0 w-full h-2 text-accent/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>{' '}
              That Make an Impact.
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed max-w-2xl mb-8">
              I'm <span className="text-foreground font-semibold">Ritesh Tamboli</span>, a Full Stack Web Developer passionate about building modern websites, interactive user interfaces, and scalable web applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-card shadow-accent/25 hover:shadow-card-hover transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-foreground bg-surface hover:bg-white border border-border hover:border-muted/40 rounded-xl shadow-subtle hover:shadow-card transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-border"
              >
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 mb-8 text-muted">
              <span className="text-xs uppercase tracking-wider font-semibold text-muted/80">Connect:</span>
              <div className="flex items-center gap-2">
                <a
                  href={personalData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-border text-foreground hover:text-accent hover:border-accent hover:scale-105 transition-all shadow-subtle"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-surface border border-border text-foreground hover:text-accent hover:border-accent hover:scale-105 transition-all shadow-subtle"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.contact.email}`}
                  className="p-2.5 rounded-lg bg-surface border border-border text-foreground hover:text-accent hover:border-accent hover:scale-105 transition-all shadow-subtle"
                  aria-label="Email Address"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Professional Information Row */}
            <div className="pt-6 border-t border-border/80 w-full">
              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm font-medium text-muted">
                {personalData.quickInfo.map((info) => (
                  <div key={info} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-foreground/90 font-medium">{info}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Premium Developer-Themed Composition */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Code Editor Window Mockup */}
              <div className="relative rounded-2xl bg-surface border border-border shadow-card overflow-hidden">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-50/80 border-b border-border">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-muted bg-white border border-border/80 px-2.5 py-0.5 rounded-md">
                    <Terminal className="w-3 h-3 text-accent" />
                    <span>DeveloperProfile.jsx</span>
                  </div>
                  <div className="w-12" />
                </div>

                {/* Code Window Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-700 bg-white selection:bg-indigo-100">
                  <div className="text-slate-400 mb-2">{'// Ritesh Tamboli - Full Stack Engineer'}</div>
                  <div>
                    <span className="text-purple-600 font-semibold">const</span>{' '}
                    <span className="text-blue-600 font-semibold">developer</span> = {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">name:</span>{' '}
                    <span className="text-emerald-600 font-medium">'{personalData.name}'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">title:</span>{' '}
                    <span className="text-emerald-600 font-medium">'Full Stack Web Developer'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">coreStack:</span> [
                    <span className="text-emerald-600 font-medium">'React'</span>,{' '}
                    <span className="text-emerald-600 font-medium">'Node.js'</span>,{' '}
                    <span className="text-emerald-600 font-medium">'Tailwind'</span>],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">experience:</span>{' '}
                    <span className="text-amber-600 font-semibold">'Tech Surya IT Solution'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">passion:</span>{' '}
                    <span className="text-emerald-600 font-medium">'Modern, clean, scalable apps'</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-600">status:</span>{' '}
                    <span className="text-indigo-600 font-semibold">'Ready to build'</span>,
                  </div>
                  <div>{'};'}</div>
                  <div className="mt-2 text-purple-600 font-semibold">
                    export default <span className="text-blue-600">developer</span>;
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-4 py-2 bg-slate-50 border-t border-border flex items-center justify-between text-[11px] text-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-success" />
                    <span>Vite Build: Ready</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span>UTF-8</span>
                    <span>JavaScript (React 19)</span>
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE 1: React.js */}
              <div className="absolute -top-6 -right-4 sm:-right-6 bg-surface border border-border/90 rounded-xl px-3.5 py-2 shadow-card flex items-center gap-2.5 animate-float">
                <div className="w-7 h-7 rounded-lg bg-sky-50 flex items-center justify-center text-sky-500 font-bold">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">React.js</div>
                  <div className="text-[10px] text-muted">Components & Hooks</div>
                </div>
              </div>

              {/* FLOATING BADGE 2: Tailwind CSS */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-surface border border-border/90 rounded-xl px-3.5 py-2 shadow-card flex items-center gap-2.5 animate-float-slow">
                <div className="w-7 h-7 rounded-lg bg-teal-50 flex items-center justify-center text-teal-500 font-bold">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-foreground">Tailwind CSS</div>
                  <div className="text-[10px] text-muted">Responsive & Clean</div>
                </div>
              </div>

              {/* FLOATING BADGE 3: Node.js */}
              <div className="hidden sm:flex absolute bottom-8 -right-8 bg-surface border border-border/90 rounded-xl px-3 py-1.5 shadow-card items-center gap-2">
                <div className="w-6 h-6 rounded-md bg-emerald-50 flex items-center justify-center text-emerald-600 text-xs font-mono font-bold">
                  JS
                </div>
                <span className="text-xs font-semibold text-foreground">Node.js APIs</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
