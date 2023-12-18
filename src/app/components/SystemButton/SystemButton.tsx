import React from 'react';
import './SystemButton.css'

const SystemButton = ({buttonImage = '', buttonText = '', modifiers = '', href = '', onTrigger = () => {}}) => {


  const systemButtonClassName = "systemButton"
  let classModifiers = ''
  if(modifiers) {
    modifiers.split(" ").forEach((mod:string) => {classModifiers += `${systemButtonClassName}--${mod} `})
  }
  const buttonClasses = `${systemButtonClassName} ${classModifiers}`

  return (
    <button className={buttonClasses} onClick={onTrigger}>
      {buttonImage ? (
        <img src={buttonImage} title={buttonText} />
      ) : (
        <span>{buttonText}</span>
      )}
      </button>
  );
};

export default SystemButton;