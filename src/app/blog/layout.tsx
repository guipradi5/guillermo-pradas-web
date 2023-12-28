import type { Metadata } from 'next'
import Window from "../components/Window/Window"
import './globals.css'


export const metadata: Metadata = {
  title: 'Guillermo Pradas - Blog',
  description: "Guillermo's blog on technology, projects and games. Here you can find my latest pieces on technology, video games, web development, projects, the industries at large and much more",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <Window isPage={true} windowTitle="Blog" modifiers='page'>
      {children}
    </Window>
  )
}
