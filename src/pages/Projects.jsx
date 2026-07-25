import React, { useState } from 'react';
import { PROJECTS } from '../utils/constants';
import { ExternalLink, Code, Search, Filter } from 'lucide-react';

export const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'Mobile', 'Web', 'Full Stack', 'Backend'];

  const filtered = PROJECTS.filter((p) => {
    const matchesCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.technologies.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-block px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
          <span>{`> ALL PROJECTS ARCHIVE`}</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white font-orbitron">
          COMPLETE <span className="text-gold-gradient">PORTFOLIO</span>
        </h1>
        <p className="text-[#9A9A9A] text-sm sm:text-base">
          Search and explore all production applications, mobile builds, and security projects.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-12 bg-[#171717] p-4 rounded-xl border border-[#D4AF37]/30">
        {/* Search Input */}
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
          <input
            type="text"
            placeholder="Search projects by tech, title, or category..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#0F0F0F] border border-[#D4AF37]/30 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-lg font-orbitron text-xs font-semibold ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_#D4AF37]'
                  : 'bg-[#0F0F0F] text-[#9A9A9A] border border-[#D4AF37]/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="bg-[#171717] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="h-48 overflow-hidden relative">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
              <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded bg-black/80 text-[10px] font-code text-[#D4AF37] border border-[#D4AF37]/40">
                {project.category}
              </div>
            </div>
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-orbitron font-bold text-lg text-white">{project.title}</h3>
                <p className="text-[#9A9A9A] text-xs mt-2 line-clamp-3 font-poppins">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#262626]">
                {project.technologies.map((t, i) => (
                  <span key={i} className="text-[10px] font-code px-2 py-0.5 rounded bg-[#0F0F0F] text-[#D4AF37] border border-[#D4AF37]/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
