
"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Quill from 'quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles


const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


export default function Next() {
  const [content, setContent] = useState('');
  
  const quillModules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }], 
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['link', 'image'],
      [{ align: [] }],
      [{ 'color': [] }, { 'background': [] }],  
      ['code-block']
    ],
  };


  const quillFormats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'image',
    'align',
    'color',
    'code-block',
  ];


  const handleEditorChange = (newContent:string) => {
    console.log(newContent);
    setContent(newContent);
  };
  
  return (
    <div>
        <div className="h-full w-[90vw]">
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[70%] mt-10 bg-white"
          />
        </div>
        <div className="button-wrapper">
          <button>Save</button>
          <button>Publish</button>
        </div>
    </div>
  )
}