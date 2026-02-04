import React from 'react';

 const Navbar= () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-900">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        <span className="font-bold text-xl text-white tracking-tight">AT.</span>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
        </div>
        <a href="#contact" className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-blue-600 text-white rounded transition">
          Contact Me
        </a>
      </div>
    </nav>
  );
}

export default Navbar;