import React from 'react';
import { ShieldCheck, Heart, Code, Globe, Share2, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';

export const Footer = ({ onNavigate }) => {
  return (
    <footer className="bg-[#050505] border-t border-[#D4AF37]/20 text-[#9A9A9A] font-poppins pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-[#262626]">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] p-0.5 bg-black">
                <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <div>
                <div className="font-orbitron font-extrabold text-white text-base">
                  <span className="text-[#D4AF37]">DULAJ</span> WELIGATHTHA
                </div>
                <div className="text-[10px] font-code text-[#9A9A9A]">CODEX DEVELOPMENTS</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              Building digital solutions with a hacker mindset. Clean code. Secure systems. Satisfied clients.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href={PERSONAL_INFO.contact.github} target="_blank" rel="noreferrer" className="p-2 rounded bg-[#171717] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-white">
                <Code size={16} />
              </a>
              <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded bg-[#171717] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-white">
                <Globe size={16} />
              </a>
              <a href={PERSONAL_INFO.contact.twitter} target="_blank" rel="noreferrer" className="p-2 rounded bg-[#171717] border border-[#D4AF37]/20 hover:border-[#D4AF37] text-white">
                <Share2 size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3 font-orbitron text-xs">
            <div className="text-white font-bold tracking-wider uppercase mb-4 border-l-2 border-[#D4AF37] pl-2">QUICK LINKS</div>
            <ul className="space-y-2 font-poppins font-medium text-xs">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#D4AF37] transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#D4AF37] transition-colors">About</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-[#D4AF37] transition-colors">Services</button></li>
              <li><button onClick={() => onNavigate('portfolio')} className="hover:text-[#D4AF37] transition-colors">Projects</button></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-[#D4AF37] transition-colors">Blog</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#D4AF37] transition-colors">Contact</button></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-3 font-orbitron text-xs">
            <div className="text-white font-bold tracking-wider uppercase mb-4 border-l-2 border-[#D4AF37] pl-2">SERVICES</div>
            <ul className="space-y-2 font-poppins text-xs">
              <li><a href="#services" className="hover:text-[#D4AF37]">Web Development</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37]">Mobile App (Flutter)</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37]">UI/UX Design</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37]">Backend Architecture</a></li>
              <li><a href="#services" className="hover:text-[#D4AF37]">Cyber Security Audit</a></li>
            </ul>
          </div>

          {/* Column 4: System Status Widget */}
          <div className="lg:col-span-3 space-y-4">
            <div className="font-orbitron font-bold text-xs text-white uppercase tracking-wider border-l-2 border-[#D4AF37] pl-2">SYSTEM STATUS</div>
            <div className="bg-[#171717] border border-[#D4AF37]/30 rounded-lg p-4 font-code text-xs space-y-3">
              <div className="flex items-center space-x-2 text-[#00FF66]">
                <span className="w-2 h-2 rounded-full bg-[#00FF66] animate-pulse" />
                <span>{`> All Systems Operational`}</span>
              </div>

              {/* Animated Equalizer Bar */}
              <div className="flex items-end justify-between h-8 gap-1 pt-2">
                {[40, 70, 90, 60, 100, 85, 95, 65, 80, 100, 75, 90].map((h, idx) => (
                  <div
                    key={idx}
                    className="w-full bg-[#00FF66] rounded-t opacity-80 animate-pulse"
                    style={{ height: `${h}%`, animationDelay: `${idx * 0.1}s` }}
                  />
                ))}
              </div>

              <div className="text-[10px] text-[#9A9A9A] flex justify-between border-t border-[#262626] pt-2">
                <span>Uptime Target</span>
                <span className="text-[#D4AF37] font-bold">99.99%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs space-y-3 sm:space-y-0">
          <div>
            © 2026 Dulaj Weligaththa. All rights reserved.
          </div>
          <div className="flex items-center space-x-1">
            <span>Crafted with</span>
            <Heart size={14} className="text-[#FF3B3B] fill-[#FF3B3B]" />
            <span>and elegant code.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
