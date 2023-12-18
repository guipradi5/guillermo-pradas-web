import type { Metadata } from 'next'
import Window from "../components/Window/Window"
import './globals.css'


export const metadata: Metadata = {
  title: 'Guillermo Pradas - About Me',
  description: 'About Guillermo Pradas',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Window isPage={true} windowTitle="About Me" modifiers='page'>
      {children}
    </Window>
  )
}
