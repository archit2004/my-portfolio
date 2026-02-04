import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { PROFILE } from '../../data/portfolio';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">Let's Build the Future</h2>
        <p className="text-slate-400 mb-8 text-lg">
          I'm currently looking for internships and collaborative opportunities in AI, Robotics, and Software Engineering.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition w-full md:w-auto justify-center">
            <Mail /> Send Email
          </a>
          <div className="flex gap-4">
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 border border-slate-800 transition">
              <Linkedin />
            </a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 border border-slate-800 transition">
              <Github />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;