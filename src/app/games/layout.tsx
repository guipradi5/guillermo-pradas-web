import type { Metadata } from 'next'
import Window from "../components/Window/Window"
import './globals.css'


export const metadata: Metadata = {
  title: 'Guillermo Pradas - Game Projects',
  description: "Guillermo's game Projects as well as his work with Synaptic Oddity",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Window isPage={true} windowTitle="Game Projects" modifiers='page'>
      {children}
    </Window>
  )
}
