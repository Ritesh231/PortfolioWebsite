import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent-light selection:text-accent">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Key Statistics Strip */}
        <Stats />

        {/* About Me Section */}
        <About />

        {/* Featured Projects - Core Showcase Section */}
        <Projects />

        {/* Technical Skills / Tech Stack */}
        <Skills />

        {/* Professional Experience & Timeline */}
        <Experience />

        {/* What I Can Build / Services */}
        <Services />

        {/* Contact Section & Form */}
        <Contact />
      </main>

      {/* Website Footer */}
      <Footer />
    </div>
  );
}
