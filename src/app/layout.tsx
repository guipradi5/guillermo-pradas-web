import type { Metadata } from 'next'
import Home from './Home';


export const metadata: Metadata = {
  title: "Guillermo Pradas",
  description: "Guillermo Pradas' website. Web Developer & Game Designer",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Home>
      {children}
    </Home>
  )
}
