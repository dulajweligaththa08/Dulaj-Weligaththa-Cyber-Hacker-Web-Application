import React from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Layout, Server, ShieldCheck, Wrench, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../../utils/constants';

export const Services = ({ onSelectService }) => {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code': return <Code className="w-8 h-8 text-[#D4AF37]" />;
      case 'Mobile': return <Smartphone className="w-8 h-8 text-[#D4AF37]" />;
      case 'Layout': return <Layout className="w-8 h-8 text-[#D4AF37]" />;
      case 'Server': return <Server className="w-8 h-8 text-[#D4AF37]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-[#D4AF37]" />;
      case 'Wrench': return <Wrench className="w-8 h-8 text-[#D4AF37]" />;
      default: return <Code className="w-8 h-8 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="services" className="py-24 relative bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
            <span>{`> SERVICES I OFFER`}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            HIGH-PERFORMANCE <span className="text-gold-gradient">DIGITAL SERVICES</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm sm:text-base">
            End-to-end software development, mobile application engineering, and security solutions.
          </p>
        </div>

        {/* Services Grid (6 Animated Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSelectService(service)}
              className="group relative bg-[#171717]/80 backdrop-blur-md border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_35px_rgba(212,175,55,0.3)] cursor-pointer flex flex-col justify-between"
            >
              {/* Gold Ambient Corner Highlight */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-radial from-[#D4AF37]/10 to-transparent pointer-events-none rounded-tr-xl" />

              <div>
                {/* Icon & Arrow Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-lg bg-[#0F0F0F] border border-[#D4AF37]/40 group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#D4AF37]/30 flex items-center justify-center text-[#9A9A9A] group-hover:text-black group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                {/* Service Titles */}
                <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-[#D4AF37] transition-colors mb-2">
                  {service.title}
                </h3>
                <div className="text-xs font-code text-[#D4AF37] mb-4">
                  {service.subtitle}
                </div>

                {/* Description */}
                <p className="text-[#9A9A9A] text-xs sm:text-sm leading-relaxed mb-6 font-poppins">
                  {service.description}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#262626]">
                {service.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-code px-2.5 py-1 rounded bg-[#0F0F0F] text-[#9A9A9A] border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/40"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
