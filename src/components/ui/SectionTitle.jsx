import React from 'react';

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{title}</h2>
    <div className="h-1 w-20 bg-blue-600 rounded-full mb-4"></div>
    {subtitle && <p className="text-slate-400">{subtitle}</p>}
  </div>
);

export default SectionTitle;