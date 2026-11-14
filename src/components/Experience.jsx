import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Trophy, Star } from 'lucide-react';
import { experienceData, awardData } from '../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-slate-50/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-bold uppercase tracking-wider mb-3">
            Career Timeline
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-muted">
            Practical development experience delivering production software solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* LEFT: Experience Timeline */}
          <div className="lg:col-span-7">
            <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-border">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative pl-12">
                  
                  {/* Timeline Node Icon */}
                  <div className="absolute left-0 top-1.5 w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center shadow-card shadow-accent/25 ring-4 ring-background">
                    <Briefcase className="w-5 h-5" />
                  </div>

                  {/* Card Content */}
                  <div className="bg-surface rounded-2xl border border-border p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-accent-light text-accent">
                        {exp.company}
                      </span>
                      <div className="flex items-center gap-4 text-xs text-muted">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-muted" />
                          <span>{exp.period}</span>
                        </span>
                        <span className="flex items-center gap-1.5 hidden sm:flex">
                          <MapPin className="w-3.5 h-3.5 text-muted" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {exp.role}
                    </h3>

                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {exp.description}
                    </p>

                    {/* Responsibilities & Highlights */}
                    <div className="space-y-2.5 mb-6">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </div>
                      ))}
                    </div>

                    {/* Skill Tags */}
                    <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                      {exp.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-100 text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Achievement Card */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              
              {/* Award Recognition Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-surface border border-amber-200/80 p-7 sm:p-8 shadow-card overflow-hidden">
                <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">
                      {awardData.badge}
                    </span>
                    <div className="text-xs text-muted">
                      {awardData.organization}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-foreground tracking-tight mb-3">
                  {awardData.title}
                </h3>

                <p className="text-sm text-slate-700 leading-relaxed mb-6">
                  {awardData.description}
                </p>

                <div className="pt-4 border-t border-amber-200/60 flex items-center justify-between text-xs font-medium text-amber-900">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    Excellence in Full Stack Delivery
                  </span>
                  <span>{awardData.period}</span>
                </div>
              </div>

              {/* Developer Mindset Card */}
              <div className="bg-surface rounded-2xl border border-border p-6 shadow-subtle">
                <div className="text-xs font-bold uppercase tracking-wider text-accent mb-2">
                  Engineering Philosophy
                </div>
                <p className="text-sm text-muted leading-relaxed">
                  "Every line of code should serve the user. I aim for minimal overhead, intuitive state management, and resilient architecture that scales effortlessly as digital products grow."
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
