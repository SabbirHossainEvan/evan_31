'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Download } from 'lucide-react'
import Image from 'next/image'

function PhoneMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateY: -10 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
      className="relative hidden lg:block"
    >
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Phone frame */}
        <div className="w-[260px] h-[520px] rounded-[40px] bg-gradient-to-b from-gray-800 to-gray-900 p-2 shadow-2xl shadow-purple-500/10 border border-white/10">
          {/* Phone screen */}
          <div className="w-full h-full rounded-[32px] bg-[#0D0D12] overflow-hidden relative">
            {/* Status bar */}
            <div className="flex items-center justify-between px-5 pt-3 pb-2">
              <span className="text-[10px] text-white/60">9:41</span>
              <div className="flex gap-1">
                <div className="w-3.5 h-2 rounded-sm bg-white/30" />
                <div className="w-2.5 h-2 rounded-sm bg-white/30" />
                <div className="w-4 h-2 rounded-sm bg-[#C93CFF]/60" />
              </div>
            </div>

            {/* App content mockup */}
            <div className="px-4 pt-3 space-y-3">
              {/* App header */}
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#C93CFF] to-[#9333EA]" />
                <div>
                  <div className="w-16 h-2 rounded-full bg-white/20" />
                  <div className="w-10 h-1.5 rounded-full bg-white/10 mt-1" />
                </div>
              </div>

              {/* Search bar */}
              <div className="w-full h-8 rounded-xl bg-white/5 border border-white/10" />

              {/* Cards */}
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.2 }}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-10 h-10 rounded-lg ${
                      i === 1 ? 'bg-[#C93CFF]/20' : i === 2 ? 'bg-[#9333EA]/20' : 'bg-[#F0C7FF]/20'
                    }`} />
                    <div className="flex-1">
                      <div className="w-20 h-2 rounded-full bg-white/15" />
                      <div className="w-14 h-1.5 rounded-full bg-white/8 mt-1.5" />
                    </div>
                    <div className={`w-8 h-5 rounded-md ${
                      i === 1 ? 'bg-[#C93CFF]/30' : i === 2 ? 'bg-[#9333EA]/30' : 'bg-[#F0C7FF]/30'
                    }`} />
                  </div>
                </motion.div>
              ))}

              {/* FAB button */}
              <div className="flex justify-end pt-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C93CFF] to-[#9333EA] flex items-center justify-center shadow-lg shadow-purple-500/30"
                >
                  <span className="text-black text-lg">+</span>
                </motion.div>
              </div>
            </div>

            {/* Bottom nav */}
            <div className="absolute bottom-0 left-0 right-0 px-4 py-3 flex justify-around border-t border-white/5 bg-[#0D0D12]/80 backdrop-blur-sm">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-md ${
                    i === 1 ? 'bg-[#C93CFF]/50' : 'bg-white/15'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-4 bg-gradient-to-b from-[#C93CFF]/10 to-transparent rounded-[50px] blur-xl -z-10" />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D12]">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -right-40 w-[600px] h-[600px] rounded-full bg-violet-500/15 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 left-1/3 w-[400px] h-[400px] rounded-full bg-[#C93CFF]/10 blur-[120px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(201,61,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,61,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#C93CFF]/30"
          style={{
            width: `${2 + (i % 3)}px`,
            height: `${2 + (i % 3)}px`,
            left: `${10 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            y: [-15, 15, -15],
            x: [-5, 5, -5],
            opacity: [0.15, 0.5, 0.15],
          }}
          transition={{
            duration: 3 + i * 0.7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.3,
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left: Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 text-center lg:text-left"
        >
          {/* Avatar - mobile/tablet */}
          <motion.div
            variants={itemVariants}
            className="mb-6 lg:hidden flex justify-center"
          >
            <div className="relative">
              {/* Rotating border ring - mobile */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #C93CFF, #9333EA, #F0C7FF, #5E1B8C, #C93CFF)',
                  padding: '2px',
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0D0D12]" />
              </motion.div>
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#C93CFF]/30">
                <Image
                  src="/md.sabbir_hossain.png"
                  alt="Sabbir Hossain Evan"
                  width={96}
                  height={96}
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#C93CFF] border-2 border-[#0D0D12]" />
            </div>
          </motion.div>

          {/* Status badge */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C93CFF]/10 border border-[#C93CFF]/20 text-[#C93CFF] text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-[#C93CFF] animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-3 md:mb-5"
          >
            <span className="text-white">Md. Sabbir</span>
            <br />
            <span className="bg-gradient-to-r from-[#5E1B8C] via-[#C93CFF] to-[#F0C7FF] bg-clip-text text-transparent">
              Hossain Evan
            </span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="mb-5 md:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-300">
              Mobile App Developer & Web Developer
            </h2>
            <motion.p
              className="mt-2 md:mt-3 text-sm md:text-base text-gray-500 max-w-xl lg:max-w-lg mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Building fast, scalable, user-friendly web & mobile apps with clean code.
              Creating modern interfaces that deliver exceptional experiences.
            </motion.p>
          </motion.div>

          {/* Tech stack pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 md:gap-3 mb-6 md:mb-8">
            {['React Native', 'Next.js', 'TypeScript', 'Node.js'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs md:text-sm font-medium hover:bg-[#C93CFF]/10 hover:border-[#C93CFF]/20 hover:text-[#C93CFF] transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 md:gap-4">
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(147, 51, 234, 0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-xl bg-gradient-to-r from-[#9333EA] to-[#C93CFF] text-white font-semibold text-sm md:text-base shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow text-center"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3.5 md:py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm md:text-base hover:bg-white/10 transition-colors text-center"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mt-6 md:mt-8">
            <motion.a
              href="https://github.com/SabbirHossainEvan"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/sabbirhossainevan/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
            >
              <Download size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right: Phone Mockup + Profile Image (desktop) */}
        <div className="flex-shrink-0 relative">
          {/* Profile image with rotating neon border - desktop only */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block absolute -top-12 -left-28 z-20"
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#C93CFF]/30 via-[#9333EA]/20 to-[#F0C7FF]/30 blur-md" />
              {/* Rotating border ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-1.5 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #C93CFF, #9333EA, #F0C7FF, #5E1B8C, #C93CFF)',
                  padding: '3px',
                }}
              >
                <div className="w-full h-full rounded-full bg-[#0D0D12]" />
              </motion.div>
              {/* Image */}
              <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-[#C93CFF]/20 bg-[#0D0D12]">
                <Image
                  src="/md.sabbir_hossain.png"
                  alt="Sabbir Hossain Evan"
                  width={100}
                  height={100}
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Online dot */}
              <div className="absolute -bottom-0.5 -right-0.5 z-10">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-[#C93CFF] animate-ping opacity-50" />
                  <span className="relative flex w-4 h-4 rounded-full bg-[#C93CFF] border-2 border-[#0D0D12]" />
                </div>
              </div>
            </div>
          </motion.div>

          <PhoneMockup />

          {/* Floating badges around phone */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="hidden lg:flex absolute top-16 -right-6 items-center gap-2 px-3 py-2 rounded-xl bg-[#1A0A2E]/80 backdrop-blur-sm border border-white/10 shadow-xl"
          >
            <span className="text-lg">⚛️</span>
            <span className="text-xs text-gray-300 font-medium">React Native</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="hidden lg:flex absolute bottom-24 -left-8 items-center gap-2 px-3 py-2 rounded-xl bg-[#1A0A2E]/80 backdrop-blur-sm border border-white/10 shadow-xl"
          >
            <span className="text-lg">🚀</span>
            <span className="text-xs text-gray-300 font-medium">1,160+ Commits</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.6 }}
            className="hidden lg:flex absolute -bottom-4 left-1/2 -translate-x-1/2 items-center gap-2 px-3 py-2 rounded-xl bg-[#1A0A2E]/80 backdrop-blur-sm border border-[#C93CFF]/20 shadow-xl shadow-[#C93CFF]/25"
          >
            <span className="w-2 h-2 rounded-full bg-[#C93CFF] animate-pulse" />
            <span className="text-xs text-[#C93CFF] font-medium">Open to Work</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#C93CFF] transition-colors cursor-pointer"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={18} />
        </motion.a>
      </motion.div>
    </section>
  )
}
