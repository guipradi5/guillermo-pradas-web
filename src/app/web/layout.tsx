import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Guillermo Pradas - Web Projects',
  description: 'Web Projects by Guillermo Pradas. Companies and professional work.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="webProjects">
      {children}
    </main>
  )
}
