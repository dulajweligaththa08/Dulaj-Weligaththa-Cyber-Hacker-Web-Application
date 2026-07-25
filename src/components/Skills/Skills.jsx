import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Database, Server, Smartphone, Code, Cloud, Layout } from 'lucide-react';
import { TECH_STACK } from '../../utils/constants';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'Mobile', 'Frontend', 'Backend', 'Database', 'Tools', 'Design'];

  const filteredTech = selectedCategory === 'ALL'
    ? TECH_STACK
    : TECH_STACK.filter(item => item.category === selectedCategory);

  const getTechIcon = (name) => {
    switch (name) {
      case 'Flutter': return <Smartphone className="text-[#D4AF37]" />;
      case 'React.js': return <Code className="text-[#D4AF37]" />;
      case 'Node.js':
      case 'Express.js': return <Server className="text-[#D4AF37]" />;
      case 'Firebase':
      case 'Supabase': return <Cloud className="text-[#D4AF37]" />;
      case 'MongoDB':
      case 'PostgreSQL': return <Database className="text-[#D4AF37]" />;
      case 'Git & GitHub':
      case 'Linux': return <Terminal className="text-[#D4AF37]" />;
      case 'Docker': return <Cpu className="text-[#D4AF37]" />;
      case 'Figma':
      case 'Photoshop': return <Layout className="text-[#D4AF37]" />;
      default: return <Code className="text-[#D4AF37]" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-[#0F0F0F]/80 border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
            <Cpu size={14} />
            <span>{`> MY TECH STACK`}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            TOOLS & <span className="text-gold-gradient">TECHNOLOGIES</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm sm:text-base">
            Modern frameworks, languages, databases, and DevOps tools engineered for maximum performance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-orbitron text-xs font-semibold tracking-wider transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_#D4AF37]'
                  : 'bg-[#171717] text-[#9A9A9A] border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {filteredTech.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="group bg-[#171717] border border-[#D4AF37]/25 hover:border-[#D4AF37] rounded-xl p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] flex flex-col items-center justify-center space-y-3 cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-[#050505] border border-[#D4AF37]/30 group-hover:scale-110 transition-transform">
                {getTechIcon(tech.name)}
              </div>
              <div className="font-orbitron font-semibold text-xs text-white group-hover:text-[#D4AF37]">
                {tech.name}
              </div>
              <div className="text-[10px] font-code text-[#9A9A9A]">
                {tech.level}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
