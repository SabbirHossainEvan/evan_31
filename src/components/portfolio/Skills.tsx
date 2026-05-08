'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Skill {
  name: string
  level: number
  color: string
}

interface SkillCategory {
  title: string
  icon: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Mobile Development',
    icon: '📱',
    skills: [
      { name: 'React Native', level: 92, color: 'from-[#C93CFF] to-[#9333EA]' },
      { name: 'Expo', level: 85, color: 'from-[#9333EA] to-[#F0C7FF]' },
      { name: 'Mobile UI/UX', level: 88, color: 'from-[#F0C7FF] to-[#D946EF]' },
      { name: 'App Performance', level: 82, color: 'from-[#D946EF] to-[#C93CFF]' },
    ],
  },
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90, color: 'from-[#C93CFF] to-[#9333EA]' },
      { name: 'Next.js', level: 88, color: 'from-[#9333EA] to-[#F0C7FF]' },
      { name: 'TypeScript', level: 85, color: 'from-[#F0C7FF] to-[#D946EF]' },
      { name: 'Tailwind CSS', level: 92, color: 'from-[#D946EF] to-[#C93CFF]' },
    ],
  },
  {
    title: 'Backend & Tools',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 78, color: 'from-[#C93CFF] to-[#9333EA]' },
      { name: 'MongoDB', level: 75, color: 'from-[#9333EA] to-[#F0C7FF]' },
      { name: 'Firebase', level: 85, color: 'from-[#F0C7FF] to-[#D946EF]' },
      { name: 'REST APIs', level: 88, color: 'from-[#D946EF] to-[#C93CFF]' },
    ],
  },
]

const techLogos = [
  { name: 'React Native', svg: '⚛️' },
  { name: 'React', svg: '⚛️' },
  { name: 'Next.js', svg: '▲' },
  { name: 'TypeScript', svg: 'TS' },
  { name: 'JavaScript', svg: 'JS' },
  { name: 'Node.js', svg: '🟢' },
  { name: 'Tailwind', svg: '🎨' },
  { name: 'MongoDB', svg: '🍃' },
  { name: 'Firebase', svg: '🔥' },
  { name: 'Git', svg: '🔀' },
  { name: 'Redux', svg: '🔄' },
  { name: 'Figma', svg: '🎯' },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative py-20 md:py-32 bg-[#0D0D12] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/5 blur-[150px] rounded-full -translate-y-1/2" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-[#C93CFF] text-sm font-semibold tracking-widest uppercase mb-4 block">Skills & Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Technologies I
            <span className="bg-gradient-to-r from-[#C93CFF] to-[#F0C7FF] bg-clip-text text-transparent"> Master</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Specializing in mobile-first development with a strong foundation in modern web technologies.
            Here are the tools and frameworks I work with daily.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="p-5 md:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#C93CFF]/15 transition-colors"
            >
              <div className="flex items-center gap-3 mb-5 md:mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg md:text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.2,
                          delay: 0.3 + catIdx * 0.15 + skillIdx * 0.1,
                          ease: 'easeOut',
                        }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech logos marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="overflow-hidden"
        >
          <div className="text-center mb-6">
            <p className="text-sm text-gray-500 uppercase tracking-widest">Tech Stack</p>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0D0D12] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0D0D12] to-transparent z-10" />
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="flex gap-4 md:gap-6"
            >
              {[...techLogos, ...techLogos, ...techLogos].map((tech, i) => (
                <div
                  key={`${tech.name}-${i}`}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-400 hover:text-[#C93CFF] hover:border-[#C93CFF]/20 transition-colors cursor-default"
                >
                  <span className="text-sm">{tech.svg}</span>
                  <span className="text-xs font-medium whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
