'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  company: string
  role: string
  duration: string
  location: string
  description: string
  highlights: string[]
  isCurrent: boolean
}

const experiences: ExperienceItem[] = [
  {
    company: 'Sparktech Agency',
    role: 'Junior Software Developer',
    duration: 'Dec 2025 - Present',
    location: 'Dhaka, Bangladesh',
    description: 'Developing and maintaining both web and mobile applications with a focus on building features, writing clean and efficient code, solving technical issues, and improving overall user experience.',
    highlights: [
      'Web & Mobile Application Development',
      'Clean Code & Performance Optimization',
      'Cross-functional Team Collaboration',
    ],
    isCurrent: true,
  },
  {
    company: 'Nexgen Innovators',
    role: 'Frontend Developer',
    duration: 'Feb 2024 - Dec 2025',
    location: 'Dhaka, Bangladesh',
    description: 'Built responsive, user-friendly web applications using React, Next.js, and Tailwind CSS. Implemented Firebase Authentication, optimized UI performance, developed reusable components, and collaborated with cross-functional teams.',
    highlights: [
      'React & Next.js Web Applications',
      'Firebase Authentication Integration',
      'Reusable Component Architecture',
    ],
    isCurrent: false,
  },
  {
    company: 'CodeNext IT',
    role: 'Frontend Developer Intern',
    duration: 'Oct 2022 - Nov 2023',
    location: 'Pabna, Rajshahi, Bangladesh',
    description: 'Gained practical experience in developing and optimizing responsive user interfaces. Leveraged React, JavaScript, HTML5, and CSS3 to implement high-fidelity designs and ensure cross-browser compatibility.',
    highlights: [
      'Responsive UI Development',
      'RESTful API Integration',
      'Agile Development Practices',
    ],
    isCurrent: false,
  },
]

const education = {
  institution: 'Dhaka Polytechnic Institute',
  field: 'Computer Engineering',
  icon: '🎓',
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-20 md:py-32 bg-[#0D0D12] overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-purple-500/5 blur-[150px] rounded-full" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-[#C93CFF] text-sm font-semibold tracking-widest uppercase mb-4 block">Experience</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Professional
            <span className="bg-gradient-to-r from-[#C93CFF] to-[#F0C7FF] bg-clip-text text-transparent"> Journey</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#C93CFF]/50 via-[#9333EA]/30 to-transparent" />

              <div className="space-y-6 md:space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="relative pl-12 md:pl-16"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-2 md:left-4 top-6 w-4 md:w-4 h-4 rounded-full border-2 border-[#C93CFF] bg-[#0D0D12] z-10">
                      {exp.isCurrent && (
                        <motion.div
                          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-[#C93CFF]"
                        />
                      )}
                    </div>

                    <motion.div
                      whileHover={{ x: 4 }}
                      className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#C93CFF]/15 transition-all duration-300"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold text-white">{exp.role}</h3>
                          <p className="text-[#C93CFF] font-semibold text-sm md:text-base">{exp.company}</p>
                        </div>
                        {exp.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#C93CFF]/10 text-[#C93CFF] text-[10px] md:text-xs font-semibold border border-[#C93CFF]/20">
                            Current
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-3 md:gap-4 mb-3 text-xs md:text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Calendar size={12} />
                          {exp.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={12} />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span
                            key={h}
                            className="px-2.5 py-1 rounded-lg bg-[#C93CFF]/5 text-[#C93CFF]/80 text-[10px] md:text-xs font-medium border border-[#C93CFF]/10"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Info sidebar */}
          <div className="space-y-4 md:space-y-6">
            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#C93CFF]/15 transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{education.icon}</span>
                <h3 className="text-lg font-bold text-white">Education</h3>
              </div>
              <p className="text-white font-semibold text-sm md:text-base mb-1">{education.institution}</p>
              <p className="text-[#C93CFF] text-xs md:text-sm font-medium">{education.field}</p>
            </motion.div>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -4 }}
              className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#C93CFF]/15 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-4">Currently Exploring</h3>
              <div className="flex flex-wrap gap-2">
                {['Flutter', 'GraphQL', 'AWS', 'CI/CD', 'App Store Deployment', 'Machine Learning', 'Deep Learning', 'Competitive Programming', 'DSA'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-300 text-xs font-medium border border-white/5 hover:border-[#C93CFF]/20 hover:text-[#C93CFF] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
