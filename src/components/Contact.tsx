'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Build mailto link and open it
    const mailtoLink = `mailto:baymaxgumia@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.open(mailtoLink, '_blank');

    setTimeout(() => {
      setStatus('sent');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 800);
  };

  const inputClasses =
    'w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white text-sm font-light placeholder-gray-500 outline-none transition-all duration-300 focus:border-[#00d1d1]/50 focus:bg-white/[0.06] focus:shadow-[0_0_20px_rgba(0,209,209,0.08)]';

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00d1d1]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left: Heading & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
                Get in <span className="text-[#00d1d1]">Touch</span>
              </h2>
              <p className="text-gray-400 font-light text-lg leading-relaxed max-w-md">
                Have a project in mind or just want to say hello? Fill out the form and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="h-px w-20 bg-[#00d1d1]/30" />

            {/* Contact Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-[#00d1d1]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#00d1d1]/10 flex items-center justify-center text-[#00d1d1] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Email</div>
                  <div className="text-sm text-gray-300 font-light">baymaxgumia@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-[#00d1d1]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#00d1d1]/10 flex items-center justify-center text-[#00d1d1] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Location</div>
                  <div className="text-sm text-gray-300 font-light">Davao City, Philippines</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-[#00d1d1]/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#00d1d1]/10 flex items-center justify-center text-[#00d1d1] shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest mb-0.5">Availability</div>
                  <div className="text-sm text-gray-300 font-light">Open for opportunities</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="name" className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClasses}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 }}
                >
                  <label htmlFor="email" className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClasses}
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="subject" className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className={inputClasses}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
              >
                <label htmlFor="message" className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  className={`${inputClasses} resize-none`}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-2"
              >
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative w-full py-4 px-8 rounded-xl bg-[#00d1d1] text-black text-sm font-semibold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,209,209,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">
                    {status === 'idle' && 'Send Message'}
                    {status === 'sending' && (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
                        Sending...
                      </span>
                    )}
                    {status === 'sent' && '✓ Message Sent!'}
                    {status === 'error' && 'Try Again'}
                  </span>
                </button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
