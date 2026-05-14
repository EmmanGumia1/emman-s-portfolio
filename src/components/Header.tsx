import Link from 'next/link';
import DecryptedText from './DecryptedText';
import GooeyNav from './GooeyNav';
import { motion } from 'motion/react';

interface HeaderProps {
  onLogoClick?: () => void;
}

export default function Header({ onLogoClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-xl border-b border-white/5 z-50 transition-all duration-300">
      <nav className="max-w-5xl mx-auto px-4 md:px-8 py-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button 
              onClick={onLogoClick}
              className="flex items-center group cursor-pointer"
            >
              {/* Custom SVG Logo */}
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-[#00d1d1]/40 group-hover:shadow-[0_0_15px_rgba(0,209,209,0.2)] transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#00d1d1]/0 via-[#00d1d1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white group-hover:text-[#00d1d1] transition-colors duration-300 relative z-10">
                  <motion.circle 
                    cx="6.5" cy="12" r="2.5" fill="currentColor" 
                    animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      times: [0, 0.85, 0.9, 0.95, 1],
                      ease: "easeInOut"
                    }}
                    style={{ transformOrigin: '6.5px 12px' }}
                  />
                  <motion.circle 
                    cx="17.5" cy="12" r="2.5" fill="currentColor" 
                    animate={{ scaleY: [1, 1, 0.1, 1, 1] }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      times: [0, 0.85, 0.9, 0.95, 1],
                      ease: "easeInOut"
                    }}
                    style={{ transformOrigin: '17.5px 12px' }}
                  />
                  <path d="M6.5 12H17.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <GooeyNav
              items={[
                { label: 'Home', href: '#home' },
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Certifications', href: '#certificates' },
                { label: 'Contact', href: '#contact' },
              ]}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}