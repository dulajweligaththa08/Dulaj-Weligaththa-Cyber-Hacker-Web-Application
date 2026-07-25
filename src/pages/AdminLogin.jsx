import React, { useState } from 'react';
import { Lock, ShieldCheck, Key, Terminal } from 'lucide-react';

export const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'cyber2026') {
      setStatus('ACCESS GRANTED. REDIRECTING TO ADMIN DASHBOARD...');
    } else {
      setStatus('ACCESS DENIED. INVALID SECURITY CREDENTIALS.');
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 flex items-center justify-center px-4">
      <div className="bg-[#171717] border border-[#D4AF37] rounded-xl max-w-md w-full p-8 shadow-[0_0_50px_rgba(212,175,55,0.3)] font-code">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full border-2 border-[#D4AF37] p-1 bg-black flex items-center justify-center">
            <Lock className="w-8 h-8 text-[#D4AF37]" />
          </div>
        </div>

        <div className="text-center mb-6 space-y-1">
          <h2 className="font-orbitron font-bold text-xl text-white">ADMIN SECURITY PORTAL</h2>
          <div className="text-xs text-[#9A9A9A]">{`> RESTRICTED PERSONNEL ONLY`}</div>
        </div>

        {status && (
          <div className={`p-3 rounded text-xs mb-4 border ${
            status.includes('GRANTED')
              ? 'bg-[#00FF66]/10 border-[#00FF66] text-[#00FF66]'
              : 'bg-[#FF3B3B]/10 border-[#FF3B3B] text-[#FF3B3B]'
          }`}>
            {status}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs text-[#D4AF37] mb-1">USERNAME</label>
            <div className="relative">
              <Terminal size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="admin"
                className="w-full bg-[#0F0F0F] border border-[#D4AF37]/40 rounded pl-10 pr-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs text-[#D4AF37] mb-1">ACCESS KEY / PASSWORD</label>
            <div className="relative">
              <Key size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9A9A9A]" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-[#0F0F0F] border border-[#D4AF37]/40 rounded pl-10 pr-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded font-orbitron text-xs font-bold text-black bg-[#D4AF37] hover:bg-[#FFF0B3] transition-all shadow-[0_0_20px_#D4AF37] mt-2"
          >
            AUTHENTICATE SYSTEM
          </button>
        </form>
      </div>
    </div>
  );
};
