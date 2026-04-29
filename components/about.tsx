"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Award, Clock, MapPin } from "lucide-react"

export function About() {
  return (
    <section className="py-24 lg:py-32 bg-[#FBFBFD] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
           id="about"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-14 scroll-mt-20"
        >
          <div className="w-12 h-1 bg-[#7CB342] rounded-full mb-6" />
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1]">
            Engineering the benchmark.
          </h2>
        </motion.div>

        {/* The Enterprise Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] lg:auto-rows-[280px]">
          
          {/* Main Visual Anchor - The Team (Takes up 2 columns, spanning 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-2xl shadow-gray-200/50"
          >
            {/* Dark gradient mapping over the image */}
            <div className="absolute inset-0 bg-gray-900 z-0"/>
            <Image 
              src="/team.png"
              alt="EcoTech Evolution Team"
              fill
              className="object-cover z-0 opacity-90 transition-transform duration-[2s] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            {/* Burn-in vignette gradient for extreme readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent z-10 opacity-90" />
            
            <div className="absolute bottom-0 left-0 p-8 sm:p-12 z-20 w-full flex flex-col justify-end">
              <div className="inline-flex items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 w-max">
                <MapPin className="w-4 h-4 text-[#7CB342] mr-2" />
                <span className="text-sm font-semibold text-white tracking-wide uppercase">HQ • Struga, Mk</span>
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Premium Standards.<br/>Macedonian Execution.
              </h3>
              <p className="text-gray-300 text-base sm:text-lg max-w-xl font-light">
                We bring world-class European engineering directly to your doorstep. From initial blueprinting to lifetime maintenance, our certified team handles the exact science of your climate and energy architecture.
              </p>
            </div>
            <div className="absolute inset-0 z-30 ring-1 ring-inset ring-white/10 rounded-[2rem]" />
          </motion.div>

          {/* Accent Card 1 - Technical Standards (Bright & Clean) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-[2rem] p-8 flex flex-col justify-between shadow-xl shadow-gray-200/40 border border-gray-100 group hover:border-[#7CB342]/30 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-[#7CB342]/10 rounded-2xl flex items-center justify-center text-[#7CB342]">
                 <Award className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">Certification</span>
            </div>
            <div className="mt-8">
               <h4 className="text-2xl font-bold text-gray-900 mb-3">European Standards</h4>
               <p className="text-gray-500 text-sm leading-relaxed font-medium">
                 All infrastructure rigorously maps to premium European engineering codes, ensuring maximum lifetime durability and peak thermodynamic efficiency.
               </p>
            </div>
          </motion.div>

          {/* Accent Card 2 - Support Architecture (Dark & Dense) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-900 rounded-[2rem] p-8 flex flex-col justify-between shadow-xl border border-gray-800 group relative overflow-hidden"
          >
            {/* Ambient Background Icon */}
            <div className="absolute -top-6 -right-6 opacity-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 pointer-events-none">
              <Shield className="w-40 h-40 text-white" />
            </div>
            
            <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white mb-8 border border-white/10 relative z-10 transition-transform group-hover:-translate-y-1">
               <Clock className="w-6 h-6" />
            </div>
            <div className="relative z-10">
               <h4 className="text-2xl font-bold text-white mb-3">24/7 Field Operations</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Advanced systemic diagnostics combined with rapid-response physical field teams deployed nationwide. We protect what we build.
               </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
