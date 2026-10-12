'use client'

import { motion, useInView } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'
import {
  ArrowRight,
  ExternalLink,
  Github,
  MonitorSmartphone,
  Smartphone,
} from 'lucide-react'
import ProjectLightbox, {
  type ProjectGalleryItem,
} from '@/components/portfolio/ProjectLightbox'

type ProjectCategory = 'All' | 'Mobile' | 'Web'

interface Project {
  title: string
  category: Exclude<ProjectCategory, 'All'>
  description: string
  tags: string[]
  images: string[]
  orientation: 'mobile' | 'desktop'
  github: string
  liveDemo: string
}

const categories: ProjectCategory[] = ['All', 'Mobile', 'Web']

const projects: Project[] = [
  {
    title: 'KomTaka.com',
    category: 'Web',
    description:
      'A fintech and digital payments platform providing secure money transfers, bill payments, and financial management tools with a focus on mobile-first user experience.',
    tags: ['JavaScript', 'React', 'Fintech'],
    images: [
      'https://placehold.co/900x560/101624/F0C7FF?text=KomTaka.com',
      'https://placehold.co/900x560/111827/C93CFF?text=Wallet',
      'https://placehold.co/900x560/15111f/60A5FA?text=Transactions',
    ],
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/KomTaka.com',
    liveDemo: 'https://kom-taka-com-ten.vercel.app/',
  },
  {
    title: 'LinkooTo',
    category: 'Mobile',
    description:
      'A feature-rich e-commerce platform offering a seamless online shopping experience. Includes product catalog browsing, smart search and filtering, secure payment gateway integration, wishlist, order tracking, and dynamic cart management.',
    tags: ['React Native', 'Redux', 'REST APIs', 'Firebase', 'Stripe'],
    images: [
      'https://placehold.co/900x560/101624/F0C7FF?text=LinkooTo',
      'https://placehold.co/900x560/12201b/34D399?text=Products',
      'https://placehold.co/900x560/111827/C93CFF?text=Checkout',
    ],
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/linkooTo',
    liveDemo: 'https://github.com/SabbirHossainEvan/linkooTo',
  },
  {
    title: 'MediTrust',
    category: 'Web',
    description:
      'A healthcare and telemedicine web application providing secure patient-doctor communication, appointment scheduling, and medical records management with an intuitive interface.',
    tags: ['JavaScript', 'React', 'REST APIs'],
    images: [
      'https://placehold.co/900x560/101624/F0C7FF?text=MediTrust+Dashboard',
      'https://placehold.co/900x560/12201b/34D399?text=Appointments',
      'https://placehold.co/900x560/111827/C93CFF?text=Patient+Records',
    ],
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/mediTrust',
    liveDemo: 'https://medi-trust-theta.vercel.app/',
  },
  {
    title: 'Direct Reinigen App',
    category: 'Mobile',
    description:
      'A mobile companion app for the Direct Reinigen platform, empowering field staff and customers with real-time booking management, job status updates, location tracking, and instant service notifications.',
    tags: ['React Native', 'Redux', 'REST APIs', 'Firebase', 'Stripe'],
    images: [
      'https://placehold.co/900x560/101624/F0C7FF?text=Direct+Reinigen+App',
      'https://placehold.co/900x560/12201b/34D399?text=Booking+Management',
      'https://placehold.co/900x560/111827/C93CFF?text=Job+Status',
    ],
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/direct-reinigen',
    liveDemo: 'https://github.com/SabbirHossainEvan/direct-reinigen',
  },
  {
    title: 'UK INKIND',
    category: 'Web',
    description:
      'An accessible, evidence-based digital EMDR therapy platform designed to support mental health recovery. Features guided video instructions, interactive AI-assisted support, and structured progress tracking with full GDPR compliance.',
    tags: ['JavaScript', 'React', 'Node.js'],
    images: [
      'https://placehold.co/900x560/111827/D946EF?text=UK+INKIND',
      'https://placehold.co/900x560/101624/F0C7FF?text=Therapy+Session',
      'https://placehold.co/900x560/15111f/C93CFF?text=Progress+Tracking',
    ],
    orientation: 'desktop',
    github: 'https://github.com/SabbirHossainEvan/car-doctor',
    liveDemo: 'https://uk-inkind.vercel.app/',
  },
  {
    title: 'Korean Vision',
    category: 'Mobile',
    description:
      'An AI-powered Korean beauty and skincare recommendation app. Features personalized product suggestions, skin analysis, and an interactive beauty routine builder.',
    tags: ['TypeScript', 'React Native', 'AI Integration'],
    images: [
      'https://placehold.co/520x900/111827/C93CFF?text=Korean+Vision',
      'https://placehold.co/520x900/171022/F0C7FF?text=Skin+Analysis',
      'https://placehold.co/520x900/101624/34D399?text=Routine+Builder',
    ],
    orientation: 'mobile',
    github: 'https://github.com/SabbirHossainEvan/korean_vision',
    liveDemo: 'https://korean-vision.vercel.app/',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All')
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const visibleProjects = useMemo(() => {
    if (activeCategory === 'All') {
      return projects
    }

    return projects.filter((project) => project.category === activeCategory)
  }, [activeCategory])

  const galleryItems: ProjectGalleryItem[] = projects.map((project) => ({
    title: project.title,
    category: project.category,
    images: project.images,
    orientation: project.orientation,
  }))

  const openLightbox = (project: Project) => {
    setActiveProjectIndex(projects.findIndex((item) => item.title === project.title))
    setActiveImageIndex(0)
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-y border-white/5 bg-[#0D0D12] py-20 md:py-28"
    >
      <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#C93CFF]/10 blur-[140px]" />
      <div className="cyber-grid absolute inset-0 opacity-30" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-[#C93CFF]">
            Projects
          </span>
          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Featured works.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
            Selected mobile apps, web platforms, and product dashboards with
            direct links to source code and live previews.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 overflow-x-auto border-b border-white/10"
        >
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
                    layoutId="landingProjectCategory"
                    className="absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#C93CFF]"
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + index * 0.06 }}
              className="group grid overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] shadow-2xl shadow-black/20 transition hover:border-[#C93CFF]/25 md:grid-cols-[0.86fr_1.14fr]"
            >
              <div className="relative min-h-[300px] overflow-hidden bg-[#11111a] md:min-h-[340px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#C93CFF]/10 via-transparent to-[#F0C7FF]/10" />
                <div className="absolute inset-0 flex items-center justify-center p-6 sm:p-8">
                  <button
                    type="button"
                    onClick={() => openLightbox(project)}
                    className="cursor-zoom-in"
                    aria-label={`Open ${project.title} gallery`}
                  >
                    <img
                      src={project.images[0]}
                      alt={`${project.title} placeholder preview`}
                      className={`rounded-2xl border border-white/10 object-cover shadow-2xl shadow-black/40 transition duration-500 group-hover:scale-[1.03] ${
                        project.orientation === 'mobile'
                          ? 'h-[390px] w-[220px]'
                          : 'h-auto w-full'
                      }`}
                    />
                  </button>
                </div>
              </div>

              <div className="flex min-h-[300px] flex-col p-6 sm:p-7 md:min-h-[340px]">
                <div className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#C93CFF]">
                  {project.orientation === 'mobile' ? (
                    <Smartphone size={15} />
                  ) : (
                    <MonitorSmartphone size={15} />
                  )}
                  {project.category}
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-white">
                  {project.title}
                </h3>
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
                    href={project.liveDemo}
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex justify-center md:mt-14"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-gray-200 transition hover:border-[#C93CFF]/30 hover:bg-white/10 hover:text-white"
          >
            View all projects
            <ArrowRight size={17} />
          </a>
        </motion.div>

        <ProjectLightbox
          items={galleryItems}
          activeIndex={activeProjectIndex}
          activeImageIndex={activeImageIndex}
          onClose={() => setActiveProjectIndex(null)}
          onImageChange={setActiveImageIndex}
        />
      </div>
    </section>
  )
}
