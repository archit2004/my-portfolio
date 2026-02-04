import React from 'react';
import { Terminal, Cpu, Gamepad2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { SKILLS } from '../../data/portfolio';

// Local helper component for this section
const SkillGroup = ({ title, skills }) => (
  <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-800/50">
    <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">{title}</h4>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-300 text-xs rounded-full border border-slate-700 hover:border-blue-500/50 hover:text-blue-400 transition cursor-default">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Technical Expertise" subtitle="My toolkit across software and hardware domains." />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* AI & Tech Block */}
          <div id="tech-skills" className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="text-blue-500" />
              <h3 className="text-xl font-bold text-white">AI & Development</h3>
            </div>
            <SkillGroup title="Languages" skills={SKILLS["Languages"]} />
            <SkillGroup title="AI / ML Stack" skills={SKILLS["AI & ML"]} />
            <SkillGroup title="Web & Tools" skills={SKILLS["Dev & Tools"]} />
          </div>

          {/* Robotics Block */}
          <div id="robotics-skills" className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-orange-500" />
              <h3 className="text-xl font-bold text-white">Robotics & Hardware</h3>
            </div>
            <SkillGroup title="Core Hardware" skills={SKILLS["Robotics & IoT"]} />
          </div>

          {/* Creative Block */}
          <div id="creative-skills" className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="text-purple-500" />
              <h3 className="text-xl font-bold text-white">Creative Tech</h3>
            </div>
            <SkillGroup title="Design Tools" skills={SKILLS["Creative"]} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;