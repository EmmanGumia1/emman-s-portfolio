'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function MobileNav() {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { label: 'Home', href: '#home', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    )},
    { label: 'About', href: '#about', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )},
    { label: 'Projects', href: '#projects', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
    )},
    { label: 'Certs', href: '#certificates', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15l-3-3 3-3"/><path d="M15 12H9"/><rect width="20" height="20" x="2" y="2" rx="2"/></svg>
    )},
    { label: 'Contact', href: '#contact', icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    )},
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[90%] max-w-[400px]">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] flex items-center justify-between">
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            onClick={(e) => {
              e.preventDefault();
              setActiveIndex(i);
              const target = document.querySelector(item.href);
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="relative flex flex-col items-center justify-center py-2 px-4 transition-all duration-300"
          >
            <div className={`relative z-10 ${activeIndex === i ? 'text-[#00d1d1]' : 'text-gray-500'}`}>
              {item.icon}
            </div>
            <span className={`text-[10px] mt-1 font-medium tracking-tight ${activeIndex === i ? 'text-[#00d1d1]' : 'text-gray-500'}`}>
              {item.label}
            </span>
            
            {activeIndex === i && (
              <motion.div
                layoutId="mobile-nav-active"
                className="absolute inset-0 bg-[#00d1d1]/5 rounded-2xl z-0"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
          </a>
        ))}
      </div>
    </div>
  );
}
