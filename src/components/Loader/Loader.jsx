import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, ShieldCheck, Cpu } from 'lucide-react';

export const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    "INITIALIZING SYSTEM CORE...",
    "VERIFYING SECURITY PROTOCOLS...",
    "LOADING HACKER FRAMEWORK...",
    "ESTABLISHING ENCRYPTED CONNECTION...",
    "ACCESS GRANTED - SYSTEM READY."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 400);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    if (progress > 20 && currentStepIndex === 0) setCurrentStepIndex(1);
    if (progress > 45 && currentStepIndex === 1) setCurrentStepIndex(2);
    if (progress > 70 && currentStepIndex === 2) setCurrentStepIndex(3);
    if (progress > 90 && currentStepIndex === 3) setCurrentStepIndex(4);
  }, [progress, currentStepIndex]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center p-6 text-white font-code"
    >
      <div className="w-full max-w-md bg-[#0F0F0F] border border-[#D4AF37]/40 rounded-xl p-6 shadow-[0_0_50px_rgba(212,175,55,0.25)] relative overflow-hidden">
        {/* Top Gold Glowing Terminal Bar */}
        <div className="flex items-center justify-between border-b border-[#D4AF37]/20 pb-3 mb-6">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF3B3B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#D4AF37]/80" />
            <div className="w-3 h-3 rounded-full bg-[#00FF66]/80" />
          </div>
          <div className="flex items-center space-x-2 text-xs text-[#D4AF37]">
            <Terminal size={14} className="animate-pulse" />
            <span>CODEX_BOOT_SYSTEM v2.6</span>
          </div>
        </div>

        {/* Logo Emblem */}
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 rounded-full border-2 border-[#D4AF37] flex items-center justify-center p-1 bg-black shadow-[0_0_25px_rgba(212,175,55,0.4)]">
            <img src="/logo.jpg" alt="Dulaj Weligaththa Logo" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>

        {/* Status Output */}
        <div className="h-12 flex items-center justify-center text-center text-xs sm:text-sm text-[#D4AF37] font-semibold tracking-wider">
          <span>{`> ${steps[currentStepIndex]}`}</span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-black/80 rounded-full h-3 border border-[#D4AF37]/30 p-0.5 overflow-hidden my-4">
          <motion.div
            className="h-full bg-gradient-to-r from-[#B8860B] via-[#D4AF37] to-[#FFF0B3] rounded-full shadow-[0_0_15px_#D4AF37]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Counter */}
        <div className="flex justify-between items-center text-xs text-[#9A9A9A]">
          <span className="flex items-center space-x-1">
            <ShieldCheck size={14} className="text-[#00FF66]" />
            <span>SECURE BOOT</span>
          </span>
          <span className="text-[#D4AF37] font-bold text-sm">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};
