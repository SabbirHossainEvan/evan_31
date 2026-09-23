'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  MonitorSmartphone,
  Smartphone,
} from 'lucide-react'
import Navbar from '@/components/portfolio/Navbar'

type ProjectCategory = 'All' | 'Mobile' | 'Web'

interface Project {
  title: string
  category: Exclude<ProjectCategory, 'All'>
  description: string
  tags: string[]
  image: string
  orientation: 'mobile' | 'desktop'
  github: string
}

const categories: ProjectCategory[] = ['All', 'Mobile', 'Web']

const projects: Project[] = [
  {
    title: 'Shelfil App',
    category: 'Mobile',
    description:
      'A modern book discovery and reading management mobile app built with React Native. Features personalized recommendations, reading progress tracking, and social sharing capabilities.',
    tags: ['React Native', 'JavaScript', 'Mobile UI'],
    image:
      'https://placehold.co/520x900/111827/C93CFF?text=Shelfil+App',
    orientation: 'mobile',
    github: 'https://github.com/SabbirHossainEvan/Shelfil_App_React_Native',
  },
  {
    title: 'MediTrust',
    category: 'Web',
    description:
      'A healthcare and telemedicine web application providing secure patient-doctor communication, appointment scheduling, and medical records management with an intuitive interface.',
    tags: ['JavaScript', 'React', 'REST APIs'],
    image:
      'https://placehold.co/900x560/101624/F0C7FF?text=MediTrust',
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/mediTrust',
  },
  {
    title: 'MovieFlex',
    category: 'Web',
    description:
      'A sleek movie discovery and streaming platform with real-time search, trending recommendations, and detailed movie information. Built with TypeScript and modern React patterns.',
    tags: ['TypeScript', 'React', 'API Integration'],
    image:
      'https://placehold.co/900x560/15111f/C93CFF?text=MovieFlex',
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/MovieFlex',
  },
  {
    title: 'Car Doctor',
    category: 'Web',
    description:
      'An automotive service booking platform that connects car owners with nearby mechanics. Features real-time tracking, service history, and secure payment integration.',
    tags: ['JavaScript', 'React', 'Node.js'],
    image:
      'https://placehold.co/900x560/111827/D946EF?text=Car+Doctor',
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/car-doctor',
  },
  {
    title: 'KomTaka.com',
    category: 'Web',
    description:
      'A fintech and digital payments platform providing secure money transfers, bill payments, and financial management tools with a focus on mobile-first user experience.',
    tags: ['JavaScript', 'React', 'Fintech'],
    image:
      'https://placehold.co/900x560/101624/F0C7FF?text=KomTaka.com',
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/KomTaka.com',
  },
  {
    title: 'Korean Vision',
    category: 'Mobile',
    description:
      'An AI-powered Korean beauty and skincare recommendation app. Features personalized product suggestions, skin analysis, and an interactive beauty routine builder.',
    tags: ['TypeScript', 'React Native', 'AI Integration'],
    image:
      'https://placehold.co/520x900/111827/C93CFF?text=Korean+Vision',
    orientation: 'mobile',
    github: 'https://github.com/SabbirHossainEvan/korean_vision',
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  return (
    <main className="min-h-screen bg-[#0D0D12] text-white">
      <Navbar />
      <section className="relative overflow-hidden border-b border-white/5">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#C93CFF]/10 blur-[140px]" />
        <div className="cyber-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 md:pb-16 md:pt-28 lg:px-8">


          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="max-w-3xl"
          >

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl">
              All projects.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
              A structured collection of selected mobile apps, backend systems,
              and web experiences. Demo content and placeholder images are used
              for now.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
        <div className="mb-10 overflow-x-auto border-b border-white/10">
          <div className="flex min-w-max gap-7">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-1 pb-4 text-sm font-medium transition ${
                  activeCategory === category
                    ? 'text-white'
                    : 'text-gray-500 hover:text-gray-200'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.span
                    layoutId="projectCategory"
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#C93CFF]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] shadow-2xl shadow-black/20 transition hover:border-[#C93CFF]/25 md:grid-cols-[0.86fr_1.14fr]"
            >
              <div className="relative min-h-[340px] overflow-hidden bg-[#11111a]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C93CFF]/10 via-transparent to-[#F0C7FF]/10" />
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img
                    src={project.image}
                    alt={`${project.title} placeholder preview`}
                    className={`rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/40 transition duration-500 group-hover:scale-[1.03] ${
                      project.orientation === 'mobile'
                        ? 'h-[420px] w-[240px]'
                        : 'h-auto w-full'
                    }`}
                  />
                </div>
              </div>

              <div className="flex min-h-[340px] flex-col p-6 sm:p-7">
                <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C93CFF]">
                  {project.orientation === 'mobile' ? (
                    <Smartphone size={15} />
                  ) : (
                    <MonitorSmartphone size={15} />
                  )}
                  {project.category}
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-white">
                  {project.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-7">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-gray-200 transition hover:border-[#C93CFF]/30 hover:text-white"
                  >
                    <Github size={17} />
                    Code
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-[#C93CFF]/25 bg-[#C93CFF]/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#C93CFF]/20"
                  >
                    <ExternalLink size={17} />
                    Preview
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  )
}
