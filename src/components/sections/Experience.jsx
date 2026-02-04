import React from 'react';
import { Briefcase } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { EXPERIENCE } from '../../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Professional Experience" />
        <div className="relative border-l-2 border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative pl-8 md:pl-12">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-sm text-slate-500 font-mono bg-slate-900 px-2 py-1 rounded border border-slate-800">
                  {exp.period}
                </span>
              </div>
              <div className="text-blue-400 font-medium mb-3 flex items-center gap-2">
                <Briefcase size={16} /> {exp.company}
              </div>
              {Array.isArray(exp.desc) ? (
                <ul className="list-disc pl-4 space-y-2 text-slate-400 max-w-2xl">
                  {exp.desc.map((point, idx) => (
                    <li key={idx} className="pl-1">{point}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-400 max-w-2xl">{exp.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;