import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guillermo Pradas - Game Projects',
  description: "Guillermo's game Projects as well as his work with Synaptic Oddity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="gamesPage">
      {children}
    </main>
  )
}
