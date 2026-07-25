import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2 } from 'lucide-react';
import { PROCESS_STEPS } from '../../utils/constants';

export const Process = () => {
  return (
    <section id="process" className="py-24 relative bg-[#0F0F0F]/80 border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
            <span>{`> DEVELOPMENT WORKFLOW`}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            THE 6-STEP <span className="text-gold-gradient">ENGINEERING PROCESS</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm sm:text-base">
            From initial requirement analysis to continuous automated monitoring.
          </p>
        </div>

        {/* Workflow Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCESS_STEPS.map((stepItem, idx) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative bg-[#171717] border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,175,55,0.25)] flex flex-col justify-between group"
            >
              {/* Step Number Circle */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-orbitron text-3xl font-extrabold text-gold-gradient">
                  {stepItem.step}
                </span>
                <CheckCircle2 size={18} className="text-[#00FF66]" />
              </div>

              <div>
                <h3 className="font-orbitron font-bold text-lg text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-[#9A9A9A] text-xs leading-relaxed font-poppins">
                  {stepItem.desc}
                </p>
              </div>

              {/* Step Flow Arrow Indicator */}
              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:flex justify-end pt-4 text-[#D4AF37]/50 group-hover:text-[#D4AF37]">
                  <span className="font-code text-xs">NEXT PHASE →</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
