'use client';
import React from "react";
import SystemIcon from "./components/SystemIcon/SystemIcon";

//Detect if we are inside a route, if it's the case, the className should change to -active or somtehing


export default function Home() {
  return (
    <main className="desktop">
        <SystemIcon href="/blog" imgsrc="/icons/blog.png" linkName="Blog" />
        <SystemIcon href="/about-me" imgsrc="/icons/person.png" linkName="About Me" />
        <SystemIcon href="/web" imgsrc="/icons/internet.png" linkName="Web Projects" />
        <SystemIcon href="/games" imgsrc="/icons/joystick.png" linkName="Game Projects" />
        <SystemIcon href="/contact" imgsrc="/icons/postcard.png" linkName="Contact" />
    </main>
  )
}
