'use client';
import React from "react";
import SystemIcon from "./components/SystemIcon/SystemIcon";

const DesktopApps = () => {    
    return (
    <div className="apps">
        <SystemIcon href="/blog" imgsrc="/icons/blog.png" linkName="Blog" />
        <SystemIcon href="/about-me" imgsrc="/icons/person.png" linkName="About Me" />
        <SystemIcon href="/web" imgsrc="/icons/internet.png" linkName="Web Projects" />
        <SystemIcon href="/games" imgsrc="/icons/joystick.png" linkName="Game Projects" />
        <SystemIcon onTrigger={() => alert("Open Contact Window")} imgsrc="/icons/postcard.png" linkName="Contact" />
    </div>
    )
  }

  export default DesktopApps;