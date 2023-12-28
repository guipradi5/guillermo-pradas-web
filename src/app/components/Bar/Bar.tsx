"use client"
import React, {useState, useRef, useEffect, useContext, Component, ReactHTML} from 'react';
import Link from 'next/link'
import SystemButton from '../SystemButton/SystemButton';
import './Bar.css'
import { GlobalContext } from '../../Home';
import Contact from '../Contact/Contact';
import CopyRight from '../Copyright/Copyright';

const Bar = () => {
  const context = useContext(GlobalContext);

  let [date,setDate] = useState(new Date())
  let [isBarOpen,setIsBarOpen] = useState(false)

  useEffect( () => {
    let timer = setInterval(()=>setDate(new Date()), 1000)
    return function cleanup() {
      clearInterval(timer)   
  }
  })

  const formattedDate = () => {
    const splittedDate = date.toLocaleTimeString().split(":")
    return `${splittedDate[0]}:${splittedDate[1]}` 
  }

  function turnOff() {
    context.mutators.setStateProperty("showTurnOffModal", true)
  }

  function toggleBar() {
    setIsBarOpen(!isBarOpen)
  }

  return (
    <nav className={`navBar ${isBarOpen ? 'navBar--open' : ''}`}>
      <div className="navBar__wrapper">
        <div className="navBar__circle" onClick={toggleBar}><img src="/icons/logo_trans.png"/></div>
        <div className="navBar__navigation">
          <SystemButton buttonImage="/icons/power.png" onTrigger={turnOff} >Turn Off</SystemButton>
          
          <div className="navBar__navigation-links">
            <Link href="/" title="Desktop" onClick={() => setIsBarOpen(false)}><img alt="Desktop" src="/icons/logo_red_shadow_trans.png"/></Link>
            <Link href="/blog" title="Blog" onClick={() => setIsBarOpen(false)}><img alt="Blog" src="/icons/blog.png"/></Link>
            <Link href="/about-me" title="About Me" onClick={() => setIsBarOpen(false)}><img alt="About Me" src="/icons/person.png"/></Link>
            <Link href="/web" title="Web Projects" onClick={() => setIsBarOpen(false)}><img alt="Web Projects" src="/icons/internet.png"/></Link>
            <Link href="/games" title="Game Projects" onClick={() => setIsBarOpen(false)}><img alt="Game Projects" src="/icons/joystick.png"/></Link>
            <a href="#" onClick={() => context.actions.createWindow('Contact', Contact(), true, {top: '120px', right: '25px'})} title="Contact"><img alt="Blog" src="/icons/postcard.png"/></a>
          </div>
        </div>
        <div className='navBar__time'>
          <div>{formattedDate()}</div>
          <button  onClick={() => context.actions.createWindow('Info', CopyRight(), true, {bottom: '90px', right: '20px'})} title="Info">?</button>
        </div>
      </div>
    </nav>
  );
};

export default Bar;