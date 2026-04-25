"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Modern Villa Solar Installation",
    location: "Struga",
    type: "Residential",
    capacity: "15 kW",
    description: "Complete rooftop solar system with battery storage for a modern lakeside villa.",
  },
  {
    id: 2,
    title: "Hotel Climate System",
    location: "Ohrid",
    type: "Commercial",
    capacity: "80 kW",
    description: "Full HVAC and heat pump installation for a 50-room boutique hotel.",
  },
  {
    id: 3,
    title: "Factory Solar Installation",
    location: "Bitola",
    type: "Industrial",
    capacity: "250 kW",
    description: "Large-scale industrial solar array powering manufacturing operations.",
  },
  {
    id: 4,
    title: "Apartment Complex",
    location: "Struga",
    type: "Multi-unit",
    capacity: "45 kW",
    description: "Shared solar and heat pump system serving 12 residential units.",
  },
  {
    id: 5,
    title: "Office Building HVAC",
    location: "Skopje",
    type: "Commercial",
    capacity: "120 kW",
    description: "Modern climate control system for a 5-story corporate office building.",
  },
  {
    id: 6,
    title: "Private Residence",
    location: "Ohrid",
    type: "Residential",
    capacity: "10 kW",
    description: "Solar panels with smart home energy management integration.",
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-24 lg:py-32 bg-[#f8faf8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div className="max-w-xl">
            <span className="text-sm font-medium text-[#7CB342] tracking-wide uppercase">
              Our Work
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real installations across Macedonia, delivering clean energy to homes and businesses.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border-gray-300 hover:border-[#7CB342] hover:text-[#7CB342]"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border-gray-300 hover:border-[#7CB342] hover:text-[#7CB342]"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#7CB342]/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#7CB342]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-500 font-medium">Project Image</p>
                  <p className="mt-1 text-sm text-gray-400">{currentProject.title}</p>
                </div>
              </div>
              {/* Type badge */}
              <span className="absolute top-4 left-4 text-xs font-medium bg-[#7CB342] text-white px-3 py-1.5 rounded-full">
                {currentProject.type}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                {currentProject.title}
              </h3>
              
              <div className="mt-4 flex items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1.5 text-[#7CB342]" />
                  {currentProject.location}
                </span>
                <span className="flex items-center">
                  <Zap className="w-4 h-4 mr-1.5 text-[#7CB342]" />
                  {currentProject.capacity}
                </span>
              </div>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                {currentProject.description}
              </p>

              <Button
                className="mt-8 bg-[#7CB342] hover:bg-[#689F38] text-white rounded-md h-11 px-6"
                asChild
              >
                <a href="#contact">Request Similar Project</a>
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mt-10">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-[#7CB342] w-8"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
