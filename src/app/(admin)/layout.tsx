import type { Metadata } from 'next'
import "./globals.css"

export const metadata: Metadata = {
  title: "Guillermo Pradas | Web Developer & Game Designer",
  description: "Guillermo Pradas' website. Web Developer & Game Designer",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
