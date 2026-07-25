import React from 'react';

export const CircuitCanvas = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20 z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B8860B" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Top Right Circuit Traces */}
        <path d="M 800,0 L 800,120 L 950,270 L 1200,270" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" />
        <circle cx="1200" cy="270" r="4" fill="#D4AF37" />
        <circle cx="800" cy="120" r="3" fill="#D4AF37" />

        {/* Center Circular HUD Circuit */}
        <circle cx="85%" cy="30%" r="180" stroke="url(#gold-grad)" strokeWidth="1" strokeDasharray="6, 6" fill="none" />
        <circle cx="85%" cy="30%" r="220" stroke="url(#gold-grad)" strokeWidth="0.75" strokeDasharray="12, 12" fill="none" />

        {/* Left Bottom Circuit Traces */}
        <path d="M 0,600 L 150,600 L 250,700 L 450,700" stroke="url(#gold-grad)" strokeWidth="1.5" fill="none" />
        <circle cx="450" cy="700" r="4" fill="#D4AF37" />
        <circle cx="150" cy="600" r="3" fill="#D4AF37" />
      </svg>
    </div>
  );
};
