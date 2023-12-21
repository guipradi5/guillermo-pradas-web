'use client';
import React, {useRef} from 'react';

const year = new Date().getFullYear()
export default function CopyRight () {
  return (
    <div>
      <p>
        &copy;{year} - Guillermo Pradas
        <br /><br />
        Font: VT323 by <a href="https://github.com/phoikoi" target="_blank">Peter Hull</a>
      </p>
    </div>
        )
}