import { motion } from 'motion/react';

export default function About() {
  const experiences = [
    {
      role: 'IT Tech Support (OJT)',
      company: 'Holy Cross of Davao College',
      period: '2026 - Present',
      description: 'Providing technical assistance and troubleshooting for campus systems during on-the-job training. Ensuring seamless operations through network maintenance, hardware diagnostics, and system support.'
    },
    {
      role: 'Frontend Developer (Collaborative)',
      company: 'Academic Projects',
      period: '2023 - 2025',
      description: 'Developed responsive web components and contributed to modern UI/UX implementations using React and Next.js.'
    }
  ];

  const frontendSkills = ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'JavaScript'];
  const toolSkills = ['Git / GitHub', 'Docker', 'Vercel', 'Firebase', 'Expo'];

  return (
    <section id="about" className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#00d1d1]/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#00d1d1]/5 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          
          {/* Left Column: Biography */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-8">
                The <span className="text-[#00d1d1]">Persona</span>
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  I'm an aspiring IT Tech Support and Frontend Developer, passionate about building intuitive digital experiences and solving technical challenges.
                </p>
                <div className="h-px w-20 bg-[#00d1d1]/30" />
                <p className="text-gray-400 leading-relaxed font-light">
                  I focus on the intersection of hardware reliability and modern web technologies. I strive to build clean, efficient code while providing dependable technical solutions for complex challenges.
                </p>
              </div>
            </motion.div>

            {/* Stats/Quick Info */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-xl font-medium text-[#00d1d1]">Davao City, PH</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Location</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <div className="text-2xl font-medium text-[#00d1d1]">4+</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Core Projects</div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Arsenal */}
          <div className="lg:col-span-7 space-y-20">
            
                {/* Experience Timeline */}
                <div className="space-y-10">
                  <h3 className="text-xs font-bold text-gray-500 tracking-[0.3em] uppercase">Professional Journey</h3>
                  <div className="space-y-12">
                    {experiences.map((exp, index) => (
                      <motion.div 
                        key={index} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.02, x: 10 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 400, 
                          damping: 17,
                          delay: index * 0.1 
                        }}
                        viewport={{ once: true }}
                        className="group relative pl-8 before:absolute before:left-0 before:top-2 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-[#00d1d1]/50 before:to-transparent cursor-default"
                      >
                        <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-[#00d1d1] shadow-[0_0_10px_#00d1d1] group-hover:scale-150 transition-transform" />
                        <div className="flex flex-col mb-2">
                          <span className="text-xs text-[#00d1d1] font-mono mb-1 group-hover:brightness-125 transition-all">{exp.period}</span>
                          <h4 className="text-xl text-white font-medium group-hover:text-[#00d1d1] transition-colors">{exp.role}</h4>
                          <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{exp.company}</span>
                        </div>
                        <p className="text-gray-400 font-light text-sm leading-relaxed max-w-lg group-hover:text-gray-200 transition-colors">
                          {exp.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>

            {/* Technical Arsenal */}
            <div className="space-y-10">
              <h3 className="text-xs font-bold text-gray-500 tracking-[0.3em] uppercase">Technical Arsenal</h3>
              
              <div className="space-y-6">
                {/* Continuous Marquees */}
                <div className="flex flex-col gap-4">
                  <div className="relative overflow-hidden py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <motion.div 
                      className="flex gap-4 whitespace-nowrap"
                      animate={{ x: ["-20%", "0%"] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      style={{ width: "max-content" }}
                    >
                      {[...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills, ...frontendSkills].map((skill, i) => (
                        <span key={i} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-light hover:border-[#00d1d1]/30 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  <div className="relative overflow-hidden py-2" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                    <motion.div 
                      className="flex gap-4 whitespace-nowrap"
                      animate={{ x: ["0%", "-20%"] }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      style={{ width: "max-content" }}
                    >
                      {[...toolSkills, ...toolSkills, ...toolSkills, ...toolSkills, ...toolSkills].map((skill, i) => (
                        <span key={i} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-light hover:border-[#00d1d1]/30 transition-all cursor-default">
                          {skill}
                        </span>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}