"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sun, Thermometer, Wind, Factory } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "solar",
    icon: Sun,
    title: "Solar PV Systems",
    description: "Photovoltaic arrays for energy independence and grid optimization.",
    features: ["Grid-tied systems", "Battery storage"],
    image: "/services/solar-real.png",
    className: "col-span-1",
    href: "/#projects"
  },
  {
    id: "heatpump",
    icon: Thermometer,
    title: "Heat Pumps",
    description: "High-efficiency thermal systems for stable, year-round climate control.",
    features: ["Air-to-water", "Geothermal"],
    image: "/services/altherma.jpeg",
    className: "col-span-1",
    href: "/equipment?tab=Heat%20Pumps"
  },
  {
    id: "ac",
    icon: Wind,
    title: "Air Conditioning",
    description: "Multi-zone inverter technology for residential and commercial spaces.",
    features: ["Multi-zone", "Smart controls"],
    image: "/services/air-c.png",
    className: "col-span-1",
    href: "/equipment?tab=Inverter%20Air%20Conditioners"
  },
  {
    id: "industrial",
    icon: Factory,
    title: "Heating and Cooling",
    description: "Complete HVAC integration, custom ductwork, and thermal management.",
    features: ["HVAC Integration", "Maintenance"],
    image: "/services/vrv.jpeg",
    className: "col-span-1",
    href: "/equipment?tab=Commercial%20Heating%20%26%20Cooling"
  },
]

export function ServicesBento() {
  return (
    <section className="py-24 lg:py-32 bg-zinc-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          id="services"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl scroll-mt-20"
        >
          <div className="w-12 h-1 bg-[#7CB342] rounded-full mb-4" />
          <span className="text-sm font-bold text-[#7CB342] tracking-wide uppercase">
            Core Capabilities
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            High-Performance <br /> Systems
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We design and deploy integrated energy architectures using premium hardware from Daikin, Midea, and top-tier PV manufacturers.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 md:auto-rows-[460px] gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-[2rem] bg-gray-900 flex flex-col justify-end p-6 md:p-8 shadow-sm hover:shadow-2xl transition-all duration-500 ${service.className}`}
              >
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300" />
                <div className="absolute inset-0 bg-[#7CB342]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />

                {/* Content */}
                <div className="relative z-10 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base max-w-lg mb-6 line-clamp-2">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 justify-between">
                    {/* Features */}
                    <ul className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-xs font-semibold text-white/90 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Link Icon */}
                    <a
                      href={service.href}
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-[#7CB342] group/btn transition-colors shrink-0"
                    >
                      <ArrowRight className="w-5 h-5 text-gray-900 group-hover/btn:text-white transition-colors" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
