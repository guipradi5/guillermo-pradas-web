import type { Metadata } from 'next'
import Home from './Home'

export const metadata: Metadata = {
  title: "Guillermo Pradas | Web Developer & Game Designer",
  description: "Guillermo Pradas' website. Web Developer & Game Designer",
  openGraph: {
    title: "Guillermo Pradas | Web Developer & Game Designer",
    description: "Guillermo Pradas' website. Web Developer & Game Designer",
    url: "https://guillermopradas.com/",
    siteName: "Guillermo Pradas",
    images: [
      {
        url: "https://guillermopradas.com/img/web-preview.png",
        alt: "Guillermo Pradas - Web Developer & Game Designer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillermo Pradas | Web Developer & Game Designer",
    description: "Guillermo Pradas' website. Web Developer & Game Designer",
    images: ["https://guillermopradas.com/images/web-preview.png"],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Home>
      {children}
    </Home>
  )
}
