'use client'

import { motion, useInView } from 'framer-motion'
import {
  Atom,
  Braces,
  ChartNoAxesCombined,
  Check,
  Coffee,
  Database,
  FileCode2,
  Flame,
  Globe2,
  Network,
  ServerCog,
  Settings2,
  Smartphone,
  Trophy,
  Triangle,
} from 'lucide-react'
import { useRef } from 'react'

type IconType = typeof Smartphone

interface Technology {
  name: string
  icon: IconType
  status: string
  accent?: string
}

interface TechnologyGroup {
  title: string
  icon: IconType
  technologies: Technology[]
  footer?: string
}

const technologyGroups: TechnologyGroup[] = [
  {
    title: 'Mobile & Frontend Stack',
    icon: Smartphone,
    technologies: [
      { name: 'React Native', icon: Atom, status: 'Proficient', accent: 'text-cyan-300' },
      { name: 'Expo', icon: Triangle, status: 'Daily Driver', accent: 'text-white' },
      { name: 'React.js', icon: Atom, status: 'Proficient', accent: 'text-cyan-300' },
      { name: 'Next.js', icon: Globe2, status: 'Daily Driver', accent: 'text-white' },
      { name: 'TypeScript', icon: FileCode2, status: 'Proficient', accent: 'text-sky-300' },
    ],
  },
  {
    title: 'Programming Languages & Logic',
    icon: Braces,
    technologies: [
      { name: 'C', icon: Braces, status: 'Proficient', accent: 'text-blue-300' },
      { name: 'C++', icon: Braces, status: 'Proficient', accent: 'text-blue-300' },
      { name: 'Java', icon: Coffee, status: 'Proficient', accent: 'text-orange-300' },
      { name: 'Python', icon: FileCode2, status: 'Proficient', accent: 'text-yellow-300' },
    ],
    footer: 'competitive programming',
  },
  {
    title: 'Backend, Tools & Architecture',
    icon: ServerCog,
    technologies: [
      { name: 'Node.js', icon: Network, status: 'Proficient', accent: 'text-green-300' },
      { name: 'MongoDB', icon: Database, status: 'Proficient', accent: 'text-green-300' },
      { name: 'Firebase', icon: Flame, status: 'Proficient', accent: 'text-yellow-300' },
      { name: 'REST APIs', icon: Globe2, status: 'Proficient', accent: 'text-slate-200' },
      { name: 'GraphQL', icon: Network, status: 'Specific Tools', accent: 'text-pink-300' },
    ],
  },
]

const leetCodeBars = [24, 38, 30, 52, 66, 49, 72, 60, 86, 100]
const codeforcesPoints = [16, 22, 20, 31, 28, 42, 39, 50, 47, 63, 58, 72, 68, 82, 94]

function TechRow({ technology, delay = 0 }: { technology: Technology; delay?: number }) {
  const Icon = technology.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ x: 6 }}
      className="flex min-w-0 items-center gap-3 text-sm text-slate-200 sm:text-base"
    >
      <Icon className={`h-5 w-5 shrink-0 ${technology.accent ?? 'text-purple-300'}`} strokeWidth={2.3} />
      <span className="min-w-0 flex-1 truncate">{technology.name}</span>
      <span className="shrink-0 rounded bg-black/40 px-2.5 py-1.5 text-[11px] font-medium text-slate-300 sm:text-xs">
        {technology.status}
      </span>
    </motion.div>
  )
}

function ChartFrame({ children, label, value }: { children: React.ReactNode; label: string; value: string }) {
  return (
    <div className="min-w-0 flex-1 rounded-xl border border-white/[0.06] bg-[#101016]/75 p-4">
      <div className="mb-3.5 flex items-center justify-between gap-2 text-xs text-slate-400 sm:text-sm">
        <span className="flex items-center gap-2.5 font-semibold text-slate-200">
          <ChartNoAxesCombined className="h-5 w-5 text-purple-300" />
          {label}
        </span>
        <span className="truncate">{value}</span>
      </div>
      {children}
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="relative overflow-hidden bg-[#0d0d12] py-2 md:py-0">
      <div className="absolute left-1/2  -translate-x-1/2 rounded-full bg-purple-600/[0.035] blur-[140px]" />

      <div ref={ref} className="relative mx-auto max-w-[1250px] px-4 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center md:mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies I <span className="text-[#c93cff]">| Master</span>
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-400 sm:text-base">
            Specializing in mobile-first development with a strong foundation in modern web technologies.
            <br />
            Here are the tools and frameworks I work with daily.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-[1.08fr_1.08fr_0.92fr]">
          {technologyGroups.map((group, index) => {
            const GroupIcon = group.icon

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={{ y: -8, scale: 1.015, boxShadow: '0 18px 45px rgba(183, 61, 230, 0.2)' }}
                whileTap={{ scale: 0.99 }}
                className="relative min-h-[290px] overflow-hidden rounded-xl border border-[#9e43c7]/70 bg-[linear-gradient(145deg,rgba(57,25,70,0.74),rgba(18,16,25,0.9)_62%)] px-6 py-6 shadow-[0_10px_35px_rgba(155,43,196,0.09)]"
              >
                <motion.div
                  animate={{ opacity: [0.35, 0.9, 0.35] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 }}
                  className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d77cff] to-transparent"
                />
                <div className="mb-5 flex items-start gap-3">
                  <GroupIcon className="mt-0.5 h-6 w-6 shrink-0 text-[#d2a0e8]" strokeWidth={1.8} />
                  <h3 className="max-w-[250px] text-base font-bold leading-[1.2] text-white sm:text-lg">{group.title}</h3>
                </div>
                <div className="space-y-3">
                  {group.technologies.map((technology, technologyIndex) => (
                    <TechRow key={technology.name} technology={technology} delay={0.2 + index * 0.12 + technologyIndex * 0.06} />
                  ))}
                </div>
                {group.footer && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-purple-300/15 bg-black/20 px-3 py-1.5 text-xs text-slate-500">
                    <Check className="h-4 w-4 text-purple-300" />
                    {group.footer}
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ y: -5, boxShadow: '0 20px 55px rgba(124, 42, 160, 0.2)' }}
          className="mt-8 overflow-hidden rounded-xl border border-white/[0.07] bg-[linear-gradient(135deg,rgba(44,22,54,0.7),rgba(17,16,23,0.92)_55%)] p-6 shadow-[0_14px_45px_rgba(0,0,0,0.18)] sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.25fr]">
            <div className="min-w-0">
              <div className="mb-4 inline-flex items-center gap-2.5 rounded-full bg-purple-500/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-purple-200">
                <Trophy className="h-5 w-5" />
                Competitive Programming
              </div>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">Problem Solving Ability</h3>
              <p className="mt-4 max-w-[420px] text-xs leading-relaxed text-slate-400 sm:text-sm">
                I approach coding challenges by reading constraints carefully, building the simplest correct idea first,
                then optimizing it with strong data structures and algorithmic patterns.
              </p>
            </div>

            {/* <div className="flex min-w-0 flex-col gap-5 sm:flex-row">
              <ChartFrame label="LeetCode" value="300+ Problems Solved">
                <div className="flex h-[145px] items-end gap-2 border-b border-l border-white/10 px-2 pb-1.5">
                  {leetCodeBars.map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${height}%` } : { height: 0 }}
                      transition={{ duration: 0.75, delay: 0.55 + index * 0.04 }}
                      className="min-w-0 flex-1 rounded-t-sm bg-gradient-to-t from-[#8d5b3a] via-[#dba74b] to-[#ffe09a]"
                    />
                  ))}
                </div>
              </ChartFrame>
              <ChartFrame label="CODEFORCES" value="Rating">
                <div className="relative h-[145px] overflow-hidden border-b border-l border-white/10">
                  <svg viewBox="0 0 180 76" className="absolute inset-0 h-full w-full" preserveAspectRatio="none" aria-label="Codeforces rating trend">
                    <defs>
                      <linearGradient id="ratingFill" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0" stopColor="#d3c09a" stopOpacity="0.35" />
                        <stop offset="1" stopColor="#d3c09a" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                    <path d={`M0 72 ${codeforcesPoints.map((point, index) => `L${(index / (codeforcesPoints.length - 1)) * 180} ${76 - point * 0.7}`).join(' ')} L180 76 L0 76 Z`} fill="url(#ratingFill)" />
                    <polyline points={codeforcesPoints.map((point, index) => `${(index / (codeforcesPoints.length - 1)) * 180},${76 - point * 0.7}`).join(' ')} fill="none" stroke="#d7cda9" strokeWidth="1.4" />
                  </svg>
                </div>
              </ChartFrame>
            </div> */}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <motion.div whileHover={{ y: -4, borderColor: 'rgba(201, 60, 255, 0.28)' }} className="rounded-xl border border-white/[0.06] bg-[#111017]/80 p-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white"><Trophy className="h-5 w-5 text-purple-300" /> Competitive Programming</div>
              <div className="mt-4 flex items-end gap-8"><strong className="text-lg text-[#d99aff]">High Rank</strong><strong className="text-lg text-[#d99aff]">300+</strong></div>
              <div className="mt-1.5 flex gap-12 text-[11px] text-slate-500"><span>Global Rank</span><span>Contest Rating</span></div>
            </motion.div>
            <motion.div whileHover={{ y: -4, borderColor: 'rgba(201, 60, 255, 0.28)' }} className="rounded-xl border border-white/[0.06] bg-[#111017]/80 p-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white"><Braces className="h-5 w-5 text-purple-300" /> DSA &amp; Algorithmic Patterns</div>
              <div className="mt-5 flex flex-wrap gap-2"><span className="stat-pill">Categories</span><span className="stat-pill">Categories</span><span className="stat-pill">Patterns</span></div>
            </motion.div>
            <motion.div whileHover={{ y: -4, borderColor: 'rgba(201, 60, 255, 0.28)' }} className="rounded-xl border border-white/[0.06] bg-[#111017]/80 p-5">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white"><Settings2 className="h-5 w-5 text-purple-300" /> System Design &amp; Optimization</div>
              <div className="mt-5 flex flex-wrap gap-2"><span className="stat-pill">Concepts</span><span className="stat-pill">Concepts</span><span className="stat-pill">Content &amp; Toastion</span></div>
            </motion.div>
          </div>
        </motion.article>
      </div>

      <style jsx>{`
        .stat-pill {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.04);
          color: rgb(203 213 225);
          font-size: 11px;
          padding: 5px 10px;
        }
      `}</style>
    </section>
  )
}
