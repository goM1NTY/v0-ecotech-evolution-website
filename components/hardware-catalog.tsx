"use client"

import { useState, useEffect, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useSearchParams, useRouter } from "next/navigation"
import { hardwareData, HardwareItem } from "@/lib/data/hardware"
import { X, ChevronRight, ExternalLink, Zap, Sun, Wind, Factory } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

// Brand config with visual identity
const BRANDS = [
  { 
    id: "Daikin", 
    label: "Daikin",
    tagline: "Premium Partner",
    accent: "#0097D1",
  },
  { 
    id: "LG", 
    label: "LG",
    tagline: "Innovation Partner",
    accent: "#A50034",
  },
  { 
    id: "Midea", 
    label: "Midea",
    tagline: "Value Engineering",
    accent: "#00A3E0",
  },
]

const SERVICE_TABS = [
  { id: "Solar PV", label: "Solar PV", icon: Sun },
  { id: "Heat Pumps", label: "Heat Pumps", icon: Zap },
  { id: "Inverter Air Conditioners", label: "Air Conditioning", icon: Wind },
  { id: "Commercial Heating & Cooling", label: "Commercial", icon: Factory },
]

export function HardwareCatalog() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [activeBrand, setActiveBrand] = useState<string>("Daikin")
  const [activeTab, setActiveTab] = useState<string>(SERVICE_TABS[0].id)
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [selectedProduct, setSelectedProduct] = useState<HardwareItem | null>(null)

  // Initialize from URL params
  useEffect(() => {
    const tabParam = searchParams.get("tab")
    if (tabParam && SERVICE_TABS.find(t => t.id === tabParam)) {
      setActiveTab(tabParam)
    }
    const brandParam = searchParams.get("brand")
    if (brandParam && BRANDS.find(b => b.id === brandParam)) {
      setActiveBrand(brandParam)
    }
  }, [searchParams])

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setActiveCategory("All")
    router.push(`/equipment?tab=${encodeURIComponent(tab)}&brand=${encodeURIComponent(activeBrand)}`, { scroll: false })
  }

  const handleBrandChange = (brand: string) => {
    setActiveBrand(brand)
    setActiveCategory("All")
    router.push(`/equipment?tab=${encodeURIComponent(activeTab)}&brand=${encodeURIComponent(brand)}`, { scroll: false })
  }

  // Filter by brand first, then by tab
  const brandProducts = useMemo(() => {
    return hardwareData.filter(item => item.brand === activeBrand)
  }, [activeBrand])

  // Filter by active service tab
  const tabProducts = useMemo(() => {
    return brandProducts.filter(item => item.uiServiceTab === activeTab)
  }, [brandProducts, activeTab])

  // Sub-categories within tab
  const subCategories = useMemo(() => {
    const cats = new Set(tabProducts.map(item => item.category))
    return ["All", ...Array.from(cats)].sort()
  }, [tabProducts])

  // Final filtered
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return tabProducts
    return tabProducts.filter(item => item.category === activeCategory)
  }, [tabProducts, activeCategory])

  // Count products per tab for the active brand
  const tabCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    SERVICE_TABS.forEach(tab => {
      counts[tab.id] = brandProducts.filter(item => item.uiServiceTab === tab.id).length
    })
    return counts
  }, [brandProducts])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => { document.body.style.overflow = "unset" }
  }, [selectedProduct])

  const activeBrandConfig = BRANDS.find(b => b.id === activeBrand)

  return (
    <div className="w-full">

      {/* ═══ BRAND SELECTOR ═══ */}
      <div className="mb-12">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-5 block">Select Manufacturer</span>
        <div className="grid grid-cols-3 gap-4">
          {BRANDS.map(brand => (
            <button
              key={brand.id}
              onClick={() => handleBrandChange(brand.id)}
              className={`relative group rounded-2xl p-5 sm:p-6 text-left transition-all duration-300 ${
                activeBrand === brand.id
                  ? "bg-gray-900 shadow-2xl scale-[1.02]"
                  : "bg-white shadow-sm hover:shadow-md"
              }`}
            >
              <div className={`text-lg sm:text-2xl font-extrabold tracking-tight transition-colors ${
                activeBrand === brand.id ? "text-white" : "text-gray-900"
              }`}>
                {brand.label}
              </div>
              <div className={`text-xs sm:text-sm font-medium mt-1 transition-colors ${
                activeBrand === brand.id ? "text-gray-400" : "text-gray-500"
              }`}>
                {brand.tagline}
              </div>
              {activeBrand === brand.id && (
                <motion.div
                  layoutId="brand-indicator"
                  className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-[#7CB342]"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ═══ SERVICE TABS ═══ */}
      <div className="mb-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {SERVICE_TABS.map(tab => {
            const Icon = tab.icon
            const count = tabCounts[tab.id] || 0
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                disabled={count === 0}
                className={`group relative rounded-xl p-4 text-left transition-all duration-300 ${
                  isActive
                    ? "bg-[#7CB342]/10 shadow-sm"
                    : count === 0
                      ? "bg-gray-100 opacity-40 cursor-not-allowed"
                      : "bg-white shadow-sm hover:shadow-md"
                }`}
              >
                <Icon className={`w-5 h-5 mb-2 ${isActive ? "text-[#7CB342]" : "text-gray-400"}`} />
                <div className={`text-sm font-bold ${isActive ? "text-gray-900" : "text-gray-700"}`}>
                  {tab.label}
                </div>
                <div className={`text-xs mt-0.5 ${isActive ? "text-[#7CB342]" : "text-gray-400"}`}>
                  {count} {count === 1 ? "product" : "products"}
                </div>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#7CB342] rounded-full"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ═══ SUB-CATEGORY PILLS ═══ */}
      {subCategories.length > 2 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {subCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* ═══ PRODUCT GRID (Masonry) ═══ */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {filteredProducts.map((product, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.04 }}
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            className="group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl bg-white shadow-sm mb-6 break-inside-avoid"
          >
            {/* Image - natural dimensions, no forced aspect ratio */}
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto block group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="lazy"
              />
            ) : (
              <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-300 text-sm">No Image</div>
            )}

            {/* Content */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.15em] text-[#7CB342] bg-[#7CB342]/10 px-2.5 py-1 rounded-md">
                  {product.brand}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  {product.category}
                </span>
              </div>
              <h3 className="text-gray-900 font-bold text-base leading-snug group-hover:text-[#7CB342] transition-colors line-clamp-2">
                {product.name}
              </h3>
              <div className="flex items-center text-xs font-semibold text-gray-400 group-hover:text-gray-900 transition-colors mt-4">
                Technical Specifications <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ═══ EMPTY STATE ═══ */}
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">
          <div className="text-gray-300 text-6xl mb-4">∅</div>
          <p className="text-gray-500 font-medium">No {activeBrand} products found in this category.</p>
          <p className="text-gray-400 text-sm mt-1">Try selecting a different service tab.</p>
        </div>
      )}

      {/* ═══ PRODUCT MODAL ═══ */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col sm:flex-row z-10"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="w-full sm:w-2/5 bg-white p-10 flex items-center justify-center min-h-[280px] sm:min-h-full">
                <div className="relative w-full h-full aspect-square sm:aspect-auto">
                  {selectedProduct.image && (
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-contain"
                    />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="w-full sm:w-3/5 p-8 sm:p-10 overflow-y-auto custom-scrollbar">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#7CB342]/10 rounded-md text-xs font-extrabold text-[#7CB342] uppercase tracking-wider">
                    {selectedProduct.brand}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 rounded-md text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    {selectedProduct.category}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 leading-tight">
                  {selectedProduct.name}
                </h2>

                <div className="prose prose-gray prose-sm sm:prose-base prose-p:text-gray-600 prose-li:text-gray-600 prose-headings:text-gray-900 prose-strong:text-gray-800 prose-a:text-[#7CB342] max-w-none">
                  {selectedProduct.description ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {selectedProduct.description}
                    </ReactMarkdown>
                  ) : (
                    <p className="italic text-gray-400">Technical specifications are currently being updated.</p>
                  )}
                </div>

                {selectedProduct.originalLink && selectedProduct.originalLink !== "Manual Upload" && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href={selectedProduct.originalLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-[#7CB342] transition-colors"
                    >
                      View Original Documentation <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
