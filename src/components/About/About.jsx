import React from 'react';
import { motion } from 'framer-motion';
import { Download, Terminal, Award, CheckCircle, Code, ShieldCheck, User } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

export const About = () => {
  return (
    <section id="about" className="py-24 relative bg-[#0F0F0F]/60 border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
            <User size={14} />
            <span>{`> ABOUT ME`}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            ARCHITECTING SECURE & <span className="text-gold-gradient">SCALABLE CODE</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm sm:text-base font-poppins">
            Combining software engineering precision, cross-platform Flutter development, and security-first mindset.
          </p>
        </div>

        {/* Main 2 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hacker Terminal `whoami` Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-[#171717] border border-[#D4AF37]/40 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)] font-code"
          >
            {/* Terminal Top Window Titlebar */}
            <div className="bg-[#0A0A0A] px-4 py-3 border-b border-[#D4AF37]/20 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#FF3B3B]/80" />
                <div className="w-3 h-3 rounded-full bg-[#D4AF37]/80" />
                <div className="w-3 h-3 rounded-full bg-[#00FF66]/80" />
                <span className="text-xs text-[#9A9A9A] ml-2">dulaj@cyber-system:~</span>
              </div>
              <Terminal size={14} className="text-[#D4AF37]" />
            </div>

            {/* Terminal Output Content */}
            <div className="p-6 text-xs sm:text-sm space-y-3 text-white">
              <div className="text-[#D4AF37] font-semibold">{`> whoami`}</div>
              <div className="pl-4 space-y-2 text-[#9A9A9A]">
                <div><span className="text-[#FFF0B3] font-bold">Name:</span> {PERSONAL_INFO.name}</div>
                <div><span className="text-[#FFF0B3] font-bold">Role:</span> Software Engineer & Flutter Dev</div>
                <div><span className="text-[#FFF0B3] font-bold">Focus:</span> Web, Mobile, Cloud, Security</div>
                <div><span className="text-[#FFF0B3] font-bold">Experience:</span> 5+ Years Industry Practice</div>
                <div><span className="text-[#FFF0B3] font-bold">Location:</span> Remote Worldwide</div>
                <div><span className="text-[#FFF0B3] font-bold">Mission:</span> Code. Secure. Innovate.</div>
              </div>
              
              <div className="pt-4 border-t border-[#262626] text-[11px] text-[#00FF66] flex items-center space-x-2">
                <ShieldCheck size={14} />
                <span>SYSTEM VERIFIED & OPERATIONAL</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Bio & Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold font-orbitron text-white">
              I turn ideas into <span className="text-[#D4AF37]">secure digital experiences</span>.
            </h3>

            <p className="text-[#9A9A9A] text-sm sm:text-base leading-relaxed">
              I am a passionate software engineer with a hacker mindset, focused on building fast, secure, and scalable digital solutions that make an impact. With deep expertise across Flutter, React, Node.js, and database engineering, I turn complex challenges into seamless applications.
            </p>

            {/* Statistics Counters */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-[#171717] border border-[#D4AF37]/30 rounded-xl p-4 text-center hover:border-[#D4AF37] transition-colors"
                >
                  <div className="font-orbitron font-extrabold text-2xl sm:text-3xl text-gold-gradient">
                    {stat.value}
                  </div>
                  <div className="font-poppins text-xs text-[#9A9A9A] mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV CTA */}
            <div className="pt-4">
              <a
                href="/cv.pdf"
                download="Dulaj_Weligaththa_CV.pdf"
                className="inline-flex items-center space-x-3 px-6 py-3.5 rounded-lg font-orbitron text-xs sm:text-sm font-bold text-white bg-[#171717] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.2)]"
              >
                <Download size={16} />
                <span>DOWNLOAD CV</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
