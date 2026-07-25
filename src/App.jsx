import React, { useState } from 'react';
import { HackerProvider, useHacker } from './context/HackerContext';
import { useLenisScroll } from './hooks/useLenisScroll';
import { Loader } from './components/Loader/Loader';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { MatrixRain } from './animations/MatrixRain';
import { ParticleBackground } from './animations/ParticleBackground';
import { CursorGlow } from './animations/CursorGlow';
import { Home } from './pages/Home';
import { ProjectsPage } from './pages/Projects';
import { BlogPage } from './pages/Blog';
import { ContactPage } from './pages/Contact';
import { AdminLogin } from './pages/AdminLogin';
import { AnimatePresence } from 'framer-motion';

const MainApp = () => {
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState('home');
  const [activeSection, setActiveSection] = useState('home');
  const { matrixActive } = useHacker();

  useLenisScroll();

  const handleNavigate = (pageOrSection) => {
    if (['home', 'projects', 'blog', 'contact', 'admin'].includes(pageOrSection)) {
      setActivePage(pageOrSection);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActivePage('home');
      setActiveSection(pageOrSection);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#D4AF37] selection:text-black overflow-x-hidden">
      {/* Boot Loading Screen */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* Cyber Animation Layers */}
          {matrixActive && <MatrixRain />}
          <ParticleBackground />
          <CursorGlow />

          {/* Fixed Navbar */}
          <Navbar
            activeSection={activePage === 'home' ? activeSection : activePage}
            setActiveSection={(id) => {
              if (['projects', 'blog', 'contact', 'admin'].includes(id)) {
                setActivePage(id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                setActivePage('home');
                setActiveSection(id);
              }
            }}
          />

          {/* Page Routing Render */}
          {activePage === 'home' && <Home onNavigate={handleNavigate} />}
          {activePage === 'projects' && <ProjectsPage />}
          {activePage === 'blog' && <BlogPage />}
          {activePage === 'contact' && <ContactPage />}
          {activePage === 'admin' && <AdminLogin />}

          {/* Footer */}
          <Footer onNavigate={handleNavigate} />
        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <HackerProvider>
      <MainApp />
    </HackerProvider>
  );
}
