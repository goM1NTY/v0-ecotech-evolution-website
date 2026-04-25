"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-medium text-[#7CB342] tracking-wide uppercase">
              Get Started
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
              Ready to Go Green?
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-md">
              Get a free consultation and quote for your renewable energy project. 
              Our experts will help you find the perfect solution.
            </p>

            {/* Contact Methods */}
            <div className="mt-10 space-y-4">
              <a
                href="tel:+38970123456"
                className="flex items-center gap-4 text-white hover:text-[#7CB342] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#7CB342]/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Call us</p>
                  <p className="font-medium">+389 70 123 456</p>
                </div>
              </a>
              
              <a
                href="https://wa.me/38970123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white hover:text-[#7CB342] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#7CB342]/20 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">WhatsApp</p>
                  <p className="font-medium">Message us anytime</p>
                </div>
              </a>
              
              <a
                href="mailto:info@ecotech-evolution.mk"
                className="flex items-center gap-4 text-white hover:text-[#7CB342] transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#7CB342]/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium">info@ecotech-evolution.mk</p>
                </div>
              </a>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              24/7 Emergency Service Available
            </p>
          </motion.div>

          {/* Right - CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 lg:p-10"
          >
            <h3 className="text-2xl font-semibold text-gray-900">
              Request a Free Quote
            </h3>
            <p className="mt-2 text-gray-600">
              Tell us about your project and we will get back to you within 24 hours.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7CB342] focus:ring-1 focus:ring-[#7CB342] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7CB342] focus:ring-1 focus:ring-[#7CB342] outline-none transition-colors"
                  placeholder="+389 70 000 000"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#7CB342] focus:ring-1 focus:ring-[#7CB342] outline-none transition-colors bg-white"
                >
                  <option value="">Select a service</option>
                  <option value="solar">Solar PV Systems</option>
                  <option value="heatpump">Heat Pumps</option>
                  <option value="ac">Air Conditioning</option>
                  <option value="industrial">Industrial Solutions</option>
                </select>
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#7CB342] hover:bg-[#689F38] text-white rounded-lg h-12 text-base font-medium"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
