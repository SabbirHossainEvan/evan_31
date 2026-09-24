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

function TechRow({ technology }: { technology: Technology }) {
  const Icon = technology.icon

  return (
    <div className="flex min-w-0 items-center gap-2 text-[10px] text-slate-200 sm:text-[11px]">
      <Icon className={`h-3.5 w-3.5 shrink-0 ${technology.accent ?? 'text-purple-300'}`} strokeWidth={2.3} />
      <span className="min-w-0 flex-1 truncate">{technology.name}</span>
      <span className="shrink-0 rounded bg-black/40 px-1.5 py-0.5 text-[8px] font-medium text-slate-300 sm:text-[9px]">
        {technology.status}
      </span>
    </div>
  )
}

function ChartFrame({ children, label, value }: { children: React.ReactNode; label: string; value: string }) {
  return (
    <div className="min-w-0 flex-1 rounded-lg border border-white/[0.06] bg-[#101016]/75 p-2.5">
      <div className="mb-2 flex items-center justify-between gap-2 text-[9px] text-slate-400">
        <span className="flex items-center gap-1.5 font-semibold text-slate-200">
          <ChartNoAxesCombined className="h-3 w-3 text-purple-300" />
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
    <section id="skills" className="relative overflow-hidden bg-[#0d0d12] py-20 md:py-8">
      <div className="absolute left-1/2  -translate-x-1/2 rounded-full bg-purple-600/[0.035] blur-[140px]" />

      <div ref={ref} className="relative mx-auto px-4 sm:px-40">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-9 text-center md:mb-10"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
            Technologies I <span className="text-[#c93cff]">| Master</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[10px] leading-relaxed text-slate-400 sm:text-xs">
            Specializing in mobile-first development with a strong foundation in modern web technologies.
            <br />
            Here are the tools and frameworks I work with daily.
          </p>
        </motion.div>

        <div className="grid gap-3.5 md:grid-cols-[1.08fr_1.08fr_0.92fr]">
          {technologyGroups.map((group, index) => {
            const GroupIcon = group.icon

            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative overflow-hidden rounded-lg border border-[#9e43c7]/70 bg-[linear-gradient(145deg,rgba(57,25,70,0.74),rgba(18,16,25,0.9)_62%)] px-3 py-3.5 shadow-[0_10px_35px_rgba(155,43,196,0.09)]"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#d77cff] to-transparent opacity-70" />
                <div className="mb-2.5 flex items-start gap-2">
                  <GroupIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#d2a0e8]" strokeWidth={1.8} />
                  <h3 className="max-w-[180px] text-[11px] font-bold leading-[1.15] text-white sm:text-xs">{group.title}</h3>
                </div>
                <div className="space-y-2">
                  {group.technologies.map((technology) => (
                    <TechRow key={technology.name} technology={technology} />
                  ))}
                </div>
                {group.footer && (
                  <div className="mt-2.5 inline-flex items-center gap-1 rounded-full border border-purple-300/15 bg-black/20 px-2 py-0.5 text-[8px] text-slate-500">
                    <Check className="h-2.5 w-2.5 text-purple-300" />
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
          className="mt-5 overflow-hidden rounded-lg border border-white/[0.07] bg-[linear-gradient(135deg,rgba(44,22,54,0.7),rgba(17,16,23,0.92)_55%)] p-3.5 shadow-[0_14px_45px_rgba(0,0,0,0.18)] sm:p-4"
        >
          <div className="grid gap-4 lg:grid-cols-[0.95fr_1.25fr]">
            <div className="min-w-0">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-purple-500/10 px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.08em] text-purple-200">
                <Trophy className="h-3 w-3" />
                Competitive Programming
              </div>
              <h3 className="text-lg font-bold text-white sm:text-xl">Problem Solving Ability</h3>
              <p className="mt-2 max-w-[280px] text-[9px] leading-relaxed text-slate-400 sm:text-[10px]">
                I approach coding challenges by reading constraints carefully, building the simplest correct idea first,
                then optimizing it with strong data structures and algorithmic patterns.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
              <ChartFrame label="LeetCode" value="300+ Problems Solved">
                <div className="flex h-[76px] items-end gap-1 border-b border-l border-white/10 px-1 pb-1">
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
                <div className="relative h-[76px] overflow-hidden border-b border-l border-white/10">
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
            </div>
          </div>

          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            <div className="rounded-lg border border-white/[0.06] bg-[#111017]/80 p-2.5">
              <div className="flex items-center gap-1.5 text-[9px] font-semibold text-white"><Trophy className="h-3 w-3 text-purple-300" /> Competitive Programming</div>
              <div className="mt-2 flex items-end gap-5"><strong className="text-sm text-[#d99aff]">High Rank</strong><strong className="text-sm text-[#d99aff]">300+</strong></div>
              <div className="mt-0.5 flex gap-8 text-[8px] text-slate-500"><span>Global Rank</span><span>Contest Rating</span></div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-[#111017]/80 p-2.5">
              <div className="flex items-center gap-1.5 text-[9px] font-semibold text-white"><Braces className="h-3 w-3 text-purple-300" /> DSA &amp; Algorithmic Patterns</div>
              <div className="mt-3 flex flex-wrap gap-1"><span className="stat-pill">Categories</span><span className="stat-pill">Categories</span><span className="stat-pill">Patterns</span></div>
            </div>
            <div className="rounded-lg border border-white/[0.06] bg-[#111017]/80 p-2.5">
              <div className="flex items-center gap-1.5 text-[9px] font-semibold text-white"><Settings2 className="h-3 w-3 text-purple-300" /> System Design &amp; Optimization</div>
              <div className="mt-3 flex flex-wrap gap-1"><span className="stat-pill">Concepts</span><span className="stat-pill">Concepts</span><span className="stat-pill">Content &amp; Toastion</span></div>
            </div>
          </div>
        </motion.article>
      </div>

      <style jsx>{`
        .stat-pill {
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.04);
          color: rgb(203 213 225);
          font-size: 8px;
          padding: 3px 6px;
        }
      `}</style>
    </section>
  )
}
