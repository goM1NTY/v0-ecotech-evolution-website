import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'EcoTech Evolution | Heating, Cooling & Solar in Struga',
  description: 'Efficient heating, cooling and solar solutions for homes and businesses in Struga. Inverter air conditioners, heat pumps, and photovoltaic systems — planned and installed locally.',
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
