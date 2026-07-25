import React, { useEffect, useState } from 'react';

export const CursorGlow = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('button, a, input, textarea, .cyber-card')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Dynamic Gold Radial Glow Spotlight */}
      <div
        className="fixed pointer-events-none z-30 transition-transform duration-75 ease-out rounded-full mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: isHovered ? '350px' : '220px',
          height: isHovered ? '350px' : '220px',
          transform: 'translate(-50%, -50%)',
          background: isHovered
            ? 'radial-gradient(circle, rgba(212, 175, 55, 0.18) 0%, rgba(212, 175, 55, 0.05) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.02) 50%, transparent 75%)',
        }}
      />
    </>
  );
};
