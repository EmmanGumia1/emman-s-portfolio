import { useState } from 'react';
import { motion } from 'motion/react';
import TextType from './TextType';
import CVModal from './CVModal';

export default function Home() {
  const [isCVOpen, setIsCVOpen] = useState(false);
  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Side: Content */}
          <div className="flex-1 text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <TextType
                as="p"
                text={["Tech Support", "Frontend Developer", "UI/UX Designer"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                deletingSpeed={50}
                cursorBlinkDuration={0.5}
                startOnVisible={true}
                className="text-sm text-[#00d1d1] tracking-[0.2em] uppercase font-medium"
              />
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-light text-white tracking-tighter leading-tight">
                Hello, I'm <span className="text-white font-normal">Emman Gumia</span>
              </h1>
              <p className="text-lg text-gray-400 font-light max-w-xl leading-relaxed">
                I am a passionate developer focused on building intuitive user experiences,
                innovative digital products, and reliable technical solutions. Welcome to my portfolio!
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4">
              <a href="mailto:baymaxgumia@gmail.com" className="px-6 sm:px-8 py-3.5 bg-[#00d1d1] text-black text-sm tracking-wide font-medium rounded-xl hover:bg-[#00d1d1]/80 transition-colors shadow-lg shadow-[#00d1d1]/10">
                Contact Me
              </a>
              <button
                onClick={() => setIsCVOpen(true)}
                className="px-6 sm:px-8 py-3.5 bg-transparent border border-gray-700 text-white text-sm tracking-wide font-medium rounded-xl hover:border-[#00d1d1]/50 transition-colors shadow-sm"
              >
                View CV
              </button>

              {/* Social Icons with Animations */}
              <div className="flex flex-wrap gap-4 pt-4">
                {[
                  {
                    href: "https://github.com/EmmanGumia1", icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                        <path d="M9 18c-4.51 2-5-2-7-2"></path>
                      </svg>
                    ), label: "GitHub", hoverColor: "hover:text-white"
                  },
                  {
                    href: "https://ph.linkedin.com/in/emman-gumia-2b0803353", icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    ), label: "LinkedIn", hoverColor: "hover:text-[#0A66C2]"
                  },
                  {
                    href: "https://www.facebook.com/baymax.gumia", icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    ), label: "Facebook", hoverColor: "hover:text-[#1877F2]"
                  },
                  {
                    href: "https://x.com/wittittit", icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    ), label: "Twitter", hoverColor: "hover:text-white"
                  },
                  {
                    href: "mailto:baymaxgumia@gmail.com", icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    ), label: "Email", hoverColor: "hover:text-[#00d1d1]"
                  }
                ].map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: [0, -8, 0],
                    }}
                    transition={{
                      opacity: { delay: 0.5 + (i * 0.1), duration: 0.5 },
                      y: {
                        delay: 1 + (i * 0.2),
                        duration: 3 + i,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                    whileHover={{ scale: 1.1, y: -12 }}
                    className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 ${social.hoverColor} hover:border-current hover:bg-white/10 transition-all shadow-sm`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Circular Image Container */}
          <div className="flex-1 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
              {/* Outer Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-[#00d1d1]/10 blur-3xl animate-pulse" />

              {/* Image Border/Frame */}
              <div className="absolute inset-0 rounded-full border-4 border-white/20 p-4 backdrop-blur-sm">
                <div className="w-full h-full rounded-full border-2 border-[#00d1d1]/20 overflow-hidden bg-gray-900 flex items-center justify-center">
                  <img src="/profile.jpg" alt="Emman Gumia" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#00d1d1]/5 border border-[#00d1d1]/10 rounded-3xl backdrop-blur-xl animate-pulse" />
            </div>
          </div>

        </div>
      </div>

      <CVModal isOpen={isCVOpen} onClose={() => setIsCVOpen(false)} />
    </section>
  );
}