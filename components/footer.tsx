"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

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

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="EcoTech Evolution"
                width={40}
                height={40}
                className="rounded"
              />
              <span className="font-semibold text-gray-900">
                EcoTech Evolution
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-xs">
              Swiss-quality renewable energy solutions for a greener Macedonia.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#7CB342] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-600">
                  Marks Engels 31, Struga 6330
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                <a
                  href="tel:+38970123456"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +389 70 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#7CB342] flex-shrink-0" />
                <a
                  href="mailto:info@ecotech-evolution.mk"
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                >
                  info@ecotech-evolution.mk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            2024 EcoTech Evolution. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
