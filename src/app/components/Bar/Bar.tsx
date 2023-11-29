"use client"
import React, {useState, useEffect} from 'react';
import Link from 'next/link'
import SystemButton from '../SystemButton/SystemButton';
import './Bar.css'



const Bar = () => {

  let [date,setDate] = useState(new Date())

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

  return (
    <nav className="navBar">
      <div className="navBar__wrapper">
        <div className="navBar__navigation">
          <SystemButton buttonText="Turn Off" buttonImage="/icons/power.png" onTrigger={turnOff} />
          
          <div className="navBar__navigation-links">
            <Link href="/" title="Main Page"><img src="/icons/blog.png"/></Link>
            <Link href="/blog" title="Blog"><img src="/icons/blog.png"/></Link>
            <Link href="/about-me" title="About Me"><img src="/icons/person.png"/></Link>
            <Link href="/web" title="Web Projects"><img src="/icons/internet.png"/></Link>
            <Link href="/games" title="Game Projects"><img src="/icons/joystick.png"/></Link>
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