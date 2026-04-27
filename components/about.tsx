"use client"

import { motion } from "framer-motion"
import Image from "next/image"
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
            <div className="relative aspect-[4/5] rounded-[2rem] bg-gray-100 overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100/50">
              <Image 
                src="/team.png"
                alt="EcoTech Evolution Team"
                fill
                className="object-cover transition-transform duration-[1.5s] hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5" />
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
