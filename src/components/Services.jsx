import React from 'react';
import { Building2, GraduationCap, ShoppingBag, LayoutDashboard, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/services';

const serviceIcons = {
  Building2,
  GraduationCap,
  ShoppingBag,
  LayoutDashboard,
};

export default function Services() {
  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-light text-accent text-xs font-bold uppercase tracking-wider mb-3">
              Services & Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-3">
              How I Can Help You
            </h2>
            <p className="text-lg text-muted">
              From corporate portals to custom SaaS dashboards, here is what I build.
            </p>
          </div>

          <button
            type="button"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-xl shadow-sm transition-all"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => {
            const Icon = serviceIcons[service.iconName] || Building2;
            return (
              <div
                key={service.id}
                className="group bg-surface rounded-2xl border border-border hover:border-accent/40 p-6 sm:p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="text-[11px] font-mono font-bold text-accent mb-1">
                    0{index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <div className="text-xs font-medium text-slate-500 mb-3">
                    {service.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/80 space-y-2">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-success flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

