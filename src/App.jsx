import React from 'react';

// Sections
import Navbar from './components/sections/Navbar';
import HeroSection from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      <Navbar />
      <HeroSection />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      
      {/* FOOTER */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-600 text-sm">
        <p>© {new Date().getFullYear()} Archit Tiwari. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
}