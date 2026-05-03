"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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

  const currentProject = projects[currentProjectIndex]

  const setProject = (index: number) => {
    setCurrentProjectIndex(index)
    setCurrentImageIndex(0)
  }

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)
  }

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
        <div className="flex lg:hidden overflow-x-auto pb-2 gap-2 mb-6 -mx-1 px-1">
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
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${currentProject.id}-${currentImageIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }} 
                  className="absolute inset-0"
                >
                  <Image
                    src={currentProject.images[currentImageIndex]}
                    alt={`${currentProject.title} rendering`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.02]"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Nested Carousel Controls */}
              {currentProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-800 bg-white/70 hover:bg-white rounded-full backdrop-blur-md shadow-sm transition-all opacity-0 group-hover:opacity-100 z-20 focus:opacity-100"
                  >
                    <ChevronLeft className="w-5 h-5" strokeWidth={2} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-gray-800 bg-white/70 hover:bg-white rounded-full backdrop-blur-md shadow-sm transition-all opacity-0 group-hover:opacity-100 z-20 focus:opacity-100"
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
                          setCurrentImageIndex(idx)
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
