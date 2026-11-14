import React from 'react';
import { statsData } from '../data/stats';

export default function Stats() {
  return (
    <section className="relative z-10 -mt-6 sm:-mt-8 mb-16 sm:mb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface border border-border rounded-2xl shadow-card p-6 sm:p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {statsData.map((stat, idx) => (
              <div
                key={stat.id}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
                }`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight mb-1 text-accent">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base font-semibold text-foreground">
                  {stat.label}
                </div>
                <div className="text-xs text-muted mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

