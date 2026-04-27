"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MapPin, ChevronLeft, ChevronRight, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Modern Villa Solar Installation",
    location: "Struga",
    type: "Residential",
    capacity: "15 kW",
    description: "Complete rooftop solar system with battery storage for a modern lakeside villa.",
    image: "/projects/proj1.png",
  },
  {
    id: 2,
    title: "Boutique Hotel VRV System",
    location: "Ohrid",
    type: "Commercial",
    capacity: "80 kW",
    description: "Full Daikin VRV HVAC installation for a 50-room boutique hotel.",
    image: "/projects/proj2.png",
  },
  {
    id: 3,
    title: "Factory Solar Array",
    location: "Bitola",
    type: "Industrial",
    capacity: "250 kW",
    description: "Large-scale industrial solar array powering manufacturing operations.",
    image: "/projects/proj3.png",
  },
  {
    id: 4,
    title: "Apartment Complex Heating",
    location: "Struga",
    type: "Multi-unit",
    capacity: "45 kW",
    description: "Shared heat pump infrastructure serving 12 residential units.",
    image: "/projects/proj4.png",
  },
  {
    id: 5,
    title: "Office Building HVAC Ductwork",
    location: "Skopje",
    type: "Commercial",
    capacity: "120 kW",
    description: "Modern climate control system ductwork for a 5-story corporate office building.",
    image: "/projects/proj5.png",
  },
  {
    id: 6,
    title: "Private Residence AC",
    location: "Ohrid",
    type: "Residential",
    capacity: "10 kW",
    description: "Premium wall-mounted split systems with smart home energy management integration.",
    image: "/projects/proj6.png",
  },
]

export function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)

  const currentProject = projects[currentIndex]

  return (
    <section id="projects" className="py-24 lg:py-32 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
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
        <div className="relative bg-white rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-2">
            
            {/* The Image Viewer - Prominent & Unobscured */}
            <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[600px] w-full bg-gray-100 overflow-hidden">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentProject.image}
                    alt={currentProject.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Subtle inner ring layer */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10" />
                </motion.div>
              </AnimatePresence>
              
              {/* Type Badge Floating on Image */}
              <div className="absolute top-6 left-6 z-10 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-sm font-semibold text-gray-900">
                  {currentProject.type}
                </span>
              </div>
            </div>

            {/* The Data & Controls Panel */}
            <div className="flex flex-col justify-center p-10 lg:p-16">
              <div className="flex items-center justify-between mb-8">
                <span className="text-sm font-medium text-gray-400 font-mono">
                  0{currentIndex + 1} / 0{projects.length}
                </span>
                
                {/* Minimalist Controls */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#7CB342] hover:text-[#7CB342] hover:bg-[#7CB342]/5 transition-all"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#7CB342] hover:text-[#7CB342] hover:bg-[#7CB342]/5 transition-all"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentProject.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                    {currentProject.title}
                  </h3>

                  <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-gray-600">
                    <span className="flex items-center bg-gray-50 px-3 py-1 border border-gray-100 rounded-lg">
                      <MapPin className="w-4 h-4 mr-2 text-[#7CB342]" />
                      {currentProject.location}
                    </span>
                    <span className="flex items-center bg-gray-50 px-3 py-1 border border-gray-100 rounded-lg">
                      <Zap className="w-4 h-4 mr-2 text-[#7CB342]" />
                      {currentProject.capacity}
                    </span>
                  </div>

                  <p className="mt-8 text-lg text-gray-600 leading-relaxed">
                    {currentProject.description}
                  </p>

                  <Button
                    className="mt-10 bg-[#7CB342] hover:bg-[#689F38] text-white rounded-md h-12 px-8 font-semibold shadow-md"
                    asChild
                  >
                    <a href="#contact">Request Similar Integration</a>
                  </Button>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
