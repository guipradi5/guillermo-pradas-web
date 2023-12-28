import type { Metadata } from 'next'
import Window from "../components/Window/Window"
import './globals.css'


export const metadata: Metadata = {
  title: 'Guillermo Pradas - About Me',
  description: "About Guillermo Pradas, Web developer and game designer based in Barcelona. Always eager to create new works, art and projects. Here I explain a bit about me, my background and passions.",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Window isPage={true} windowTitle="About Me" modifiers='page'>
      {children}
    </Window>
  )
}
