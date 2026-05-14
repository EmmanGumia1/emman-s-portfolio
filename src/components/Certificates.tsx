'use client';

import { motion } from 'motion/react';
import BorderGlow from './BorderGlow';

export default function Certificates() {
  const certificates = [
    {
      title: 'Build Complete CMS Blog in PHP MySQL Bootstrap & PDO',
      issuer: 'Udemy',
      year: '2024',
      link: 'https://www.udemy.com/certificate/UC-0c0529d8-eeb3-4c43-908c-7a2642828e1f/',
      image: '/certs/UC-0c0529d8-eeb3-4c43-908c-7a2642828e1f.jpg'
    },
    {
      title: 'Get Started with SQL Analytics and BI on Databricks',
      issuer: 'Databricks / Simplilearn',
      year: '2026',
      link: 'https://simpli-learn.com/verify/10002705',
      image: '/certs/Screenshot_30-4-2026_123616_drive.google.com.jpeg'
    },
    {
      title: 'Python for Beginners',
      issuer: 'Simplilearn / SkillUp',
      year: '2026',
      link: 'https://simpli-learn.com/verify/10007134',
      image: '/certs/simplilearncert.png'
    },
  ];

  // Triple the certificates to ensure a smooth loop
  const duplicatedCerts = [...certificates, ...certificates, ...certificates];

  return (
    <section id="certificates" className="py-16 md:py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8 mb-16 text-center">
        <h2 className="text-4xl font-light text-white tracking-tight">
          Certifications
        </h2>
      </div>

      <div className="relative max-w-5xl mx-auto group">
        <div 
          className="flex overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <motion.div
            className="flex gap-8 px-4"
            animate={{
              x: [0, "-33.33%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10, // 3x speed
                ease: "linear",
              },
            }}
            style={{ width: "max-content" }}
          >
            {duplicatedCerts.map((cert, index) => (
              <div key={index} className="w-[260px] flex-shrink-0">
                <a href={cert.link} className="group/card block outline-none">
                  <BorderGlow className="rounded-2xl transition-all duration-500 backdrop-blur-sm shadow-xl" backgroundColor="rgba(0, 0, 0, 0.6)">
                    <div className="relative h-full flex flex-col overflow-hidden rounded-2xl">
                      {/* Certificate Image Preview */}
                      <div className="relative aspect-[1.4/1] w-full overflow-hidden border-b border-white/10 bg-gray-900 flex items-center justify-center">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110 opacity-70 group-hover/card:opacity-100"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x280?text=Certificate';
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-lg text-white font-medium mb-3 group-hover/card:text-[#00d1d1] transition-colors line-clamp-2">{cert.title}</h3>
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-gray-400 font-light">{cert.issuer}</p>
                          <span className="text-xs font-medium text-gray-300 bg-white/10 border border-white/5 px-3 py-1 rounded-full shadow-sm">{cert.year}</span>
                        </div>
                      </div>
                    </div>
                  </BorderGlow>
                </a>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}