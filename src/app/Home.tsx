"use client"
import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import DesktopApps from './DesktopApps'
import LoadScreen from './components/LoadScreen/LoadScreen';
const Bar = dynamic(() => import("./components/Bar/Bar"), { ssr: false })
import './globals.css'

// TODO: See how to make the context its own independent file
const initialState = {
  windows: []
}

const initialMutators = {
  setState: (newState:any) => {},
  setStateProperty: (prop:any, value:any) => {}
}

let initialContext = {
  state: initialState,
  mutators: initialMutators
}

export const GlobalContext = React.createContext(initialContext);

export default function Home({children}: {children: React.ReactNode}) {
  
    // Context configuration
    let [state, setState] = useState(initialState)

    const setStateProperty = (prop:any, value:any) => {
      const modState = {...state, [prop]: value}
      setState(modState)
    }

    let context = {
      state,
      mutators: {
        setState,
        setStateProperty
      }
    }

    // Home logic
    let [titleClassName,setTitleClassName] = useState(`title`)

    useEffect(() => {
      setTitleClassName(`title ${window.location.pathname !== '/' ? 'title--ready': ''}`)
    }, [])

    function triggerTitleAnimation() {
      setTitleClassName(`title ${window.location.pathname === '/' ? 'title--anim': 'title--ready'}`)
    }
  
    return (
    <GlobalContext.Provider value={context}>
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
      </GlobalContext.Provider>
    )
}