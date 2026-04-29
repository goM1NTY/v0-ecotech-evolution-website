"use client"

import { motion } from "framer-motion"
import { ExternalLink, Mail, MapPin, MessageCircle, Phone } from "lucide-react"

const mapAddress = "Marks Engels 31, Struga 6330"
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`

export function CTA() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-[0.82fr_1.18fr] gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="scroll-mt-20"
          >
            <span className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
              Contact Us
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-950 tracking-tight">
              Ready to Go Green?
            </h2>
            <p className="mt-6 max-w-md text-lg text-slate-600">
              Get a free consultation and quote for your renewable energy project. 
              Our experts will help you find the perfect solution.
            </p>

            {/* Contact Methods */}
            <div className="mt-10 space-y-4">
              <a
                href="tel:+38970123456"
                className="group flex items-center gap-4 text-slate-950 transition-colors hover:text-emerald-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-white text-emerald-700 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-500">Call us</p>
                  <p className="text-xl font-bold tracking-tight">+389 70 123 456</p>
                </div>
              </a>
              
              <a
                href="https://wa.me/38970123456"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 text-slate-950 transition-colors hover:text-emerald-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-white text-emerald-700 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-50">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-500">WhatsApp</p>
                  <p className="text-xl font-bold tracking-tight">Message us anytime</p>
                </div>
              </a>
              
              <a
                href="mailto:info@ecotech-evolution.mk"
                className="group flex items-center gap-4 text-slate-950 transition-colors hover:text-emerald-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-white text-emerald-700 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-500">Email</p>
                  <p className="text-xl font-bold tracking-tight">info@ecotech-evolution.mk</p>
                </div>
              </a>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 border-l-4 border-emerald-700 bg-slate-50 px-5 py-4 text-slate-900">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-700" />
              <p className="text-base font-semibold tracking-tight sm:text-lg">
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
            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-950/10"
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
            <div className="flex flex-col gap-4 border-t border-slate-200 bg-slate-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-emerald-100 bg-white text-emerald-700">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950">EcoTech Evolution</p>
                  <p className="mt-1 text-sm text-slate-600">{mapAddress}</p>
                </div>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition-colors hover:bg-emerald-800"
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
