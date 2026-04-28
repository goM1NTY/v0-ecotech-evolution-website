"use client"

import { motion } from "framer-motion"
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

const mapAddress = "Marks Engels 31, Struga 6330"
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-[#7CB342] tracking-wide uppercase">
              Get Started
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-950 tracking-tight">
              Ready to Go Green?
            </h2>
            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Get a free consultation and quote for your renewable energy project. 
              Our experts will help you find the perfect solution.
            </p>

            {/* Contact Methods */}
            <div className="mt-10 space-y-4">
              <a
                href="tel:+38970123456"
                className="flex items-center gap-4 text-gray-950 hover:text-[#7CB342] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#7CB342]/15 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call us</p>
                  <p className="font-medium">+389 70 123 456</p>
                </div>
              </a>
              
              <a
                href="https://wa.me/38970123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-950 hover:text-[#7CB342] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#7CB342]/15 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium">Message us anytime</p>
                </div>
              </a>
              
              <a
                href="mailto:info@ecotech-evolution.mk"
                className="flex items-center gap-4 text-gray-950 hover:text-[#7CB342] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-[#7CB342]/15 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">info@ecotech-evolution.mk</p>
                </div>
              </a>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-amber-300 bg-amber-50 px-5 py-3 text-amber-700 shadow-sm">
              <span className="flex h-3 w-3 rounded-full bg-amber-500 shadow-[0_0_0_5px_rgba(245,158,11,0.16)]" />
              <p className="text-base font-semibold sm:text-lg">
                24/7 Emergency Service Available
              </p>
            </div>
          </motion.div>

          {/* Right - Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-2xl shadow-black/10"
          >
            <div className="relative h-[430px] sm:h-[540px] lg:h-[660px]">
              <iframe
                src={googleMapsEmbedUrl}
                title="EcoTech Evolution location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <div className="flex flex-col gap-4 border-t border-gray-100 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#7CB342]/10 text-[#7CB342]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-950">EcoTech Evolution</p>
                  <p className="mt-1 text-sm text-gray-600">{mapAddress}</p>
                </div>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#7CB342] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#689F38]"
              >
                Open Map
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
