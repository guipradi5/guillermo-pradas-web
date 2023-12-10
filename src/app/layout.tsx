import type { Metadata } from 'next'
import './globals.css'
import Bar from "./components/Bar/Bar"

export const metadata: Metadata = {
  title: "Guillermo Pradas",
  description: "Guillermo Pradas' website. Web Developer & Game Designer",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <div className="crtOverlay"></div>
        <Bar />
        <div className="title">
          <h1 id="name">Guillermo Pradas</h1>
          <h2 id="job">Web Developer and Game Designer</h2>
        </div>
        <main className="desktop">
          {children}
        </main>
      </body>
    </html>
  )
}
