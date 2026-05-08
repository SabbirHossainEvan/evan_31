'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, Smartphone, Palette, Zap } from 'lucide-react'

const highlights = [
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Expert in React Native cross-platform mobile apps with native-feeling performance and fluid UX.',
    color: 'from-[#5E1B8C] to-[#C93CFF]',
  },
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Building modern, scalable web apps with React, Next.js, and TypeScript for exceptional performance.',
    color: 'from-[#9333EA] to-[#F0C7FF]',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Translating Figma designs to pixel-perfect, responsive interfaces with a keen eye for detail.',
    color: 'from-[#F0C7FF] to-[#D946EF]',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing apps for speed and accessibility, delivering smooth experiences across all devices.',
    color: 'from-[#D946EF] to-[#C93CFF]',
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-20 md:py-32 bg-[#0D0D12] overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#5E1B8C]/5 blur-[150px] rounded-full" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-[#C93CFF] text-sm font-semibold tracking-widest uppercase mb-4 block">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Passionate About Creating
            <br />
            <span className="bg-gradient-to-r from-[#C93CFF] to-[#F0C7FF] bg-clip-text text-transparent">
              Digital Experiences
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left: About text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-4 md:space-y-6">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                I am a dedicated <span className="text-[#C93CFF] font-semibold">Mobile App & Web Developer</span> with
                3+ years of experience in creating clean, responsive, and user-centered digital solutions.
                I specialize in cross-platform mobile development using React Native, and modern web
                applications built with React and Next.js.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                I enjoy turning complex problems into simple, intuitive digital solutions that work
                flawlessly across all devices. My focus on mobile-first development ensures every
                application I build delivers a native-feeling experience whether on iOS, Android, or the web.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                I thrive in collaborative environments, enjoy learning new technologies, and love
                contributing to meaningful, high-impact projects. Always open to exciting opportunities
                where I can grow, build, and help shape modern digital experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-6">
                {[
                  { value: '3+', label: 'Years Exp.' },
                  { value: '25+', label: 'Projects' },
                  { value: '1160+', label: 'Contributions' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#C93CFF] to-[#F0C7FF] bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-5 md:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-[#C93CFF]/20 hover:bg-[#C93CFF]/[0.03] transition-all duration-300"
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${item.color} mb-3 md:mb-4`}>
                  <item.icon size={20} className="text-black" />
                </div>
                <h3 className="text-white font-semibold mb-1.5 md:mb-2 text-sm md:text-base">{item.title}</h3>
                <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
