"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import logoImage from "@/assets/logo.png"

const footerLinks = {
  services: [
    { label: "Solar PV Systems", href: "#services" },
    { label: "Heat Pumps", href: "#services" },
    { label: "Air Conditioning", href: "#services" },
    { label: "Industrial Solutions", href: "#services" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
}

const mapAddress = "Marks Engels 31, Struga 6330"
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapAddress)}`

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(300px,0.8fr)_minmax(680px,1.5fr)] lg:gap-20">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex h-5 items-center gap-2.5">
              <Image
                src={logoImage}
                alt="EcoTech Evolution"
                width={36}
                height={36}
                className="h-9 w-9 object-contain"
              />
              <span className="text-base font-bold tracking-tight text-white">
                EcoTech Evolution
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-gray-400 sm:max-w-md lg:mt-6">
              EcoTech Evolution designs and installs efficient solar, heating, cooling, and industrial energy
              systems for homes and businesses across Struga and Macedonia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 md:gap-12 lg:gap-16">
            {/* Services */}
            <div>
              <h3 className="text-sm font-semibold text-white">Services</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-white">Company</h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-white">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {mapAddress}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                  <a
                    href="tel:+38975727788"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    075 727 788
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                  <a
                    href="mailto:info@ecotech-evolution.mk"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    info@ecotech-evolution.mk
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-gray-800 pt-8 sm:mt-16 sm:flex-row sm:items-center">
          <p className="text-sm text-gray-500">
            © 2025 EcoTech Evolution. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
