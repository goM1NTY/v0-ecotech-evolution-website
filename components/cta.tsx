"use client"

import { motion } from "framer-motion"
import { ExternalLink, Mail, MapPin, MessageCircle, Phone, ShieldCheck, Clock } from "lucide-react"

const mapAddress = "Marks Engels 31, Struga 6330"
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`
const googleMapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(mapAddress)}&output=embed`

export function CTA() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
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
              Let's Talk About Your Project
            </h2>
            <p className="mt-6 max-w-md text-lg text-slate-600">
              Need a quote or some advice? Contact us to discuss your heating, cooling, or solar needs.
            </p>

            {/* Contact Methods */}
            <div className="mt-10 space-y-4">
              <div className="group flex items-center gap-4 text-slate-950">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-emerald-700 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-50">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-500">Call us</p>
                  <div className="flex items-center gap-3">
                    <a href="tel:+38975727788" className="text-xl font-bold tracking-tight hover:text-emerald-700 transition-colors">+389 75 727 788</a>
                    <span className="text-slate-300">|</span>
                    <a href="tel:+38970733433" className="text-xl font-bold tracking-tight hover:text-emerald-700 transition-colors">+389 70 733 433</a>
                  </div>
                </div>
              </div>
              
              <a
                href="https://wa.me/38970733433"
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
                href="mailto:ecotechevolution@gmail.com"
                className="group flex items-center gap-4 text-slate-950 transition-colors hover:text-emerald-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md border border-slate-200 bg-white text-emerald-700 shadow-sm transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-50">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-slate-500">Email</p>
                  <p className="text-xl font-bold tracking-tight">ecotechevolution@gmail.com</p>
                </div>
              </a>
            </div>

            <div className="mt-10 max-w-md rounded-2xl bg-gray-900 p-6 sm:p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#7CB342] rounded-l-2xl" />
              <div className="flex items-center gap-2.5 mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7CB342] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7CB342]"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                  Available Now
                </span>
              </div>
              <h3 className="text-xl font-bold text-white leading-snug mb-2">
                Need a quick answer?
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Our team is ready to help you choose the right system for your space. Message us on WhatsApp for a fast response.
              </p>
              <a
                href="https://wa.me/38970733433"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#7CB342] hover:bg-[#689F38] px-5 py-2.5 text-sm font-semibold text-white transition-colors shadow-lg shadow-[#7CB342]/20"
              >
                <MessageCircle className="w-4 h-4" />
                Start a Conversation
              </a>
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
