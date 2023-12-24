"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import SystemButton from '../SystemButton/SystemButton';
import './Window.css'



const Window = (props: {windowTitle:string, children: React.ReactNode, isPage?:boolean, modifiers?:string, position?:{top?:string, right?:string, bottom?:string, left?:string, center?:boolean}, onClose?:Function }) => {
 
  const {windowTitle, children, isPage = false, modifiers, position, onClose} = props

  const router = useRouter()

  const windowClasses = () => {
    let classes = "systemWindow"
    if(modifiers) {
      let mods = modifiers.split(" ")
      mods.forEach((mod: any) => classes += ` systemWindow--${mod}`)
    }
    return classes
  }

  const windowStyle = () => {
    return position ? {
      ...(position.top ? {top: position.top} : {}),
      ...(position.right ? {right: position.right} : {}),
      ...(position.bottom ? {bottom: position.bottom} : {}),
      ...(position.left ? {left: position.left} : {}),
      ...(position.center ? {top: '50%', left: '50%', transform: 'translate(-50%, -50%'} : {}),
    } : {}
  }

  function closeWindow(){
    if(onClose){
      onClose()
    } else if(isPage) {
      router.push("/")
    }

  }
  
  return (
    <div className={windowClasses()} style={windowStyle()}>
      <div className="systemWindow__topBar">
        <div>{windowTitle}</div>
        <div className="systemWindow__topBar-buttons">
        <SystemButton buttonText='X' modifiers='close' onTrigger={closeWindow} />
        </div>
      </div>
      <div className="systemWindow__body">
        {children}
      </div>
    </div>
  );
};

export default Window;