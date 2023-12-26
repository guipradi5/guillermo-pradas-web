'use client';
import React from 'react';

export default function Aperture () {
  return (
    <div className='project-window-body'>
      <h2>Aperture Laboratories Mock-up website</h2>
      <h6><a href="https://citmalumnes.upc.es/~2m14_10/index.html" target="_blank">Link to the website</a></h6>
      <p>
        This was Uni&apos;s first big assignment, we had to form a group of 4 people, where one person would be the scrum master/director and would oversee the website&apos;s development.
        <br/><br/>
        I chose to take the role and we started with the idea of making a website based on Aperture Science, the company features in the videogame <a href='https://en.wikipedia.org/wiki/Portal_(video_game)' target='_blank'>Portal</a>.
        The website is made in <b>vanilla HTML, CSS and Javscript</b>. It features a carrousel added through a library, an online store, a story and company section, a blog, etc.
        <br/><br/>
        Another little thing added on on my part, was an easter egg. If you type in the search bar &quot;rattman&quot; you&apos;ll be redirected to a console-like environment where you can read the diaries from a character from the games.
        <br/><br/>
        <div className='project-window-body__img'>
            <a href="https://citmalumnes.upc.es/~2m14_10/index.html" target="_blank"><img src="/img/projects/al.png" /></a>
        </div>
      </p>
    </div>
        )
}