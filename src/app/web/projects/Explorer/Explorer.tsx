'use client';
import React from 'react';
import '../projectWindowsStyle.css'

export default function Explorer () {

    const images = [
        "/img/projects/goHSrUo.png",
        "/img/projects/dVBEx9Z.png",
        "/img/projects/XjNAntU.png",
        "/img/projects/IxU25MV.png",
        "/img/projects/2GkWofe.png"
    ]

  return (
    <div className='project-window-body'>
        <h2>Explorer - Gavagai</h2>
        <p>
            Worked on Exporer’s frontend using <b>Vue3</b>, <b>Stylus</b> as a CSS superset, <b>VueStore</b> for a store solution and connected to the node backend with <b>Express</b> for easing taskes like authentification and account “secrets”. Unit testing done in Jest.
            <br/><br/>
            It’s a "request a demo" type of application but one can access the <a href="https://docs.gavagai.io" target="_blank">documentation to have a look at the screeshots and technology</a>.
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