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
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 lg:py-16">
        
        {/* Brand - full width */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image
              src={logoImage}
              alt="EcoTech Evolution"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-base font-bold tracking-tight text-white">
              EcoTech Evolution
            </span>
          </Link>
        </div>

        {/* Links grid - 2 col on mobile, 4 col on desktop */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-[1fr_1fr_1fr_1.4fr]">
          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - spans full width on mobile */}
          <div className="col-span-2 lg:col-span-2">
            <h3 className="text-xs font-semibold text-white uppercase tracking-widest mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-white">
                  {mapAddress}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                <a href="tel:+38975727788" className="text-sm text-gray-400 hover:text-white transition-colors">075 727 788</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                <a href="mailto:info@ecotech-evolution.mk" className="text-sm text-gray-400 hover:text-white transition-colors">info@ecotech-evolution.mk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-800">
          <p className="text-xs text-gray-500 text-center">
            © 2025 EcoTech Evolution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
