"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
        scrolled || isOpen ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className={`container mx-auto flex w-full items-center justify-between px-6 lg:px-12 transition-all duration-500 ease-in-out ${scrolled ? 'h-16' : 'h-24'}`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-4">
          <Image 
            src="/logo.jpg" 
            alt="EcoTech Evolution Logo" 
            width={72} 
            height={72} 
            className={`rounded object-cover shadow-sm transition-all duration-500 ease-in-out ${scrolled ? 'w-10 h-10' : 'w-12 h-12 sm:w-14 sm:h-14'}`} 
          />
          <span className={`font-bold tracking-tight transition-all duration-500 ease-in-out ${scrolled || isOpen ? 'text-lg text-gray-900' : 'text-xl sm:text-2xl drop-shadow-md text-white'}`}>
            EcoTech
            <span className="hidden sm:inline"> Evolution</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium transition-all duration-500 ease-in-out ${scrolled ? 'text-[15px] text-gray-600 hover:text-[#7CB342]' : 'text-[17px] drop-shadow-md text-white/95 hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Partner Logo right side */}
        <div className={`hidden md:flex backdrop-blur-md px-3 py-1.5 rounded items-center justify-center transition-all duration-500 ease-in-out ${scrolled ? '' : 'bg-white/10'}`}>
          <Image 
            src="/daikin-partner.png" 
            alt="Daikin Partner" 
            width={160} 
            height={60} 
            className={`object-contain transition-all duration-500 ease-in-out mix-blend-normal ${scrolled ? 'h-8' : 'h-12'} w-auto`}
            priority
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${scrolled || isOpen ? 'text-gray-900' : 'text-white'}`}
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
                  className="text-gray-800 py-3 text-base font-medium hover:text-[#7CB342]"
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
