"use client"
import React, {useState, useEffect} from 'react';
import dynamic from 'next/dynamic'
import DesktopApps from './DesktopApps'
import Window from './components/Window/Window';
import LoadScreen from './components/LoadScreen/LoadScreen';
const Bar = dynamic(() => import("./components/Bar/Bar"), { ssr: false })
import './globals.css'
import TurnOffModal from './components/TurnOffModal/TurnOffModal';

// TODO: See how to make the context its own independent file
type windowType = {
  id: string,
  title: string,
  body: React.JSX.Element,
  windowStyle: any | undefined,
  free: boolean | undefined
}

type initialStateType = {
  windows: Array<windowType>,
  showTurnOffModal: boolean
}
const initialState:initialStateType = {
  windows: [],
  showTurnOffModal: false
}

const initialActions = {
  createWindow: (title: string, body: React.JSX.Element, free:boolean, windowStyle:any) => {},
  removeWindow: (id: string) => {}
}

const initialMutators = {
  setState: (newState:any) => {},
  setStateProperty: (prop:any, value:any) => {}
}

let initialContext = {
  state: initialState,
  actions: initialActions,
  mutators: initialMutators
}

export const GlobalContext = React.createContext(initialContext);

export default function Home({children}: {children: React.ReactNode}) {
  
    // Context configuration
    let [state, setState] = useState<initialStateType>(initialState)

    const setStateProperty = (prop:any, value:any) => {
      const modState = {...state, [prop]: value}
      setState(modState)
    }


    const createWindow = (title: string, body: React.JSX.Element, free:boolean, windowStyle:any) => {
      let windows = state.windows
      windows.push({id: (Math.random().toString(16).slice(2)), title, body, free, windowStyle})
      context.mutators.setStateProperty('windows', windows)
    }

    const removeWindow = (id: string) => {
      let windows = state.windows
      const windowIndex = windows.findIndex((window: windowType) => window.id === id)
      windows.splice(windowIndex, 1);
      setStateProperty('windows', windows)
    }

    let context = {
      state,
      actions: {
        createWindow,
        removeWindow
      },
      mutators: {
        setState,
        setStateProperty
      }
    }

    function windowElements() {
      return context.state.windows.map(
        (window: windowType) => 
        <Window key={window.id} onClose={() => removeWindow(window.id)} windowTitle={window.title} windowStyle={window.windowStyle}>
          {window.body}
        </Window>
        )
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
          { state.showTurnOffModal && 
            <TurnOffModal />
          }
          <Bar />
          <div className={titleClassName}>
            <h1 id="name">Guillermo Pradas</h1>
            <h2 id="job">Web Developer and Game Designer</h2>
            <h3 className='secret'>Making <b>great and cool websites</b> since 2016 and <b>making nice and cool games</b> since a few years back.</h3>
            <p className='secret'>My name is <b>Guillermo</b>. I'm a <b>web developer</b> and <b>game designer</b> based in Barcelona, Spain. I graduated in 2017 with a deegree in Multimedia Engineering in the 'Universitat Politècnica de Catalunya'. I love technology, arts, music and videogames. In this website you'll find all my projects and interesting stuff about those fields!</p>
          </div>
          <main className="desktop">
            <DesktopApps />
            {children}
            { windowElements() }
            <div className="credit">Artwork by <a href="https://martavidal.carrd.co/" target="_blank">Marta Vidal González</a></div>
          </main>
          <LoadScreen onReady={triggerTitleAnimation} />
        </body>
      </html>
      </GlobalContext.Provider>
    )
}