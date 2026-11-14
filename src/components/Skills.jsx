import React, { useState } from 'react';
import {
  Code2,
  FileCode2,
  Palette,
  Layers,
  Globe,
  Sparkles,
  Server,
  Cpu,
  Network,
  Database,
  TableProperties,
  Binary,
  GitBranch,
  Terminal,
  Send,
  Package,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { skillsData } from '../data/skills';

const iconComponents = {
  Code2,
  FileCode2,
  Palette,
  Layers,
  Globe,
  Sparkles,
  Server,
  Cpu,
  Network,
  Database,
  TableProperties,
  Binary,
  GitBranch,
  Github: GithubIcon,
  Terminal,
  Send,
  Package,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-bold uppercase tracking-wider mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            My Tech Stack
          </h2>
          <p className="text-lg text-muted">
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        {/* Category Tab Buttons */}
        <div className="flex flex-wrap gap-2 mb-10 pb-2 border-b border-border">
          {skillsData.map((category, idx) => (
            <button
              key={category.category}
              type="button"
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-all duration-200 ${
                activeTab === idx
                  ? 'bg-accent text-white shadow-card shadow-accent/20'
                  : 'text-muted hover:text-foreground hover:bg-slate-100'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="mb-6">
          <p className="text-sm text-muted">
            {skillsData[activeTab].description}
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData[activeTab].skills.map((skill) => {
            const Icon = iconComponents[skill.iconName] || Code2;
            return (
              <div
                key={skill.name}
                className="group bg-surface rounded-2xl border border-border hover:border-accent/40 p-5 shadow-card hover:shadow-card-hover transition-all duration-300 flex items-start gap-4"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: skill.bg, color: skill.color }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-base tracking-tight truncate group-hover:text-accent transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-muted px-2 py-0.5 rounded bg-slate-100 border border-border/60">
                      {skill.tag}
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* All Categories Compact Strip */}
        <div className="mt-16 pt-10 border-t border-border">
          <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-4">
            Complete Technology Inventory
          </div>
          <div className="flex flex-wrap gap-2">
            {skillsData.flatMap((cat) => cat.skills).map((s) => (
              <span
                key={s.name}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface border border-border text-xs font-medium text-slate-700 shadow-subtle hover:border-accent transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                <span>{s.name}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
