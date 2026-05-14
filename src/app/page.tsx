'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Certificates from '../components/Certificates';
import Contact from '../components/Contact';
import Prism from '../components/Prism';
import IntroScreen from '../components/IntroScreen';
import MobileNav from '../components/MobileNav';

export default function Portfolio() {
  const [entered, setEntered] = useState(false);
  return (
    <>
      <AnimatePresence mode="wait">
        {!entered && (
          <motion.div
            key="intro"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <IntroScreen onEnter={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className={`relative min-h-screen text-white font-sans overflow-x-hidden transition-opacity duration-1000 ${entered ? 'opacity-100' : 'opacity-0'}`}>
        {/* Dynamic Interactive Background */}
        <div className="fixed inset-0 z-[-1] bg-[#050505]">
          <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <Prism
              animationType="rotate"
              timeScale={0.5}
              height={5.6}
              baseWidth={5.5}
              scale={3.6}
              hueShift={0}
              colorFrequency={1}
              noise={0}
              glow={0.3}
            />
          </div>
        </div>

        <Header onLogoClick={() => setEntered(false)} />
        <MobileNav />
        <main>
          <Home />
          <About />
          <Projects />
          <Certificates />
          <Contact />
        </main>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-8 text-center relative z-10 bg-transparent">
          <div className="max-w-3xl mx-auto px-8">
            <p className="text-gray-500 text-xs font-light tracking-wide uppercase">© {new Date().getFullYear()} Emman Gumia. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
