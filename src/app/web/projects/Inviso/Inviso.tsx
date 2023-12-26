'use client';
import React from 'react';

export default function Inviso () {

  const images = [
    "/img/projects/WSUU4oY.png",
    "/img/projects/l4FvyVr.png",
    "/img/projects/p3vn8IM.png",
    "/img/projects/sjeMctQ.png",
    "/img/projects/dNAkPuy.png"
  ]

  return (
    <div className='project-window-body'>
      <h2>Inviso - Insikt Intelligence</h2>
      <p>
        Inviso is a monitoring application empowered by AI and crawler bots. 
        <br/><br/>
        It's main purpose is that of detecting keywords in social media posts and store them in the backend so a record is saved for law enforcement to prosecute potential terror threads.
        <br/><br/>
        In my time in Insikt, in 2019, it was build in <b>Angular 6</b> with a <b>Redux state machine</b> and <b>typescript</b>.
        <br/><br/>
        It's a private application so no access can be granted to it in normal circumstances. These are the only stills I was able to show, all features I developed:
        <br/><br/>
        {images.map((img) => (
            <div className='project-window-body__img'>
                <a href={img} target="_blank"><img src={img} /></a>
            </div>
        ))}
      </p>
    </div>
        )
}