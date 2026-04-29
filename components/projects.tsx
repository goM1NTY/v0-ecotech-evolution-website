"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
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

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length)
    setCurrentImageIndex(0)
  }
  
  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length)
    setCurrentImageIndex(0)
  }

  const currentProject = projects[currentProjectIndex]

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length)
  }

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation()
    setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length)
  }

  return (
    <section className="py-24 lg:py-32 bg-[#FBFBFD] border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          id="projects"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 scroll-mt-20"
        >
          <div className="w-12 h-1 bg-[#7CB342] rounded-full mb-4" />
          <span className="text-sm font-bold text-[#7CB342] tracking-wide uppercase">
            Our Work
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Featured Deployments
          </h2>
        </motion.div>

        {/* Master Showcase Card */}
        <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 border border-gray-100/50 overflow-hidden group hover:shadow-3xl transition-shadow duration-700">
          <div className="flex flex-col lg:grid lg:grid-cols-5 lg:min-h-[560px]">
            
            {/* Left: The Image Column (60%) */}
            <div className="relative w-full h-[55vh] sm:h-[450px] lg:h-auto lg:min-h-full bg-gray-100 overflow-hidden lg:col-span-3">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={`${currentProject.id}-${currentImageIndex}`}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} 
                  className="absolute inset-0"
                >
                  <Image
                    src={currentProject.images[currentImageIndex]}
                    alt={`${currentProject.title} image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    priority
                  />
                  {/* Inner bevel ring */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
                </motion.div>
              </AnimatePresence>
              
              {/* Type Badge */}
              <div className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur-xl px-4 py-1.5 rounded-full shadow-sm border border-white/40">
                <span className="text-sm font-bold text-[#7CB342] uppercase tracking-wider">
                  {currentProject.type}
                </span>
              </div>

              {/* Nested Carousel Controls (Images) */}
              {currentProject.images.length > 1 && (
                <>
                  <div className="absolute inset-y-0 left-4 z-20 flex items-center">
                    <button
                      onClick={prevImage}
                      className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors border border-white/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute inset-y-0 right-4 z-20 flex items-center">
                    <button
                      onClick={nextImage}
                      className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors border border-white/20 opacity-0 group-hover:opacity-100 focus:opacity-100"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  {/* Image Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {currentProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation()
                          setCurrentImageIndex(idx)
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex ? "w-6 bg-[#7CB342]" : "w-1.5 bg-white/60 hover:bg-white"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Right: The Data & Controls Column (40%) */}
            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-12 lg:col-span-2 bg-white relative">
              
              {/* Controls Header (Projects) */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <span className="text-sm font-bold text-gray-400 font-mono tracking-widest">
                  0{currentProjectIndex + 1} <span className="text-gray-200">/</span> 0{projects.length}
                </span>
                
                <div className="flex gap-2">
                  <button
                    onClick={prevProject}
                    className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:border-[#7CB342] hover:text-[#7CB342] bg-gray-50 hover:bg-[#7CB342]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#7CB342]/20"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:border-[#7CB342] hover:text-[#7CB342] bg-gray-50 hover:bg-[#7CB342]/5 transition-all focus:outline-none focus:ring-2 focus:ring-[#7CB342]/20"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Data Payload */}
              <div className="flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="relative z-10"
                  >
                    <h3 className="text-2xl sm:text-4xl font-extrabold text-gray-900 leading-[1.15] tracking-tight">
                      {currentProject.title}
                    </h3>

                    {/* Data Pills */}
                    <div className="mt-5 sm:mt-8 grid grid-cols-2 gap-3 sm:gap-4">
                      {/* Power Capacity Pill */}
                      <div className="bg-[#FBFBFD] rounded-xl sm:rounded-[1.25rem] p-3.5 sm:p-5 border border-gray-100 flex flex-col justify-center transition-all hover:border-[#7CB342]/30">
                        <span className="flex items-center text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2">
                          <Zap className="w-3.5 h-3.5 mr-1" />
                          Output
                        </span>
                        <span className="text-xl sm:text-2xl font-black text-[#7CB342] tracking-tight">
                          {currentProject.capacity}
                        </span>
                      </div>

                      {/* Location Pill */}
                      <div className="bg-[#FBFBFD] rounded-xl sm:rounded-[1.25rem] p-3.5 sm:p-5 border border-gray-100 flex flex-col justify-center transition-all hover:border-gray-200">
                        <span className="flex items-center text-gray-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-1 sm:mb-2">
                          <MapPin className="w-3.5 h-3.5 mr-1" />
                          Location
                        </span>
                        <span className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
                          {currentProject.location}
                        </span>
                      </div>
                    </div>

                    <p className="mt-5 sm:mt-8 text-[15px] sm:text-lg text-gray-500 leading-relaxed font-normal">
                      {currentProject.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer CTA */}
              <Button
                className="mt-8 sm:mt-12 w-full bg-gray-900 hover:bg-[#7CB342] text-white rounded-2xl h-12 sm:h-14 font-bold shadow-lg shadow-gray-200 hover:shadow-[#7CB342]/20 transition-all duration-300 transform"
                asChild
              >
                <a href="#contact">Request Similar Integration</a>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
