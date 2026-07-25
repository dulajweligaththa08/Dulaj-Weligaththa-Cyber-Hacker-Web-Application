import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../utils/constants';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
            <MessageSquare size={14} />
            <span>{`> CLIENT REVIEWS`}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            WHAT CLIENTS <span className="text-gold-gradient">SAY</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm sm:text-base">
            Feedback from startup founders, product managers, and enterprise directors.
          </p>
        </div>

        {/* Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#171717]/60 backdrop-blur-xl border border-[#D4AF37]/30 hover:border-[#D4AF37] rounded-xl p-8 transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 text-[#D4AF37]/20 group-hover:text-[#D4AF37]/40 transition-colors w-10 h-10" />

              <div>
                {/* Rating */}
                <div className="flex space-x-1 text-[#D4AF37] mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="#D4AF37" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-[#9A9A9A] text-sm leading-relaxed italic mb-8 font-poppins">
                  "{t.content}"
                </p>
              </div>

              {/* Client Info Header */}
              <div className="flex items-center space-x-4 pt-4 border-t border-[#262626]">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-[#D4AF37] object-cover"
                />
                <div>
                  <div className="font-orbitron font-bold text-sm text-white">{t.name}</div>
                  <div className="text-xs font-code text-[#D4AF37]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
