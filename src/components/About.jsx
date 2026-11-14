import React from 'react';
import { Download, Layout, Server, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { personalData } from '../data/personal';

export default function About() {
  const iconMap = {
    Layout: Layout,
    Server: Server,
    Lightbulb: Lightbulb,
  };

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-bold uppercase tracking-wider mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-4">
            {personalData.aboutMe.heading}
          </h2>
          <p className="text-lg sm:text-xl text-muted">
            {personalData.aboutMe.subheading}
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Personal narrative & CTA */}
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-slate-600 leading-relaxed">
            {personalData.aboutMe.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-600">
                {p}
              </p>
            ))}

            {/* Key Principles Checklist */}
            <div className="pt-4 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm font-medium text-foreground">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                <span>Modern React Ecosystem</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                <span>Pixel-Perfect Responsiveness</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                <span>REST API Integration</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                <span>Clean & Maintainable Code</span>
              </div>
            </div>

            {/* Resume & Connect CTA */}
            <div className="pt-6 flex flex-wrap items-center gap-4">
              <a
                href={personalData.contact.resumeUrl}
                download="Ritesh_Tamboli_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-card shadow-accent/25 hover:shadow-card-hover transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-3 text-sm font-semibold text-foreground bg-surface hover:bg-white border border-border hover:border-muted/40 rounded-xl shadow-subtle transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-muted" />
              </a>
            </div>
          </div>

          {/* RIGHT: Three Elegant Focus Cards */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {personalData.aboutMe.highlights.map((item, index) => {
              const IconComponent = iconMap[item.iconName] || Layout;
              return (
                <div
                  key={item.title}
                  className="bg-surface border border-border hover:border-accent/40 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-muted">0{index + 1}.</span>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

