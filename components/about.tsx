"use client"

import { motion } from "framer-motion"
import { Shield, Award, Clock, MapPin } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Swiss Quality",
    description: "Premium European equipment and installation standards",
  },
  {
    icon: Award,
    title: "Certified Experts",
    description: "Licensed renewable energy professionals",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock service and maintenance",
  },
  {
    icon: MapPin,
    title: "Local Focus",
    description: "Serving Struga, Ohrid, and all of Macedonia",
  },
]

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gray-100 overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="mt-4 text-gray-500 font-medium">Team Photo</p>
                  <p className="mt-1 text-sm text-gray-400">Your team or installation work</p>
                </div>
              </div>
            </div>
            {/* Accent element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#7CB342]/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-1 bg-[#7CB342] rounded-full mb-4" />
            <span className="text-sm font-medium text-[#7CB342] tracking-wide uppercase">
              About EcoTech Evolution
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight">
              Your Partner in
              <br />Renewable Energy
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              EcoTech Evolution brings Swiss quality and expertise to Macedonia. 
              We design and install renewable energy systems that reduce your 
              environmental impact while cutting energy costs.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Based in Struga, our team of certified professionals ensures every 
              installation meets the highest European standards. From initial consultation
              to ongoing maintenance, we are with you every step of the way.
            </p>

            {/* Features Grid */}
            <div className="mt-12 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#7CB342]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#7CB342]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
