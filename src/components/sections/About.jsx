import React from 'react';
import { Trophy, Award, CheckCircle2, GraduationCap } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { PROFILE, ACHIEVEMENTS, CERTIFICATIONS, EDUCATION } from '../../data/portfolio';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[2fr_1fr] gap-12 items-start">
        
        {/* Left Column: Bio + Certs + Achievements */}
        <div>
          <SectionTitle title="About Me" />
          <p className="text-lg text-slate-400 leading-relaxed mb-6">
            {PROFILE.bio}
          </p>
          <p className="text-slate-400 leading-relaxed mb-8">
            My journey involves a unique blend of digital intelligence and physical engineering. 
            Whether I'm optimizing a neural network or calibrating an ESC for a 60kg combat robot, 
            I am driven by the challenge of creating systems that work reliably in the real world.
          </p>
          
          {/* Achievements & Certs Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            
            {/* Achievements Column */}
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Trophy className="text-yellow-500" size={20} /> Achievements
              </h3>
              <div className="space-y-3">
                {ACHIEVEMENTS.map((ach, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-slate-700 transition">
                    <ach.icon className={`w-5 h-5 ${ach.color} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm font-medium text-slate-300">{ach.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Column */}
            <div>
              <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                <Award className="text-blue-500" size={20} /> Certifications
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-slate-700 transition">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Education Sidebar */}
        <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 sticky top-24">
          <h3 className="text-white font-bold mb-4 flex items-center gap-2">
            <GraduationCap className="text-blue-400" /> Education
          </h3>
          {EDUCATION.map((edu, i) => (
            <div key={i} className="mb-4 last:mb-0">
              <div className="font-semibold text-slate-200">{edu.school}</div>
              <div className="text-sm text-blue-400 mb-1">{edu.degree}</div>
              <div className="text-xs text-slate-500">{edu.period}</div>
              <div className="text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800">{edu.details}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;