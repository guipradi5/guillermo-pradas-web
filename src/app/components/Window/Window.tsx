"use client"
import React from 'react';
import SystemButton from '../SystemButton/SystemButton';
import './Window.css'



const Window = (props: {windowTitle:string, children: React.ReactNode}) => {
  const {children, windowTitle} = props
  return (
    <div className="systemWindow">
      <div className="systemWindow__topBar">
        <div>{windowTitle}</div>
        <div className="systemWindow__topBar-buttons">
        <SystemButton buttonText='X' modifiers='close' href="/" />
        </div>
      </div>
      <div className="systemWindow__body">
        {children}
      </div>
    </div>
  );
};

export default Window;