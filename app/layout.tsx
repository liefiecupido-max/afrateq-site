import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata: Metadata = {
  title: 'Afrateq | Sovereign AI Systems for African Enterprises',
  description: 'Afrateq builds and operates sovereign AI systems for African enterprises — combining local inference infrastructure, private or hybrid model deployment, agent orchestration, and sector-specific workflows inside trusted environments.',
  keywords: 'Afrateq, sovereign AI, African enterprises, Namibia, private inference, local AI infrastructure, agent orchestration, data sovereignty',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-brand-dark text-brand-text">
        {children}
      </body>
    </html>
  )
}
