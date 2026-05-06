'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToTop() }} className="inline-block">
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  &lt;Evan /&gt;
                </span>
              </a>
              <p className="text-gray-500 text-xs md:text-sm mt-2">
                Mobile App Developer & Web Developer
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <motion.a
                href="https://github.com/SabbirHossainEvan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sabbirhossainevan/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
              >
                <Linkedin size={18} />
              </motion.a>
            </div>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-emerald-400 hover:border-emerald-400/20 transition-all"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} Md. Sabbir Hossain Evan. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs flex items-center gap-1">
              Made with <Heart size={12} className="text-emerald-400" /> in Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
