"use client"
import React from 'react';
import './SystemButton.css'

const SystemButton = (props: {children: React.ReactNode, buttonImage?: string, title?: string, modifiers?: string, href?: string, onTrigger: Function}) => {

  const {children, buttonImage, title, modifiers, href, onTrigger} = props

  const systemButtonClassName = "systemButton"
  let classModifiers = ''
  if(modifiers) {
    modifiers.split(" ").forEach((mod:string) => {classModifiers += `${systemButtonClassName}--${mod} `})
  }
  const buttonClasses = `${systemButtonClassName} ${classModifiers}`

  return (
    <button className={buttonClasses} onClick={() => onTrigger()}>
      {buttonImage ? (
        <img src={buttonImage} title={title} />
      ) : (
        <span>{children}</span>
      )}
      </button>
  );
};

export default SystemButton;