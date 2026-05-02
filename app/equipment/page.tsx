import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HardwareCatalog } from "@/components/hardware-catalog"
import { Suspense } from "react"

export const metadata = {
  title: "Equipment Portfolio | EcoTech Evolution",
  description: "Browse our premium selection of Daikin, LG, and Midea hardware engineered for perfect climate control.",
}

export default function EquipmentPage() {
  return (
    <main className="min-h-screen bg-zinc-50 selection:bg-[#84CC16]/30">
      <Navbar />
      <div className="pt-28 sm:pt-36 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Section header matching landing page style */}
          <div className="max-w-2xl mb-16">
            <div className="w-12 h-1 bg-[#7CB342] rounded-full mb-4" />
            <span className="text-sm font-bold text-[#7CB342] tracking-wide uppercase">
              Equipment Portfolio
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Precision Hardware<br />
              <span className="text-gray-400">For Every System.</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              We deploy integrated energy architectures using premium hardware from Daikin, LG, and Midea. Select a manufacturer to explore available systems.
            </p>
          </div>
          
          <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-400">Loading catalog...</div>}>
            <HardwareCatalog />
          </Suspense>
        </div>
      </div>
      <Footer />
    </main>
  )
}
