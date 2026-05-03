"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: "bonitas",
    title: "Bonitas Facility",
    location: "Tetovo",
    type: "Industrial Solar",
    capacity: "120 kW",
    description: "High-capacity photovoltaic integration for sustained industrial energy independence.",
    images: [
      "/projects/bonitas/first.jpeg",
      "/projects/bonitas/bonitas1.jpeg",
      "/projects/bonitas/bonitas2.jpeg",
      "/projects/bonitas/last.jpeg",
    ],
  },
  {
    id: "eurosteel",
    title: "Eurosteel Plant",
    location: "Veleshta, Struga",
    type: "Industrial Solar",
    capacity: "250 kW",
    description: "Large scale industrial PV deployment powering heavy manufacturing lines.",
    images: [
      "/projects/eurosteel/first.jpeg",
      "/projects/eurosteel/es2.jpeg",
      "/projects/eurosteel/es3.jpeg",
      "/projects/eurosteel/es4.jpeg",
    ],
  },
  {
    id: "guri-drerit",
    title: "Guri i Drerit",
    location: "Kalishta, Struga",
    type: "Hospitality Solar",
    capacity: "80 kW",
    description: "Hospitality energy integration ensuring grid independence for uninterrupted service.",
    images: [
      "/projects/guri-drerit/first.jpeg",
      "/projects/guri-drerit/gd2.jpeg",
      "/projects/guri-drerit/gd4.jpeg",
      "/projects/guri-drerit/last.jpeg",
    ],
  },
  {
    id: "versus",
    title: "Versus Retail",
    location: "Struga",
    type: "Commercial Solar",
    capacity: "50 kW",
    description: "Commercial solar architecture designed for maximum roof space efficiency.",
    images: [
      "/projects/versus/versus1.jpeg",
      "/projects/versus/versus2.jpeg",
      "/projects/versus/versus3.jpeg",
    ],
  },
]

export function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const projectTabsRef = useRef<HTMLDivElement | null>(null)
  const mobileImageTrackRef = useRef<HTMLDivElement | null>(null)
  const [projectTabScroll, setProjectTabScroll] = useState({ left: false, right: false })

  const currentProject = projects[currentProjectIndex]

  const setProject = (index: number) => {
    setCurrentProjectIndex(index)
    setCurrentImageIndex(0)
    mobileImageTrackRef.current?.scrollTo({ left: 0, behavior: "auto" })
  }

  const updateProjectTabScroll = () => {
    const node = projectTabsRef.current
    if (!node) return

    const maxScrollLeft = node.scrollWidth - node.clientWidth
    setProjectTabScroll({
      left: node.scrollLeft > 4,
      right: node.scrollLeft < maxScrollLeft - 4,
    })
  }

  const scrollMobileImageTo = (index: number) => {
    const node = mobileImageTrackRef.current
    if (!node) return

    node.scrollTo({
      left: index * node.clientWidth,
      behavior: "smooth",
    })
  }

  const showImage = (index: number) => {
    setCurrentImageIndex(index)
    scrollMobileImageTo(index)
  }

  const showNextImage = () => {
    const nextIndex = (currentImageIndex + 1) % currentProject.images.length
    showImage(nextIndex)
  }

  const showPrevImage = () => {
    const prevIndex = (currentImageIndex - 1 + currentProject.images.length) % currentProject.images.length
    showImage(prevIndex)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    showNextImage()
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    showPrevImage()
  }

  const handleImageSwipe = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (currentProject.images.length <= 1) return

    if (info.offset.x < -50 || info.velocity.x < -500) {
      showNextImage()
    }

    if (info.offset.x > 50 || info.velocity.x > 500) {
      showPrevImage()
    }
  }

  const handleMobileImageScroll = () => {
    const node = mobileImageTrackRef.current
    if (!node) return

    const nextIndex = Math.round(node.scrollLeft / node.clientWidth)
    if (nextIndex !== currentImageIndex) {
      setCurrentImageIndex(nextIndex)
    }
  }

  useEffect(() => {
    window.setTimeout(updateProjectTabScroll, 0)
    window.addEventListener("resize", updateProjectTabScroll)

    return () => {
      window.removeEventListener("resize", updateProjectTabScroll)
    }
  }, [])

  return (
    <section className="py-12 lg:py-24 bg-[#FBFBFD] border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-12 scroll-mt-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-0.5 bg-[#7CB342]" />
              <span className="text-xs font-bold text-[#7CB342] tracking-widest uppercase">
                Field Execution
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Featured Deployments
            </h2>
          </div>
        </motion.div>

        {/* Master Architectural Showcase (Light Theme) */}
        {/* Mobile: Horizontal scrollable tab bar */}
        <div className="relative mb-6 -mx-6 lg:hidden">
          <div
            ref={projectTabsRef}
            onScroll={updateProjectTabScroll}
            className="flex gap-2 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, idx) => {
              const isActive = idx === currentProjectIndex
              return (
                <button
                  key={project.id}
                  onClick={() => setProject(idx)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    isActive
                      ? "bg-[#7CB342] border-[#7CB342] text-white"
                      : "bg-white border-gray-200 text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`}
                >
                  {project.title}
                </button>
              )
            })}
          </div>

          {/* Gradient Overlays for scroll indication */}
          <div 
            className={`absolute left-0 top-0 bottom-3 w-8 z-10 bg-gradient-to-r from-[#FBFBFD]/90 to-transparent pointer-events-none transition-opacity duration-300 ${
              projectTabScroll.left ? "opacity-100" : "opacity-0"
            }`}
          />
          <div 
            className={`absolute right-0 top-0 bottom-3 w-12 z-10 bg-gradient-to-l from-[#FBFBFD]/90 to-transparent pointer-events-none transition-opacity duration-300 ${
              projectTabScroll.right ? "opacity-100" : "opacity-0"
            }`}
          />
          <AnimatePresence>
            {projectTabScroll.left && (
              <motion.div
                key="project-tabs-left-cue"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                className="absolute left-3 top-1/2 z-20 flex h-7 w-7 -translate-y-[calc(50%+0.375rem)] items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-400 shadow-sm backdrop-blur pointer-events-none"
                aria-hidden="true"
              >
                <motion.span
                  animate={{ x: [0, -2, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronLeft className="h-3.5 w-3.5" />
                </motion.span>
              </motion.div>
            )}
            {projectTabScroll.right && (
              <motion.div
                key="project-tabs-right-cue"
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                className="absolute right-3 top-1/2 z-20 flex h-7 w-7 -translate-y-[calc(50%+0.375rem)] items-center justify-center rounded-full border border-gray-200 bg-white/90 text-gray-400 shadow-sm backdrop-blur pointer-events-none"
                aria-hidden="true"
              >
                <motion.span
                  animate={{ x: [0, 2, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop: Sidebar + Image grid */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          
          {/* Left: Project Selector (desktop only) */}
          <div className="hidden lg:flex flex-col gap-2">
            {projects.map((project, idx) => {
              const isActive = idx === currentProjectIndex
              return (
                <button
                  key={project.id}
                  onClick={() => setProject(idx)}
                  className={`group flex flex-col text-left pl-5 py-3 border-l-2 rounded-r-lg cursor-pointer transition-all duration-300 ${
                    isActive 
                      ? "border-[#7CB342] bg-[#7CB342]/5" 
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <span className={`text-[10px] font-mono tracking-widest uppercase mb-1 transition-colors ${
                    isActive ? "text-[#7CB342]" : "text-gray-400 group-hover:text-gray-500"
                  }`}>
                    {project.type}
                  </span>
                  <span className={`text-lg font-bold tracking-tight transition-colors ${
                    isActive ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                  }`}>
                    {project.title}
                  </span>
                </button>
              )
            })}

            {/* CTA moved to the right side to prevent floating */}
          </div>

          {/* Right: The Image Area & Data */}
          <div className="flex flex-col gap-6">
            
            {/* Image Carousel */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[16/9] bg-gray-100 rounded-xl overflow-hidden group shadow-lg shadow-gray-200/50 ring-1 ring-inset ring-gray-900/5">
              <div
                ref={mobileImageTrackRef}
                onScroll={handleMobileImageScroll}
                className="flex h-full snap-x snap-mandatory overflow-x-auto scroll-smooth lg:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {currentProject.images.map((image, idx) => (
                  <div key={image} className="relative h-full w-full flex-none snap-center">
                    <Image
                      src={image}
                      alt={`${currentProject.title} image ${idx + 1}`}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>

              <motion.div
                className="hidden h-full cursor-grab touch-pan-y active:cursor-grabbing lg:flex"
                animate={{ x: `-${currentImageIndex * 100}%` }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.16}
                onDragEnd={handleImageSwipe}
              >
                {currentProject.images.map((image, idx) => (
                  <div key={image} className="relative h-full w-full flex-none">
                    <Image
                      src={image}
                      alt={`${currentProject.title} rendering ${idx + 1}`}
                      fill
                      sizes="70vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.01]"
                      priority={currentProjectIndex === 0 && idx === 0}
                    />
                  </div>
                ))}
              </motion.div>

              {/* Nested Carousel Controls */}
              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md ring-1 ring-black/5 backdrop-blur-md transition-all hover:bg-white lg:flex"
                  >
                    <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-800 shadow-md ring-1 ring-black/5 backdrop-blur-md transition-all hover:bg-white lg:flex"
                  >
                    <ChevronRight className="w-5 h-5" strokeWidth={2} />
                  </button>

                  {/* Progress Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 p-2 bg-black/20 backdrop-blur-md rounded-full">
                    {currentProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation()
                          showImage(idx)
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Bottom Technical Spec Data (Clean, B2B style) */}
            <div className="flex flex-col gap-4 pt-4">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h3 className="text-2xl font-bold text-gray-900">{currentProject.title}</h3>
                
                <div className="flex items-center gap-6 sm:gap-8 shrink-0">
                  <div className="h-8 w-px bg-gray-200 hidden sm:block" />
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-mono tracking-[0.15em] text-gray-400 uppercase">
                      Output
                    </span>
                    <span className="text-lg font-bold text-[#7CB342]">
                      {currentProject.capacity}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[10px] font-mono tracking-[0.15em] text-gray-400 uppercase">
                      Location
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      {currentProject.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-500 text-base leading-relaxed max-w-xl mb-4">
                {currentProject.description}
              </p>

              {/* Global CTA - Moved from Sidebar */}
              <div className="pt-6 border-t border-gray-100">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors"
                >
                  Request an Assessment
                  <span className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#7CB342] group-hover:bg-[#7CB342]/10 transition-all">
                    <ArrowRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#7CB342]" />
                  </span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
