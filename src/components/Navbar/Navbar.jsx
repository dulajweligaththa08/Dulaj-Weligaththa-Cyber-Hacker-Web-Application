import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Terminal, Shield, ArrowRight } from 'lucide-react';
import { useHacker } from '../../context/HackerContext';

export const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { soundEnabled, setSoundEnabled, playBeep } = useHacker();

  const navLinks = [
    { name: "HOME", id: "home" },
    { name: "SERVICES", id: "services" },
    { name: "ABOUT", id: "about" },
    { name: "PROJECTS", id: "portfolio" },
    { name: "BLOG", id: "blog" },
    { name: "CONTACT", id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    playBeep();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-[#D4AF37]/25 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <div 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-full border border-[#D4AF37] p-0.5 bg-black transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
            <img src="/logo.jpg" alt="Dulaj Weligaththa Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <div className="font-orbitron font-extrabold text-sm sm:text-base tracking-wider text-white flex items-center space-x-1">
              <span className="text-[#D4AF37]">DULAJ</span>
              <span>WELIGATHTHA</span>
            </div>
            <div className="text-[10px] font-code text-[#9A9A9A] tracking-widest uppercase flex items-center space-x-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00FF66] animate-pulse" />
              <span>CODEX DEVELOPMENTS</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`font-orbitron text-xs tracking-widest font-semibold transition-all duration-200 relative py-1 ${
                activeSection === link.id
                  ? 'text-[#D4AF37]'
                  : 'text-[#9A9A9A] hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"
                />
              )}
            </button>
          ))}
        </nav>

        {/* Action Controls & CTA */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg border border-[#D4AF37]/30 text-[#9A9A9A] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all bg-black/40"
            title={soundEnabled ? "Mute Hacker Sound" : "Enable Hacker Sound"}
          >
            {soundEnabled ? <Volume2 size={16} className="text-[#D4AF37]" /> : <VolumeX size={16} />}
          </button>

          {/* Let's Talk CTA */}
          <button
            onClick={() => scrollToSection('contact')}
            className="group relative px-5 py-2 rounded-lg font-orbitron text-xs font-bold text-[#D4AF37] border border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center space-x-2 shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]"
          >
            <span>LET'S TALK</span>
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center space-x-3">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-lg border border-[#D4AF37]/30 text-[#D4AF37] bg-black/40"
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37] bg-black/60"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F0F0F]/95 border-b border-[#D4AF37]/30 backdrop-blur-xl px-6 py-6"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left font-orbitron text-sm font-semibold tracking-wider py-2 border-b border-[#262626] ${
                    activeSection === link.id ? 'text-[#D4AF37] pl-2' : 'text-white'
                  }`}
                >
                  {`> ${link.name}`}
                </button>
              ))}

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full mt-2 py-3 rounded-lg font-orbitron text-xs font-bold text-black bg-[#D4AF37] flex items-center justify-center space-x-2 shadow-[0_0_20px_#D4AF37]"
              >
                <span>LET'S TALK</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
