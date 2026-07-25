import React, { createContext, useContext, useState } from 'react';

const HackerContext = createContext();

export const HackerProvider = ({ children }) => {
  const [matrixActive, setMatrixActive] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [systemStatus, setSystemStatus] = useState("ALL SYSTEMS OPERATIONAL");
  const [activeTab, setActiveTab] = useState("Home");

  const playBeep = () => {
    if (!soundEnabled) return;
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      console.log('Audio Context error', e);
    }
  };

  return (
    <HackerContext.Provider value={{
      matrixActive,
      setMatrixActive,
      soundEnabled,
      setSoundEnabled,
      systemStatus,
      setSystemStatus,
      activeTab,
      setActiveTab,
      playBeep
    }}>
      {children}
    </HackerContext.Provider>
  );
};

export const useHacker = () => useContext(HackerContext);
