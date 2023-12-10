import type { Metadata } from 'next'
import './globals.css'
import Bar from "./components/Bar/Bar"

export const metadata: Metadata = {
  title: "Guillermo Pradas - Home",
  description: "Guillermo Pradas' website. Web & Game Developer",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="crtOverlay"></div>
        <Bar />
        <main className="desktop">
          {children}
        </main>
      </body>
    </html>
  )
}
