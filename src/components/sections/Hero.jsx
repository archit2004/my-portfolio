import React, { useState, useRef, useEffect } from 'react';
import { Bot, Gamepad2, Terminal, Download, ArrowDown } from 'lucide-react';
import LetterGlitch from '../ui/LetterGlitch';
import Iridescence from '../ui/Iridescence'; 
import FaultyTerminal from '../ui/FaultyTerminal'; 
import { PROFILE } from '../../data/portfolio';

const HeroSection = () => {
  const [isTechHovered, setIsTechHovered] = useState(false);
  const [isCreativeHovered, setIsCreativeHovered] = useState(false);
  const [isRoboticsHovered, setIsRoboticsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const sectionRef = useRef(null);

  const resetHovers = () => {
    setIsTechHovered(false);
    setIsCreativeHovered(false);
    setIsRoboticsHovered(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const techColors = isTechHovered 
    ? ['#006e14', '#0bb124', '#41ff2c'] 
    : ['#0f172a', '#1e293b', '#334155']; 

  return (
    <section 
      ref={sectionRef} 
      onMouseLeave={resetHovers} 
      className="relative w-full h-screen bg-slate-950 overflow-hidden flex flex-col md:block"
    >
      {/* DESKTOP X-SPLIT */}
      <div className="hidden md:block absolute inset-0 w-full h-full">
        
        {/* TRIANGLE 1: ROBOTICS (TOP) */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 cursor-pointer transition-all duration-500 group hover:z-30 hover:scale-[1.02] origin-top"
          style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
          onMouseEnter={() => { resetHovers(); setIsRoboticsHovered(true); }}
          onMouseLeave={() => setIsRoboticsHovered(false)}
          onClick={() => document.getElementById('robotics-skills')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isRoboticsHovered ? 'opacity-100' : 'opacity-60'}`}>
            {isVisible && (
              <FaultyTerminal
                scale={1.5} gridMul={[2, 1]} digitSize={1.2}
                timeScale={isRoboticsHovered ? 0.5 : 0.1} // Restored to 0.1 to prevent blank state
                glitchAmount={isRoboticsHovered ? 1.0 : 0.0}
                flickerAmount={isRoboticsHovered ? 0.5 : 0.0}
                noiseAmp={isRoboticsHovered ? 1.0 : 0.1} // Restored to 0.1
                chromaticAberration={isRoboticsHovered ? 1.0 : 0.0}
                tint="#ff6b00" brightness={isRoboticsHovered ? 0.8 : 0.4}
                mouseReact={true}
              />
            )}
          </div>
          <div className="absolute top-[15%] left-1/2 -translate-x-1/2 transition z-20 group-hover:translate-y-2 text-center">
             <Bot className="w-12 h-12 text-orange-500 group-hover:text-white transition-colors mx-auto mb-2" />
             <span className="text-xl font-bold text-orange-500 group-hover:text-white tracking-widest">ROBOTICS</span>
          </div>
        </div>

        {/* TRIANGLE 2: CREATIVE (LEFT) */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 cursor-pointer transition-all duration-500 group hover:z-30 hover:scale-[1.02] origin-left"
          style={{ clipPath: 'polygon(0 0, 0 100%, 50% 50%)' }}
          onMouseEnter={() => { resetHovers(); setIsCreativeHovered(true); }}
          onMouseLeave={() => setIsCreativeHovered(false)}
          onClick={() => document.getElementById('creative-skills')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${isCreativeHovered ? 'opacity-100' : 'opacity-40'}`}>
            {isVisible && (
              <Iridescence 
                color={[0.9, 0.6, 1.0]} 
                mouseReact={isCreativeHovered}
                amplitude={isCreativeHovered ? 0.3 : 0.05} 
                speed={isCreativeHovered ? 1.0 : 0.0} // Fully static when inactive
                scale={3} 
              />
            )}
          </div>
          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col items-center gap-2 group-hover:-translate-x-2 transition z-20">
            <Gamepad2 className="w-12 h-12 text-purple-600 group-hover:text-white transition-colors" />
            <span className="text-xl font-bold text-purple-600 group-hover:text-white tracking-widest">CREATIVE</span>
          </div>
        </div>

        {/* TRIANGLE 3: AI & TECH (RIGHT) */}
        <div 
          className="absolute inset-0 z-10 bg-slate-900 cursor-pointer transition-all duration-500 group hover:z-30 hover:scale-[1.02] origin-right"
          style={{ clipPath: 'polygon(100% 0, 100% 100%, 50% 50%)' }}
          onMouseEnter={() => { resetHovers(); setIsTechHovered(true); }}
          onMouseLeave={() => setIsTechHovered(false)}
          onClick={() => document.getElementById('tech-skills')?.scrollIntoView({ behavior: 'smooth' })}
        >
           <div className={`absolute inset-0 w-full h-full mix-blend-screen pointer-events-none transition-opacity duration-300 ${isTechHovered ? 'opacity-100' : 'opacity-80'}`}>
             {isVisible && (
               <LetterGlitch 
                glitchSpeed={isTechHovered ? 50 : 0} // Fully static when inactive
                glitchColors={techColors} centerVignette={true} smooth={true}
               />
             )}
           </div>
          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 transition z-20 group-hover:translate-x-2">
            <div className="flex flex-col items-center gap-3">
              <Terminal className="w-12 h-12 text-green-600 group-hover:text-white transition-colors" />
              <span className="text-xl font-bold text-green-600 group-hover:text-white tracking-widest">AI & TECH</span>
            </div>
          </div>
        </div>

        {/* DEAD ZONE - Reduced to match Profile Picture size (w-48 = 192px) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 z-[45] pointer-events-auto bg-transparent rounded-full"
          onMouseEnter={resetHovers}
        />

        {/* PROFILE CONTENT */}
        <div className="absolute inset-x-0 bottom-0 pb-16 z-[55] flex items-end justify-center pointer-events-none">
          <div className="text-center max-w-2xl px-4 pointer-events-auto">
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tight">{PROFILE.name}</h1>
            <p className="text-slate-400 text-lg mb-8">{PROFILE.tagline}</p>
            <div className="flex justify-center gap-4">
              <a href={PROFILE.resumeLink} className="flex items-center gap-2 px-8 py-3 bg-white text-slate-950 rounded-full font-bold hover:scale-105 transition shadow-lg">
                <Download size={20} /> Resume
              </a>
              <a href="#about" className="flex items-center gap-2 px-8 py-3 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-800 transition shadow-lg bg-slate-950/50 backdrop-blur-sm">
                Explore <ArrowDown size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* CENTER AVATAR */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[50] pointer-events-none">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-20 transition rounded-full"></div>
            <img src="/profile.jpeg" alt="Profile" className="w-48 h-48 rounded-full border-8 border-slate-950 shadow-2xl relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;