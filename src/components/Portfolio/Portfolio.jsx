import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Layers, X, Eye, ShieldAlert, Lock, Copyright } from 'lucide-react';
import { PROJECTS } from '../../utils/constants';

export const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [activeProjectModal, setActiveProjectModal] = useState(null);
  const [permissionAlert, setPermissionAlert] = useState(null); // 'demo' | 'source'
  const [isExpanded, setIsExpanded] = useState(false);

  const INITIAL_PROJECTS_LIMIT = 3;

  const filters = ['ALL', 'Mobile', 'Web', 'Full Stack', 'Backend'];

  const filteredProjects = selectedFilter === 'ALL'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedFilter);

  const displayedProjects = isExpanded
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_PROJECTS_LIMIT);

  const handleRestrictedClick = (type) => {
    setPermissionAlert(type);
  };

  const closePermissionAlert = () => setPermissionAlert(null);

  return (
    <section id="portfolio" className="py-24 relative bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
            <Layers size={14} />
            <span>{`> FEATURED PROJECTS`}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            CRAFTED WITH <span className="text-gold-gradient">ELEGANT CODE</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm sm:text-base">
            Explore live production mobile applications, web platforms, and encrypted systems.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setSelectedFilter(filter);
                setIsExpanded(false);
              }}
              className={`px-5 py-2 rounded-lg font-orbitron text-xs font-semibold tracking-wider transition-all duration-200 ${
                selectedFilter === filter
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_#D4AF37]'
                  : 'bg-[#171717] text-[#9A9A9A] border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 9) * 0.08 }}
              className="group bg-[#171717]/90 border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_35px_rgba(212,175,55,0.35)] flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/80 border border-[#D4AF37]/50 text-[10px] font-code text-[#D4AF37] backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="p-3 rounded-full bg-[#D4AF37] text-black hover:scale-110 transition-transform shadow-[0_0_20px_#D4AF37]"
                    title="View Project Details"
                  >
                    <Eye size={18} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-orbitron font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#9A9A9A] text-xs leading-relaxed mt-2 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#262626]">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-code px-2 py-0.5 rounded bg-[#0F0F0F] text-[#D4AF37] border border-[#D4AF37]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length > INITIAL_PROJECTS_LIMIT && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-3 rounded-lg font-orbitron text-xs font-semibold tracking-wider transition-all duration-200 bg-[#171717] text-[#D4AF37] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black hover:shadow-[0_0_20px_#D4AF37]"
            >
              {isExpanded ? 'SHOW LESS' : 'SHOW MORE'}
            </button>
          </div>
        )}
      </div>

      {/* ── Project Detail Modal ── */}
      <AnimatePresence>
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#171717] border border-[#D4AF37] rounded-xl max-w-2xl w-full overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.4)] relative"
            >
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-[#9A9A9A] hover:text-white border border-[#D4AF37]/40"
              >
                <X size={18} />
              </button>

              <div className="h-64 overflow-hidden relative">
                <img
                  src={activeProjectModal.image}
                  alt={activeProjectModal.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171717] to-transparent" />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold font-orbitron text-white">
                    {activeProjectModal.title}
                  </h3>
                  <span className="text-xs font-code text-[#D4AF37] px-3 py-1 rounded bg-[#0F0F0F] border border-[#D4AF37]/30">
                    {activeProjectModal.category}
                  </span>
                </div>

                <p className="text-[#9A9A9A] text-sm leading-relaxed">
                  {activeProjectModal.description}
                </p>

                <div className="space-y-2">
                  <div className="text-xs font-code text-[#D4AF37]">STACK & ARCHITECTURE:</div>
                  <div className="flex flex-wrap gap-2">
                    {activeProjectModal.technologies.map((t, idx) => (
                      <span key={idx} className="text-xs font-code px-3 py-1 rounded bg-[#050505] text-white border border-[#D4AF37]/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons — trigger restricted alert */}
                <div className="flex gap-4 pt-4 border-t border-[#262626]">
                  <button
                    onClick={() => handleRestrictedClick('demo')}
                    className="flex-1 py-2.5 rounded-lg font-orbitron text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#FFF0B3] transition-all text-center flex items-center justify-center space-x-2"
                  >
                    <ExternalLink size={16} />
                    <span>LIVE DEMO</span>
                  </button>
                  <button
                    onClick={() => handleRestrictedClick('source')}
                    className="flex-1 py-2.5 rounded-lg font-orbitron text-xs font-bold text-white bg-[#0F0F0F] border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all text-center flex items-center justify-center space-x-2"
                  >
                    <Code size={16} />
                    <span>SOURCE CODE</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Admin Permission Alert Modal ── */}
      <AnimatePresence>
        {permissionAlert && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-[#0F0F0F] border border-[#FF3B3B]/60 rounded-xl max-w-md w-full p-8 shadow-[0_0_60px_rgba(255,59,59,0.35)] relative overflow-hidden"
            >
              {/* Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none scanlines opacity-20 rounded-xl" />

              {/* Red Glow Corner */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF3B3B]/10 rounded-bl-full pointer-events-none" />

              {/* Icon */}
              <div className="flex justify-center mb-5">
                <div className="relative p-4 rounded-full bg-[#FF3B3B]/10 border-2 border-[#FF3B3B]/50 shadow-[0_0_30px_rgba(255,59,59,0.4)]">
                  {permissionAlert === 'demo'
                    ? <ShieldAlert className="w-10 h-10 text-[#FF3B3B]" />
                    : <Lock className="w-10 h-10 text-[#FF3B3B]" />
                  }
                  <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#FF3B3B] animate-ping" />
                </div>
              </div>

              {/* Status Header */}
              <div className="text-center mb-4">
                <div className="font-code text-xs text-[#FF3B3B] mb-1 tracking-widest">
                  {`> ACCESS DENIED — ERROR 403`}
                </div>
                <h3 className="font-orbitron font-extrabold text-xl text-white">
                  {permissionAlert === 'demo' ? 'LIVE DEMO RESTRICTED' : 'SOURCE CODE RESTRICTED'}
                </h3>
              </div>

              {/* Divider */}
              <div className="border-t border-[#FF3B3B]/20 my-4" />

              {/* Message Body */}
              <div className="bg-[#171717] rounded-lg border border-[#FF3B3B]/25 p-4 font-code text-xs space-y-3 text-[#9A9A9A] leading-relaxed">
                <div className="flex items-start space-x-2">
                  <span className="text-[#FF3B3B] font-bold mt-0.5">!</span>
                  <span>
                    Access to this{' '}
                    <span className="text-white font-semibold">
                      {permissionAlert === 'demo' ? 'live deployment' : 'source repository'}
                    </span>{' '}
                    is restricted and requires explicit <span className="text-[#D4AF37] font-semibold">Admin Authorization</span>.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-[#FF3B3B] font-bold mt-0.5">!</span>
                  <span>
                    This project and all associated assets are protected under{' '}
                    <span className="text-[#D4AF37] font-semibold">Copyright © {new Date().getFullYear()} Dulaj Weligaththa</span>.
                    Unauthorized access, reproduction, or distribution is strictly prohibited.
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-[#00FF66] font-bold mt-0.5">→</span>
                  <span>
                    To request access, please{' '}
                    <button
                      onClick={() => {
                        closePermissionAlert();
                        setActiveProjectModal(null);
                        const el = document.getElementById('contact');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-[#D4AF37] underline underline-offset-2 hover:text-white transition-colors font-semibold"
                    >
                      contact the administrator
                    </button>
                    {' '}with your purpose and credentials.
                  </span>
                </div>
              </div>

              {/* Copyright Footer Badge */}
              <div className="flex items-center justify-center space-x-2 mt-5 text-[10px] font-code text-[#9A9A9A]">
                <Copyright size={12} className="text-[#D4AF37]" />
                <span>{new Date().getFullYear()} DULAJ WELIGATHTHA · ALL RIGHTS RESERVED</span>
              </div>

              {/* Close Button */}
              <button
                onClick={closePermissionAlert}
                className="mt-5 w-full py-3 rounded-lg font-orbitron text-xs font-bold text-white border border-[#FF3B3B]/50 hover:bg-[#FF3B3B]/10 hover:border-[#FF3B3B] transition-all flex items-center justify-center space-x-2"
              >
                <X size={14} />
                <span>CLOSE ALERT</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
