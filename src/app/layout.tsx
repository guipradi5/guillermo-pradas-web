import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'
import DesktopApps from './DesktopApps'
const Bar = dynamic(() => import("./components/Bar/Bar"), { ssr: false })

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
          <DesktopApps />
          {children}
          <div className="credit">Artwork by <a href="https://martavidal.carrd.co/" target="_blank">Marta Vidal González</a></div>
        </main>
      </body>
    </html>
  )
}
