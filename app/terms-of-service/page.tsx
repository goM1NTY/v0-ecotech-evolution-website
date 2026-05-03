import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import logoImage from "@/public/images/logo.png"

export const metadata: Metadata = {
  title: "Terms of Service | EcoTech Evolution",
  description: "Terms of Service for EcoTech Evolution.",
}

const sections = [
  {
    title: "Use Of The Website",
    body: [
      "You may use this website to learn about EcoTech Evolution, our renewable energy solutions, our climate systems, and our contact details.",
      "You agree not to misuse the website, interfere with its operation, attempt unauthorized access, or use the website for unlawful purposes.",
    ],
  },
  {
    title: "Quotes And Service Requests",
    body: [
      "Information submitted through the website, phone, email, or WhatsApp may be used to prepare a consultation, proposal, or quote.",
      "Website content, estimates, and initial messages are for general information only. Any final scope, price, warranty, timeline, or installation commitment must be confirmed in a separate written agreement or accepted quote.",
    ],
  },
  {
    title: "Website Content",
    body: [
      "We try to keep website information accurate and current, but product availability, specifications, prices, and service details may change.",
      "Images, project examples, and descriptions are provided for illustration and may not represent every installation condition.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The website design, text, images, logos, and other content belong to EcoTech Evolution or their respective owners and may not be copied or reused without permission.",
    ],
  },
  {
    title: "Limitation Of Liability",
    body: [
      "To the fullest extent allowed by law, EcoTech Evolution is not responsible for indirect, incidental, or consequential damages arising from use of the website.",
      "Nothing on this website replaces a professional site assessment, technical review, or written agreement for a specific project.",
    ],
  },
  {
    title: "External Links And Messaging",
    body: [
      "The website may link to third-party services such as WhatsApp or email clients. We are not responsible for the content, availability, or practices of third-party services.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For questions about these Terms, contact EcoTech Evolution at info@ecotech-evolution.mk or +389 70 123 456.",
      "Address: Marks Engels 31, Struga 6330.",
    ],
  },
]

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image src={logoImage} alt="EcoTech Evolution" width={48} height={48} className="h-12 w-12 object-contain" />
            <span className="text-base font-bold tracking-tight text-gray-950">EcoTech Evolution</span>
          </Link>
          <Link href="/" className="text-sm font-semibold text-gray-600 transition-colors hover:text-[#7CB342]">
            Back to Home
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#7CB342]">Legal</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950">Terms of Service</h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: April 28, 2026</p>
        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          These Terms of Service explain the rules for using the EcoTech Evolution website and contacting us through
          our online channels.
        </p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-gray-950">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="leading-relaxed text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
