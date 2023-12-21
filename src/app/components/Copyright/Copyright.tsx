'use client';
import React, {useRef} from 'react';

const year = new Date().getFullYear()
export default function CopyRight () {
  return (
    <p>&copy;{year} - Guillermo Pradas</p>
        )
}