import React from 'react';
import { motion } from 'framer-motion';
import { Check, ShieldAlert, Zap } from 'lucide-react';
import { PRICING_PLANS } from '../../utils/constants';

export const Pricing = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-24 relative bg-[#0F0F0F]/80 border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
            <Zap size={14} />
            <span>{`> FLEXIBLE PRICING TIERS`}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            TRANSPARENT <span className="text-gold-gradient">INVESTMENT</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm sm:text-base">
            Choose the ideal engineering plan tailored for your startup or enterprise requirements.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative bg-[#171717] rounded-xl p-8 transition-all duration-300 flex flex-col justify-between ${
                plan.highlighted
                  ? 'border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.35)] scale-105 z-10 bg-gradient-to-b from-[#171717] via-[#171717] to-[#050505]'
                  : 'border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.2)]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#D4AF37] text-black font-orbitron font-extrabold text-[10px] tracking-widest uppercase shadow-[0_0_15px_#D4AF37]">
                  MOST POPULAR CHOICE
                </div>
              )}

              <div>
                {/* Name & Price */}
                <div className="text-center pb-6 border-b border-[#262626]">
                  <h3 className="font-orbitron font-bold text-xl text-white mb-2">{plan.name}</h3>
                  <div className="font-orbitron font-black text-4xl text-gold-gradient my-3">{plan.price}</div>
                  <p className="text-[#9A9A9A] text-xs font-poppins">{plan.description}</p>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs text-[#9A9A9A]">
                      <div className="p-0.5 rounded bg-[#00FF66]/10 text-[#00FF66] mt-0.5 border border-[#00FF66]/30">
                        <Check size={12} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-6 border-t border-[#262626]">
                <button
                  onClick={() => onSelectPlan(plan)}
                  className={`w-full py-3 rounded-lg font-orbitron text-xs font-bold transition-all duration-300 ${
                    plan.highlighted
                      ? 'bg-[#D4AF37] text-black hover:bg-[#FFF0B3] shadow-[0_0_20px_#D4AF37]'
                      : 'bg-[#0F0F0F] text-white border border-[#D4AF37]/50 hover:bg-[#D4AF37] hover:text-black'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
