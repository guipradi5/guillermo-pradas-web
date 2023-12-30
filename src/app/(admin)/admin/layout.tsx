import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'Guillermo Pradas - Blog | Web Developer & Game Designer',
  description: "Guillermo's blog on technology, projects and games. Here you can find my latest pieces on technology, video games, web development, projects, the industries at large and much more",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='admin'>
      <nav>
        <Link href="/">Main Website</Link>
        <Link href="/admin">Home</Link>
        <Link href="/admin/posts/">Posts</Link>
        <Link href="/admin/new-post/">New Post</Link>
        </nav>
      {children}
    </div>
  )
}
