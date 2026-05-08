'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MapPin, Send, Github, Linkedin, Phone, ArrowUpRight, Facebook, Instagram } from 'lucide-react'

function XIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setErrorMsg(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'evansabbir31@gmail.com',
      href: 'mailto:evansabbir31@gmail.com',
      color: 'from-emerald-400 to-teal-400',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dhaka, Bangladesh',
      href: '#',
      color: 'from-teal-400 to-cyan-400',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1327284962',
      href: 'tel:+8801327284962',
      color: 'from-cyan-400 to-sky-400',
    },
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      value: 'SabbirHossainEvan',
      href: 'https://github.com/SabbirHossainEvan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sabbirhossainevan',
      href: 'https://www.linkedin.com/in/sabbirhossainevan/',
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'SabbirHossainEvan31',
      href: 'https://www.facebook.com/SabbirHossainEvan31',
    },
    {
      icon: XIcon,
      label: 'X',
      value: '@SabbirHossainEvan',
      href: 'https://x.com/SabbirHossainEvan',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@sabbirhossainevan',
      href: 'https://www.instagram.com/sabbirhossainevan',
    },
  ]

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/5 blur-[150px] rounded-full" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <span className="text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Contact</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">
            Let&apos;s Work
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Have a project in mind or want to discuss an opportunity? I&apos;d love to hear from you.
            Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 md:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-4 md:space-y-6"
          >
            {contactInfo.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="flex items-start gap-4 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-400/20 transition-all group"
              >
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} flex-shrink-0`}>
                  <item.icon size={18} className="text-black" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{item.label}</p>
                  <p className="text-sm md:text-base text-white font-medium group-hover:text-emerald-400 transition-colors">
                    {item.value}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Social Links */}
            <div className="pt-2 md:pt-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3 md:mb-4">Social Profiles</p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all"
                  >
                    {typeof link.icon === 'function' ? <link.icon size={18} /> : null}
                    <span className="text-xs md:text-sm font-medium">{link.label}</span>
                    <ArrowUpRight size={12} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="pt-2 md:pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-400/20 text-emerald-400 font-semibold text-sm hover:from-emerald-500/20 hover:to-teal-500/20 transition-all"
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-5 md:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-5 mb-4 md:mb-5">
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Your Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-emerald-400/40 focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-2 font-medium">Your Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-emerald-400/40 focus:bg-white/[0.07] transition-all"
                  />
                </div>
              </div>
              <div className="mb-4 md:mb-5">
                <label className="block text-xs text-gray-400 mb-2 font-medium">Message</label>
                <textarea
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 text-sm focus:outline-none focus:border-emerald-400/40 focus:bg-white/[0.07] transition-all resize-none"
                />
              </div>

              {/* Error message */}
              {errorMsg && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                >
                  {errorMsg}
                </motion.div>
              )}

              {/* Success message */}
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm"
                >
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-sm shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-shadow disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : submitted ? (
                  'Message Sent! ✓'
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
