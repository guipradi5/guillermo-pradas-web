import type { Metadata } from 'next'
import Window from "../components/Window/Window"
import './globals.css'


export const metadata: Metadata = {
  title: 'Guillermo Pradas - Game Projects',
  description: "Guillermo's game Projects as well as his work with Synaptic Oddity. Here you will find a portfolio of games I have worked on and made over the years, as well as information about future projects.",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Window isPage={true} windowTitle="Game Projects" modifiers='page'>
      {children}
    </Window>
  )
}
