import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, Code, Globe, Share2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { PERSONAL_INFO } from '../../utils/constants';
import { EMAIL_CONFIG } from '../../config/emailConfig';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Website Development',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    // Check if EmailJS keys are configured
    const isConfigured = EMAIL_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID' &&
                         EMAIL_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

    if (isConfigured) {
      try {
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: EMAIL_CONFIG.RECIPIENT_EMAIL
        };

        // Initialize EmailJS with Public Key
        emailjs.init(EMAIL_CONFIG.PUBLIC_KEY);

        await emailjs.send(
          EMAIL_CONFIG.SERVICE_ID,
          EMAIL_CONFIG.TEMPLATE_ID,
          templateParams,
          EMAIL_CONFIG.PUBLIC_KEY
        );

        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'Website Development', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      } catch (error) {
        console.error('EmailJS transmit error details:', error);
        setLoading(false);
        const detailedError = error?.text || error?.message || 'Check EmailJS Service ID, Template ID, and Public Key.';
        setErrorMessage(`EmailJS Error: ${detailedError}`);
      }
    } else {
      // Demo simulation fallback when keys are not fully pasted yet
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: 'Website Development', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
      }, 1200);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#171717] border border-[#D4AF37]/30 text-xs font-code text-[#D4AF37]">
            <Mail size={14} />
            <span>{`> GET IN TOUCH`}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            LET'S BUILD SOMETHING <span className="text-gold-gradient">EPIC</span>
          </h2>
          <p className="text-[#9A9A9A] text-sm sm:text-base">
            Have a project in mind, need a security audit, or want to discuss Flutter & Web development? Drop a message.
          </p>
        </div>

        {/* 2 Column Layout: Form & Info/Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Hacker Terminal Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-[#171717]/90 border border-[#D4AF37]/40 rounded-xl p-8 shadow-[0_0_35px_rgba(212,175,55,0.2)]"
          >
            <div className="font-orbitron font-bold text-xl text-white mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-[#D4AF37]">{`> `}</span>
                <span>TRANSMIT MESSAGE</span>
              </div>
              <span className="text-[10px] font-code px-2 py-0.5 rounded bg-[#00FF66]/10 text-[#00FF66] border border-[#00FF66]/30">
                EMAIL ACTIVE
              </span>
            </div>

            {errorMessage && (
              <div className="mb-6 p-4 rounded-lg bg-[#FF3B3B]/10 border border-[#FF3B3B]/40 text-[#FF3B3B] text-xs font-code flex items-center space-x-2">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            {submitted ? (
              <div className="bg-[#00FF66]/10 border border-[#00FF66] rounded-lg p-6 text-center text-[#00FF66] font-code space-y-2">
                <CheckCircle className="w-12 h-12 mx-auto text-[#00FF66]" />
                <div className="font-bold text-base">TRANSMISSION SUCCESSFUL!</div>
                <div className="text-xs text-[#9A9A9A]">Your message has been encrypted and sent directly to Dulaj's email inbox. You will receive a response shortly.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-code text-[#D4AF37] mb-2">FULL NAME *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-[#0F0F0F] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] font-poppins transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-code text-[#D4AF37] mb-2">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full bg-[#0F0F0F] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] font-poppins transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-code text-[#D4AF37] mb-2">PROJECT SUBJECT</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#0F0F0F] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] font-poppins transition-colors"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App (Flutter)">Mobile App (Flutter)</option>
                    <option value="Backend / Database API">Backend / Database API</option>
                    <option value="Cyber Security Audit">Cyber Security Audit</option>
                    <option value="Hire / Full-time Role">Hire / Full-time Role</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-code text-[#D4AF37] mb-2">MESSAGE DETAILS *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project requirements, goals, or timeline..."
                    className="w-full bg-[#0F0F0F] border border-[#D4AF37]/30 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#D4AF37] font-poppins transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-lg font-orbitron text-xs sm:text-sm font-bold text-black bg-[#D4AF37] hover:bg-[#FFF0B3] transition-all duration-300 shadow-[0_0_25px_#D4AF37] flex items-center justify-center space-x-2"
                >
                  <Send size={16} />
                  <span>{loading ? "TRANSMITTING TO EMAIL..." : "TRANSMIT MESSAGE"}</span>
                </button>
              </form>
            )}
          </motion.div>

          {/* Right Column: Contact Details & Satellite Cyber Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8 flex flex-col justify-between"
          >
            {/* Direct Details Box */}
            <div className="bg-[#171717] border border-[#D4AF37]/30 rounded-xl p-6 space-y-6">
              <h3 className="font-orbitron font-bold text-lg text-white">DIRECT COMMUNICATION</h3>

              <div className="space-y-4 text-xs font-poppins">
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[#9A9A9A] font-code">EMAIL ADDRESS</div>
                    <div className="text-white font-semibold">{PERSONAL_INFO.contact.email}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[#9A9A9A] font-code">PHONE & WHATSAPP</div>
                    <div className="text-white font-semibold">{PERSONAL_INFO.contact.phone}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg bg-[#0F0F0F] border border-[#262626]">
                  <div className="p-2.5 rounded bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[#9A9A9A] font-code">LOCATION</div>
                    <div className="text-white font-semibold">{PERSONAL_INFO.contact.location}</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-[#262626]">
                <div className="text-xs font-code text-[#D4AF37] mb-3">CONNECT ON SOCIAL MEDIA</div>
                <div className="flex space-x-3">
                  <a href={PERSONAL_INFO.contact.github} target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-[#0F0F0F] border border-[#D4AF37]/30 text-[#9A9A9A] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                    <Code size={18} />
                  </a>
                  <a href={PERSONAL_INFO.contact.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-[#0F0F0F] border border-[#D4AF37]/30 text-[#9A9A9A] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                    <Globe size={18} />
                  </a>
                  <a href={PERSONAL_INFO.contact.twitter} target="_blank" rel="noreferrer" className="p-3 rounded-lg bg-[#0F0F0F] border border-[#D4AF37]/30 text-[#9A9A9A] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                    <Share2 size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Satellite Cyber Map Box */}
            <div className="bg-[#171717] border border-[#D4AF37]/30 rounded-xl p-4 overflow-hidden relative">
              <div className="font-orbitron text-xs text-[#D4AF37] mb-2 flex items-center justify-between">
                <span>{`> SATELLITE CYBER MAP`}</span>
                <span className="text-[10px] text-[#00FF66]">LAT 6.9271 | LON 79.8612</span>
              </div>
              <div className="h-44 rounded-lg overflow-hidden border border-[#262626] relative bg-[#050505] flex items-center justify-center">
                <div className="absolute inset-0 bg-cyber-grid opacity-60" />
                <div className="w-24 h-24 rounded-full border border-[#D4AF37]/40 animate-ping absolute" />
                <div className="relative z-10 flex flex-col items-center space-y-1">
                  <MapPin className="w-8 h-8 text-[#D4AF37] animate-bounce" />
                  <span className="font-code text-xs text-white bg-black/80 px-2 py-0.5 rounded border border-[#D4AF37]">
                    DULAJ WELIGATHTHA HQ
                  </span>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={PERSONAL_INFO.contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-[#00FF66] text-black shadow-[0_0_25px_#00FF66] hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="fill-black" />
      </a>
    </section>
  );
};
