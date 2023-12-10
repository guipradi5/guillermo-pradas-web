"use client"
import React, {useState, useRef, useEffect} from 'react';
import Link from 'next/link'
import SystemButton from '../SystemButton/SystemButton';
import './Bar.css'



const Bar = () => {

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
    alert("Turn Page Off")
  }

  function toggleBar() {
    setIsBarOpen(!isBarOpen)
  }

  return (
    <nav className={`navBar ${isBarOpen ? 'navBar--open' : ''}`}>
      <div className="navBar__wrapper">
        <div className="navBar__circle" onClick={toggleBar}><img src="/icons/logo_trans.png"/></div>
        <div className="navBar__navigation">
          <SystemButton buttonText="Turn Off" buttonImage="/icons/power.png" onTrigger={turnOff} />
          
          <div className="navBar__navigation-links">
            <Link href="/" title="Main Page" onClick={() => setIsBarOpen(false)}><img src="/icons/logo_red_shadow_trans.png"/></Link>
            <Link href="/blog" title="Blog" onClick={() => setIsBarOpen(false)}><img src="/icons/blog.png"/></Link>
            <Link href="/about-me" title="About Me" onClick={() => setIsBarOpen(false)}><img src="/icons/person.png"/></Link>
            <Link href="/web" title="Web Projects" onClick={() => setIsBarOpen(false)}><img src="/icons/internet.png"/></Link>
            <Link href="/games" title="Game Projects" onClick={() => setIsBarOpen(false)}><img src="/icons/joystick.png"/></Link>
            <a href="#" onClick={() => alert("Open Contact Window")} title="Contact"><img src="/icons/postcard.png"/></a>
          </div>
        </div>
        <div className='navBar__time'>
          {formattedDate()}
        </div>
      </div>
    </nav>
  );
};

export default Bar;