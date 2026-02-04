import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { PROJECTS } from '../../data/portfolio';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionTitle title="Featured Projects" />
          
          {/* Filter Tabs */}
          <div className="flex gap-2 bg-slate-900/50 p-1 rounded-lg border border-slate-800 overflow-x-auto">
            {['All', 'AI & Tech', 'Robotics', 'Creative'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition whitespace-nowrap ${
                  activeTab === tab 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-600 transition duration-300 flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <span className={`text-xs font-bold px-2 py-1 rounded bg-slate-800 text-slate-300`}>
                    {project.category}
                  </span>
                  <ExternalLink className="text-slate-600 group-hover:text-blue-400 transition" size={18} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-sm text-blue-400 mb-3">{project.role}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-slate-800/50 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500 bg-slate-950 px-2 py-1 rounded border border-slate-900">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;