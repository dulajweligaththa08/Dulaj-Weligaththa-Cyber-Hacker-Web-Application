import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { Services } from '../components/Services/Services';
import { About } from '../components/About/About';
import { Skills } from '../components/Skills/Skills';
import { Portfolio } from '../components/Portfolio/Portfolio';
import { Process } from '../components/Process/Process';
import { Testimonials } from '../components/Testimonials/Testimonials';
import { Pricing } from '../components/Pricing/Pricing';
import { Contact } from '../components/Contact/Contact';

export const Home = ({ onNavigate }) => {
  return (
    <main>
      <Hero
        onExploreClick={() => {
          const el = document.getElementById('portfolio');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onContactClick={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      <Services onSelectService={() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />
      <About />
      <Portfolio />
      <Skills />
      <Process />
      <Testimonials />
      <Pricing onSelectPlan={() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />
      <Contact />
    </main>
  );
};
