'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CVModal({ isOpen, onClose }: CVModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Prevent body scroll and hide header when modal is open
  useEffect(() => {
    const header = document.querySelector('header');
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (header) header.style.opacity = '0';
      if (header) header.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = 'unset';
      if (header) header.style.opacity = '1';
      if (header) header.style.pointerEvents = 'auto';
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (header) header.style.opacity = '1';
      if (header) header.style.pointerEvents = 'auto';
    };
  }, [isOpen]);

  const sections = [
    {
      title: "Personal Information",
      items: [
        { label: "Name", value: "Emman Gumia" },
        { label: "Age", value: "21 years old" },
        { label: "Birthday", value: "December 2, 2004" },
        { label: "Address", value: "Balisong, Cabayangan Braulio E. Dujali Davao del Norte" }
      ]
    },
    {
      title: "Contact Information",
      items: [
        { label: "Email", value: "emman.gumia@hcdc.edu.ph\nbaymaxgumia@gmail.com" },
        { label: "Phone", value: "09956195200" }
      ]
    },
    {
      title: "Educational Background",
      items: [
        { label: "College", value: "Bachelor of Science in Information Technology", sub: "Holy Cross of Davao College (Sta. Ana Avenue, Davao City)" },
        { label: "Senior High", value: "Antonio V. Fruto Senior National High School" },
        { label: "Junior High", value: "Antonio V. Fruto Senior National High School" },
        { label: "Elementary", value: "Balisong Elementary School" }
      ]
    }
  ];

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-4 md:p-8">
          {/* Solid Backdrop to hide EVERYTHING including Nav traces */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050505]"
          />

          {/* Small Logo at the Top */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="relative z-20 mb-8"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-xl">
              <svg width="24" height="24" viewBox="0 0 40 40" fill="none">
                <ellipse cx="20" cy="22" rx="16" ry="14" fill="white" fillOpacity={0.85} />
                <ellipse cx="13" cy="22" rx="3.5" ry="3.5" fill="#050505" />
                <ellipse cx="27" cy="22" rx="3.5" ry="3.5" fill="#050505" />
                <line x1="13" y1="22" x2="27" y2="22" stroke="#050505" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/5">
              <h2 className="text-xl font-medium text-white tracking-tight uppercase flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#00d1d1] animate-pulse" />
                Curriculum Vitae
              </h2>
              <button 
                onClick={onClose}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/5 text-gray-400 hover:text-white transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-8 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <div className="space-y-10">
                {sections.map((section, idx) => (
                  <div key={idx} className="space-y-6">
                    <h3 className="text-xs font-bold text-[#00d1d1] tracking-[0.2em] uppercase opacity-80">
                      {section.title}
                    </h3>
                    <div className="grid gap-6">
                      {section.items.map((item, i) => (
                        <div key={i} className="group">
                          <label className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">
                            {item.label}
                          </label>
                          <div className="text-gray-200 font-light leading-relaxed group-hover:text-white transition-colors whitespace-pre-line">
                            {item.value}
                          </div>
                          {item.sub && (
                            <div className="text-[11px] text-gray-500 mt-1 italic">
                              {item.sub}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
