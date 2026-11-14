import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Code2, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectDetails({ project, onClose }) {
  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scroll while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-surface rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col animate-scaleUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-slate-50/80">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold text-accent bg-accent-light px-2.5 py-1 rounded-md">
              PROJECT {project.number}
            </span>
            <span className="text-xs text-muted font-medium hidden sm:inline-block">
              {project.category}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-muted hover:text-foreground hover:bg-slate-200/60 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Title & Headline */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                {project.badge || project.category}
              </div>
              <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                {project.title}
              </h2>
            </div>

            {/* Quick Live Link Action */}
            <div className="flex items-center gap-3">
              {project.liveUrl && project.liveUrl !== '#' && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-sm transition-all"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-foreground bg-background border border-border hover:border-accent rounded-xl transition-all"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Project Preview Image / Browser Mockup */}
          {project.image ? (
            <div className="rounded-xl overflow-hidden border border-border shadow-card bg-slate-100">
              <div className="px-3.5 py-2.5 bg-slate-100 border-b border-border flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="flex-1 max-w-sm mx-auto bg-white rounded-md px-3 py-0.5 text-[11px] font-mono text-muted truncate text-center border border-border/60">
                  {project.liveUrl}
                </div>
              </div>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative overflow-hidden"
                title="Open live website in new tab"
              >
                <img
                  src={project.image}
                  alt={project.altText || `${project.title} screenshot`}
                  className="w-full h-auto max-h-[380px] object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-lg bg-surface text-foreground text-xs font-semibold shadow-card flex items-center gap-1.5">
                    <span>Open Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-accent" />
                  </span>
                </div>
              </a>
            </div>
          ) : (
            <div className={`p-8 rounded-xl border border-dashed border-border bg-gradient-to-br ${project.placeholderColor || 'from-indigo-50 to-slate-50'} text-center`}>
              <Code2 className="w-10 h-10 text-muted mx-auto mb-2 opacity-50" />
              <div className="text-sm font-semibold text-foreground">Project Screenshot Placeholder</div>
              <p className="text-xs text-muted max-w-md mx-auto mt-1">
                Screenshot can be uploaded here. Centralized configuration in <code className="text-accent bg-accent-light px-1 py-0.5 rounded">src/data/projects.js</code>.
              </p>
            </div>
          )}

          {/* Grid: Overview & Objective */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-50 border border-border/80">
              <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                Project Overview
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {project.fullDescription || project.shortDescription}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-border/80">
              <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-accent" />
                Project Objective
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {project.objective}
              </p>
            </div>
          </div>

          {/* Main Features */}
          {project.mainFeatures && project.mainFeatures.length > 0 && (
            <div>
              <h3 className="text-base font-bold text-foreground mb-3">
                Key Features & Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.mainFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-surface border border-border/70 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-3">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-accent-light text-accent border border-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* My Contribution */}
          {project.myContribution && (
            <div className="p-5 rounded-xl bg-indigo-50/50 border border-indigo-100">
              <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-1">
                My Contribution • {project.role}
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                {project.myContribution}
              </p>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-border flex items-center justify-between">
          <div className="text-xs text-muted">
            Press <kbd className="px-1.5 py-0.5 bg-white border border-border rounded text-[10px] font-mono shadow-sm">Esc</kbd> to close
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-foreground bg-surface border border-border hover:bg-white rounded-lg shadow-sm"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
