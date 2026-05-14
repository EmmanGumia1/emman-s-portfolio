import React from 'react';
import { motion } from 'motion/react';
import BorderGlow from './BorderGlow';

export default function Projects() {
  const projects = [
    {
      title: 'AgriGrain',
      subtitle: 'SDG 2 - Zero Hunger Champion',
      description: 'A champion thesis project recognized for Sustainable Development Goal (SDG) 2. Developed an intelligent mobile application using YOLOv11 for the classification and grading of unmilled local rice to enhance food security.',
      tags: ['Thesis Project', 'YOLOv11', 'SDG 2 Champion', 'Machine Learning'],
      year: '2025',
      color: '#00d1d1'
    },
    {
      title: 'Vride',
      subtitle: 'Car Search & Management',
      description: 'Building a modern React Native platform for vehicle listings and management. Involved in implementing secure authentication and owner-specific CRUD operations with Firebase.',
      tags: ['React Native', 'Firebase', 'Firestore', 'Expo'],
      year: '2024',
      color: '#00d1d1'
    },
    {
      title: 'Realtime Chat',
      subtitle: 'Instant Messaging Platform',
      description: 'Creation of a dynamic mobile messaging app featuring real-time data synchronization. Focused on ensuring reliable message delivery and seamless user authentication.',
      tags: ['React Native', 'Firebase', 'Expo', 'Real-time'],
      year: '2023',
      color: '#00d1d1'
    },
    {
      title: 'Java Chess GUI',
      subtitle: 'Logic & Interface Design',
      description: 'A functional chess application with move validation and state management. Implemented core game logic and UI components using Java Swing and OOP principles.',
      tags: ['Java', 'Swing', 'OOP', 'Game Logic'],
      year: '2023',
      color: '#00d1d1'
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32 relative z-10">
      <style>{`
        .project-card-glass {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .project-card-hover:hover {
          border-color: rgba(0, 209, 209, 0.3);
          background: rgba(255, 255, 255, 0.04);
          transform: translateY(-4px);
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-4">
              Featured Work
            </h2>
            <p className="text-gray-400 font-light max-w-md">
              A curated collection of digital projects and mobile applications I've developed, showcasing both independent initiatives and collaborative technical solutions.
            </p>
          </div>
          <div className="text-sm text-[#00d1d1] font-mono tracking-widest uppercase opacity-60">
            [ Projects Count: {projects.length} ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="project-card-glass project-card-hover rounded-[2rem] p-8 md:p-10 h-full transition-all duration-500 relative overflow-hidden">
                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00d1d1]/5 blur-[60px] group-hover:bg-[#00d1d1]/10 transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#00d1d1] uppercase mb-2 block opacity-80">
                        {project.year}
                      </span>
                      <h3 className="text-2xl font-medium text-white group-hover:text-[#00d1d1] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-gray-500 font-medium mt-1">{project.subtitle}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 group-hover:border-[#00d1d1]/40 group-hover:text-[#00d1d1] transition-all">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 7l10 10M17 7L17 17L7 17" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm md:text-base">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="px-3 py-1 bg-white/5 border border-white/5 text-gray-400 text-[10px] rounded-full font-medium tracking-wide group-hover:border-[#00d1d1]/20 group-hover:text-gray-200 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
