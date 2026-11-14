import React, { useState, useEffect } from 'react';
import { Download, MessageSquare, Menu, X } from 'lucide-react';
import { personalData } from '../data/personal';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'services', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-border shadow-subtle py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            aria-label="Ritesh Tamboli Portfolio Home"
          >
            <div className="w-10 h-10 rounded-xl bg-accent text-white flex items-center justify-center font-bold text-base shadow-sm group-hover:scale-105 transition-transform duration-200">
              {personalData.shortName}
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-foreground text-base tracking-tight group-hover:text-accent transition-colors">
                {personalData.name}
              </span>
              <span className="text-xs text-muted font-medium hidden sm:block">
                Full Stack Developer
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-1 bg-surface/80 border border-border/80 px-3 py-1.5 rounded-full shadow-subtle backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-accent text-white shadow-sm'
                      : 'text-muted hover:text-foreground hover:bg-black/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-foreground bg-surface border border-border rounded-lg hover:border-accent hover:text-accent transition-all duration-200 shadow-sm"
              title="Download Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-accent hover:bg-accent-hover rounded-lg transition-all duration-200 shadow-sm shadow-accent/20 hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-0 lg:hidden">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-accent rounded-lg"
            >
              Let's Talk
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-foreground hover:text-accent hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-border bg-surface/98 backdrop-blur-lg px-4 pt-3 pb-6 space-y-2 shadow-card animate-fadeIn">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-accent-light text-accent font-semibold'
                      : 'text-muted hover:text-foreground hover:bg-black/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-accent" />}
                </a>
              );
            })}
          </div>

          <div className="pt-2 border-t border-border flex flex-col gap-2">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, '#about')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-foreground bg-background border border-border rounded-lg"
            >
              <Download className="w-4 h-4 text-muted" />
              <span>Download Resume</span>
            </a>
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-sm font-semibold text-white bg-accent rounded-lg shadow-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Let's Talk</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
