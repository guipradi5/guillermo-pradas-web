import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Window from "../components/Window/Window"
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
    <Window windowTitle="Web Projects">
      {children}
    </Window>
  )
}
