"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Shield, Award, Clock, MapPin } from "lucide-react"

const milestones = [
  {
    year: "01",
    title: "Site Evaluation",
    description: "Physical inspection of the property to assess structural readiness, electrical capacity, and spatial constraints.",
  },
  {
    year: "02",
    title: "Thermal Mapping",
    description: "Calculating exact load requirements to ensure the system is perfectly scaled. Never underpowered, never oversized.",
  },
  {
    year: "03",
    title: "Hardware Selection",
    description: "Sourcing the optimal inverter, heat pump, or PV array from our tier-one manufacturing partners.",
  },
  {
    year: "04",
    title: "Precision Install",
    description: "Field execution by our technical team, adhering strictly to manufacturer protocols and safety standards.",
  },
  {
    year: "05",
    title: "Commissioning",
    description: "System testing, performance verification, and final handover with client operational training.",
  },
]

const certifications = ["CE Certified", "IEC 61730", "TUV Approved", "IEC 62446", "ISO 9001"]

export function About() {
  return (
    <section className="py-12 lg:py-32 bg-[#FBFBFD] overflow-hidden">
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
            European Engineering Standards.
          </h2>
        </motion.div>

        {/* The Enterprise Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px] lg:auto-rows-[280px]">
          
          {/* Main Visual Anchor - The Team (Takes up 2 columns, spanning 2 rows) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 md:row-span-2 relative rounded-[2rem] overflow-hidden group shadow-2xl shadow-gray-200/50 min-h-[350px]"
          >
            {/* Dark gradient mapping over the image */}
            <div className="absolute inset-0 bg-gray-900 z-0"/>
            <Image 
              src="/team.png"
              alt="EcoTech Evolution Team"
              fill
              className="object-cover z-0 opacity-90 transition-transform duration-[2s] group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
            {/* Burn-in vignette gradient for extreme readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-900/40 to-transparent z-10 opacity-90" />
            
            <div className="absolute bottom-0 left-0 p-6 sm:p-12 z-20 w-full flex flex-col justify-end">
              <div className="inline-flex items-center backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-4 w-max">
                <MapPin className="w-4 h-4 text-[#7CB342] mr-2" />
                <span className="text-sm font-semibold text-white tracking-wide uppercase">HQ • Struga, Mk</span>
              </div>
              <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight">
                Precision in Every Detail.
              </h3>
              <p className="text-gray-300 text-sm sm:text-lg max-w-xl font-light hidden sm:block">
                We engineer complete solutions, from load calculations and thermal mapping to final system commissioning.
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
               <h4 className="text-2xl font-bold text-white mb-3">Reliable Field Operations</h4>
               <p className="text-gray-400 text-sm leading-relaxed">
                 Advanced systemic diagnostics combined with rapid-response physical field teams deployed locally from our Struga base. We protect what we build.
               </p>
            </div>
          </motion.div>

        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 lg:mt-32"
        >
          <div className="flex items-center gap-6">
            <div className="h-1 w-16 rounded-full bg-[#7CB342]" />
            <span className="text-sm font-bold uppercase tracking-[0.35em] text-slate-500">
              Integration Process
            </span>
          </div>

          <h3 className="mt-8 max-w-4xl text-3xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            How we execute every project.
          </h3>

          <div className="relative mt-16 hidden lg:block">
            <div className="absolute left-0 right-0 top-[18px] h-1 rounded-full bg-slate-300" />
            <div className="grid grid-cols-5 gap-10">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative pt-16">
                  <div className="absolute left-0 top-0 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
                    <span
                      className={`h-5 w-5 rounded-full ${
                        index === milestones.length - 1 ? "bg-slate-600" : "bg-slate-300"
                      }`}
                    />
                  </div>
                  <p className="text-lg font-extrabold text-[#7CB342]">{milestone.year}</p>
                  <h4 className="mt-5 text-xl font-bold tracking-tight leading-tight text-slate-950">
                    {milestone.title}
                  </h4>
                  <p className="mt-3 text-base leading-relaxed text-slate-500">
                    {milestone.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 space-y-8 lg:hidden">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className="relative border-l-2 border-slate-300 pl-8">
                <div className="absolute -left-[11px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100">
                  <span
                    className={`h-3 w-3 rounded-full ${
                      index === milestones.length - 1 ? "bg-slate-600" : "bg-slate-300"
                    }`}
                  />
                </div>
                <p className="text-base font-extrabold text-[#7CB342]">{milestone.year}</p>
                <h4 className="mt-3 text-xl font-bold tracking-tight leading-tight text-slate-950">
                  {milestone.title}
                </h4>
                <p className="mt-3 text-base leading-relaxed text-slate-500">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certification Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-[2rem] border border-gray-800 bg-gray-900 p-6 shadow-xl sm:p-8 lg:p-12 relative overflow-hidden"
        >
          {/* Ambient background */}
          <div className="absolute -top-10 -right-10 w-56 h-56 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.6fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-[#7CB342]/15 px-5 py-2 text-xs font-bold uppercase tracking-[0.35em] text-[#7CB342] border border-[#7CB342]/20">
                Hardware Compliance
              </span>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-gray-400">
                All integrated hardware, including PV modules, inverters, and thermal units, meets strict European compliance codes for operational safety and grid compatibility.
              </p>
            </div>

            <div className="grid grid-cols-2 justify-items-center gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {certifications.map((certification) => (
                <div
                  key={certification}
                  className="w-full flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] px-4 text-center text-base font-extrabold leading-tight text-white shadow-sm backdrop-blur-sm transition-colors hover:bg-white/10 hover:border-white/20 last:col-span-2 last:max-w-[calc(50%-6px)] sm:last:col-span-1 sm:last:max-w-none"
                >
                  {certification}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
