'use client';
import React, {useRef} from 'react';

const year = new Date().getFullYear()
export default function CopyRight () {
  return (
    <div>
      <p>
        Font: VT323 by <a href="https://github.com/phoikoi" target="_blank">Peter Hull</a>.
        <br /><br />
        <a href="https://github.com/guipradi5/guillermo-pradas-web" target="_blank">This website's source code</a> @ Github.
        <br /><br />
        &#10084; Yess // Zula & Aza &#10084;
        <br />
        &copy;{year} - Guillermo Pradas.
      </p>
    </div>
        )
}