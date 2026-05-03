import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import logoImage from "@/public/images/logo.png"

export const metadata: Metadata = {
  title: "Privacy Policy | EcoTech Evolution",
  description: "Privacy Policy for EcoTech Evolution.",
}

const sections = [
  {
    title: "Information We Collect",
    body: [
      "We collect information you choose to provide when you contact us, request a quote, call us, email us, or send us a message through WhatsApp. This may include your name, phone number, email address, location, service interest, property details, and any message content you send.",
      "We may also receive basic technical information from your browser or device, such as IP address, device type, pages visited, and approximate usage data needed to keep the website secure and working properly.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use your information to respond to inquiries, prepare quotes, schedule consultations, provide renewable energy and climate system services, improve our website, and maintain business records.",
      "We do not sell your personal information.",
    ],
  },
  {
    title: "WhatsApp And Third-Party Services",
    body: [
      "If you contact us through WhatsApp, your use of WhatsApp is also subject to WhatsApp's own privacy practices. We only use WhatsApp messages to communicate with you about your request or our services.",
      "Our website may rely on hosting, security, and communication providers that process limited data on our behalf.",
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We keep information only as long as reasonably needed for the purpose it was collected, including responding to you, managing quotes or projects, meeting legal obligations, and resolving disputes.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact us to request access, correction, or deletion of personal information we hold about you, subject to legal and business record requirements.",
      "You can also choose not to provide certain information, but this may limit our ability to respond or prepare an accurate quote.",
    ],
  },
  {
    title: "Contact",
    body: [
      "For privacy questions, contact EcoTech Evolution at info@ecotech-evolution.mk or +389 70 123 456.",
      "Address: Marks Engels 31, Struga 6330.",
    ],
  },
]

export default function PrivacyPolicyPage() {
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
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-950">Privacy Policy</h1>
        <p className="mt-4 text-sm text-gray-500">Last updated: April 28, 2026</p>
        <p className="mt-8 text-lg leading-relaxed text-gray-600">
          This Privacy Policy explains how EcoTech Evolution collects, uses, and protects information when you use our
          website or contact us about our services.
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
