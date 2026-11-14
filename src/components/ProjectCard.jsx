import React from 'react';
import { ExternalLink, Info, ArrowUpRight, Code2, Monitor, Sparkles } from 'lucide-react';

export default function ProjectCard({ project, onSelect, isFeaturedLarge = false }) {
  const isPlaceholder = project.isPlaceholder;

  return (
    <div
      className={`group bg-surface rounded-2xl border border-border hover:border-accent/50 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col overflow-hidden relative ${
        isFeaturedLarge ? 'lg:flex-row' : ''
      }`}
    >
      {/* Visual Preview / Browser Frame Container */}
      <div
        className={`relative overflow-hidden bg-slate-100 border-b lg:border-b-0 ${
          isFeaturedLarge
            ? 'lg:w-3/5 lg:border-r border-border min-h-[300px] sm:min-h-[380px]'
            : 'w-full min-h-[220px] sm:min-h-[260px]'
        }`}
      >
        {/* Browser Top Window Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 px-3 py-2 bg-slate-100/95 backdrop-blur-sm border-b border-border/80 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
          </div>
          
          <div className="text-[11px] font-mono text-muted/80 truncate max-w-[200px] sm:max-w-xs px-2.5 py-0.5 rounded bg-white/80 border border-border/60">
            {project.liveUrl !== '#' ? project.liveUrl.replace('https://', '') : `app.${project.id}.dev`}
          </div>

          <div className="flex items-center gap-1 text-[11px] text-muted">
            <Monitor className="w-3.5 h-3.5" />
          </div>
        </div>

        {/* Project Visual Body */}
        {project.image ? (
          <div
            onClick={() => onSelect(project)}
            className="w-full h-full pt-8 cursor-pointer overflow-hidden relative block"
            title="Click to view project details"
          >
            <img
              src={project.image}
              alt={project.altText || `${project.title} live screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-3.5 py-2 rounded-xl bg-surface/95 backdrop-blur-md text-foreground text-xs font-semibold shadow-card flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <Info className="w-3.5 h-3.5 text-accent" />
                <span>View Full Details</span>
              </span>
            </div>
          </div>
        ) : (
          /* Placeholder Aesthetic Illustration */
          <div
            onClick={() => onSelect(project)}
            className={`w-full h-full pt-8 flex flex-col items-center justify-center p-8 cursor-pointer bg-gradient-to-br ${
              project.placeholderColor || 'from-indigo-50/60 to-slate-100/60'
            }`}
          >
            <div className="w-14 h-14 rounded-2xl bg-white border border-border shadow-subtle flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-7 h-7" />
            </div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-border text-[11px] font-semibold text-muted mb-1 shadow-sm">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>Customizable Project Slot</span>
            </span>
            <p className="text-xs text-muted text-center max-w-xs">
              Easily replace with your own project screenshot and details in <code className="text-accent">projects.js</code>
            </p>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div
        className={`p-6 sm:p-7 flex flex-col justify-between flex-1 ${
          isFeaturedLarge ? 'lg:w-2/5' : ''
        }`}
      >
        <div>
          {/* Top meta tags */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-accent bg-accent-light px-2 py-0.5 rounded">
                {project.number}
              </span>
              <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            {isPlaceholder && (
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-muted border border-border">
                Editable
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3
            onClick={() => onSelect(project)}
            className="text-xl sm:text-2xl font-bold text-foreground mb-3 tracking-tight group-hover:text-accent transition-colors cursor-pointer flex items-center justify-between"
          >
            <span>{project.title}</span>
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0" />
          </h3>

          {/* Short Description */}
          <p className="text-sm text-muted leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-700 border border-border/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs font-medium rounded-md bg-slate-50 text-muted border border-border/60">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-border flex items-center gap-3">
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-sm transition-all duration-200 flex-1 text-center"
            >
              <span>View Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              type="button"
              onClick={() => onSelect(project)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-sm transition-all duration-200 flex-1 text-center"
            >
              <span>Explore Preview</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          )}

          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-foreground bg-surface hover:bg-slate-50 border border-border rounded-xl transition-all shadow-subtle"
            title="View full project details"
          >
            <Info className="w-3.5 h-3.5 text-muted" />
            <span className="hidden sm:inline">Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
