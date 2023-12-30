import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Admin - New Post'
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div>
      {children}
    </div>
  )
}
