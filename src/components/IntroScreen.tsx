'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface IntroScreenProps {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: IntroScreenProps) {
  const [found, setFound] = useState(false);

  const handleEnter = () => {
    // 3 seconds of looking around
    setTimeout(() => {
      setFound(true); // "Found" what he's looking for - centers gaze
      
      // Brief pause after finding before entering
      setTimeout(() => {
        onEnter();
      }, 1000);
    }, 3000);
  };

  // Start sequence immediately
  useEffect(() => {
    handleEnter();
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505]">
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-12">
        <p className={`text-gray-300 text-[10px] tracking-[0.6em] uppercase transition-opacity duration-1000 ${found ? 'opacity-0' : 'opacity-60'}`}>
          Initializing
        </p>
        
        {/* Baymax Logo - Curious then Focused */}
        <motion.div
          className="relative"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            transform: 'translateZ(0)', 
            willChange: 'transform'
          }}
        >
          {/* Logo container - Responsive size */}
          <div
            className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full border bg-white/5 border-white/20 transition-all duration-700"
            style={{ transform: 'translateZ(0)' }}
          >
            {/* Baymax SVG face - Responsive size */}
            <svg
              viewBox="0 0 40 40"
              className="w-14 h-14 md:w-[70px] md:h-[70px] relative z-10"
              style={{ transform: 'translateZ(0)' }}
            >
              <ellipse cx="20" cy="22" rx="16" ry="14" fill="#fff" />
              <motion.g
                animate={found ? {
                  x: 0,
                  y: 0,
                  rotate: 0
                } : { 
                  x: [0, 4, -4, 2, 0],
                  y: [0, 1, -1, 0, 0],
                  rotate: [0, 5, -5, 2, 0]
                }}
                transition={found ? {
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                } : {
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ transformOrigin: '20px 22px' }}
              >
                {/* Left Eye */}
                <motion.circle 
                  cx="13" cy="22" r="3.5" fill="#000" 
                  animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    times: [0, 0.85, 0.9, 0.95, 1],
                    ease: "easeInOut"
                  }}
                  style={{ transformOrigin: '13px 22px' }}
                />
                {/* Right Eye */}
                <motion.circle 
                  cx="27" cy="22" r="3.5" fill="#000" 
                  animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    times: [0, 0.85, 0.9, 0.95, 1],
                    ease: "easeInOut"
                  }}
                  style={{ transformOrigin: '27px 22px' }}
                />
                <rect x="13" y="21" width="14" height="2" fill="#000" />
              </motion.g>
            </svg>
          </div>
        </motion.div>

        {/* Name and Tagline */}
        <div className={`text-center space-y-4 transition-all duration-700 ${found ? 'opacity-0' : 'opacity-100'}`}>
          <h1 className="text-2xl md:text-3xl font-light text-white tracking-[0.4em] uppercase">
            Emman Gumia
          </h1>
          <p className="text-gray-300 text-[10px] md:text-xs tracking-[0.5em] uppercase opacity-80">Tech Support and Frontend Developer</p>
        </div>
      </div>
    </div>
  );
}
