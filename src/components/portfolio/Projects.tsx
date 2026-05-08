'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ExternalLink, Github, Smartphone, Globe } from 'lucide-react'

interface Project {
  title: string
  description: string
  tags: string[]
  category: 'mobile' | 'web'
  github?: string
  gradient: string
  icon: typeof Smartphone
}

const projects: Project[] = [
  {
    title: 'Shelfil App',
    description: 'A modern book discovery and reading management mobile app built with React Native. Features personalized recommendations, reading progress tracking, and social sharing capabilities.',
    tags: ['React Native', 'JavaScript', 'Mobile UI'],
    category: 'mobile',
    github: 'https://github.com/SabbirHossainEvan/Shelfil_App_React_Native',
    gradient: 'from-[#5E1B8C]/20 to-[#C93CFF]/20',
    icon: Smartphone,
  },
  {
    title: 'MediTrust',
    description: 'A healthcare and telemedicine web application providing secure patient-doctor communication, appointment scheduling, and medical records management with an intuitive interface.',
    tags: ['JavaScript', 'React', 'REST APIs'],
    category: 'web',
    github: 'https://github.com/SabbirHossainEvan/mediTrust',
    gradient: 'from-[#9333EA]/20 to-[#F0C7FF]/20',
    icon: Globe,
  },
  {
    title: 'MovieFlex',
    description: 'A sleek movie discovery and streaming platform with real-time search, trending recommendations, and detailed movie information. Built with TypeScript and modern React patterns.',
    tags: ['TypeScript', 'React', 'API Integration'],
    category: 'web',
    github: 'https://github.com/SabbirHossainEvan/MovieFlex',
    gradient: 'from-[#F0C7FF]/20 to-[#D946EF]/20',
    icon: Globe,
  },
  {
    title: 'Car Doctor',
    description: 'An automotive service booking platform that connects car owners with nearby mechanics. Features real-time tracking, service history, and secure payment integration.',
    tags: ['JavaScript', 'React', 'Node.js'],
    category: 'web',
    github: 'https://github.com/SabbirHossainEvan/car-doctor',
    gradient: 'from-[#D946EF]/20 to-[#C93CFF]/20',
    icon: Globe,
  },
  {
    title: 'KomTaka.com',
    description: 'A fintech and digital payments platform providing secure money transfers, bill payments, and financial management tools with a focus on mobile-first user experience.',
    tags: ['JavaScript', 'React', 'Fintech'],
    category: 'web',
    github: 'https://github.com/SabbirHossainEvan/KomTaka.com',
    gradient: 'from-[#5E1B8C]/20 to-[#F0C7FF]/20',
    icon: Smartphone,
  },
  {
    title: 'Korean Vision',
    description: 'An AI-powered Korean beauty and skincare recommendation app. Features personalized product suggestions, skin analysis, and an interactive beauty routine builder.',
    tags: ['TypeScript', 'React Native', 'AI Integration'],
    category: 'mobile',
    github: 'https://github.com/SabbirHossainEvan/korean_vision',
    gradient: 'from-[#9333EA]/20 to-[#C93CFF]/20',
    icon: Smartphone,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [filter, setFilter] = useState<'all' | 'mobile' | 'web'>('all')

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="projects" className="relative py-20 md:py-32 bg-[#0D0D12] overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#5E1B8C]/5 blur-[150px] rounded-full" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-[#C93CFF] text-sm font-semibold tracking-widest uppercase mb-4 block">Projects</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Featured
            <span className="bg-gradient-to-r from-[#C93CFF] to-[#F0C7FF] bg-clip-text text-transparent"> Works</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A selection of my recent projects showcasing mobile app development and modern web applications.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center gap-2 mb-8 md:mb-12"
        >
          {(['all', 'mobile', 'web'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === tab
                  ? 'bg-[#C93CFF]/15 text-[#C93CFF] border border-[#C93CFF]/30'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {tab === 'all' ? 'All Projects' : tab === 'mobile' ? '📱 Mobile' : '🌐 Web'}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#C93CFF]/20 overflow-hidden transition-all duration-300"
            >
              {/* Project gradient header */}
              <div className={`h-32 md:h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="p-4 md:p-5 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/10"
                  >
                    <project.icon size={32} className="text-white/80" />
                  </motion.div>
                </div>
                {/* Category badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider ${
                    project.category === 'mobile'
                      ? 'bg-[#C93CFF]/20 text-[#C93CFF] border border-[#C93CFF]/30'
                      : 'bg-[#F0C7FF]/20 text-[#F0C7FF] border border-[#F0C7FF]/30'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#C93CFF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-white/5 text-gray-400 text-[10px] md:text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#C93CFF] transition-colors"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </motion.a>
                  )}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#C93CFF] transition-colors ml-auto"
                  >
                    <ExternalLink size={14} />
                    <span>View</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-10 md:mt-14"
        >
          <motion.a
            href="https://github.com/SabbirHossainEvan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <Github size={18} />
            View All Repositories
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
