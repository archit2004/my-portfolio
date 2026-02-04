import React, { useState } from 'react';
import { Bot, Gamepad2, Terminal, Download, ArrowDown } from 'lucide-react';
import LetterGlitch from '../ui/LetterGlitch';
import Iridescence from '../ui/Iridescence'; 
import FaultyTerminal from '../ui/FaultyTerminal'; // Import the new component
import { PROFILE } from '../../data/portfolio';

const HeroSection = () => {
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [isCreativeHovered, setIsCreativeHovered] = useState(false);
  const [isRoboticsHovered, setIsRoboticsHovered] = useState(false);

  // Dynamic Colors for Tech Section:
  const techColors = isTechHovered 
    ? ['#006e14', '#0bb124', '#41ff2c'] 
    : ['#0f172a', '#1e293b', '#334155']; 

  return (
    <section className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col md:block">
      
      {/* MOBILE HERO */}
      <div className="md:hidden flex flex-col items-center justify-center h-full px-6 text-center z-20 relative pt-20">
        <div className="w-32 h-32 rounded-full border-4 border-blue-500 overflow-hidden mb-6 shadow-blue-900/50 shadow-lg">
           <img src="/profile.jpeg" alt="Archit" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">{PROFILE.name}</h1>
        <p className="text-blue-400 font-medium mb-4">{PROFILE.role}</p>
        <p className="text-slate-400 text-sm mb-8">{PROFILE.bio}</p>
        <div className="flex gap-4">
          <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium">Projects</a>
          <a href="#contact" className="px-6 py-2 border border-slate-700 text-slate-300 rounded-full font-medium">Contact</a>
        </div>
      </div>

      {/* DESKTOP X-SPLIT */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        
        {/* ========================================================= */}
        {/* TRIANGLE 1: ROBOTICS (TOP) - WITH FAULTY TERMINAL         */}
        {/* ========================================================= */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 cursor-pointer transition-all duration-500 group hover:z-30 hover:scale-[1.05] origin-top"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
          onClick={() => document.getElementById('robotics-skills')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseEnter={() => setIsRoboticsHovered(true)}
          onMouseLeave={() => setIsRoboticsHovered(false)}
        >
          {/* TERMINAL LAYER */}
          <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isRoboticsHovered ? 'opacity-100' : 'opacity-40'}`}>
            <FaultyTerminal
              scale={1.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={0.5}
              pause={!isRoboticsHovered} // Pause when not hovering to save GPU
              scanlineIntensity={0.5}
              glitchAmount={1}
              flickerAmount={1}
              noiseAmp={1}
              chromaticAberration={0}
              dither={0}
              curvature={0.1}
              tint="#ff6b00" // Orange to match Robotics Theme
              mouseReact={true}
              mouseStrength={0.5}
              pageLoadAnimation={true}
              brightness={0.6}
            />
          </div>

          {/* CONTENT LAYER */}
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 transition z-20 group-hover:translate-y-2">
            <div className="flex flex-col items-center gap-3 drop-shadow-xl">
              <Bot className="w-12 h-12 text-orange-500 group-hover:text-white transition-colors duration-300 drop-shadow-lg" />
              <span className="text-xl font-bold text-orange-500 group-hover:text-white tracking-widest [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                ROBOTICS
              </span>
            </div>
          </div>
        </div>

        {/* TRIANGLE 2: CREATIVE (LEFT) */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 cursor-pointer transition-all duration-500 group hover:z-30 hover:scale-[1.05] origin-left"
          style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}
          onClick={() => document.getElementById('creative-skills')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseEnter={() => setIsCreativeHovered(true)}
          onMouseLeave={() => setIsCreativeHovered(false)}
        >
          {/* FLUID SHADER LAYER */}
          <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isCreativeHovered ? 'opacity-100' : 'opacity-40'}`}>
            <Iridescence 
              color={[0.9, 0.6, 1.0]} 
              mouseReact={true}
              amplitude={0.1}
              speed={isCreativeHovered ? 1.0 : 0}
              scale={3} 
            />
          </div>

          {/* CONTENT LAYER */}
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group-hover:-translate-x-2 transition z-20">
            <Gamepad2 className="w-12 h-12 text-purple-600 group-hover:text-white transition-colors duration-300 drop-shadow-lg" />
            <span className="text-xl font-bold text-purple-600 group-hover:text-white tracking-widest [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
              CREATIVE
            </span>
          </div>
        </div>

        {/* TRIANGLE 3: AI & TECH (RIGHT) */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 cursor-pointer transition-all duration-500 group hover:z-30 hover:scale-[1.05] origin-right"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}
          onClick={() => document.getElementById('tech-skills')?.scrollIntoView({ behavior: 'smooth' })}
          onMouseEnter={() => setIsTechHovered(true)}
          onMouseLeave={() => setIsTechHovered(false)}
        >
           {/* GLITCH LAYER */}
           <div className={`absolute inset-0 w-full h-full mix-blend-screen pointer-events-none transition-opacity duration-300 ${isTechHovered ? 'opacity-100' : 'opacity-80'}`}>
             <LetterGlitch 
                glitchSpeed={isTechHovered ? 50 : 10000}
                glitchColors={techColors} 
                centerVignette={true}
                outerVignette={false}
                smooth={true}
             />
           </div>

           {/* CONTENT LAYER */}
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 transition z-20 group-hover:translate-x-2">
            <div className="flex flex-col items-center gap-3 drop-shadow-xl">
              <Terminal className="w-12 h-12 text-green-600 group-hover:text-white transition-colors duration-300" />
              <span className="text-xl font-bold text-green-600 group-hover:text-white tracking-widest [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.8)]">
                AI & TECH
              </span>
            </div>
          </div>
        </div>

        {/* TRIANGLE 4: PROFILE BACKGROUND SHAPE (BOTTOM) */}
        <div 
          className="absolute inset-0 bg-slate-950 z-0"
          style={{ clipPath: 'polygon(0 100%, 100% 100%, 50% 50%)' }}
        />

        {/* INDEPENDENT LAYER: PROFILE TEXT CONTENT */}
        <div className="absolute inset-x-0 bottom-0 pb-16 z-40 flex items-end justify-center pointer-events-none">
          <div className="text-center max-w-2xl px-4 animate-fadeIn pointer-events-auto">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">{PROFILE.name}</h1>
            <p className="text-slate-400 text-lg mb-8 drop-shadow-md">{PROFILE.tagline}</p>
            <div className="flex justify-center gap-4">
              <a href={PROFILE.resumeLink} className="flex items-center gap-2 px-8 py-3 bg-white text-slate-950 rounded-full font-bold hover:bg-blue-50 transition shadow-lg hover:scale-105">
                <Download size={20} /> Resume
              </a>
              <a href="#about" className="flex items-center gap-2 px-8 py-3 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 transition shadow-lg hover:scale-105 bg-slate-950/50 backdrop-blur-sm">
                Explore <ArrowDown size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* CENTER AVATAR */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 group-hover:opacity-50 transition rounded-full"></div>
            <img 
              src="/profile.jpeg" 
              alt="Profile" 
              className="w-48 h-48 rounded-full border-8 border-slate-950 shadow-2xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;