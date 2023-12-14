"use client"
import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import DesktopApps from './DesktopApps'
import LoadScreen from './components/LoadScreen/LoadScreen';
const Bar = dynamic(() => import("./components/Bar/Bar"), { ssr: false })
import './globals.css'

const Home = ({children}: {children: React.ReactNode}) => {
    let [titleClassName,setTitleClassName] = useState(`title`)
  

    useEffect(() => {
        setTitleClassName(`title ${window.location.pathname !== '/' ? 'title--ready': ''}`)
    }, [])

    function triggerTitleAnimation() {
      setTitleClassName(`title ${window.location.pathname === '/' ? 'title--anim': 'title--ready'}`)
    }
  
    return (
      <html lang="en">
        <body>
          <div className="crtOverlay"></div>
          <Bar />
          <div className={titleClassName}>
            <h1 id="name">Guillermo Pradas</h1>
            <h2 id="job">Web Developer and Game Designer</h2>
          </div>
          <main className="desktop">
            <DesktopApps />
            {children}
            <div className="credit">Artwork by <a href="https://martavidal.carrd.co/" target="_blank">Marta Vidal González</a></div>
          </main>
          <LoadScreen onReady={triggerTitleAnimation} />
        </body>
      </html>
    )
}
export default Home;