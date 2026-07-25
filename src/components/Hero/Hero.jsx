import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, UserCheck, Shield, Terminal as TerminalIcon, CheckCircle2, ChevronRight, Lock, Server } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import { useTypingEffect } from '../../hooks/useTypingEffect';
import { CircuitCanvas } from '../../animations/CircuitCanvas';

export const Hero = ({ onExploreClick, onContactClick }) => {
  const { displayedText } = useTypingEffect("Building Secure Digital Solutions, Securing Futures", 35, 500);

  const trustedClients = [
    { name: "TechCorp", icon: "❖" },
    { name: "DevStudio", icon: "◈" },
    { name: "SecureNet", icon: "⬢" },
    { name: "Cloudify", icon: "☁" },
    { name: "DataHex", icon: "⬡" }
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-cyber-grid">
      <CircuitCanvas />

      {/* Hero Body Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Heading & Calls to Action */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 space-y-6 text-left"
        >
          {/* Top Hacker Terminal Pill */}
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#171717]/80 border border-[#D4AF37]/40 backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-ping" />
            <span className="font-code text-xs text-[#D4AF37]">
              {`> ${displayedText}`}
            </span>
          </div>

          {/* Main Huge Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-orbitron tracking-tight text-white leading-[1.1]">
            WE BUILD.<br />
            WE SECURE.<br />
            <span className="text-gold-gradient drop-shadow-[0_0_25px_rgba(212,175,55,0.4)]">
              WE INNOVATE.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#9A9A9A] text-base sm:text-lg max-w-2xl font-poppins font-normal leading-relaxed">
            {PERSONAL_INFO.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onExploreClick}
              className="px-7 py-3.5 rounded-lg font-orbitron text-xs sm:text-sm font-bold text-black bg-gradient-to-r from-[#D4AF37] to-[#FFF0B3] hover:from-[#FFF0B3] hover:to-[#D4AF37] transition-all duration-300 flex items-center space-x-3 shadow-[0_0_25px_rgba(212,175,55,0.5)] hover:scale-105"
            >
              <span>VIEW MY WORK</span>
              <ChevronRight size={16} />
            </button>

            <button
              onClick={onContactClick}
              className="px-7 py-3.5 rounded-lg font-orbitron text-xs sm:text-sm font-bold text-white bg-[#0F0F0F] border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:bg-[#171717] transition-all duration-300 flex items-center space-x-3 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:scale-105"
            >
              <UserCheck size={16} className="text-[#D4AF37]" />
              <span>HIRE ME</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: 3D Cyber Hooded Visual & Hacker Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative flex flex-col items-center"
        >
          {/* Hacker Hero Visual — new full PNG */}
          <div className="relative w-full max-w-lg">
            {/* Outer gold spinning ring accent */}
            <div className="absolute -inset-3 rounded-2xl border border-dashed border-[#D4AF37]/30 animate-[spin_40s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-1 rounded-2xl border border-[#D4AF37]/20 pointer-events-none" />

            {/* Hacker PNG Image */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_60px_rgba(212,175,55,0.3)] bg-black">
              <img
                src="/hacker-hero.png"
                alt="Dulaj Weligaththa Hacker Visual"
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating Hacker Terminal Box Overlay */}
          <div className="w-full max-w-md mt-6 bg-[#0F0F0F]/90 border border-[#D4AF37]/40 rounded-xl p-4 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] font-code text-xs space-y-2">
            <div className="flex items-center justify-between border-b border-[#262626] pb-2 text-[#9A9A9A]">
              <div className="flex items-center space-x-2">
                <TerminalIcon size={14} className="text-[#D4AF37]" />
                <span className="text-white font-semibold">{`> ACCESS GRANTED`}</span>
              </div>
              <span className="text-[10px] text-[#00FF66] px-2 py-0.5 rounded bg-[#00FF66]/10 border border-[#00FF66]/30">LIVE AUDIT</span>
            </div>

            <div className="space-y-1.5 text-[#9A9A9A] text-[11px] pt-1">
              <div className="flex justify-between">
                <span>System Security Audit:</span>
                <span className="text-[#00FF66] font-semibold">PASSED (0 Vuln)</span>
              </div>
              <div className="flex justify-between">
                <span>Encryption Protocol:</span>
                <span className="text-[#D4AF37]">AES-256 Enabled</span>
              </div>
              <div className="flex justify-between">
                <span>Active Stack:</span>
                <span className="text-white">Flutter, React, Node, Supabase</span>
              </div>
              <div className="flex justify-between">
                <span>Performance Benchmark:</span>
                <span className="text-[#00FF66]">99.9% Optimal</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Trusted By Clients Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12 border-t border-[#D4AF37]/15 mt-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="font-orbitron text-xs text-[#9A9A9A] tracking-widest uppercase">
            TRUSTED BY
          </span>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {trustedClients.map((client, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 text-[#9A9A9A] hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer font-orbitron text-sm font-semibold tracking-wider"
              >
                <span className="text-[#D4AF37] text-lg">{client.icon}</span>
                <span>{client.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
