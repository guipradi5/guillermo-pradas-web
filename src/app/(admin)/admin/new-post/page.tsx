
"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Quill from 'quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import {post, put, get} from '../../../../js/api'

const QuillEditor = dynamic(() => import('react-quill'), { ssr: false });


export default function Next() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  
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
    setContent(newContent);
  };

  function savePost() {
    post('https://guillermopradas.com/api/v1/blog-posts', { title, subtitle, body: content, published: false })
    .then(data => {
      console.log(data); // JSON data parsed by `data.json()` call
    });
  }

  function publishPost() {

  }
  
  return (
    <div>
        <div className="h-full w-[90vw]">
          <h2>Title</h2>
          <input className='w-[90vw]' id="postTitle" 
            value={title}
            onChange={(event) => setTitle(event.target.value)} 
            type='text'></input><br/>
          <h2>Subtitle</h2>
          <input className='w-[90vw]' id="postSubtitle" 
            value={subtitle}
            onChange={(event) => setSubtitle(event.target.value)} 
            type='text'></input>
          <QuillEditor
            value={content}
            onChange={handleEditorChange}
            modules={quillModules}
            formats={quillFormats}
            className="w-full h-[70%] mt-10 bg-white"
          />
        </div>
        <div>{title}</div>
        <div>{subtitle}</div>
        <div>{content}</div>
        <div className="button-wrapper">
          <button onClick={savePost}>Save</button>
          <button onClick={publishPost}>Publish</button>
        </div>
    </div>
  )
}