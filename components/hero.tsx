"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Modern house with solar panels"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay gradient for readability without washing out the image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-12 flex flex-col justify-center h-full pt-10 pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-1 bg-[#7CB342] rounded-full mb-6" />
            <span className="inline-block text-sm font-semibold text-[#84CC16] tracking-wider uppercase mb-2">
              Renewable Energy Solutions
            </span>
            
            <h1 className="mt-2 text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-md">
              Clean Energy
              <br />
              <span className="text-[#84CC16]">For Your Future</span>
            </h1>
            
            <p className="mt-6 text-lg sm:text-xl text-zinc-200 max-w-xl leading-relaxed drop-shadow-sm font-light">
              Swiss-quality solar panels, heat pumps, and climate systems. 
              Designed and installed by certified experts in Macedonia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#7CB342] hover:bg-[#689F38] text-white rounded-md h-12 px-8 text-base font-semibold shadow-lg"
                asChild
              >
                <a href="#services">
                  <span className="flex items-center">
                    Explore Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-md h-12 px-8 text-base font-semibold border-white text-white hover:bg-white hover:text-black bg-transparent backdrop-blur-sm transition-all"
                asChild
              >
                <a href="#contact">Get Free Quote</a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats - bottom left */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-12 left-6 lg:left-12 flex flex-wrap gap-x-12 gap-y-6"
        >
          <div className="flex items-center gap-3">
             <div className="text-white">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="9" x2="9" y1="3" y2="21"/><line x1="15" x2="15" y1="3" y2="21"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="3" x2="21" y1="15" y2="15"/></svg>
             </div>
            <div>
              <p className="text-2xl font-bold text-[#84CC16]">29+</p>
              <p className="text-sm text-zinc-300 font-medium">Projects Completed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="text-white">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
             </div>
            <div>
              <p className="text-2xl font-bold text-[#84CC16]">1.2MW</p>
              <p className="text-sm text-zinc-300 font-medium">Total Installed</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <div className="text-white">
               <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
             </div>
            <div>
              <p className="text-2xl font-bold text-[#84CC16]">500+</p>
              <p className="text-sm text-zinc-300 font-medium">Tons CO₂ Saved</p>
            </div>
          </div>
        </motion.div>


      </div>

      {/* WhatsApp Button - floating right */}
      <motion.a
        href="https://wa.me/38912345678"
        target="_blank"
        rel="noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.6 }}
        className="fixed bottom-8 right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#22bf5b] text-white px-5 py-3 rounded-full shadow-2xl transition-transform hover:scale-105"
      >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        <span className="font-semibold px-1">Chat on WhatsApp</span>
      </motion.a>
    </section>
  )
}
