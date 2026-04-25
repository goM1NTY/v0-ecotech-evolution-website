import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesBento } from "@/components/services-bento"
import { Projects } from "@/components/projects"
import { About } from "@/components/about"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ServicesBento />
      <Projects />
      <About />
      <CTA />
      <Footer />
    </main>
  )
}
