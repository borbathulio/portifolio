import type { Metadata } from 'next'
import { Syne, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const display = Syne({ subsets: ['latin'], weight: ['400','500','600','700','800'], variable: '--font-display' })
const body = Inter({ subsets: ['latin'], weight: ['300','400','500'], variable: '--font-body' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['300','400'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Thúlio Borba — Frontend Developer',
  description: 'Portfolio de Thúlio Borba, desenvolvedor frontend especializado em React, Next.js e interfaces de alta performance.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
