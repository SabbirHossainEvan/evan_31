'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Heart, ArrowUp, Facebook, Instagram } from 'lucide-react'

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { icon: Github, href: 'https://github.com/SabbirHossainEvan', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sabbirhossainevan/', label: 'LinkedIn' },
  { icon: Facebook, href: 'https://www.facebook.com/SabbirHossainEvan31', label: 'Facebook' },
  { icon: XIcon, href: 'https://x.com/SabbirHossainEvan', label: 'X' },
  { icon: Instagram, href: 'https://www.instagram.com/sabbirhossainevan', label: 'Instagram' },
]

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
            <div className="flex items-center gap-2 md:gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                >
                  <link.icon size={18} />
                </motion.a>
              ))}
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
