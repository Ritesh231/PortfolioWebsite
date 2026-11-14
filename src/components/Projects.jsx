import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { projectsData } from '../data/projects';
import ProjectCard from './ProjectCard';
import ProjectDetails from './ProjectDetails';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'live', label: 'Live Client Websites' },
    { id: 'business', label: 'Business & Retail' },
    { id: 'apps', label: 'Web Applications' },
  ];

  const filteredProjects = projectsData.filter((project) => {
    if (filter === 'live') return !project.isPlaceholder;
    if (filter === 'business') return project.category.includes('Business') || project.category.includes('Salon') || project.category.includes('Electronics');
    if (filter === 'apps') return project.category.includes('Application') || project.category.includes('E-Commerce') || project.category.includes('Platform');
    return true;
  });

  const featuredProject = filteredProjects.find((p) => p.id === 'shivam-salon') || filteredProjects[0];
  const secondaryProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id && !p.isPlaceholder);
  const remainingProjects = filteredProjects.filter((p) => p.id !== featuredProject?.id && p.isPlaceholder);

  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-white/60 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Featured Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              Selected Projects
            </h2>
            <p className="text-lg text-muted">
              A collection of websites and digital experiences I've built.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-100/80 p-1.5 rounded-xl border border-border">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  filter === cat.id
                    ? 'bg-surface text-foreground shadow-sm'
                    : 'text-muted hover:text-foreground'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-8">
          
          {/* Spotlight Hero Card (Project 01) if available in current filter */}
          {featuredProject && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                Spotlight Production Project
              </div>
              <ProjectCard
                project={featuredProject}
                onSelect={setSelectedProject}
                isFeaturedLarge={true}
              />
            </div>
          )}

          {/* Secondary Live Client Projects (Projects 02 & 03: 2-column layout) */}
          {secondaryProjects.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Live Client Websites
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {secondaryProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={setSelectedProject}
                    isFeaturedLarge={false}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Additional / Template Projects (Projects 04, 05, 06: 3-column layout) */}
          {remainingProjects.length > 0 && (
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                More Web Applications & Concepts
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    onSelect={setSelectedProject}
                    isFeaturedLarge={false}
                  />
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
