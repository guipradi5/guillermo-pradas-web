'use client';
import React, { useContext } from "react";
import { GlobalContext } from "./Home";
import SystemIcon from "./components/SystemIcon/SystemIcon";
import Contact from "./components/Contact/Contact";

const DesktopApps = () => {    

    const context = useContext(GlobalContext)
    return (
    <div className="apps">
        <SystemIcon href="/blog" imgsrc="/icons/blog.png" linkName="Blog" />
        <SystemIcon href="/about-me" imgsrc="/icons/person.png" linkName="About Me" />
        <SystemIcon href="/web" imgsrc="/icons/internet.png" linkName="Web Projects" />
        <SystemIcon href="/games" imgsrc="/icons/joystick.png" linkName="Game Projects" />
        <SystemIcon onTrigger={() => context.actions.createWindow('Contact', Contact(), true, {top: '120px', right: '25px'})} imgsrc="/icons/postcard.png" linkName="Contact" />
    </div>
    )
  }

  export default DesktopApps;