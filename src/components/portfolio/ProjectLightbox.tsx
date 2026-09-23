'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  X,
  ZoomIn,
  ZoomOut,
} from 'lucide-react'

export interface ProjectGalleryItem {
  title: string
  category: string
  images: string[]
  orientation: 'mobile' | 'desktop'
}

interface ProjectLightboxProps {
  items: ProjectGalleryItem[]
  activeIndex: number | null
  activeImageIndex: number
  onClose: () => void
  onProjectChange: (index: number) => void
  onImageChange: (index: number) => void
}

export default function ProjectLightbox({
  items,
  activeIndex,
  activeImageIndex,
  onClose,
  onProjectChange,
  onImageChange,
}: ProjectLightboxProps) {
  const [zoom, setZoom] = useState(1)
  const isOpen = activeIndex !== null
  const project = activeIndex === null ? null : items[activeIndex]
  const images = project?.images ?? []
  const image = images[activeImageIndex] ?? images[0]

  const goToProject = (direction: 'previous' | 'next') => {
    if (activeIndex === null) return

    const nextIndex =
      direction === 'next'
        ? (activeIndex + 1) % items.length
        : (activeIndex - 1 + items.length) % items.length

    setZoom(1)
    onProjectChange(nextIndex)
    onImageChange(0)
  }

  const goToImage = (direction: 'previous' | 'next') => {
    if (!images.length) return

    const nextIndex =
      direction === 'next'
        ? (activeImageIndex + 1) % images.length
        : (activeImageIndex - 1 + images.length) % images.length

    setZoom(1)
    onImageChange(nextIndex)
  }

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }

      if (event.key === 'ArrowRight') {
        images.length > 1 ? goToImage('next') : goToProject('next')
      }

      if (event.key === 'ArrowLeft') {
        images.length > 1 ? goToImage('previous') : goToProject('previous')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  })

  if (!project || !image) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 text-white"
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} project preview`}
        >
          <div className="absolute left-4 top-5 z-10 sm:left-8 md:left-12 lg:left-20">
            <p className="text-xs font-bold uppercase tracking-widest text-[#9EA2FF]">
              {project.category}
            </p>
            <h2 className="mt-2 max-w-[220px] text-xl font-bold text-white sm:max-w-sm sm:text-2xl">
              {project.title}
            </h2>
          </div>

          <div className="absolute right-4 top-5 z-10 flex items-center gap-3 sm:right-8 md:right-12 lg:right-20">
            <span className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-gray-200">
              {activeIndex + 1} / {items.length}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
              aria-label="Close preview"
            >
              <X size={22} />
            </button>
          </div>

          <button
            type="button"
            onClick={() => goToProject('previous')}
            className="absolute left-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 md:left-8"
            aria-label="Previous project"
          >
            <ChevronLeft size={28} />
          </button>

          <button
            type="button"
            onClick={() => goToProject('next')}
            className="absolute right-4 top-1/2 z-10 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10 md:right-8"
            aria-label="Next project"
          >
            <ChevronRight size={28} />
          </button>

          <div className="flex h-full items-center justify-center px-16 pb-36 pt-28 sm:px-24">
            <motion.img
              key={`${project.title}-${activeImageIndex}`}
              src={image}
              alt={`${project.title} preview ${activeImageIndex + 1}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: zoom }}
              transition={{ duration: 0.25 }}
              className={`max-h-full rounded-sm object-contain shadow-2xl shadow-black/50 ${
                project.orientation === 'mobile'
                  ? 'max-w-[min(78vw,360px)]'
                  : 'max-w-[min(82vw,1000px)]'
              }`}
              draggable={false}
            />
          </div>

          <div className="absolute bottom-6 left-1/2 z-10 flex w-[min(92vw,720px)] -translate-x-1/2 flex-col items-center gap-5">
            <div className="flex items-center rounded-full border border-white/10 bg-black/70 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur">
              <button
                type="button"
                onClick={() => setZoom((value) => Math.max(0.75, value - 0.15))}
                className="grid h-8 w-8 place-items-center text-gray-300 transition hover:text-white"
                aria-label="Zoom out"
              >
                <ZoomOut size={18} />
              </button>
              <span className="min-w-20 text-center text-sm font-bold">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((value) => Math.min(1.8, value + 0.15))}
                className="grid h-8 w-8 place-items-center text-gray-300 transition hover:text-white"
                aria-label="Zoom in"
              >
                <ZoomIn size={18} />
              </button>
              <span className="mx-3 h-6 w-px bg-white/10" />
              <button
                type="button"
                onClick={() => setZoom(1)}
                className="grid h-8 w-8 place-items-center text-gray-300 transition hover:text-white"
                aria-label="Reset zoom"
              >
                <RotateCcw size={17} />
              </button>
            </div>

            <div className="flex max-w-full gap-3 overflow-x-auto px-2 pb-1">
              {images.map((thumb, index) => (
                <button
                  key={thumb}
                  type="button"
                  onClick={() => {
                    setZoom(1)
                    onImageChange(index)
                  }}
                  className={`h-14 w-24 shrink-0 overflow-hidden rounded-lg border bg-white/5 transition ${
                    activeImageIndex === index
                      ? 'border-[#8B7CFF] ring-2 ring-[#8B7CFF]/70'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                  aria-label={`Open preview ${index + 1}`}
                >
                  <img
                    src={thumb}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
