"use client"
import React, {useState, useEffect, useRef} from 'react';
import { useRouter } from 'next/navigation'
import './SystemIcon.css'
import Link from 'next/link';


const SystemIcon = (props: {linkName: string, imgsrc:string, href?: string, onTrigger?: Function}) => {
    
  const {linkName, imgsrc, href, onTrigger} = props


  const router = useRouter()
  const initialIconClass = 'systemIcon'
  let [iconClass,setIconClass] = useState(initialIconClass)

  const handleClick = (event:any) => {
    if(event.preventDefault) {
      event.preventDefault()
    }
    switch (event.detail) {
      case 1: {
        setIconClass(`${initialIconClass} ${initialIconClass}--highlight`)
        break;
      }
      case 2: {
        setIconClass(initialIconClass)
        if(href){
          router.push(href)
        } else if(onTrigger) {
          onTrigger()
        }
        break;
      }
      default: {
        setIconClass(initialIconClass)
      }
    }
  };

  const ref:any = useRef(null);

  useEffect(() => {
    const handleOutSideClick = (event:any) => {
      if (!ref.current?.contains(event.target)) {
        handleClick({detail: 0})
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);


  return (
    <Link className={iconClass} href={href ? href : ''} onClick={handleClick} title={linkName}>
      <img alt={linkName} src={imgsrc} />
      <span>{linkName}</span>
    </Link>
  );
};

export default SystemIcon;