/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        secondary: '#0F0F0F',
        card: '#171717',
        'card-hover': '#1E1E1E',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#B8860B',
          glow: 'rgba(212, 175, 55, 0.4)',
        },
        cyber: {
          green: '#00FF66',
          danger: '#FF3B3B',
          muted: '#9A9A9A',
          border: 'rgba(212, 175, 55, 0.25)',
        }
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        code: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(212, 175, 55, 0.45)',
        'gold-border': '0 0 15px rgba(212, 175, 55, 0.3) inset',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'matrix-fall': 'matrixFall 20s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        }
      }
    },
  },
  plugins: [],
}
