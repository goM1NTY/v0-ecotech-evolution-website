"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import logoImage from "@/public/images/logo.png"

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/equipment", label: "Products" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
]

const whatsappUrl = "https://wa.me/38970733433"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isSubpage = pathname !== "/"

  // On subpages, navbar is always solid
  const isSolid = scrolled || isOpen || isSubpage

  useEffect(() => {
    const handleScroll = () => {
      // Shrink components and turn solid white when user starts scrolling
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isSolid ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className={`relative flex w-full items-center justify-between pl-2 pr-2 lg:pl-3 lg:pr-3 transition-all duration-500 ease-in-out ${isSolid ? 'h-16' : 'h-24'}`}>
        {/* Logo */}
        <Link href="/" className="flex min-w-0 items-center gap-2">
          <Image 
            src={logoImage}
            alt="EcoTech Evolution Logo" 
            width={72} 
            height={72} 
            className={`object-contain drop-shadow-sm transition-all duration-500 ease-in-out ${isSolid ? 'w-12 h-12' : 'w-12 h-12 sm:w-14 sm:h-14'}`} 
          />
          <span className={`font-bold tracking-tight transition-all duration-500 ease-in-out ${isSolid ? 'text-sm sm:text-base text-gray-900' : 'text-sm sm:text-lg drop-shadow-md text-white'}`}>
            EcoTech Evolution
          </span>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {/* Desktop Navigation */}
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-all duration-500 ease-in-out ${isSolid ? 'text-[15px] text-gray-600 hover:text-[#7CB342]' : 'text-[17px] drop-shadow-md text-white/95 hover:text-white'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 ease-in-out bg-[#7CB342] text-white hover:bg-[#689f38] shadow-sm hover:shadow-md"
          >
            Message Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${isSolid ? 'text-gray-900' : 'text-white'}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 w-full"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-800 py-3 text-base font-semibold hover:text-[#7CB342]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
