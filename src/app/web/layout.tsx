import type { Metadata } from 'next'
import Window from "../components/Window/Window"
import './globals.css'


export const metadata: Metadata = {
  title: 'Guillermo Pradas - Web Projects',
  description: "Web Projects by Guillermo Pradas. Companies and professional work. Industry professional since 2016. I'm a confident and reliable web developer, always eager to learn and experiment with whatever's new on the technological scene. From new framewroks to new ways of doing old stuff in front-end technologies."
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <Window isPage={true} windowTitle="Web Projects" modifiers='page'>
      {children}
    </Window>
  )
}
