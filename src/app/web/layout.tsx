import type { Metadata } from 'next'
import Window from "../components/Window/Window"
import './globals.css'


export const metadata: Metadata = {
  title: 'Guillermo Pradas - Web Projects',
  description: 'Web Projects by Guillermo Pradas. Companies and professional work.',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <Window isPage={true} windowTitle="Web Projects" modifiers='page'>
      {children}
    </Window>
  )
}
