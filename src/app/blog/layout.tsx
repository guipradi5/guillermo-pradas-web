import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guillermo Pradas - Blog',
  description: "Guillermo's blog on technology, projects and games.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="blogPage">
      {children}
    </main>
  )
}
