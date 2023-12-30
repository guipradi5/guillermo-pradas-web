'use client';
import React from 'react';

export default function Skiverse () {

  const images = [
    "/img/projects/2l325cQ.png",
    "/img/projects/GSwYGl4.png",
    "/img/projects/OjEdmEn.png",
    "/img/projects/eAA3twJ.png"
  ]

  return (
    <div className='project-window-body'>
        <h2>Skiverse</h2>
        <p>
          BTB platform and tool for buying forfaits, reserve ski classes, ski lessons and restauration. 
          <br/><br/>
          Managed the programming of the whole frontend and navigation functionalities as well as the display of information from the database to the interface.
          <br/><br/>
          Made using <b>twig</b> (a php framework) and <b>vanilla HTML, JS, CSS and Jquery</b>.
          <br/><br/>
          {images.map((img) => (
            <div key={img} className='project-window-body__img'>
                <a href={img} target="_blank"><img src={img} /></a>
            </div>
          ))}
        </p>
    </div>
        )
}